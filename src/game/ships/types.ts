import { Weapon } from "@/game/weapons/types"
import { Component, SolarSystems } from "@/game/types"

export enum ShipClass {
	Cruiser,
	Science,
	Tactical
}

export enum ShipFaction {
	Federation,
	Klingon,
	Romulan
}

export type Ship = {
	id?: string,
	dilithium: number,
	maxDilithium: number,
	energy: number,
	maxEnergy: number,
	hp: number,
	maxHp: number,
	crew: number,
	maxCrew: number,
	type: ShipClass,
	faction: ShipFaction,
	solarSystem: SolarSystems,
	x: number,
	y: number,
	forwardWeapons: Weapon[],
	aftWeapons: Weapon[],
	shipSystems: Component[]
}