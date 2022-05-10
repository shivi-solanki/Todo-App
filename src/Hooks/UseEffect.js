import React, { useState, useEffect} from 'react'
import './style.css'

const UseEffect = () => {
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        console.log("hiiii")
        document.title = `Chats(${myNum})`
    });
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
                </div>
            </div>
        </>
    )
}

export default UseEffect
