import "./reserve.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Reserve = () => {
    return (
        <div className="reserve" id="reserve">
            <section className="section-center column column-2">
                <article>
                    <h2>visit us today</h2>
                    <h3>fresh coffee,always nearby</h3>
                    <p>217 willow lane maplewood heights, CA 90210</p>
                    <h3>opening hours</h3>
                    <ul>
                        <li>
                            <h5>monday - friday</h5>
                            <h6>..........</h6>
                            <h5>7:00 AM - 7:00 PM </h5>
                        </li>
                        <li>
                            <h5>saturday</h5>
                            <h6>..........</h6>
                            <h5>8:00 AM - 6:00 PM </h5>
                        </li>
                        <li>
                            <h5>sunday</h5>
                            <h6>..........</h6>
                            <h5>8:00 AM - 4:00 PM </h5>
                        </li>
                    </ul>
                    <button className="btn btn-inline-brown">
                        get direction
                        <FaLongArrowAltRight />
                    </button>
                </article>
                <article>
                    <h2>skip the line</h2>
                    <h3>order ahead or book a table</h3>
                    <p>
                        save time and enjoy convenience with our online ordering
                        and table reservation. your perfect cup is just a few
                        weeks away
                    </p>
                    <h3>booking</h3>
                    <p>call us: (555) 342-7789</p>
                    <button className="btn btn-inline-brown">
                        order online
                        <FaLongArrowAltRight />
                    </button>
                </article>
            </section>
        </div>
    );
};

export default Reserve;
