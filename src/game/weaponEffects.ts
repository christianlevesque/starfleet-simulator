import { ComponentEffect, Effect, Targets, TargetType } from "@/game/types"

// Photon Torpedo effects

export const antimatterContamination: Effect = {
	effect: ComponentEffect.RepairResistance,
	name: "Antimatter Contamination",
	description: "Antimatter Contamination prevents repair crews from accessing a component to repair the effected component for 3 turns.",
	targets: Targets.Enemy,
	targetType: TargetType.Component,
	value: 0,
	costToRemove: 0,
	duration: 3,
	chance: 0.15,
	passive: true
}

// Disruptor effects

/**
 * Represents disruptions caused by disruptor fire on components
 */
export const shortCircuit: Effect = {
	effect: ComponentEffect.LowOutput,
	name: "Short Circuit",
	description: "Short Circuit increases the baseline AND activation cost associated with a component by 20%. This effect expires after 2 turns.",
	targets: Targets.Enemy,
	targetType: TargetType.Component,
	value: .20,
	costToRemove: 125,
	duration: 2,
	chance: 0.2,
	passive: true
}

export const electricalDisruption: Effect = {
	effect: ComponentEffect.Disabled,
	name: "Electrical Disruption",
	description: "Electrical Disruption completely disables a component. This effect expires after 3 turns.",
	targets: Targets.Enemy,
	targetType: TargetType.Component,
	value: 0,
	costToRemove: 250,
	duration: 3,
	chance: 0.1,
	passive: true
}

// Plasma Torpedo effects

/**
 * Represents a lasting effect of a plasma torpedo
 */
export const plasmaBurn: Effect = {
	effect: ComponentEffect.FeedbackDamage,
	name: "Plasma Burn",
	description: "Plasma Burn deals 100 feedback damage on component use. This effect does not expire and must be repaired.",
	targets: Targets.Enemy,
	targetType: TargetType.Component,
	value: 100,
	costToRemove: 250,
	duration: -1,
	chance: 0.15,
	passive: false
}

export const meltdown: Effect = {
	effect: ComponentEffect.Disabled,
	name: "Meltdown",
	description: "Meltdown disables the component completely. This effect does not expire and must be repaired.",
	targets: Targets.Enemy,
	targetType: TargetType.Component,
	value: 0,
	costToRemove: 500,
	duration: -1,
	chance: 0.05,
	passive: true
}