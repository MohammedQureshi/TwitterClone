import React from 'react'
import './Widget.css'
import NewArticle from './NewArticle'

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
                <NewArticle articleTitle={"Tennis · LIVE"} articleContext={"2021 French Open: Nadal and Djokovic battle it out for a spot in the final"} />
                <NewArticle articleTitle={"Trending in the United Kingdom"} articleContext={"#EURO2020"} />
                <NewArticle articleTitle={"Entertainment · Trending"} articleContext={"dan howell"} />
                <NewArticle articleTitle={"World news · LIVE"} articleContext={"Leaders from G7 nations meet in Cornwall, England for summit"} />
                <h3>Show more</h3>
            </div>
            <div className="widgets__widgetContainer">
                <h2>Who to follow</h2>
                <h3>Show more</h3>
            </div>
            <div className="widgets__widgetContainer">
                <h2>Topics to follow</h2>
                <NewArticle articleTitle={"Technology"} articleContext={"All about technology"} />
            </div>
        </div>
    )
}

export default Widgets
