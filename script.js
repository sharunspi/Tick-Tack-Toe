let star ="<div class='star'> X </div>"
let zero = "<div class='zero'> O </div>"
const cards =document.querySelectorAll('.card')
cards.forEach(card=>{
    card.addEventListener('click',function(ev){
        ev.preventDefault();
        if(this.children.length >0){
            alert("Can't edit this field")
        }
        else{
            this.innerHTML=zero
        }

        checkTally()
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

}