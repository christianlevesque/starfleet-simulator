import * as React from "react"
import { Ship, ShipClass, ShipFaction } from "@/game/ships/types"

type ShipProps = {
	ship: Ship
}
const Ship: React.FunctionComponent<ShipProps> = ({ ship }: ShipProps): JSX.Element => {
	let icon
	if (ship.faction === ShipFaction.Federation)
		icon = "B"
	else if (ship.faction === ShipFaction.Klingon)
		icon = "E"
	else if (ship.faction === ShipFaction.Romulan)
		icon = "Y"
	return (
		<article>
			<span className="trek-icon">{icon}</span>
		</article>
	)
}

export default Ship