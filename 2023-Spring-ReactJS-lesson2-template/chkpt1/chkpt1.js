// This is an EXAMPLE of a checkpoint, your implementation and design may be different

function FizzBuzz(num) {
    /* TODO: Implement Fizzbizz */
    for (i=1;i<num;i++){
        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log('FizzBuzz');
            }
            else{
                console.log('Fizz');
            } 
        }
        else{
            if(i % 5 == 0){
                console.log('Buzz');
            }
            else{
                console.log(i);
            } 
        }
    }
}
FizzBuzz(100);