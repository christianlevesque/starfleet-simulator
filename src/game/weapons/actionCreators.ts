import {Action} from "@/tools/definitions/general"
import {Weapon} from "@/game/weapons/types"

export const ADD_WEAPON = "ADD_WEAPON"

export function addWeapon(weapon: Weapon): Action<Weapon> {
	return {
		type: ADD_WEAPON,
		payload: weapon
	}
}