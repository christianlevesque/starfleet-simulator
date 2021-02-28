import { Weapon } from "@/game/weapons/types"
import { antimatterContamination, electricalDisruption, meltdown, plasmaBurn, shortCircuit } from "@/game/weaponEffects"

export const phaserArray: Weapon = {
	name: "Phaser Array",
	description: "Phasers are a standard weapon on Federation starships. The most common armament employed by Starfleet, the phaser array is a balanced weapon that equally damages shields, hulls, and systems. It provides no bleed damage and causes no effects, and has a dissipation rate of 5% per local sector.",
	hp: 1000,
	hpMax: 1000,
	hullMx: 1,
	shieldMx: 1,
	systemMx: 1,
	damageBase: 250,
	bleed: 0,
	dissipation: 0.05,
	active: false,
	baselineCost: 50,
	useCost: 100,
	activeEffects: [],
	causesEffects: []
}

export const photonTorpedo: Weapon = {
	name: "Photon Torpedo",
	description: "Photon Torpedoes are powerful antimatter weapons capable of dealing extreme damage to ships and their systems. Because the photon torpedo is a projectile weapon, it doesn't dissipate over distance. Torpedoes are extremely weak against shields, so weaken enemy shields with phasers or disruptors before firing torpedoes if possible.",
	hp: 1500,
	hpMax: 1500,
	hullMx: 1.5,
	shieldMx: 0.25,
	systemMx: 1.25,
	damageBase: 750,
	bleed: 0.1,
	dissipation: 0,
	active: false,
	baselineCost: 0,
	useCost: 25,
	activeEffects: [],
	causesEffects: [antimatterContamination]
}

export const disruptorCannon: Weapon = {
	name: "Disruptor Cannon",
	description: "Disruptors are extremely effective against shields and ship systems, but have no effect against a ship's hull. Disruptors are powerful weapons, but due to the nature of their energy, they dissipate much more quickly than phaser arrays, so stay relatively close to your target when using disruptors. Disruptors can bleed through enemy shields, but since they have no effect on the enemy's hull, this only has any effect if targeting ship systems. Once enemy shields have been weakened, switch to photon or plasma torpedoes for maximum effect.",
	hp: 750,
	hpMax: 750,
	hullMx: 0,
	shieldMx: 1.75,
	systemMx: 1.25,
	damageBase: 150,
	bleed: 0.2,
	dissipation: 0.15,
	active: false,
	baselineCost: 100,
	useCost: 150,
	activeEffects: [],
	causesEffects: [
		shortCircuit,
		electricalDisruption
	]
}

export const plasmaTorpedo: Weapon = {
	name: "Plasma Torpedo",
	description: "Plasma torpedoes have extreme effects against ship systems, and they also have a high shield bleedthrough rate. The tradeoff is that plasma torpedoes can only be fired from extremely close range - beyond 4 local sectors, plasma torpedoes completely dissipate and have no effect on their target.",
	hp: 1250,
	hpMax: 1250,
	hullMx: 1,
	shieldMx: 0,
	systemMx: 2,
	damageBase: 1000,
	bleed: .3,
	dissipation: 0.25,
	active: false,
	baselineCost: 150,
	useCost: 250,
	activeEffects: [],
	causesEffects: [
		plasmaBurn,
		meltdown
	]
}