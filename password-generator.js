var generator = require("generate-password");

var passwords = generator.generateMultiple(2, {
  length: 10,
  uppercase: false,
} );

console.log(passwords);

