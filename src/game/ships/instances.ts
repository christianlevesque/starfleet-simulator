import { Ship } from "@/game/ships/types"
import { phaserArray, photonTorpedo } from "@/game/weapons/instances"

export const cruiser: Ship = {
	dilithium: 2500,
	maxDilithium: 2500,
	energy: 2500,
	maxEnergy: 2500,
	hp: 10000,
	maxHp: 10000,
	crew: 300,
	maxCrew: 300,
	forwardWeapons: [
		phaserArray,
		phaserArray,
		photonTorpedo
	],
	aftWeapons: [
		phaserArray,
		photonTorpedo
	],
	shipSystems: [

	]
}