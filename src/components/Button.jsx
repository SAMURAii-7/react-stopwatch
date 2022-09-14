import React from "react";

function Button({ start, pause, reset, status }) {
    return (
        <div className="btn-container">
            {status === 0 ? (
                <button className="btn" onClick={start}>
                    START
                </button>
            ) : (
                ""
            )}
            {status === 1 ? (
                <div className="btn-double">
                    <button className="btn" onClick={pause}>
                        PAUSE
                    </button>
                    <button className="btn" onClick={reset}>
                        RESET
                    </button>
                </div>
            ) : (
                ""
            )}
            {status === 2 ? (
                <div className="btn-double">
                    <button className="btn" onClick={start}>
                        RESUME
                    </button>
                    <button className="btn" onClick={reset}>
                        RESET
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Button;
