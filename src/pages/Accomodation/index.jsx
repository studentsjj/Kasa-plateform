import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Error from "../Error";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CardAccomodation from "../../components/CardAccomodation";
import Slideshow from "../../components/Slideshow";

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
                if (!accomodationUrl.id) {
                    <Navigate to="/Error" />;
                } else {
                    setAccomodation(accomodation);
                }
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [accomodationUrl.id]);

    return accomodation ? (
        <>
            <Header />
            <main>
                {isLoading ? (
                    <div>Chargement...</div>
                ) : error ? (
                    <Error />
                ) : (
                    <>
                        <Slideshow accomodations={accomodation} />
                        <CardAccomodation accomodations={accomodation} />
                    </>
                )}
            </main>
            <Footer />
        </>
    ) : (
        <Navigate to="/Error" />
    );
}
export default Accomodation;
