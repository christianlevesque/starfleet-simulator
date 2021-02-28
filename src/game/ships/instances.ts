import { Ship, ShipClass, ShipFaction, ShipReadyStatus } from "@/game/ships/types"
import { disruptorCannon, phaserArray, photonTorpedo } from "@/game/weapons/instances"
import { lifeSupport } from "@/game/components"
import { SolarSystems } from "@/game/types"

export const constitution = (): Ship => {
	return {
		dilithium: 2500,
		maxDilithium: 2500,
		energy: 10000,
		maxEnergy: 10000,
		hp: 10000,
		maxHp: 10000,
		shields: 0,
		maxShields: 7500,
		battery: 0,
		crew: 300,
		maxCrew: 300,
		type: ShipClass.Cruiser,
		faction: ShipFaction.Federation,
		solarSystem: SolarSystems.Earth,
		status: ShipReadyStatus.Green,
		x: 0,
		y: 0,
		weapons: [
			phaserArray,
			phaserArray,
			photonTorpedo,
			photonTorpedo
		],
		shipSystems: [
			lifeSupport
		]
	}
}

export const d7 = (): Ship => {
	return {
		dilithium: 2500,
		maxDilithium: 2500,
		energy: 2500,
		maxEnergy: 2500,
		hp: 10000,
		maxHp: 10000,
		shields: 5000,
		maxShields: 5000,
		battery: 0,
		crew: 300,
		maxCrew: 300,
		type: ShipClass.Cruiser,
		faction: ShipFaction.Klingon,
		solarSystem: SolarSystems.Earth,
		status: ShipReadyStatus.Red,
		x: -2,
		y: -5,
		weapons: [
			disruptorCannon,
			disruptorCannon,
			disruptorCannon,
			photonTorpedo
		],
		shipSystems: [
			lifeSupport
		]
	}
}