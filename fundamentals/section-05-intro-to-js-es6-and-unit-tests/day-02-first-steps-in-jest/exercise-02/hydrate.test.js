const hydrate = require('./hydrate.js');

describe('Tests the hydrate function', () => {
  it('Tests if the hydrate function is defined', () => {
    expect(hydrate).toBeDefined();
  });

  it('Tests if hydrate is a function', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('When receiving a string, returns the suggestion of how many glasses of water should be consumed', () => {
    expect(hydrate('1 beer')).toBe('1 glass of water');

    expect(hydrate('1 whiskey shot, 5 beers and 1 glass of wine'))
      .toBe('7 glasses of water');

    expect(hydrate('2 tequila shots, 2 beers and 1 vodka shot'))
      .toBe('5 glasses of water');

    expect(hydrate('1 glass of rum, 1 beer and 1 glass of wine'))
      .toBe('3 glasses of water');

    expect(hydrate('4 margaritas and 2 beers'))
      .toBe('6 glasses of water');
  });
});