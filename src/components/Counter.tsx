import { FC, useState } from 'react';

import classes from './Counter.module.scss';

interface CouterProps { };

export const Counter: FC<CouterProps> = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(prev => prev + 1);
    
    return (
        <>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increase } >+</button>
        </>
    )
};