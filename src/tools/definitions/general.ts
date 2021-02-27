// Redux Action definition
import { Ship } from "@/game/ships/types"

export type Action<TPayload> = {
	type: string,
	payload: TPayload
}

// Redux state definition
export type ApplicationState = {
	ships: Ship[]
}

export type NavDestination = {
	href: string,
	name?: string,
	icon?: string
}