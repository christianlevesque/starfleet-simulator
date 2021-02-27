import { ComponentEffect, Effect, Targets, TargetType } from "@/game/types"

export const lifeSupportNominal: Effect = {
	effect: ComponentEffect.HighCrewEfficiency,
	name: "Life Support Nominal",
	description: "Life Support Nominal provides a bonus to crew efficiency that comes from having a fully functional life support system.",
	targets: Targets.Self,
	targetType: TargetType.Ship,
	value: 2,
	costToRemove: 0,
	duration: -1,
	chance: 1,
	passive: true
}