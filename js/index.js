function getAnElementID(id) {

    const elementID = document.getElementById(id);
    return elementID;

}


const callButton = getAnElementID("joruri-call-button");
const callClearButton = getAnElementID("call-clear-btn");
const copyButton = getAnElementID("copy-btn-id");

const callButtonClassName = document.getElementsByClassName("call-btn");


//Traversing call button
console.log(callButtonClassName);

for (let singleCall of callButtonClassName){
    singleCall.addEventListener("click", function(){
        alert("Hello clicked")
    })
}


callButton.addEventListener("click", function () {
    const historyContainer = getAnElementID("history-container");
    // console.log(historyContainer);

    const singleHistoryContainer = document.createElement("div");
    singleHistoryContainer.innerHTML = `

        <h1>Hello World</h1>
        <p>How are you</p>

`

    historyContainer.append(singleHistoryContainer);
})


callClearButton.addEventListener("click", function(){

    const historyContainer = getAnElementID("history-container");
    // console.log(historyContainer);

    historyContainer.innerHTML = ""

})


copyButton.addEventListener("click", function(){
    const coppiedText = navigator.clipboard.writeText(copyButton.innerText);
    console.log(coppiedText);
})






