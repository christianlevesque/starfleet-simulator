import { Action, ApplicationState } from "@/tools/definitions/general"
import { FireOnShip, Ship, ShipMovement } from "@/game/ships/types"
import { createGuid } from "@/tools/utils"
import { calculateDistance, calculateNeededDilithium, calculateMoveCost, shipCanMove, DILITHIUM_CONVERSION_FACTOR } from "@/game/utils"
import { calculateBaseDamage, calculateBleedDamage, calculateHullDamage, calculateShieldDamage, weaponCanFire } from "@/game/combatUtils"

export const ADD_SHIP = "ADD_SHIP"
export const MOVE_SHIP = "MOVE_SHIP"
export const CONVERT_DILITHIUM = "CONVERT_DILITHIUM"
export const FIRE_ON_SHIP = "FIRE_ON_SHIP"
export const DESTROY_SHIP = "DESTROY_SHIP"

export function addShip(ship: Ship): Action<Ship> {
	return {
		type: ADD_SHIP,
		payload: ship
	}
}

export function moveShip(move: ShipMovement): Action<ShipMovement> {
	return {
		type: MOVE_SHIP,
		payload: move
	}
}

export function convertDilithium(id: string): Action<string> {
	return {
		type: CONVERT_DILITHIUM,
		payload: id
	}
}

export function fireOnShip(combat: FireOnShip): Action<FireOnShip> {
	return {
		type: FIRE_ON_SHIP,
		payload: combat
	}
}

export function destroyShip(id: string): Action<string> {
	return {
		type: DESTROY_SHIP,
		payload: id
	}
}

export function playerSelector(state: ApplicationState): Ship {
	return state.ships.find(s => s?.id === "player")
}

export default function(ships: Ship[] = [], action: Action<unknown>): Ship[] {
	switch(action.type) {
		case ADD_SHIP:
			return addShipCase(ships, action.payload as Ship)
		case MOVE_SHIP:
			return moveShipCase(ships, action.payload as ShipMovement)
		case CONVERT_DILITHIUM:
			return convertDilithiumCase(ships, action.payload as string)
		case FIRE_ON_SHIP:
			return fireOnShipCase(ships, action.payload as FireOnShip)
		case DESTROY_SHIP:
			return destroyShipCase(ships, action.payload as string)
		default:
			return ships
	}
}

function addShipCase(ships: Ship[], payload: Ship): Ship[] {
	if (!payload.id)
		payload.id = createGuid()
	return [...ships, payload]
}

function moveShipCase(ships: Ship[], payload: ShipMovement): Ship[] {
	return ships.filter(s => {
		if (s.id !== payload.id)
			return s
		if (!shipCanMove(s, payload.x, payload.y))
			return s

		const distance = calculateDistance(s.x, payload.x, s.y, payload.y)
		s.energy = s.energy - calculateMoveCost(s.type, distance)

		s.x = payload.x
		s.y = payload.y

		return s
	})
}

function convertDilithiumCase(ships: Ship[], id: string): Ship[] {
	return ships.filter(s => {
		if (s.id !== id)
			return s

		if (s.dilithium < 1)
			return s

		const neededDilithium = calculateNeededDilithium(s.energy, s.maxEnergy)

		const amountToConvert = Math.min(s.dilithium, neededDilithium)

		s.dilithium -= amountToConvert
		s.energy += amountToConvert * DILITHIUM_CONVERSION_FACTOR

		return s
	})
}

function fireOnShipCase(ships: Ship[], combat: FireOnShip): Ship[] {
	const source = ships.find(s => s.id === combat.sourceId)
	const target = ships.find(s => s.id === combat.targetId)

	source.forwardWeapons.forEach(weapon => {
		if (!weaponCanFire(source, weapon))
			return

		source.energy -= weapon.useCost

		const damage = calculateBaseDamage(source, target, weapon)

		if (target.shields > 0) {
			// regular shield damage
			target.shields -= calculateShieldDamage(damage, weapon)
			if (target.shields < 0)
				target.shields = 0

			// bleed damage
			target.hp -= calculateBleedDamage(damage, weapon)
			if (target.hp < 0)
				target.hp = 0
		}
		else {
			target.hp -= calculateHullDamage(damage, weapon)
			if (target.hp < 0)
				target.hp = 0
		}
	})

	return [...ships]
}

function destroyShipCase(ships: Ship[], id: string): Ship[] {
	return ships.filter(s => s.id !== id)
}