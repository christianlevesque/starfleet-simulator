import * as React from "react"
import { PropsWithChildren } from "react"

const TableRow: React.FunctionComponent = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
	return (
		<div className="table__row">
			{ children }
		</div>
	)
}

export default TableRow