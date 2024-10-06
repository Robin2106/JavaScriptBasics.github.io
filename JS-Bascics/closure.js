//Clousre function

//The inner function can have the memory of the outer function's variables 
// The outer function execution has ended though the inner function can acess the outer function's variables

function oddNumber()
{
    let numberOne = 53;
    function findOddOrEven()
    {
        if(numberOne % 2 == 0 )
        {
            console.log('it is even number');
        }
        else
        {
            console.log('it is odd number');
        }
    }
    return findOddOrEven;
}

let ans = oddNumber();
ans();