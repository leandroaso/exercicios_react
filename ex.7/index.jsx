import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Mamber from './member'

ReactDOM.render(
    <Family lastName='Alves'>
        <Mamber name='leandro' />
        <Mamber name='Irineu' />
        <Mamber name='leandro' />
    </Family>
    ,document.getElementById('app'))