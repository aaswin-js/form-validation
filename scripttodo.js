const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Enter the input value");
    } else {
             let li = document.createElement('li');
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7"
                inputBox.value = ''; // Clear input box after adding
                li.appendChild(span);
    }
    saveData()
}

listContainer.addEventListener("click", function (e) {
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle("checked")
                saveData();

            }
            else if (e.target.tagName === 'SPAN') {
                e.target.parentElement.remove();
                saveData();

            }
        }, false);

        const saveData = () => {
            localStorage.setItem("data", listContainer.innerHTML)
        }

        const showTask = () => {
            listContainer.innerHTML = localStorage.getItem("data")
        }

        showTask()