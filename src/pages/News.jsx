import React, {useEffect} from 'react';
import Layout from "../Layout";
import {Link} from "react-router-dom";
import useScript from "../useScript";
import {useDispatch, useSelector} from "react-redux";
import {Newsitem} from "../store/action/NewsAction";


const News = () => {
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    const newsItems = useSelector((state) => state.newsImg.news)
    const dispatch = useDispatch()
    useEffect(()  => {
        dispatch(Newsitem())
    },[])

console.log(newsItems)

    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main">
                <section className="news background">
                    <div className="news__container">
                        <div className="news__items">
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
                        </div>
                    </div>
                    <div className="news__anim-items">
                        <div className="news__anim-circle news__anim-circle-1"/>
                        <div className="news__anim-circle news__anim-circle-2"/>
                    </div>
                </section>
            </main>
           {/* <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>*/}

        </Layout>
    );
};

export default News;