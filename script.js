let star ="<div class='star'> X </div>"
let zero = "<div class='zero'> O </div>"
const cards =document.querySelectorAll('.card')
cards.forEach(card=>{
    card.addEventListener('click',function(){
        console.log(this.innerHTML)
        if(this.innerHTML ==zero||this.innerHTML ==star ){
            alert("Can't edit this field")
        }else{
            this.innerHTML=zero
        }
    })
    card.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        this.innerHTML = star
    }, false)
})
