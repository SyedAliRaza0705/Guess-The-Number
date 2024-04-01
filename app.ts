#! usr/bin/env node
import inquirer from "inquirer";
console.log("Guess a Number bbetween 1 to 10")
let a = Math.floor (Math.random()*10)

while(true){
    let input = await inquirer.prompt
    ({    name:"guess", type:"number",
        message: "Enter your guess you want between 1 to 10; "
    })
    // provide code
    let ans = input.guess   
    if (a==ans)
    {console.log("Congratulations your guess number is correct ")
    break;}
    else{console.log("Sorry you guess wrong number try again")} 

}