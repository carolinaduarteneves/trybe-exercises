function analyze() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const n3 = document.getElementById("n3").value;
  const n4 = document.getElementById("n4").value;

  function allSpacesCompleted() {
    if (n1 === '' || n2 === '' || n3 === '' || n4 === '') {
      alert("Please fill in all fields!");
      return true;
    }
  }

  function avoidRepetitions(a, b, c, d) {
    if (a === b || a === c || a === d || b === c || b === d || c === d) {
      alert('Numbers cannot be repeated!');
      return true;
    }
  }
  if (allSpacesCompleted()) return;
  if (avoidRepetitions(n1, n2, n3, n4)) return;

  const numbers =
    [
      Number(n1),
      Number(n2),
      Number(n3),
      Number(n4),
    ]

  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
    else {
      odd.push(numbers[i]);
    }
  }

  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
    if (numbers[i] < min) {
      min = numbers[i]
    }
  };

  document.getElementById('result').innerText  = `
  Even numbers:${even}
  Odd numbers: ${odd}
  Highest number: ${max}
  Lower number: ${min}`;

}