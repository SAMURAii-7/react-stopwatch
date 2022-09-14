//
//
//      Checkout the Github repo here: https://github.com/SAMURAii-7/react-stopwatch
//
//      Checkout the deployed app here: https://react-stopwatch-rose.vercel.app/
//

import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const pause = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    };

    var updMs = time.ms;
    var updS = time.s;
    var updM = time.m;
    var updH = time.h;

    const run = () => {
        if (updMs === 100) {
            updS++;
            updMs = 0;
        }
        if (updS === 60) {
            updM++;
            updS = 0;
        }
        if (updM === 60) {
            updH++;
            updM = 0;
        }
        updMs++;
        setTime({ ms: updMs, s: updS, m: updM, h: updH });
    };

    return (
        <div className="container">
            <h1 className="heading">Stopwatch</h1>
            <div className="content">
                <Display time={time} />
                <Button
                    status={status}
                    pause={pause}
                    reset={reset}
                    start={start}
                />
            </div>
        </div>
    );
}

export default App;
