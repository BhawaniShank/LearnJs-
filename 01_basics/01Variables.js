const accountId = 144553
let accountEmail = "Shankar@gmail.com"
var accountPass = "1245"
accountCity = "Jaipur"  // variable created but not preferred

// accountId = 2   // Assignment to constant variable not allowed

accountEmail = "swastik@gmail.com"
accountPass = "7364786"
accountCity = "Mumbai" 

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity])
/* Prefer not to use var because of issue in block scope and functional Scope */
