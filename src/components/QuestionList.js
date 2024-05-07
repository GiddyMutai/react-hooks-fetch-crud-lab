import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDelete, handleChangeSelect }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onHandleDelete={handleDelete}
            onChangeSelect={handleChangeSelect}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
