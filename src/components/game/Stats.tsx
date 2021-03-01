import * as React from "react"
import { useDispatch } from "react-redux"
import { PlayerProps } from "@/game/types"
import { convertDilithium } from "@/game/ships/store"
import Table from "@/components/ui/Table"
import TableRow from "@/components/ui/TableRow"
import TableCell from "@/components/ui/TableCell"

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
			return "Offline"
	}
}

const Stats: React.FunctionComponent<PlayerProps> = ({ player }: PlayerProps): JSX.Element => {

	const dispatch = useDispatch()
	const replenishPower = () => dispatch(convertDilithium("player"))

	return (
		<article>
			<Table>
				<TableCell>Hull</TableCell>
				<TableCell>{player.hp}/{player.maxHp}</TableCell>
				<TableCell>{getStatus(player.hp/player.maxHp)}</TableCell>
				<TableCell/>

				<TableCell>Shields</TableCell>
				<TableCell>{player.shields}/{player.maxShields}</TableCell>
				<TableCell>{getStatus(player.shields/player.maxShields)}</TableCell>
				<TableCell/>

				<TableCell>Crew</TableCell>
				<TableCell>{player.crew}/{player.maxCrew}</TableCell>
				<TableCell>{getStatus(player.crew/player.maxCrew)}</TableCell>
				<TableCell/>

				<TableCell>Energy</TableCell>
				<TableCell>{player.energy}/{player.maxEnergy}</TableCell>
				<TableCell>{getStatus(player.energy/player.maxEnergy)}</TableCell>
				<TableCell><button onClick={replenishPower}>Restore</button></TableCell>

				<TableCell>Battery</TableCell>
				<TableCell>{player.battery}/1000</TableCell>
				<TableCell/>
				<TableCell/>

				<TableCell>Dilithium</TableCell>
				<TableCell>{player.dilithium}/{player.maxDilithium}</TableCell>
				<TableCell>{getStatus(player.dilithium/player.maxDilithium)}</TableCell>
				<TableCell/>
			</Table>
		</article>
	)
}

export default Stats