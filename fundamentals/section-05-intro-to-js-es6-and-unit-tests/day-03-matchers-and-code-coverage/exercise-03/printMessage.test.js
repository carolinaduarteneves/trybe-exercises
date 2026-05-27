const { info, printMessage } = require('./printMessage.js');

describe('Tests for the `printMessage` function', () => {
  it('Tests the character property in the object.', () => {
    expect(info).toHaveProperty("character", "Daisy");
  });
});

describe('Test cases for the `printMessage` function', () => {
  it('Tests the welcome message.', () => {
    expect(printMessage(info)).toEqual("Welcome, Daisy");
  });

  it('Tests the information related to the character name.', () => {
    expect(printMessage(info)).toContain("Daisy");
  });
});

describe('Testing the exception flow for the `printMessage` function', () => {
  it('Tests the exception flow of the printMessage function.', () => {
    expect(() => printMessage()).toThrow(Error);
  });
});