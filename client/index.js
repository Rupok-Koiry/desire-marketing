const rupok = {
  name: "Rupok",
};
const niloy = {
  name: "niloy",
};
const printName = () => {
  console.log(this.name);
};
rupok.printName = printName;
niloy.printName = printName;
