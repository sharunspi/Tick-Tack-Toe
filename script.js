let star ="<div class='star'>X</div>"
let zero = "<div class='zero'>O</div>"
let count=0,userScore=0,computerScore=0
let spotsClickedByUser =[]
const cards =document.querySelectorAll('.card')
cards.forEach(card=>{
    card.addEventListener('click',function(ev){
        count++
        ev.preventDefault();
        if(this.children.length >0){
            alert("Can't edit this field")
        }
        else{
            this.innerHTML=zero
            spotsClickedByUser.push(ev.target.id.replace('card-',''))
            updateByComputer()
        }

        if(count ==3){
            checkTally()
        }
    })
    card.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        if(this.children.length >0){
            alert("Can't edit this field")
        }
        else{
            this.innerHTML = star
        }
        
        checkTally()
    }, false)
})
function checkTally(){
    let sum=0
    cards.forEach(card=>{
        if(card.children.length >0)
            {
               sum+=parseInt(card.id.replace('card-',''))
            }
    })
    if(sum ==15){
        alert('User won !!')
    }
}
function reset(){
    cards.forEach(card=>{
        card.innerHTML =''
    })
    count=0
    spotsClickedByUser= []
}
function updateUser(){
    userScore++
}
function updateCompuerScore(){
    computerScore++
}
function generateRandome(){
    return Math.floor(Math.random()*9)
}
function updateByComputer (){
    let val =generateRandome()
    cards.forEach(card=>{
        spotsClickedByUser.forEach(spot=>{
            if(spot == val){
                val = generateRandome()
            }
        })
        if(card.id.replace('card-','')==val){
            card.innerHTML = star
        }
    })
}