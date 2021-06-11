import React from 'react'
import './Widget.css'

import SearchIcon from '@material-ui/icons/Search'

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1403385368230117386"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ltconquer"
                options={{height: 400}}
                />
            </div>

            <TwitterShareButton
            url={"https://www.facebook.com/LtConquer"}
            options={{text:"Gaming and Coding", via: "LtConquer"}}
            />
        </div>
    )
}

export default Widgets
