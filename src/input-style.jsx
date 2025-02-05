import { useState } from "react";

function Styling(){
    const [inputBackground, setInputBackground] = useState("");
    const [inputTextColor, setInputColor] = useState("");

    const handleChangeColor = (e)=>{
        setInputBackground(e.target.value);
    }

    const handleChangeText = (e)=>{
        setInputTextColor(e.target.value);
    }

    return(
        <div>
            <p style={{background: inputBackground, color: inputTextColor}}>
                Background dan text ini berubah warna berdasarkan input
            </p>
            <label>Background</label>
            <input type="text" value={inputBackground} onChange={handleChangeColor} />
            <br />
            <label>Text Color</label>
            <input type="text" value={inputTextColor} onChange={handleChangeText} />
        </div>
    )
}

export default Styling;