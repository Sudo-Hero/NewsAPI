import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    article = null;
    constructor() {
        super();
        console.log("Component loaded!")
        this.state = {
            article: this.article,
            loading: true,
        }
    }
    render() {
        return (
            <div className="container my-5">
                <h1>Top Headlines</h1>
                <div className="d-flex flex-wrap">
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <NewsItem title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content." />

                </div>
            </div >
        )
    }
}