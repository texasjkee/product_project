import { Counter } from "./components/Counter";

import './index.scss';

export const App = () => {

    return (
        <div className="app">
        <span>App webpack</span>
            <Counter />
        </div>
    )
}

export default App;