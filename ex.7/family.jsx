import React from 'react'
import { childrenWithProps } from '../utils/reactutils';

export default props =>(
    <div>
        <h1>Familia</h1>
        {childrenWithProps(props)}
    </div>
)