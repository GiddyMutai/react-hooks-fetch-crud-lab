import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddItem(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDelete(delQuestion) {
    // delete from the server
    fetch(`http://localhost:4000/questions/${delQuestion.id}`, {
      method: "DELETE",
    }).then(() => {
      setQuestions(
        questions.filter((question) => question.id !== delQuestion.id)
      );
    });
  }

  function handleChangeSelect(updatedQuestion) {
    const updatedQuestions = questions.map((q) => {
      if (q.id === updatedQuestion.id) {
        return updatedQuestion;
      }else{
        return q;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddItem={handleAddItem} />
      ) : (
        <QuestionList
          questions={questions}
          handleDelete={handleDelete}
          handleChangeSelect={handleChangeSelect}
        />
      )}
    </main>
  );
}

export default App;
