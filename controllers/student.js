const allStudents = (req, res) => {
  res.send("All Students");
};

const newStudent = (req, res) => {
  res.send("Create New User");
};

const updateStudent = (req, res) => {
  res.send("Update User");
};
const deleteStudent = (req, res) => {
  res.send("Delete Student");
};
export { allStudents, deleteStudent, newStudent, updateStudent };
