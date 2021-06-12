import React, {useState} from 'react'
import {Button, Avatar} from '@material-ui/core'
import './TweetTextBox.css'
import PublicIcon from '@material-ui/icons/Public';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import db from './firebase'

function TweetTextBox() {

    const[tweetMessage, setTweetMessage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "LtConquer",
            username: "@LtConquer",
            verified: true,
            text: tweetMessage,
            image: "",
            avatar: "https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png"
        })

        setTweetMessage("");
    }

    return (
        <div className="tweetTextBox">
            <form>
                <div className="tweetTextBox_input">
                    <Avatar src="https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png"/>
                    <input 
                        onChange={e => setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="Whats Happening?" 
                        type="text" 
                    />
                </div>
                <div className="tweetTextBox__inputButtons">
                    <PublicIcon className="tweetTextBox__tweetIcon" />
                    <GifIcon className="tweetTextBox__tweetIcon"/>
                    <BarChartIcon className="tweetTextBox__tweetIcon"/>
                    <InsertEmoticonIcon className="tweetTextBox__tweetIcon"/>
                    <InsertInvitationIcon className="tweetTextBox__tweetIcon"/>
                    <Button onClick={sendTweet} type="submit" className="tweetTextBox__tweetButton">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetTextBox
