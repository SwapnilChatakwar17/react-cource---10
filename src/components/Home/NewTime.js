import React, {useState} from "react";

const NewTime = () => {
    let newTime = new Date().toLocaleDateString();

    const [ctime, setCtime]= useState(newTime);
    const UpdateTime = () => {
       let newCTime = new Date().toLocaleDateString();
        setCtime(newCTime);
    }

    return (
        <>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}> get time</button>
        </>
    )
}


export default NewTime;