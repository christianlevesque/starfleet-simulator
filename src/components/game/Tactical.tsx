import * as React from "react"
import { useDispatch } from "react-redux"

import { Ship } from "@/game/ships/types"
import { fireOnShip } from "@/game/ships/store"

type TacticalProps = {
	player: Ship
	enemies: Ship[]
}

const Tactical: React.FunctionComponent<TacticalProps> = ({ player, enemies }: TacticalProps): JSX.Element => {

	const dispatch = useDispatch()

	function fireOnTarget(id: string) {
		dispatch(fireOnShip({
			sourceId: player.id,
			targetId: id
		}))
	}

	return (
		<article>
			<ul>
				{enemies && enemies.map((enemy, i) => (
					<li key={i}>
						<article>
							<h2>{enemy.faction} {enemy.type} ({enemy.x},{enemy.y})</h2>
							<table>
								<thead>
								<tr>
									<th/>
									<th/>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>Shields</td>
									<td>{enemy.shields}/{enemy.maxShields}</td>
								</tr>
								<tr>
									<td>Hull</td>
									<td>{enemy.hp}/{enemy.maxHp}</td>
								</tr>
								</tbody>
							</table>
							<button onClick={() => fireOnTarget(enemy.id)}>
								Fire
							</button>
						</article>
					</li>
				))}
			</ul>
		</article>
	)
}

export default Tactical