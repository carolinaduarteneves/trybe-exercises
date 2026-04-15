const calculateAverage = () => {
  const gradeA = document.getElementById("gradeA").value;
  const gradeB = document.getElementById("gradeB").value;

  if (gradeA === "" || gradeB === "") {
    alert("Please fill in all fields!");
    return;
  }

  const numA = Number(gradeA);
  const numB = Number(gradeB);

  let result = ((numA * 3.5 + numB * 7.5) / 11).toFixed(5);

  document.getElementById("result").innerHTML = `The average is: ${result}`;
};
