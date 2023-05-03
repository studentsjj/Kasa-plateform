import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Error from "../Error"
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CardLogement from "../../components/CardLogement";
import Slideshow from "../../components/Slideshow";
import "./accomodation.css";


function Accomodation() {
    const accomodationUrl = useParams();
    const [accomodation, setAccomodation] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`../data.json`);
                const accomodationsData = await response.json();
                const accomodation = accomodationsData.find(
                    (accomodation) => accomodation.id === accomodationUrl.id
                );
                setAccomodation(accomodation);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [accomodationUrl.id]);

    return accomodationUrl && accomodation ?(
        <>
            <Header />
            <main>
                {isLoading? (
                    <div>Chargement...</div>
                ) : (error? (
                <Error /> ): (
                    <div>
                        <Slideshow accomodations={accomodation} />
                        <CardLogement accomodations={accomodation} />
                    </div>
                ))}
            </main>
            <Footer />
        </>
    ) : <Navigate to = "/Error" />
}
export default Accomodation;
