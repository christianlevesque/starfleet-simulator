/**
 * Describes who the target of an effect is
 *
 * This is from the perspective of the owner of the effect, not the giver of the effect. So a weapon-based effect on a target Component that targets Self will actually target the ship or component carrying the Effect.
 */
export enum Targets {
	Self,
	Ally,
	Enemy,
	Any
}

export enum TargetType {
	Ship,
	Component
}

/**
 * Disabled: component does not function
 * DiminishedOutput: component's effect is diminished by a defined amount
 * FeedbackDamage: component is dealt feedback damage
 * RepairResistance: component cannot be repaired
 */
export enum ComponentEffect {
	Disabled,
	LowOutput,
	ImprovedOutput,
	FeedbackDamage,
	RepairResistance,
	LowCrewEfficiency,
	HighCrewEfficiency
}

/**
 * Represents an Effect on a ship system.
 *
 * effect is the type of WeaponEffect represented.
 *
 * value is the amount of the WeaponEffect represented, as a decimal (e.g., if effect is FeedbackDamage, value might be 50 - which means that each time the component is used, 50 damage is dealt to that component as feedback damage)
 *
 * costToRemove is how much energy it costs to remove the effect, i.e. to repair the effect state
 *
 * duration is how many turns the effect lasts. Negative durations do not wear off naturally
 *
 * chance is how likely the effect is to occur, as a decimal
 *
 * passive is whether the effect occurs every turn or only when the component is used
 */
export type Effect = {
	effect: ComponentEffect
	name: string
	description: string
	targets: Targets
	targetType: TargetType
	value: number
	costToRemove: number
	duration: number
	chance: number
	passive: boolean
}

export type Component = {
	name: string
	description: string
	hpMax: number
	hp: number
	baselineCost: number
	useCost: number
	active: boolean
	activeEffects: Effect[]
	causesEffects: Effect[]
}