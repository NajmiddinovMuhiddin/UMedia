import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Newsitem} from "../store/action/NewsAction";

const NewsItems = () => {

    const newsItems = useSelector((state) => state.newsImg.news)
    const dispatch = useDispatch()
    useEffect(()  => {
        dispatch(Newsitem())
    },[])


    return (
        <>
            {newsItems.news && newsItems.news.map((item, key) =>
                <Link key={key} to={"/news-info"} className={`news__item news__item-${key + 1} item-news`}
                      data-aos="fade-up">
                    <div className="item-news__img ibg">
                        <img src={item.image[0]} alt=""/>
                    </div>
                    <div className="item-news__title">{item.title}</div>
                    <div className="item-news__subtitle">{item.description}</div>
                </Link>
            )}

        </>
    );
};

export default NewsItems;