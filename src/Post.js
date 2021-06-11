import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3> LtConquer <span className="post__headerSpecial"> <VerifiedUserIcon className="post__badge"/> </span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is my first tweet that is so awesome</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/AJIQNaQQ7TGcU/giphy.gif" alt="Octopus"/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
