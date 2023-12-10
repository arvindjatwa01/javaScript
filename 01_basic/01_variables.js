const accountId = 12345;
let accountEmail = "test@21.in";
var accountPassword = "1234";
accountCity = "Jaipur";
let accountState;

/* 
if We decleared a vairable without assign a value then the value of this valiable is undefiend
*/

// accountId = 2345 // Not allowed

/*
Prefer not to use Var
because of issue in block scope and functional scope 
*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
