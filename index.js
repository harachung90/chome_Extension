let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function () {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLead", JSON.stringify(myLeads))
        renderLeads()
        console.log(localStorage.getItem("myLead"))
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