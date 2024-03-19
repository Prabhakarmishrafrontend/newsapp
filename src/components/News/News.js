import React, { useEffect, useState } from 'react';
import "./News.css";

export default function News() {

    const [mynews, setMyNews] = useState([]);

    const fetchData = async() => {
        let responce = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8dcb24749f8748139fc13c570a12a42e");
        let data = await responce.json();
        setMyNews(data.articles);
    }

    useEffect(() => {
        fetchData();
    },[])
  return (
    <>
    <div className="mainDiv">
        {
            mynews.map((ele) => {
                return(
                    <>
                        
                        <div className="card" style={{width: "300px", height: "400px" , marginLeft: "2rem", marginTop: "1rem"}}>
                            <img src={ele.urlToImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{ele.title}</h5>
                                <p className="card-text">Published : {ele.publishedAt}</p>
                                <a href={ele.url} target="_blank" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        
                    </>
                )
            })
        }
    </div>
    </>
  )
}
