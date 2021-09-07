function run(){
    let name = prompt("Please type your name")
    let lastname = prompt("And now type your lastname")
    let userAge = prompt("What's your age?")
    let currentYear = 2021
    let retirement = 65

    let age = parseInt(userAge)
    let retirementPlan = retirement - age 
    let retirementYear = currentYear + retirementPlan

    alert("Hi! " + name + " " + lastname);
    alert("Your retirement will be in " + retirementYear)
}