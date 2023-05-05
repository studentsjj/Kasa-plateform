import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Error";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import useFetch from "../../utils";
import "./home.scss";

function Home() {
    const { data, isLoading, error } = useFetch(`data.json`);
    useEffect(() => {
        document.title = "Kasa, chez vous, partout et ailleurs";
    }, []);
    useEffect(() => {
        document.documentElement.lang = "fr";
    });
    if (error) {
        return <Error />;
    }

    return (
        <>
            <Header />
            <main>
                <Banner />
                <div className="gallery">
                    {isLoading ? (
                        <div>Chargement...</div>
                    ) : (
                        data &&
                        data.map((accomodation) => (
                            <div className="gallery__card" key={accomodation.id}>
                                <Link to={`/Accomodation/${accomodation.id}`}>
                                    <Card
                                        cover={accomodation.cover}
                                        title={accomodation.title}
                                    />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Home;
