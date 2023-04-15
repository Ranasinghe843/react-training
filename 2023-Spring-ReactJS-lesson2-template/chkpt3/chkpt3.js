// This is an EXAMPLE of a checkpoint, your implementation and design may be different

let num = 0
function FizzBuzz() {
    
    num += 1;
    if (num > 100) return;

    let tag = document.getElementById("fizzbuzz");
    
    // TODO: Your implementation here. Don't forget to tag the using getElementById!
    if(num % 15 == 0){
        tag.innerHTML += "FizzBuzz<br>";
    }
    else if(num % 5 == 0){
        tag.innerHTML += "Buzz<br>";
    }
    else if(num % 3 == 0){
        tag.innerHTML += "Fizz<br>";
    }
    else{
        tag.innerHTML += num + '<br>';
    }
}

function RunAllFB() {
    //  TODO: Your implementation here. Run fizzbizz for 1 - 100
    while(num < 100){
        FizzBuzz();
    }
}
