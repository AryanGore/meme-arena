import './Leaderboard.css';

function Leaderboard({ memes, votes }) {
    const LeadData = memes.map((meme) => (
        {
            id: meme.id,
            name: meme.name,
            votes: votes[meme.id] || 0
        }
    )) 

    const sortedLead = [...LeadData].sort(
        (a, c) => c.votes - a.votes
    )

    const topMemes = sortedLead.slice(0, 5);

    return (
        <div className="leaderboard">
            <h3 className="leaderboard-title">Leaderboard</h3>
            <div className="leaderboard-list">
                {topMemes.map((meme, index) => (
                    <div className="leaderboard-item" key={meme.id}>
                        <span className="leaderboard-rank">
                            {index + 1 }
                        </span>

                        <span className="leaderboard-name">
                            {meme.name}
                        </span>

                        <span className="leaderboard-votes">
                            {meme.votes} votes
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Leaderboard;