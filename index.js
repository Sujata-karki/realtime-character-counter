const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})
function updateCounter(){
    totalCounterEl.innerText = textareaEl.Value.length
}