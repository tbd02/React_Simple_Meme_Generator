import React from "react"
// import memesData from "./memesData.js"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",    
        bottomText: "",
        randomMeme: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        // const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length) 
        const url = allMemes[randomNumber].url
        setMeme(preMeme => ({
                ...preMeme,
                randomMeme: url
            }))
    }
    //alternative way, not best use
    // const [memeImage, setMemeImage] = React.useState("") 
    // function getMemeImage(){
    //     const memesArray = memesData.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length) 
    // math.floor round smallest integer number, math.random pick number from 0-1, times with 100 (which is the array length) -> results will be the position of the data in the array.
    //     setMemeImage(memesArray[randomNumber].url)       
    // }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                className="form--input"
                placeholder="top-text"
                type="text" 
                name="topText"
                value={meme.topText}
                onChange={handleChange}>
                </input>
                
                <input 
                className="form--input"
                placeholder="bottom-text"
                type="text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}>
                </input>

                <button className="form--button" onClick={getMemeImage}> Get a new meme
                </button>
            </div>
            <div className="meme">
                <img src= {meme.randomMeme} alt="randomImage" className="meme--image"></img>
                <h2 className="meme--text top"
                >{meme.topText}</h2>
                
                <h2 className="meme--text bottom"
                >{meme.bottomText}</h2>
            </div>
        </main>
    )
}