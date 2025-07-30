import "./singleReview.css";
import { FaStar } from "react-icons/fa";

const SingleReview = (props) => {
    const { fullName, image, job, rating, description, index } = props;
    const numberOfStars = 5;
    const starArray = [];
    for (let i = 0; i < numberOfStars; i++) {
        if (i < parseInt(rating)) {
            starArray.push("#FFC42B");
        } else {
            starArray.push("#C8C8C6");
        }
    }

    return (
        <article
            style={{
                transform: `translateX(${index * 100}%)`,
            }}
            className="slide"
        >
            <section className="single-review">
                <header>
                    <section>
                        <img src={image} alt={fullName} />
                        <div>
                            <h3>{fullName}</h3>
                            <h4>{job}</h4>
                        </div>
                    </section>
                    <ul>
                        {starArray.map((star, index) => {
                            return (
                                <li key={index}>
                                    <FaStar style={{ color: `${star}` }} />
                                </li>
                            );
                        })}
                    </ul>
                </header>
                <p>{description}</p>
            </section>
        </article>
    );
};

export default SingleReview;
