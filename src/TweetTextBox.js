import React from 'react'
import {Button, Avatar} from '@material-ui/core'
import './TweetTextBox.css'

function TweetTextBox() {
    return (
        <div className="tweetTextBox">
            <form>
                <div className="tweetTextBox_input">
                    <Avatar src="https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png"/>
                    <input placeholder="Whats Happening"/>
                </div>
                <input className="tweetTextBox_imageInput" placeholder="Optional: Enter Image URL"/>
                <Button className="tweetTextBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetTextBox
