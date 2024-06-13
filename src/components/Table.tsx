// import useStudent from "../hooks/useStudent";
import students from "../data/students.json";
import locals from "../data/localization.json";
import Cell from "./Cell";
import { Students, Localization } from "../types";

import { useEffect, useState } from "react";

const useStudent = (students: Students, locals: Localization) => {
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState(students[0]);
  const [local] = useState(locals);

  const nextStudent = () => {
    setCount((prevCount) => (prevCount + 1) % students.length);
  };

  useEffect(() => {
    setStudent(students[count]);
  }, [count]);

  return {
    student,
    local,
    setCount,
    nextStudent,
  };
};

const Table = () => {
  const { student, local, setCount, nextStudent } = useStudent(
    students,
    locals
  );
  return (
    <>
      <div className="flex flex-col gap-4 items-center h-screen w-screen">
        <div className="flex flex-row gap-2">
          <button onClick={() => setCount(0)}>Reset (ID: {student.Id})</button>
          <button onClick={nextStudent}>Next student</button>
        </div>
        <div>
          <div className="flex flex-row">
            <Cell image={`./icon/${student.Id}.webp`} />
            <Cell content={`${student.FamilyName} ${student.Name}`} />
            <Cell content={`${local.SchoolLong[student.School]}`} />
            <Cell content={`${local.Club[student.Club]}`} />
            <Cell content={`${local.SquadType[student.SquadType]}`} />
            <Cell content={`${local.TacticRole[student.TacticRole]}`} />
            <Cell content={`${local.BulletType[student.BulletType]}`} />
            <Cell content={`${local.ArmorTypeLong[student.ArmorType]}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
