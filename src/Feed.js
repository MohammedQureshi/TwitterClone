import React from 'react'
import './Feed.css'
import TweetTextBox from './TweetTextBox'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetTextBox />
            {/* Post */}
            
        </div>
    )
}

export default Feed
