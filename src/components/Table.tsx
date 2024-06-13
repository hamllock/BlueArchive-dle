// import useStudent from "../hooks/useStudent";
import students from "../data/students.json";
import locals from "../data/localization.json";
import Cell from "./Cell";
import { Students, Localization } from "../types";

import { useState } from "react";

const useStudent = (students: Students, locals: Localization) => {
  const [count, setCount] = useState(
    Math.floor(Math.random() * students.length)
  );
  const [studentList, setStudentList] = useState<Students>([]);
  const [local] = useState(locals);

  const addStudent = () => {
    setStudentList((prevList) => [...prevList, students[count]]);
    setCount(Math.floor(Math.random() * students.length));
  };

  return {
    studentList,
    local,
    addStudent,
  };
};

const Table = () => {
  const { studentList, local, addStudent } = useStudent(students, locals);
  return (
    <>
      <div className="flex flex-col gap-4 items-center h-screen w-screen">
        <div className="flex flex-row gap-2">
          <button onClick={addStudent}>Add student</button>
        </div>
        <div>
          {studentList.map((student, index) => (
            <div key={index} className="flex flex-row">
              <Cell image={`./icon/${student.Id}.webp`} />
              <Cell content={`${student.FamilyName} ${student.Name}`} />
              <Cell content={`${local.SchoolLong[student.School]}`} />
              <Cell content={`${local.Club[student.Club]}`} />
              <Cell content={`${local.SquadType[student.SquadType]}`} />
              <Cell content={`${local.TacticRole[student.TacticRole]}`} />
              <Cell content={`${local.BulletType[student.BulletType]}`} />
              <Cell content={`${local.ArmorTypeLong[student.ArmorType]}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
