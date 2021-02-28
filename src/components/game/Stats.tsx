import * as React from "react"
import { useDispatch } from "react-redux"
import { PlayerProps } from "@/game/types"
import { goRedAlert, goYellowAlert, standDown } from "@/game/ships/store"

function getStatus(x: number) {
	switch(true) {
		case x >= 1:
			return "Nominal"
		case x >= 0.85:
			return "Normal"
		case x >= 0.70:
			return "Compromised"
		case x >= 0.50:
			return "Damaged"
		case x >= 0.25:
			return "Severely damaged"
		case x > 0:
			return "Critical"
		default:
			return "Destroyed"
	}
}

const Stats: React.FunctionComponent<PlayerProps> = ({ player }: PlayerProps): JSX.Element => {

	const dispatch = useDispatch()

	const greenAlert = () => dispatch(standDown())
	const yellowAlert = () => dispatch(goYellowAlert())
	const redAlert = () => dispatch(goRedAlert())

	return (
		<article>
			<h1>U.S.S. Enterprise</h1>
			<p>Location: {player.solarSystem} ({player.x}, {player.y})</p>
			<ul>
				<li>
					<button onClick={greenAlert}>Stand Down</button>
				</li>
				<li>
					<button onClick={yellowAlert}>Yellow Alert</button>
				</li>
				<li>
					<button onClick={redAlert}>Red Alert</button>
				</li>
			</ul>
			<table>
				<thead>
				<tr>
					<th/>
					<th/>
					<th/>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Hull</td>
					<td>{player.hp}/{player.maxHp}</td>
					<td>{getStatus(player.hp/player.maxHp)}</td>
				</tr>
				<tr>
					<td>Shields</td>
					<td>{player.shields}/{player.maxShields}</td>
					<td>{getStatus(player.shields/player.maxShields)}</td>
				</tr>
				<tr>
					<td>Crew</td>
					<td>{player.crew}/{player.maxCrew}</td>
					<td>{getStatus(player.crew/player.maxCrew)}</td>
				</tr>
				<tr>
					<td>Energy</td>
					<td>{player.energy}/{player.maxEnergy}</td>
					<td>{getStatus(player.energy/player.maxEnergy)}</td>
				</tr>
				<tr>
					<td>Battery</td>
					<td>{player.battery}/1000</td>
					<td></td>
				</tr>
				<tr>
					<td>Dilithium</td>
					<td>{player.dilithium}/{player.maxDilithium}</td>
					<td>{getStatus(player.dilithium/player.maxDilithium)}</td>
				</tr>
				</tbody>
			</table>
		</article>
	)
}

export default Stats