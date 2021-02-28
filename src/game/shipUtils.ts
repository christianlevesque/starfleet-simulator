import { Ship } from "@/game/ships/types"
import { Component } from "@/game/types"

export function useActiveComponent(ship: Ship, component: Component): void {
	ship.energy -= component.useCost
}