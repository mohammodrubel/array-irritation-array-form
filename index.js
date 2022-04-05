// example ONE 
const voiols = ['a','e','i','o','u','A','E','I','O','U']

function  myfunc (sentence){
    let count = 0
    const letters = Array.from(sentence)

        letters.forEach(function (value,index,array){
            if(voiols.includes(value)){
                count++;
            }
        })
    return count;

}
console.log(myfunc('I love Bangladesh, i will go usa'))

// example TWO 


const rubelSentance = ['a','e','i','o','u','A','E','I','O','U']

function mainPoint (sentence){
    let count = 0
    const myfunctionLetters = Array.from(sentence)

        myfunctionLetters.forEach(function(value,index,array){
            if(rubelSentance.includes(value)){
                count++
            }
        })
    return count ;

}

console.log(mainPoint(' do you know who i am ? i think you have no idea about me '))

