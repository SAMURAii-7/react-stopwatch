import React from "react";

function Display({ time }) {
    return (
        <div className="digits-container">
            <span className="digits">
                {time.h >= 10 ? time.h : "0" + time.h}
            </span>
            &nbsp;:&nbsp;
            <span className="digits">
                {time.m >= 10 ? time.m : "0" + time.m}
            </span>
            &nbsp;:&nbsp;
            <span className="digits">
                {time.s >= 10 ? time.s : "0" + time.s}
            </span>
            &nbsp;:&nbsp;
            <span className="digits">
                {time.ms >= 10 ? time.ms : "0" + time.ms}
            </span>
        </div>
    );
}

export default Display;
