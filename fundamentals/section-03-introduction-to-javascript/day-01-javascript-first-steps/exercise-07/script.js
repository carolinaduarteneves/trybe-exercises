function checkApproval() {
  let grade = document.getElementById("grade").value;
  console.log("Entered grade: " + grade);
  if (grade >= 90 && grade <= 100) {
    document.getElementById("result").innerHTML = "🌟 Excellent work!";
    alert("🌟 Excellent work!")
  }
  else if (grade >= 70 && grade <= 89){
    document.getElementById("result").innerHTML = "👍 Good job!"
    alert("👍 Good job!")
  }
  else if (grade >= 60 && grade <= 69){
    document.getElementById("result").innerHTML = "⚠️ You passed, but you can improve"
  alert("⚠️ You passed, but you can improve")
  }
  else if (grade < 60){
    document.getElementById("result").innerHTML = "❌ You failed. Try again"
  alert("❌ You failed. Try again")
  }

}
