import { Ship } from "@/game/ships/types"
import { Weapon } from "@/game/weapons/types"
import { ComponentEffect } from "@/game/types"
import { calculateDistance } from "@/game/shipUtils"

export function weaponCanFire(ship: Ship, weapon: Weapon): boolean {
	if (ship.energy < weapon.useCost)
		return false

	if (!weapon.active) {
		return false
	}

	if (weapon.activeEffects.findIndex(e => e.effect === ComponentEffect.Disabled) > -1) {
		return false
	}

	return true
}

export function calculateBaseDamage(source: Ship, target: Ship, weapon: Weapon): number {
	const distance = calculateDistance(source.x, target.x, source.y, target.y)
	const dissipation = distance * weapon.dissipation
	return weapon.damageBase - (weapon.damageBase * dissipation)
}

export function calculateShieldDamage(baseDamage: number, weapon: Weapon): number {
	return baseDamage * weapon.shieldMx
}

export function calculateHullDamage(baseDamage: number, weapon: Weapon): number {
	return baseDamage * weapon.hullMx
}

export function calculateBleedDamage(baseDamage: number, weapon: Weapon): number {
	return baseDamage * weapon.hullMx * weapon.bleed
}

export function dealDamage(source: Ship, target: Ship, weapon: Weapon): void {
	const damage = calculateBaseDamage(source, target, weapon)

	if (target.shields > 0) {
		// regular shield damage
		target.shields -= calculateShieldDamage(damage, weapon)
		if (target.shields < 0)
			target.shields = 0

		// bleed damage
		target.hp -= calculateBleedDamage(damage, weapon)
		if (target.hp < 0)
			target.hp = 0
	}
	else {
		target.hp -= calculateHullDamage(damage, weapon)
		if (target.hp < 0)
			target.hp = 0
	}
}