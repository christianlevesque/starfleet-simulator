import * as React from "react"
import { Switch, Route } from "react-router-dom"

import "normalize.css"
import "./App.scss"

import Footer from "@/components/footer/Footer"
import Home from "@/site/Home"

const App = (): JSX.Element => {
	return (
		<div className="app">
			<main className="app__body">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</main>

			<Footer/>
		</div>
	)
}

export default App