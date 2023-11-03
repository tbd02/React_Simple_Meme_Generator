import React from "react"

export default function Header(){
    return(
        <header className="header">
            <img alt ="meme-face" src= {require("../images/troll-face.png")} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React App - Project 3</h4>
        </header>
    )
}