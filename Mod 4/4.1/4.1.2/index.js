const fs = require("fs");

const obj = {
  name: "Ana Lage",
  email: "analage@gmail.com",
  age: 36,
};

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", JSON.stringify(obj), handleWriteFile);

console.log(JSON.stringify(obj));
