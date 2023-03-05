const cardsArray=[
    {
        name  : "Diamond"
        ,img  : "images/diamond.png"
    },
    {
        name : "heart"
        ,img  : "images/heart.png"
    },
    {
        name : "king"
        ,img : "images/king.png"
    },
    {
        name :"objective"
        ,img :"images/objective.png"
    },
    {
        name :"rubik"
        ,img :"images/rubik.png"
    },
    {
        name  : "Diamond"
        ,img  : "images/diamond.png"
    },
    {
        name : "heart"
        ,img  : "images/heart.png"
    },
    {
        name : "king"
        ,img : "images/king.png"
    },
    {
        name :"objective"
        ,img :"images/objective.png"
    },
    {
        name :"rubik"
        ,img :"images/rubik.png"
    }
]
const gridDisplay=document.getElementById('grid')

const resultDisplay=document.getElementById('result')

let allCardsID=[]

let cardChosen=[]

let wonCards=[]

cardsArray.sort(()=> 0.5-Math.random())

function createImg(){
    for(let i=0;i<=cardsArray.length-1;i++){
        const cardImg=document.createElement("img")
        cardImg.setAttribute("src","images/blank.png")
        cardImg.setAttribute("data-id",i)
        cardImg.addEventListener("click",flipCard)
        gridDisplay.append(cardImg)
    }
}
createImg()

function checkMatch(){
    const allCards =document.querySelectorAll('img')
    let optionOneID=allCardsID[0]
    let optionTwoID=allCardsID[1]
    if(optionOneID==optionTwoID){
        allCards[optionOneID].setAttribute('src','images/blank.png')
        allCards[optionTwoID].setAttribute('src','images/blank.png')
        alert("You choose the same cards again")
    }
    else if( cardChosen[0]==cardChosen[1]){
        allCards[optionOneID].setAttribute('src','images/check.png')
        allCards[optionTwoID].setAttribute('src','images/check.png')
        allCards[optionOneID].removeEventListener("click",flipCard)
        allCards[optionTwoID].removeEventListener("click",flipCard)
        wonCards.push(cardChosen)
        alert("You git the match")

    }
    else{
        alert("sorry try again")
        allCards[optionOneID].setAttribute('src','images/blank.png')
        allCards[optionTwoID].setAttribute('src','images/blank.png')
    }
    cardChosen=[]
    allCardsID=[]

    resultDisplay.textContent=wonCards.length
    
    if(wonCards.length==cardsArray.length/2){
        resultDisplay.textContent="get all the matches"
    }
}
function flipCard(){
    let cardId =this.getAttribute("data-Id")
    cardChosen.push(cardsArray[cardId].name)
    allCardsID.push(cardId)
    this.setAttribute('src',cardsArray[cardId].img)
    if (cardChosen.length===2){
    setTimeout(checkMatch,500)
    }
}