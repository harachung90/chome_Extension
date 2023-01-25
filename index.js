let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

inputBtn.addEventListener("click", function () {
        myLeads.push(inputEl.value)
        for (var i = 0; i <myLeads.length; i++) {
            ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        }
    }
)