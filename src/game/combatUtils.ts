import { Ship } from "@/game/ships/types"
import { Weapon } from "@/game/weapons/types"
import { calculateDistance } from "@/game/utils"
import { ComponentEffect } from "@/game/types"

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