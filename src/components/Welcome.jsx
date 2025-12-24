import './Welcome.css'

function Welcome({ onStart }) {
    return (
        <div className="welcome">
            <div className='welcome-card'>
                <h1 className="welcome-title">MEME ARENA</h1>

                <h3 className="welcome-subtitle">How to Play : </h3>
                <ul className="welcome-rules">
                    <li className="welcome-rule">You'll see two meme templates</li>
                    <li className="welcome-rule">Click the funnier one</li>
                    <li className="welcome-rule">Each click = one vote</li>
                    <li className="welcome-rule">15 rounds total</li>
                </ul>

                <button className="welcome-btn" onClick={onStart}>Start Game</button>
            </div>
        </div>
    )
}

export default Welcome;