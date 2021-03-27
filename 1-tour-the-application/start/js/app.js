// console.log('Hello from app.js');

const form = document.getElementById('registrar');

const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    const button = document.createElement('button');
    button.textContent = 'Remove';
    li.appendChild(button);
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    
    const li = createLI(text);
    
    
    ul.appendChild(li);
});


ul.addEventListener('change', (e)=> {
    // console.log(e.target.checked);
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});


ul.addEventListener('click', (e) => {
    const button = e.target;
    console.log("Button Tag Name: ", button.tagName);
    if (button.tagName === 'BUTTON') {
        const button = e.target;
        const listItem = button.parentNode;
        const ul = listItem.parentNode;
        ul.removeChild(listItem);
    }


})