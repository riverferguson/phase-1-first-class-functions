function receivesAFunction(cd){
    cd()
}
receivesAFunction(function () {return "I hope this works"})

function returnsANamedFunction() {
     return function named() {
        console.log('gettin it')
     }
}


function returnsAnAnonymousFunction(){
    return function() {
        console.log("anything")
        }
    }
