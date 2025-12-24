import { useEffect, useState } from "react";
import { fetchMemes } from "../services/memeApi";
import Memebattle from "./Memebattle";
import Leaderboard from "./Leaderboard";
import Welcome from "./Welcome";
import './MemeArena.css';


const MemeArena = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [votes, setVotes] = useState({});
    const MAX_ROUNDS = 15;
    const [round, setRound] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);


    useEffect(() => {

        async function getMemes() {
            try {
                const data = await fetchMemes();
                setMemes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getMemes();

    }, []); // adding an empty dependency array makes sure that this sideeffect only renders at 
    //start of the function, or when the component mounts on App.jsx.


    function handleVote(memeId) {
        setVotes(prev => {
            const updatedVotes = {
                ...prev,
                [memeId]: (prev[memeId] || 0) + 1
            }
            console.log(updatedVotes);
            return updatedVotes;
        })

        setRound(prevRound => {
            const nextRound = prevRound + 1;

            if (nextRound > MAX_ROUNDS) {
                setGameOver(true);
                return prevRound;
            }

            return nextRound;
        })
    }


    function reset() {
        setRound(1);
        setGameOver(false);
        setVotes({});
        setGameStarted(false);
    }

    if (!gameStarted) {
        return (
            <div className="arena arena-welcome">
                <Welcome onStart={() => setGameStarted(true)}></Welcome>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="arena arena-loading">
                <p>Loading Memes...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="arena arena-error">
                <p>Error : {error}</p>
            </div>
        )
    }

    return (
        <div className="arena">
            <div className="arena-game">
                <p className="Round-Indicator">Round : {round} / {MAX_ROUNDS}</p>
                {
                    !gameOver &&
                    (
                        <Memebattle memes={memes} handleVote={handleVote} gameOver={gameOver} />
                    )
                }
            </div>


            {
                gameOver &&
                (
                    <div className="arena-gameover">
                        <p className="gameover-title">Game Over! Check the Leaderboard !!!</p>
                        <Leaderboard memes={memes} votes={votes} />
                        <button className="play-again-btn" onClick={reset}>Play Again!</button>
                    </div>
                )
            }

        </div>
    )
}

export default MemeArena;