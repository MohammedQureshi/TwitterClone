import React from 'react'
import './Feed.css'
import TweetTextBox from './TweetTextBox'
import Post from './Post'
import FlareIcon from '@material-ui/icons/Flare';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2><FlareIcon className="flareIconStyle" />
            </div>
            <TweetTextBox />
            <Post displayName="LtConquer" username="@LtConquer" avatar="https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png" />
            <Post displayName="Ninja" username="@Ninja" avatar="https://a.espncdn.com/photo/2018/0917/r432464_1600x800cc.jpg" />
            <Post displayName="Fousey" username="@Fousey"/>
            <Post displayName="MrBeast" username="@MrBeast"/>
            <Post displayName="Clever Programmer" username="@CleverProgrammer"/>
        </div>
    )
}

export default Feed
