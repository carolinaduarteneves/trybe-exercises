const techList = (array, name) => {
  if (array.length === 0){
    return "Empty!"
  }
  let sorted = array.sort();
  let mapped = sorted.map((item) => ({
    tech: item,
    name: name,
  }));
  
  return mapped;
};

module.exports = techList;