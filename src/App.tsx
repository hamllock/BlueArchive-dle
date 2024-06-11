import { useEffect, useState } from "react";
import "./App.css";
import students from "./data/students.json";
import locals from "./data/localization.json";
interface Localization {
  SquadType: Record<string, string>;
  BulletType: Record<string, string>;
  ArmorTypeLong: Record<string, string>;
  TacticRole: Record<string, string>;
  SchoolLong: Record<string, string>;
  Club: Record<string, string>;
}

function App() {
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState(students[0]);
  const [local] = useState<Localization>(locals);

  const nextStudent = () => {
    setCount((prevCount) => (prevCount + 1) % students.length);
  };

  const randStudent = () => {
    setCount(Math.floor(Math.random() * students.length));
  };

  useEffect(() => {
    randStudent();
  }, []);

  useEffect(() => {
    setStudent(students[count]);
  }, [count]);

  return (
    <>
      <div className="flex h-screen w-screen flex-row">
        <div className="flex w-1/2 justify-center items-center">
          <img
            className="object-contain h-full w-full"
            src={`./portrait/${student.Id}.webp`}
            alt={student.Name}
          />
        </div>

        <div className="flex w-1/2 flex-col justify-center items-center gap-4">
          <p>
            Student Name: {student.FamilyName} {student.Name}
          </p>
          <p>School: {local.SchoolLong[student.School]}</p>
          <p>Club: {local.Club[student.Club]}</p>
          <p>Squad Type: {local.SquadType[student.SquadType]}</p>
          <p>Role: {local.TacticRole[student.TacticRole]}</p>
          <p>Bullet Type: {local.BulletType[student.BulletType]}</p>
          <p>Armor Type: {local.ArmorTypeLong[student.ArmorType]}</p>
          <button onClick={() => setCount(0)}>Reset (ID: {student.Id})</button>
          <button onClick={nextStudent}>Next student</button>
          <button onClick={randStudent}>Random student</button>
        </div>
      </div>
    </>
  );
}

export default App;
