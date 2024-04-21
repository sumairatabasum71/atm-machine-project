#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType{
    userId:string,
    userPin:number,
    accountType:string,
    amount:number,
}

const answers:ansType=await inquirer.prompt([
    {
    type:"input",
    name:"userId",
    message:"kindly enter your Id:",
},

{
    type:"number",
    name:"userPin",
    message:"kindly enter your PIN:"
},

{
    type:"list",
    name:"accountType",
    choices:["current","saving"],
    message:"please select your account type:"
},

{
    type:"list",
    name:"transactionType",
    choices:["withdraw","fast cash"],
    message:"select your transaction",
    when(answers){
        return answers.accountType == "current";
    }
},

{
    type:"number",
    name:"amount",
    choices:[1000,2000,5000,10000,20000],
    message:"select your amount",
    when(answers){
        return answers.transactionType == "fast cash";
    }
},
{
    type:"number",
    name:"amount",
    message:"enter the withdraw amount:",
    when(answers){
        return answers.transactionType =="withdraw"
    }
}
]);
if(answers.userId && answers.userPin){
   const balance = Math.floor(Math.random() * 50000);
   console.log("Current Balance");
   
   const enteredAmount=answers.amount;
   if(balance <= enteredAmount){
    console.log("insufficient balance");
   }
   else{
    const remaining=balance - enteredAmount;
    console.log("your remainning balance is",remaining)
   }
}












