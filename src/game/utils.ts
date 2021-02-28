import { Ship, ShipClass, ShipFaction } from "@/game/ships/types"

export const DILITHIUM_CONVERSION_FACTOR = 100

export function calculateMoveCost(type: ShipClass, distance: number): number {
	let cost
	switch(type) {
		case ShipClass.Cruiser:
			cost = 5
			break
		case ShipClass.Science:
			cost = 4
			break
		case ShipClass.Tactical:
			cost = 2
			break
		default:
			cost = 1
	}

	return Math.ceil(cost * distance)
}

export function calculateDistance(x1: number, x2: number, y1: number, y2: number): number {
	const dx = x2 - x1
	const dy = y2 - y1
	return Math.ceil(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))
}

export function shipCanMove(ship: Ship, x: number, y: number): boolean {
	if (x < -5 || x > 5 || y < -5 || y > 5)
		return false

	const distance = calculateDistance(ship.x, x, ship.y, y)
	const costToMove = calculateMoveCost(ship.type, distance)

	if (ship.energy < costToMove)
		return false

	return true
}

export function moveWithinSystem(ship: Ship, x: number, y: number): void {
	const distance = calculateDistance(ship.x, x, ship.y, y)
	ship.energy -= calculateMoveCost(ship.type, distance)

	ship.x = x
	ship.y = y
}

export function calculateNeededDilithium(energy: number, maxEnergy: number): number {
	return Math.floor((maxEnergy - energy) / DILITHIUM_CONVERSION_FACTOR)
}

export function replenishEnergy(ship: Ship): void {
	const neededDilithium = calculateNeededDilithium(ship.energy, ship.maxEnergy)

	const amountToConvert = Math.min(ship.dilithium, neededDilithium)

	ship.dilithium -= amountToConvert
	ship.energy += amountToConvert * DILITHIUM_CONVERSION_FACTOR
}

export function getShipIcon(faction: ShipFaction): string {
	if (faction === ShipFaction.Federation)
		return "B"
	else if (faction === ShipFaction.Klingon)
		return "E"
	else if (faction === ShipFaction.Romulan)
		return "Y"
}