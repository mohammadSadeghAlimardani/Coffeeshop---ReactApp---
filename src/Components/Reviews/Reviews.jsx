import { useState } from "react";
import reviews from "./data";
import "./reviews.css";
import SingleReview from "./SingleReview";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
    const [translateX_value, setTranslateX_value] = useState(0);
    const prevSlide = () => {
        const newValue = translateX_value + 1;
        setTranslateX_value(newValue);
    };
    const nextSlide = () => {
        const newValue = translateX_value - 1;
        setTranslateX_value(newValue);
    };
    return (
        <div className="reviews" id="reviews">
            <section className="section-center">
                <h2 className="section-title">what our customers say</h2>
                <div className="slider-container">
                    {reviews.map((review, index) => {
                        return (
                            <SingleReview
                                key={review.id}
                                {...review}
                                index={index + translateX_value}
                            />
                        );
                    })}
                </div>
                <div className="btn-container">
                    <button onClick={prevSlide} className="btn btn-dark">
                        <FaChevronLeft />
                    </button>
                    <button onClick={nextSlide} className="btn btn-dark">
                        <FaChevronRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
