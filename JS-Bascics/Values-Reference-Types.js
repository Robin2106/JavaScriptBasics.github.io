// Values types and Reference types

// Values types
        // Data types
        //     1.Number
        //     2.String
        //     3.Boolen
        //     4.Null
        //     5.Undefined

    // The value type will it's value 
let x = 5;
console.log(x);
let y = x;                   //Here i am assigning the same x value to the y , X & Y value are '5'
x=10;                        //Here i am assigning the 10 to x , now if i print x it will print x as '10' but the Y value is '5'
console.log(y)  
console.log(x);
console.log(y)  


// Reference types

        // 1.Functions
        // 2.Arrays
        // 3.Object

    // Reference type will share the memory address of variable not the value
let firstName={name:'Robin',Age :23}

console.log(firstName);

let lastName = firstName

console.log(lastName);

firstName.Age=24
console.log(firstName);
console.log(lastName);

// Here first i assigned 'name & age'  to the firstName and assigned to the lastName ,after i change the firsteName's 'age' 
// it's automaticaly changed in lastName also because it share the same address of firstName