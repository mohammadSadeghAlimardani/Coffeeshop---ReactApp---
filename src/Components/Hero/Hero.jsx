import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Hero = () => {
    return (
        <div className="hero">
            <section className="section-center">
                <h2>your daily dose of</h2>
                <h2>warmth & energy</h2>
                <p>
                    start your day with a perfect cup. from handpicked beans to
                    handcrafted brews, we serve more than just coffee - we serve
                    moments of joy
                </p>
                <div className="btn-container">
                    <button className="btn btn-inline-brown">
                        order online
                        <FaLongArrowAltRight />
                    </button>
                    <button className="btn btn-outline-brown">
                        <IoIosCall />
                        reserve table
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
