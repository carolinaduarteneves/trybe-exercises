let info = {
  character: "Daisy",
  origin: "Donald Duck",
  note: "Girlfriend of the main character in the Donald Duck comics",
};

const printMessage = (characterInfo) => {
  if (characterInfo === undefined) {
    throw new Error("Invalid object");
  }

  let result = `Welcome, ${characterInfo.character}`;

  return result;
};

console.log(printMessage(info));

module.exports = { info, printMessage };
