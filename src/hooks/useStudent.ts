
import { Students, Student } from "../types";
import { useEffect, useState } from "react";

const useStudent = (students: Students) => {
  const [studentList, setStudentList] = useState<Students>([]);
  const [randStudent, setRandStudent] = useState<Student>();

  useEffect(() => {
    setRandStudent(students[Math.floor(Math.random() * students.length)]);
  }, [students])

  const addStudent = (studentId: number) => {
    const studentToAdd = students.find(student => student.Id === studentId);
    if (studentToAdd) {
      setStudentList((prevList) => [studentToAdd, ...prevList]);
    }
    console.log(studentList.length)
  };

  const resetList = () => {
    setStudentList([])
    console.log(studentList.length)
  };

  return {
    randStudent,
    resetList,
    studentList,
    addStudent,
  };
};

export default useStudent;