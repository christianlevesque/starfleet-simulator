import * as React from "react"
import { useSelector } from "react-redux"

import "./SystemMap.scss"
import { Ship } from "@/game/ships/types"
import Starship from "@/components/game/Ship"
import { ApplicationState } from "@/tools/definitions/general"
import { playerSelector } from "@/game/ships/store"

const SystemMap: React.FunctionComponent = (): JSX.Element => {

	const player: Ship = useSelector(playerSelector)
	const ships: Ship[] = useSelector((s: ApplicationState) => s.ships.filter(s => player && s.solarSystem === player.solarSystem))

	return (
		<>
			{ships && (
				<div className="system-map-wrapper">
					<section className="system-map">
						{new Array(11).fill(1).map((val, x) => {
							return new Array(11).fill(1).map((val, y) => {
								const xcoord = x - 5
								const ycoord = y - 5
								const ship = ships.find(s => s.x === xcoord && s.y === ycoord)
								return (
									<div className={`x${x - 5} y${y - 5}`} key={`${x}${y}`}>
										{ship && (
											<Starship ship={ship}/>
										)}
									</div>
								)
							})
						})}
					</section>
				</div>
			)}
		</>
	)
}

export default SystemMap