import React from 'react'
import './Feed.css'
import TweetTextBox from './TweetTextBox'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetTextBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
