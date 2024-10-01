var favouriteFruit = "Appeal";
var favouriteJuice = "Lemon"
var favouriteFood = "Biriyani";
var comboOffer = favouriteJuice + favouriteFood ;

    function getInput(){
        let YourName = "Robin"
        console.log(YourName);
    }
    getInput();
    console.log(favouriteFruit);
    console.log(favouriteJuice);
    console.log(favouriteFood);
    console.log(comboOffer);

    
//      Global execution context 
//  Creation Phase 

globalExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            favouriteFruit : undefined,
            favouriteJuice : undefined,
            favouriteFood : undefined,
        
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            comboOffer : undefined,
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
}
    
// Execution phase

globalExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            favouriteFruit: 'Appeal',
            favouriteJuice: 'Lemon',
            favouriteFood : 'Biriyani',
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            comboOffer: 'LemonBiriyani',
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
}

// Function execution context   ( getInput ())

// Creation Phase 

FunctionExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            YourName: undefined,
        },
        outer: "Global Execution context",
        ThisBinding: getInput()
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
        },
        outer: "Global Execution context",
        ThisBinding: getInput()
    },
}

// Execution phase 

FunctionExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            YourName: 'Robin',
        },
        outer: "Global Execution context",
        ThisBinding: getInput()
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
        },
        outer: "Global Execution context",
        ThisBinding: getInput()
    },
}