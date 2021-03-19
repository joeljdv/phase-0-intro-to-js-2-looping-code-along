const names=['Lisa', 'Kaitlin', 'Jan']

function writeCards(names,event){
    const answers=[]
    for( let i=0;i<names.length;i++){
        answers.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        }
    return answers
    }

    
function countDown(num){
     while(num>=0){
         console.log(num--)
     }
}