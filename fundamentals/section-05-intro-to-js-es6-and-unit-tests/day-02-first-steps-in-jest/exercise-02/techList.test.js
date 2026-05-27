const techList = require('./techList.js');

describe('Tests the techList function', () => {
  it('Tests whether the techList function is defined', () => {
    expect(techList).toBeDefined();
  });

  it('Tests whether techList is a function', () => {
    expect(typeof techList).toBe('function');
  });

  it('A list with 5 technologies should return a sorted list of objects', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('A list with 0 technologies should return the message "Empty!"', () => {
    expect(techList([], 'Lucas')).toBe('Empty!');
  });
});

module.exports = techList;