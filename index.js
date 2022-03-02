const charVal=document.getElementById('textarea');

let totalCount=document.getElementById('total-counter');

let remainCount=document.getElementById('total-remaining');

let userChar=0;

const updateCounter=()=>{
userChar=charVal.value.length;
totalCount.innerText=userChar;
remainCount.innerText=150- userChar;
}

charVal.addEventListener("keyup",()=>updateCounter());

// copy the Text code

const copyText=()=>{
    charVal.select();
    charVal.setSelectionRange(0,9999); //mobile
    navigator.clipboard.writeText(charVal.value); //important
}