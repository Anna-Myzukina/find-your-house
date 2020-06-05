import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
    <Switch>
        <Route exact_path="/" component={Houses}/>
        <Route exact_path="houses/:dscription" component={House}/>
    </Switch>
    )
}

export default App