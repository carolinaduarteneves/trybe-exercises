const searchEmployee = require("./searchEmployee.js");

describe("searchEmployee function tests", () => {
  it("Tests if searchEmployee is a function", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it('Tests if searchEmployee(id, "firstName") returns the first name of the searched employee', () => {
    expect(searchEmployee("5569-4", "firstName")).toEqual("George");
  });

  it('Tests if searchEmployee(id, "lastName") returns the last name of the searched employee', () => {
    expect(searchEmployee("5569-4", "lastName")).toEqual("Jobs");
  });

  it('Tests if searchEmployee(id, "specialities") returns an array with all employee skills', () => {
    expect(searchEmployee("5569-4", "specialities")).toEqual([
      "Frontend",
      "Redux",
      "React",
      "CSS",
    ]);
  });

  it('Tests if an error with the message "ID not identified" is thrown when the ID does not exist', () => {
    expect(() => searchEmployee("0000-0", "specialities")).toThrow(
      "ID not identified",
    );
  });

  it("Tests if an error is thrown when the information does not exist", () => {
    expect(() => searchEmployee("5569-4", "salary")).toThrow(Error);
  });

  it("Tests the error message for unavailable information", () => {
    expect(() => searchEmployee("5569-4", "salary")).toThrow(
      "Information unavailable",
    );
  });
});
