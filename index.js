let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let saveBtn = document.getElementById('save-btn')
let deleteBtn = document.getElementById('delete-btn')
let ulEl = document.getElementById('ul-el')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLeads)
}

saveBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })


})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>"
        listItems += `<li>
                        <a target='_blank' href='${leads[i]}'>
                            ${leads[i]}
                        </a>
                      </li>`
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLead", JSON.stringify(myLeads))
        render(myLeads)
        //console.log(localStorage.getItem("myLead"))
    }
)

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


