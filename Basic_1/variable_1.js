const accountID = 12234
let accountName = 'John Doe'
var accountBalance = "1000"
accountCity = 'New York'

let accountState;

console.log(accountID, accountName, accountBalance)

accountName = 'JaneDEV'
accountBalance = "2000"
accountCity = 'New Pindi'

// console.log(accountID, accountName, accountBalance)
// make above console.table
/*issues with var keyword : Creates issues in block and functional Scope  */

console.table([accountID, accountName, accountBalance, accountCity,accountState])