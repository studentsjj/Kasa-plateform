import {useState} from "react"
import {useParams} from "react-router-dom"
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import CardLogement from "../../components/CardLogement"
import Slideshow from "../../components/Slideshow"

function Accomodation() {
    const {id} = useParams();
   
    return (
        <>
            <Header />
            <Slideshow />
            <CardLogement id={id} />  
            <Footer />
        </>
    )
}
export default Accomodation