import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import "./error.scss";

function Error() {
    return (
        <>
            <Header />
            <div className="page-error">
                <span className="page-error__number">404</span>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    );
}
export default Error;
