import { useState } from "react";

function TextInput(){
    const [text, setText] = useState("");

    return (<div>
        <input maxLength={20} onChange={(e) => setText(e.target.value)}></input>
        <p>{text}</p>
        <p>{text.length}</p>
        <p>{text.length == 15 ? "It's almost maximum" : ""}</p>
    </div>)
}

export default TextInput;