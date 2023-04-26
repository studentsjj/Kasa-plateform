
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import img_apropos from "../../assets/img_apropos.png"
import "./about.css"
import Collapse from "../../components/Collapse"
import {datas} from "../../components/Collapse/datas.js"

function About () {
    
    return (
        <div>
            <Header />
            <div className="about">
            <img src={img_apropos} alt="paysage de montagne" />
            </div>
            {datas.map((data)=>
                <div key={data.id}>
                <Collapse  title={data.title} text={data.text}/>
                </div>)}
            <Footer />
        </div>
    )
}

export default About