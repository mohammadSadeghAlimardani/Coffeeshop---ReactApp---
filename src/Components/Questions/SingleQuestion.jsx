import { FaPlus } from "react-icons/fa";
import "./singleQuestion.css";

const SingleQuestion = (props) => {
    const { questionText, answerText, showAnswer, id, activateAnswer } = props;
    return (
        <article className="single-question">
            <div>
                <h2>{questionText}</h2>
                <button
                    onClick={() => activateAnswer(id)}
                    className="btn btn-dark"
                >
                    <FaPlus />
                </button>
            </div>
            <p>{showAnswer ? answerText : ""}</p>
        </article>
    );
};

export default SingleQuestion;
