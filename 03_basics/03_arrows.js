const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//{}
    }

}

//user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);//{} node enviroment
//Global Object ---->Window Object

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai2 =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //For single line we dont have to use return keyword



// +++++++++++++++++Important
//  const addTwo = (num1, num2) => ( 
//     console.log("Hello"),
//     num1+num2

//)
//By using parenthesis we don't have to use return keyword and can give multiple lines by seperating them with comma. 





const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()