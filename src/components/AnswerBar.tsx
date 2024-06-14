import { useRef, useState } from "react";
import students from "../data/students.json";
import React, { useMemo } from "react";

const AnswerBar: React.FC<{
  addStudent: (studentId: number) => void;
  resetList: () => void;
}> = ({ addStudent, resetList }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const blurTimeout = useRef(0);
  const [inputValue, setInputValue] = useState("");

  const filteredStudents = useMemo(() => {
    return students
      .filter((student) =>
        `${student.FamilyName} ${student.Name}`
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      )
      .sort((a, b) => a.Name.localeCompare(b.Name));
  }, [inputValue, students]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
    setDropdownVisible(true);
  };

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 100);
  };

  return (
    <>
      <div className="flex flex-row gap-2 w-full justify-center">
        <div className="flex flex-col relative w-1/5">
          <input
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(event) => setInputValue(event.target.value)}
            className="h-12 rounded-md"
          />
          {isDropdownVisible && (
            <div className="flex flex-col absolute top-full gap-2 bg-gray-800 w-full h-72 shrink overflow-auto">
              {filteredStudents.map((student) => (
                <div
                  key={student.Id}
                  className="flex flex-row items-center text-lg font-semibold hover:bg-gray-900"
                  onClick={() => {
                    addStudent(student.Id);
                    setInputValue("");
                  }}
                >
                  <img
                    className="h-12 pr-2"
                    src={`./icon/${student.Id}.webp`}
                  />
                  {student.FamilyName} {student.Name}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => {
            resetList();
          }}
          className="h-12"
        >
          Reset List
        </button>
      </div>
    </>
  );
};

export default AnswerBar;
