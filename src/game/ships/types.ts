import { Weapon } from "@/game/weapons/types"
import { Component, SolarSystems } from "@/game/types"

export enum ShipClass {
	Cruiser = "Cruiser",
	Science = "Science",
	Tactical = "Tactical"
}

export enum ShipFaction {
	Federation = "Federation",
	Klingon = "Klingon",
	Romulan = "Romulan"
}

export type Ship = {
	id?: string,
	dilithium: number,
	maxDilithium: number,
	energy: number,
	maxEnergy: number,
	hp: number,
	maxHp: number,
	shields: number,
	maxShields: number,
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

export type ShipMovement = {
	id: string,
	x: number,
	y: number
}

export type FireOnShip = {
	sourceId: string,
	targetId: string
}