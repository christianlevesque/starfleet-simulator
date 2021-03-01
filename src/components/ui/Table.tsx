import * as React from "react"
import { PropsWithChildren } from "react"

import "./Table.scss"

type TableProps = {
	columns?: number
}

const Table: React.FunctionComponent = ({ columns = 4, children }: PropsWithChildren<TableProps>): JSX.Element => {
	return (
		<article className={`table table--${columns}`}>
			{ children }
		</article>
	)
}

export default Table