import React from "react"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import "./Home.css"
import {Link} from "react-router-dom";
import datas from "../../datas.json"



function Home () {
    return (
        <>
            <Header/>
            <main>
                <Banner />
                {datas.map((accomodation) => {
                    return (
                    <article key={accomodation.id}>
                        <Link to={`/Accomodation/${accomodation.id}`}>
                        <Card cover={accomodation.cover} title={accomodation.title}/>
                        </Link>
                    </article>)})}
            </main>
            <Footer/>
        </>
    )
}

export default Home