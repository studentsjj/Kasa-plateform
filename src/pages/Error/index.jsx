import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import "./error.scss";

function Error() {
    return (
        <div>
            <Header />
            <div className="page-error">
                <span className="page-error-number">404</span>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" style={{ textDecorationLine: "underline" }}>
                    Retourner sur la page d'accueil
                </Link>
            </div>
            <Footer />
        </div>
    );
}
export default Error;
