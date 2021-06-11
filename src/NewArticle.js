import React from 'react'
import './NewsArticle.css'

function NewArticle(props) {
    return (
        <div className="newArticle">
            <h3> {props.articleTitle}</h3>
            <h2> {props.articleContext} </h2>
        </div>
    )
}

export default NewArticle

