import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3> {displayName} </h3> 
                        <span className="post__headerSpecial"> {verified && <VerifiedUserIcon className="post__badge"/>} </span>
                        <h3 className="post__tagName">{username}</h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </div>
            </div>
        </div>
    )
});

export default Post
