import Cell from "./Cell";
import local from "../data/localization.json";
import { Students, Student, Localization } from "../types";

const Table: React.FC<{ studentList: Students; randStudent: Student }> = ({
  studentList,
  randStudent,
}) => {
  const localization = local as Localization; // Add this line

  return (
    <>
      <div className="flex flex-col gap-4">
        {studentList.map((student, index) => (
          <div key={index} className="flex flex-row gap-1">
            <Cell image={`./icon/${student.Id}.webp`} />
            <Cell
              content={`${student.FamilyName} ${student.Name}`}
              variant={
                randStudent.Name === student.Name &&
                randStudent.FamilyName === student.FamilyName
                  ? "green"
                  : "red"
              }
            />
            <Cell
              content={`${localization.SchoolLong[student.School]}`}
              variant={randStudent.School === student.School ? "green" : "red"}
            />
            <Cell
              content={`${localization.Club[student.Club]}`}
              variant={randStudent.Club === student.Club ? "green" : "red"}
            />
            <Cell
              content={`${localization.SquadType[student.SquadType]}`}
              variant={
                randStudent.SquadType === student.SquadType ? "green" : "red"
              }
            />
            <Cell
              content={`${localization.TacticRole[student.TacticRole]}`}
              variant={
                randStudent.TacticRole === student.TacticRole ? "green" : "red"
              }
            />
            <Cell
              content={`${localization.BulletType[student.BulletType]}`}
              variant={
                randStudent.BulletType === student.BulletType ? "green" : "red"
              }
            />
            <Cell
              content={`${localization.ArmorTypeLong[student.ArmorType]}`}
              variant={
                randStudent.ArmorType === student.ArmorType ? "green" : "red"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
