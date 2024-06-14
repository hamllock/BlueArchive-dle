import "./App.css";
import AnswerBar from "./components/AnswerBar.tsx";
import Table from "./components/Table.tsx";
import useStudent from "./hooks/useStudent";
import students from "./data/students.json";

function App() {
  const { randStudent, resetList, studentList, addStudent } =
    useStudent(students);
  return (
    <div className="flex flex-col gap-4 items-center h-screen w-screen">
      <AnswerBar addStudent={addStudent} resetList={resetList} />
      <Table studentList={studentList} randStudent={randStudent} />
    </div>
  );
}

export default App;
