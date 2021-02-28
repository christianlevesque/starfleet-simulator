import { Action, ApplicationState } from "@/tools/definitions/general"
import { FireOnShip, Ship, ShipMovement, ShipReadyStatus } from "@/game/ships/types"
import { createGuid } from "@/tools/utils"
import { moveWithinSystem, replenishEnergy, shipCanMove } from "@/game/shipUtils"
import { dealDamage, weaponCanFire } from "@/game/combatUtils"
import { useActiveComponent } from "@/game/shipUtils"

export const ADD_SHIP = "ADD_SHIP"
export const MOVE_SHIP = "MOVE_SHIP"
export const CONVERT_DILITHIUM = "CONVERT_DILITHIUM"
export const FIRE_ON_SHIP = "FIRE_ON_SHIP"
export const DESTROY_SHIP = "DESTROY_SHIP"
export const STAND_DOWN = "STAND_DOWN"
export const GO_YELLOW_ALERT = "GO_YELLOW_ALERT"
export const GO_RED_ALERT = "GO_RED_ALERT"

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

export function standDown(): Action<unknown> {
	return {
		type: STAND_DOWN
	}
}

export function goYellowAlert(): Action<unknown> {
	return {
		type: GO_YELLOW_ALERT
	}
}

export function goRedAlert(): Action<unknown> {
	return {
		type: GO_RED_ALERT
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

		moveWithinSystem(s, payload.x, payload.y)

		return s
	})
}

function convertDilithiumCase(ships: Ship[], id: string): Ship[] {
	return ships.filter(s => {
		if (s.id !== id)
			return s

		if (s.dilithium < 1)
			return s

		replenishEnergy(s)

		return s
	})
}

function fireOnShipCase(ships: Ship[], combat: FireOnShip): Ship[] {
	const source = ships.find(s => s.id === combat.sourceId)
	const target = ships.find(s => s.id === combat.targetId)

	source.weapons.forEach(weapon => {
		if (!weaponCanFire(source, weapon))
			return

		useActiveComponent(source, weapon)

		dealDamage(source, target, weapon)
	})

	return [...ships]
}

function destroyShipCase(ships: Ship[], id: string): Ship[] {
	return ships.filter(s => s.id !== id)
}

function standDownCase(ships: Ship[]): Ship[] {
	const player = ships.find(s => s.id === "player")
	player.status = ShipReadyStatus.Green
	player.weapons.forEach(w => w.active = false)

	return [...ships]
}