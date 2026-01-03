const sName = document.getElementById("sname");
const dsa = document.getElementById("dsa");
const mp = document.getElementById("mp");
const web = document.getElementById("web");
const fa = document.getElementById("fa");
const bs = document.getElementById("bs");
let StudentName = [];
let SubjectsMarks = [];
function store() {
  const studentName = sName.value;
  const dsaMark = Number(dsa.value);
  const mpMark = Number(mp.value);
  const webMark = Number(web.value);
  const faMark = Number(fa.value);
  const bsMark = Number(bs.value);
  StudentName.push(studentName);
  SubjectsMarks.push([dsaMark, mpMark, webMark, faMark, bsMark]);
  document.getElementById("studentDatas").reset();
}
function grade(percentage) {
  if (percentage >= 80) return "A";
  else if (percentage >= 70) return "B";
  else if (percentage >= 60) return "C";
  else return "D";
}
const tbodyEL = document.getElementById("studentData");
function display() {
  for (let i = 0; i < SubjectsMarks.length; i++) {
    const total = SubjectsMarks[i].reduce((a, b) => a + b, 0);
    const percentage = (total / (SubjectsMarks[i].length * 100)) * 100;
    const rowData = [
      StudentName[i],
      SubjectsMarks[i][0],
      SubjectsMarks[i][1],
      SubjectsMarks[i][2],
      SubjectsMarks[i][3],
      SubjectsMarks[i][4],
      total,
      percentage.toFixed(2),
      grade(percentage),
    ];
    const tr = document.createElement("tr");
    for (let data of rowData) {
      const td = document.createElement("td");
      td.textContent = data;
      tr.appendChild(td);
    }
    tbodyEL.appendChild(tr);
  }
}
