import { Ship } from "@/game/ships/types"
import { SolarSystems } from "@/game/types"

export default class Game {
	ships: Ship[]

	constructor(player: Ship, enemies: Ship[]) {
		this.ships = [player, ...enemies]
	}

	moveShip(shipId: number, x: number, y: number) {
		this.ships[shipId].x = x
		this.ships[shipId].y = y
	}

	getShipsInPlayerSystem(): Ship[] {
		return this.ships.filter(s => s.solarSystem === this.ships[0].solarSystem)
	}

	getShipsInSystem(system: SolarSystems): Ship[] {
		return this.ships.filter(s => s.solarSystem === system)
	}

	fire(sourceId: number, targetId: number) {
		console.log(`Ship ${sourceId} firing on ship ${targetId}`)

	}
}