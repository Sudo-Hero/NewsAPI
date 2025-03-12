import React from "react";
import PropTypes from 'prop-types'

export default function NewsItem(props) {
    let { title, description, imageUrl, linkToArticle, author, publishedAt, source } = props;
    return (
        <div className="card my-3 mx-3" style={{ width: "22rem" }}>
            <span className="badge text-bg-danger author">{source}</span>

            <div className="card-body">
                <img src={imageUrl !== null && imageUrl !== "" ? imageUrl : "https://gdb.voanews.com/84D5EAA2-6DF9-4DCA-A69D-8E38A11E2CC8.jpg"} className="card-img-top" alt="..." />
                <h5 className="card-title my-3">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="text-muted small d-block fw-semibold">By {author ? author : "Unknown"} at {publishedAt !== "" ? new Date(publishedAt).toDateString() : ""}</p>
                <a href={linkToArticle} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
    )
}

NewsItem.propType = {
    source: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string
}
NewsItem.defaultProps = {
    source: "Unknown",
    author: "Unknown",
    title: "",
    description: "",

}