const removeWhiteSpaces = (str) => {
  str = str.replace(/\s/g, "");
  return str;
};
console.log(removeWhiteSpaces("Hellow      world"));
