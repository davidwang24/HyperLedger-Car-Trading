/**
 * ----
 * Project URL:
 * https://github.com/rafialhamd/HyperLedger-Car-Trading
 * ----
 * Author: Rafiudeen Chozhan Kumarasamy
 * RafiAlhamd.com | @RafiAlhamd
 * ----
 */

/**
* Sell Car TRANSACTION
* @param {com.rafialhamd.model.SellCarTxn} txn
* @transaction
*/

function sellCar(txn){
  printCarDetails(txn.car);
  txn.car.owner = txn.newOwner;
  txn.car.price = txn.price;
  
  return getAssetRegistry('com.rafialhamd.model.Car')
    .then(function (carRegistry) {
    // update the Car with the new owner.
    carRegistry.update(txn.car);
    printCarDetails(txn.car);
  });
}

/**
* @param {com.rafialhamd.model.PrintCarDetailsTxn} txn
* @transaction
*/

function printCarDetailsTxn(txn){
  printCarDetails(txn.car);
}

/**
* UTIL METHOD
* Print Car Details 
* @param {com.rafialhamd.model.Car} car
*/

function printCarDetails(car){
  console.log(" Car Details:-----[ ");
  console.log("carId : "  + car.carId);
  console.log("make : "  + car.make);
  console.log("model : "  + car.model);
  console.log("year : "  + car.year);
  console.log("registrationNumber : "  + car.registrationNumber);
  console.log("forSale : "  + car.forSale);
  console.log("price : "  + car.price);
  console.log("owner : "  + car.owner);
  console.log(" Car Details:-----] ");
}

/**
* @param {com.rafialhamd.model.PrintUserAccountDetailsTxn} txn
* @transaction
*/

function printUserAccountDetailsTxn(txn){
	printUserAccountDetails(txn.userAccount);
}


/**
* UTIL METHOD
* Print UserAccount Details 
* @param {com.rafialhamd.model.UserAccount} userAccount
*/

function printUserAccountDetails(userAccount){
  console.log(" UserAccount Details:-----[ ");
  console.log("userId : "  + userAccount.userId);
  console.log("firstName : "  + userAccount.firstName);
  console.log("lastName : "  + userAccount.lastName);
  console.log(" UserAccount Details:-----] ");
}
