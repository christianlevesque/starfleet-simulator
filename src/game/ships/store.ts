import { Action, ApplicationState } from "@/tools/definitions/general"
import { Ship } from "@/game/ships/types"
import { createGuid } from "@/tools/utils"
import { SolarSystems } from "@/game/types"

export const ADD_SHIP = "ADD_SHIP"

export function addShip(ship: Ship): Action<Ship> {
	return {
		type: ADD_SHIP,
		payload: ship
	}
}

export function playerSelector(state: ApplicationState): Ship {
	return state.ships.find(s => s?.id === "player")
}

export default function(ships: Ship[] = [], action: Action<Ship>): Ship[] {
	switch(action.type) {
		case ADD_SHIP:
			if (!action.payload.id)
				action.payload.id = createGuid()
			return [...ships, action.payload]
		default:
			return ships
	}
}