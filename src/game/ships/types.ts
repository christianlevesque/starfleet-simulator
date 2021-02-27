import { Weapon } from "@/game/weapons/types"
import { Component } from "@/game/types"

export type Ship = {
	dilithium: number,
	maxDilithium: number,
	energy: number,
	maxEnergy: number,
	hp: number,
	maxHp: number,
	crew: number,
	maxCrew: number,
	forwardWeapons: Weapon[],
	aftWeapons: Weapon[],
	shipSystems: Component[]
}