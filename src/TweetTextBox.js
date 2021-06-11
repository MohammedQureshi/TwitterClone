import React from 'react'
import {Button, Avatar} from '@material-ui/core'
import './TweetTextBox.css'
import PublicIcon from '@material-ui/icons/Public';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';

function TweetTextBox() {
    return (
        <div className="tweetTextBox">
            <form>
                <div className="tweetTextBox_input">
                    <Avatar src="https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png"/>
                    <input placeholder="Whats Happening?"/>
                </div>
                <div className="tweetTextBox__inputButtons">
                    <PublicIcon className="tweetTextBox__tweetIcon" />
                    <GifIcon className="tweetTextBox__tweetIcon"/>
                    <BarChartIcon className="tweetTextBox__tweetIcon"/>
                    <InsertEmoticonIcon className="tweetTextBox__tweetIcon"/>
                    <InsertInvitationIcon className="tweetTextBox__tweetIcon"/>
                    <Button className="tweetTextBox__tweetButton">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetTextBox
