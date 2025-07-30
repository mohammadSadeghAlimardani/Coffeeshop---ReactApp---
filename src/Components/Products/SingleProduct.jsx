import { useState } from "react";
import { FaStar, FaPlus, FaMinus, FaLongArrowAltRight } from "react-icons/fa";
import "./singleProduct.css";

const SingleProduct = (props) => {
    const { price, name, description, imageUrl, rating, calculateTotalPrice } =
        props;

    const [showMore, setShowMore] = useState(false);
    const [value, setValue] = useState(0);

    const changeValue = (event) => {
        const clickType = event.currentTarget.dataset.click;
        if (clickType === "increase") {
            const newValue = value + 1;
            setValue(newValue);
            calculateTotalPrice(price);
        } else if (clickType === "decrease") {
            const newValue = value - 1 === -1 ? 0 : value - 1;
            setValue(newValue);
            calculateTotalPrice(price * -1);
        }
    };

    return (
        <article className="single-product">
            <img src={imageUrl} alt={name} />
            <header>
                <h2>{name}</h2>
                <span>$ {price}</span>
            </header>
            <p>{showMore ? description : `${description.slice(0, 80)}...`}</p>
            <section>
                <ul>
                    <li>
                        <FaStar className="star-icon" />
                    </li>
                    <li>
                        <FaStar className="star-icon" />
                    </li>
                    <li>
                        <FaStar className="star-icon" />
                    </li>
                    <li>
                        <FaStar className="star-icon" />
                    </li>
                    <li>
                        <FaStar className="star-icon" />
                    </li>
                    <li>{rating}</li>
                </ul>
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="btn btn-inline-brown"
                >
                    {showMore ? "show less" : "show more"}
                </button>
            </section>
            <footer>
                <button
                    data-click="decrease"
                    onClick={changeValue}
                    className="btn btn-secondary"
                >
                    <FaMinus />
                </button>
                <h2>{value}</h2>
                <button
                    data-click="increase"
                    onClick={changeValue}
                    className="btn btn-secondary"
                >
                    <FaPlus />
                </button>
            </footer>
            <button className="btn btn-black-brown">
                order now
                <FaLongArrowAltRight />
            </button>
        </article>
    );
};

export default SingleProduct;
