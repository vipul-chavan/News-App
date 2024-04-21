import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)


// Fetching Data From News API

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }


  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - SnapFeed`;
    updateNews(); 
    // eslint-disable-next-line
}, [])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


// Fetching More Data Function
  const fetchMoreData = async () => {
    const nextPage = page + 1; // Increment the page number
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setPage(nextPage)
  };


    return (
      <div className="lg:w-[1380px] mx-auto">
        {/* Main News fetching Part  */}
        <h1 className="text-4xl py-5 pt-28 text-center dark:text-white text-black ">
          <strong>
            SnapFeed - Top {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </strong>
        </h1>
        {/* Loading Screen */}
        {loading && <Spinner />}
        {/* Infinite Scroll Implementation */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow : "unset", paddingBottom: "20px" }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-5 grid-cols-1 place-items-center ">
            {articles &&
              articles.map((element) => (
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author} 
                  date={element.publishedAt}
                />
              ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;









