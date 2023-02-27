// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function


function receivesAFunction(returnsANamedFunction) {
     returnsANamedFunction()
}

receivesAFunction()

function returnsANamedFunction() {
    return function dogs() {
        console.log('named func')
    }
}
returnsANamedFunction()


function returnsAnAnonymousFunction() {
    return function () { console.log('my anonymous') }
}
returnsAnAnonymousFunction()


