let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

// localStorage.setItem("myLead", "www.example.com")
// console.log(localStorage.getItem("myLead"))
localStorage.clear()
inputBtn.addEventListener("click", function () {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        renderLeads()
    }
)

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>"
        listItems += `<li>
                        <a target='_blank' href='${myLeads[i]}'>
                            ${myLeads[i]}
                        </a>
                      </li>`
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}