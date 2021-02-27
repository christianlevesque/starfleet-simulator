import { Component, ComponentEffect, Effect } from "@/game/types"

export type Weapon = {
    shieldMx: number
    hullMx: number
    systemMx: number
	bleed: number
	dissipation: number
} & Component