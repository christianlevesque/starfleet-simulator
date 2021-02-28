import { Ship, ShipClass } from "@/game/ships/types"
import { Component } from "@/game/types"

export const DILITHIUM_CONVERSION_FACTOR = 100

export function useActiveComponent(ship: Ship, component: Component): void {
	useEnergy(ship, component.useCost)
}

export function canUseEnergy(ship: Ship, amount: number): boolean {
	if (ship.battery >= amount)
		return true

	if (ship.energy >= amount)
		return true

	if (ship.battery + ship.energy >= amount)
		return true

	return false
}

export function useEnergy(ship: Ship, amount: number): void {
	if (ship.battery > amount) {
		ship.battery -= amount
		return
	}

	amount -= ship.battery
	ship.battery = 0
	ship.energy -= amount
}

export function useAvailableEnergy(ship: Ship): number {
	const totalEnergy = ship.battery + ship.energy
	ship.battery = 0
	ship.energy = 0
	return totalEnergy
}

export function returnEnergy(ship: Ship, amount: number): void {
	if (ship.energy + amount < ship.maxEnergy) {
		ship.energy += amount
		return
	}

	amount -= (ship.maxEnergy - ship.energy)
	ship.energy = ship.maxEnergy
	ship.battery += amount
	if (ship.battery > 1000)
		ship.battery = 1000
}

export function replenishEnergy(ship: Ship): void {
	const neededDilithium = calculateNeededDilithium(ship.energy, ship.maxEnergy)

	const amountToConvert = Math.min(ship.dilithium, neededDilithium)

	ship.dilithium -= amountToConvert
	ship.energy += amountToConvert * DILITHIUM_CONVERSION_FACTOR
}

export function raiseShields(ship: Ship): void {
	const diff = ship.maxShields - ship.shields

	if (!canUseEnergy(ship, diff))
		replenishEnergy(ship)

	if (canUseEnergy(ship, diff)) {
		ship.shields = ship.maxShields
		useEnergy(ship, diff)
		return
	}

	ship.shields = useAvailableEnergy(ship)
}

export function lowerShields(ship: Ship): void {
	returnEnergy(ship, ship.shields)
	ship.shields = 0
}

export function standDownComponent(ship: Ship, component: Component): void {
	if (!component.active)
		return

	component.active = false
	returnEnergy(ship, component.baselineCost)
}

export function activateComponent(ship: Ship, component: Component): void {
	if (component.active)
		return

	if (!canUseEnergy(ship, component.baselineCost))
		return

	component.active = true
	useEnergy(ship, component.baselineCost)
}

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