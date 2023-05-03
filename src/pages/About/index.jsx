import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import img_about from "../../assets/img_about.png";
import Collapse from "../../components/Collapse";
import "./about.css";



function About() {
    const title1 = "Fiabilité"
    const content1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const title2 = "Respect"
    const content2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const title3 = "Service"
    const content3 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const title4= "Sécurité"
    const content4= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
        <>
            <Header />
            <main>
                <div className="about">
                    <img src={img_about} alt="paysage de montagne" />
                </div>
                <div className="about-collapse">
                    <Collapse title={title1} content={content1} />
                    <Collapse title={title2} content={content2} />
                    <Collapse title={title3} content={content3} />
                    <Collapse title={title4} content={content4} />
                </div>
            </main>
            <Footer />
        </>
    );
}
export default About;
