import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

import { Button } from "shared/ui/Button/Button";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button
                data-testid="decrement-btn"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid="icrement-btn"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    )
};