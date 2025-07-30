import "./questions.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import { useState } from "react";

const Questions = () => {
    const [questions, setQuestions] = useState(data);
    const activateAnswer = (id) => {
        const newQuestions = questions.map((question) => {
            if (question.id === id) {
                if (question.showAnswer === true) {
                    question.showAnswer = false;
                } else {
                    question.showAnswer = true;
                }
            } else {
                question.showAnswer = false;
            }
            return question;
        });

        setQuestions(newQuestions);
    };
    return (
        <div className="questions" id="questions">
            <section className="section-center">
                <h2 className="section-title center">
                    frequently asked questions
                </h2>
                {questions.map((question) => {
                    return (
                        <SingleQuestion
                            key={question.id}
                            {...question}
                            activateAnswer={activateAnswer}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default Questions;
