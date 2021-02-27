// Redux Action definition
export type Action<TPayload> = {
	type: string,
	payload: TPayload
}

// Redux state definition
export type ApplicationState = {

}

export type NavDestination = {
	href: string,
	name?: string,
	icon?: string
}