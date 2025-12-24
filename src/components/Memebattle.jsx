import { useEffect, useState } from "react";
import "./Memebattle.css"

function Memebattle({ memes, handleVote, gameOver }) {

    const [battle, setBattle] = useState(null);

    function generateBattle() {
        const firstIndex = Math.floor(Math.random() * memes.length);
        let secondIndex = Math.floor(Math.random() * memes.length);

        while (firstIndex === secondIndex) {
            secondIndex = Math.floor(Math.random() * memes.length);
        }

        setBattle([memes[firstIndex], memes[secondIndex]]);
    }

    useEffect(() => {
        if(memes.length >= 2){
            generateBattle();
        }
    }, [memes]);

    function voteandnext(memeId){
        if(gameOver) return;
        handleVote(memeId);
        generateBattle();
    }

    if(!battle){
        return(
            <div className="battle-loading">
                <p className="battle-loading-text">Preparing battle...</p>
            </div>  
        )
    }

    const [meme1 , meme2] = battle;

    return (
        <div className="battle">
            <div className="meme-card" onClick={() => voteandnext(meme1.id)}>
                <img className="meme-image" src={meme1.url} alt="meme1Img" />
                <p className="meme-name">{meme1.name}</p>
            </div>
            <div className="meme-card" onClick={() => voteandnext(meme2.id)}>
                <img className="meme-image" src={meme2.url} alt="meme2Img" />
                <p className="meme-name">{meme2.name}</p>
            </div>
            
        </div>
    )
}

export default Memebattle;