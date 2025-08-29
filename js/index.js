function getAnElementID(id) {
  const elementID = document.getElementById(id);
  return elementID;
}

const callButton = getAnElementID("joruri-call-button");
const callClearButton = getAnElementID("call-clear-btn");
//const copyButton = getAnElementID("copy-btn-id");
const heartCountNumber = getAnElementID("heart-number");
const coinCountNumber = getAnElementID("coin-number");
const historyContainer = getAnElementID("history-container");
const copyCountNumber = getAnElementID("copy-number")

const callButtonClassName = document.getElementsByClassName("call-btn");
const heartCardClassName = document.getElementsByClassName("heart-card");
const copyButtonClassName = document.getElementsByClassName("copy-btn");

let heartCount = Number(heartCountNumber.innerText);
let coinCount = Number(coinCountNumber.innerText);
let copyCount = Number(copyCountNumber.innerText);

/*Heart icon click count*/

for (let heartSingleCardClassName of heartCardClassName) {
  heartSingleCardClassName.addEventListener("click", function () {
    heartCount = heartCount + 1;
    heartCountNumber.innerText = heartCount;
  });
}

//Coin count number functionality
console.log(callButtonClassName);

for (let singleCall of callButtonClassName) {
  singleCall.addEventListener("click", function () {
    if (coinCount >= 20) {
      //updating coins

      let card = this.closest(".card");
      //console.log(card);
      let cardTitle = card.querySelector(".card-title").innerText;
      let hotLine = card.querySelector(".hotline").innerText;

      let alertInfo = "Calling " + cardTitle + " Hotline: " + hotLine;

      alert(alertInfo);

      coinCount = coinCount - 20;
      coinCountNumber.innerText = coinCount;

      //adding to history container
      const singleHistoryContainer = document.createElement("div");

      singleHistoryContainer.innerHTML = `
      
                <div class="bg-[#fafafa] flex justify-between p-4 rounded-lg mb-2">
                <div class="items-center">
                    <h2>${cardTitle}</h2>
                    <p>${hotLine}</p>
                </div>
                <div class="flex items-center">
                    <p>${getCurrentTime()}</p>
                </div>
            </div>
      
      `;

      historyContainer.appendChild(singleHistoryContainer);
    } else {
      alert("You don't have sufficient balance. Please recharge...");
    }
  });
}

// clearing call history

callClearButton.addEventListener("click", function () {
  const historyContainer = getAnElementID("history-container");
  // console.log(historyContainer);

  historyContainer.innerHTML = "";
});



//functioning copy button

for(singleCopy of copyButtonClassName){
    singleCopy.addEventListener("click", function(){
        
        let card = this.closest(".card");
        let hotLine = card.querySelector(".hotline").innerText;
        const copiedText = navigator.clipboard.writeText(hotLine);

        copyCount+= 1;

        copyCountNumber.innerText = copyCount;

    })

}



// copyButton.addEventListener("click", function () {

//     for(singleCopy of copyButton){
//         singleCopy.addEventListener()
//     }
  
//   let card = this.closest(".card");
//   let hotLine = card.querySelector(".hotline").innerText;


//   const copiedText = navigator.clipboard.writeText(hotLine);
//   console.log(copiedText);
// });

// Current time

function getCurrentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = String(date.getMinutes()).padStart(2, "0");
  let second = String(date.getSeconds()).padStart(2, "0");

  // Convert to 12-hour format
  let amPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'

  return `${hour}:${minute}:${second} ${amPm}`;
}
