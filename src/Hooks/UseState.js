import React, { useState } from 'react'
import "./style.css"

const UseState = () => {
    // let initialData = 0;
    const [myNum, setMyNum] = useState(0);
    
    // const incr = () => {
    //        let incr = myNum + 1;
    //         return setMyNum(incr);
    // }
    // const decr = () => {
    //        let decr = myNum - 1;
    //         return setMyNum(decr);
    // }
    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div>
                    <div className="button2" onClick={() => setMyNum(myNum + 1) }>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCR
                    </div>
                    <div className="button2" onClick={ () => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0) ) }>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        DECR
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseState
