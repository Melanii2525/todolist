import React from "react";
import buttonStyle from "./style.module.css";

export default function DeskripsiProduk(){
    return(
        <div style={{ maxWidth: "400px", margin: "50px 30px"}}>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."
            This is placeholder text commonly used to fill space in designs and layouts before the final content is ready.
            </p>
            <button className={`${buttonStyle.btn} ${buttonStyle.txt} ms-2`}>Baca Deskripsi</button>
        </div>
    );
}