import * as React from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import "./Ship.scss"

import { Ship } from "@/game/ships/types"
import { getShipIcon } from "@/game/utils"
import { destroyShip } from "@/game/ships/store"

type ShipProps = {
	ship: Ship
}
const Ship: React.FunctionComponent<ShipProps> = ({ ship }: ShipProps): JSX.Element => {

	const dispatch = useDispatch()
	const icon = getShipIcon(ship.faction)

	useEffect(() => {
		if (ship.hp !== 0)
			return

		const timeoutId = setTimeout(() => dispatch(destroyShip(ship.id)), 2500)

		return () => {
			clearTimeout(timeoutId)
			destroyShip(ship.id)
		}

	})

	const shipClasses = `ship ${ship.hp === 0 ? "ship--destroyed" : ""}`

	return (
		<article className={shipClasses}>
			<span className="trek-icon">{icon}</span>
		</article>
	)
}

export default Ship