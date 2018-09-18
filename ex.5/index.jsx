import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Mamber from './member'

ReactDOM.render(
    <Family>
        <Mamber name='leandro' lastName='Alves'/>
        <Mamber name='leandro' lastName='Alves'/>
    </Family>
    ,document.getElementById('app'))