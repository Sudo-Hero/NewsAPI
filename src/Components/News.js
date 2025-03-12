import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News({country, category, apiKey, headline, setProgress}) {
    let [article, setArticle] = useState([]);
    let [page, setPage] = useState(1);
    let pageSize = 5;
    let [totalResults, setTotalResults] = useState(0);

    const getNews = async (pageNo = page) => {
        let getHeadline = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${pageNo}&pageSize=5&apiKey=${apiKey}`;
        // console.log("componentDidMount")
        let data = await fetch(getHeadline)
        let parsedArticles = await data.json();

        setArticle([...article, ...parsedArticles.articles]);
        setPage(pageNo)
        setTotalResults(parsedArticles.totalResults)
    }

    useEffect(() => {
        setProgress(40)
        getNews()
        setProgress(100)
    }, [1])

    const fetchMore = () => {
        getNews(page + 1)
    }

    return (
        <div className="container mtop-5">
            <h1>{`Top ${headline ?? ""} Headlines`}</h1>
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMore}
                hasMore={totalResults >= (page * pageSize)}
                loader={<Spinner />}
                style={{ overflow: "hidden" }}
            >
                <div className="d-flex flex-wrap">
                    {article.map((element, index) => {
                        return <NewsItem key={index} title={element.title} description={element.description} imageUrl={element.urlToImage} linkToArticle={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                    })}
                </div>
            </InfiniteScroll>

        </div >
    )
}

News.propTypes = {
    country: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    category: PropTypes.string,
    pageSize: PropTypes.number.isRequired,
    headline: PropTypes.string,
}

News.defaultProps = {
    country: "us",
    pageSize: 20,
    headline: "",
}