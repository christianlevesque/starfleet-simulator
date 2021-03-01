import * as React from "react"
import { PropsWithChildren } from "react"

const TableCell: React.FunctionComponent = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
	return (
		<div className="table__cell">
			{ children }
		</div>
	)
}

export default TableCell