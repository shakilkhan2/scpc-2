
// Write a code on how to calculate the number of vowels and consonants in a string?

function countVowelsAndConsonants (string){
    // declare vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // initial value of vowels and consonants
    let vowelsNumber = 0;
    let consonantsNumber = 0;

    // loop
    for(let character of string){
        if(vowels.includes(character)){
            vowelsNumber++;
        }else{
            consonantsNumber++;
        }
    }

    return{vowels: vowelsNumber, consonants: consonantsNumber}
}

console.log(countVowelsAndConsonants("Bangladesh"))








