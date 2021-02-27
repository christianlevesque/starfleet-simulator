import { Component } from "@/game/types"
import { lifeSupportNominal } from "@/game/componentEffects"

export const LifeSupport: Component = {
	name: "Life Support",
	description: "Life Support maintains the living conditions on its vessel. Disruptions to Life Support descrease crew efficiency.",
	hpMax: 1000,
	hp: 1000,
	baselineCost: 125,
	useCost: 0,
	active: true,
	activeEffects: [],
	causesEffects: [lifeSupportNominal]
}