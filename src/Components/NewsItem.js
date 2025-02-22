import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div className="card my-3 mx-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}