// console.log('Hello from app.js');
document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.getElementById('registrar');
    const mainDiv = document.querySelector('.main');
    const input = form.querySelector('input');
    const ul = document.getElementById('invitedList');

    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckBox = document.createElement('input');

    filterLabel.textContent = "Hide those who haven't responded";
    filterCheckBox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckBox);
    mainDiv.insertBefore(div, ul);

    filterCheckBox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        const lis = ul.children;
        if (isChecked) {
            for (let i = 0; i < lis.length; i++) {
                let li = lis[i];
                if (li.className === 'responded') {
                    li.style.display = '';
                } else { 
                    li.style.display = 'none';
                }
            }
        } else {
            for (let i = 0; i < lis.length; i++) {
                let li = lis[i];
                li.style.display = '';
            }
        }
    });


    function createLI(text) {
        function createElement(elementName, property, value ) {
            const element = document.createElement(elementName);
            element[property] = value;
            return element;
        }
        const li = document.createElement('li');

        // const span = document.createElement('span');
        // span.textContent = text;
        const span = createElement('span', 'textContent', text);
        
        li.appendChild(span);
        
        // const label = document.createElement('label');
        // label.textContent = 'Confirmed';
        const label = createElement('label', 'textContent', 'Confirmed');


        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        const checkbox = createElement('input', 'type', 'checkbox');

        label.appendChild(checkbox);
        li.appendChild(label);

        // const editButton = document.createElement('button');
        // editButton.textContent = 'Edit';
        const editButton =createElement('button','textContent', 'Edit');

        li.appendChild(editButton);

        // const removeButton = document.createElement('button');
        // removeButton.textContent = 'Remove';
        const removeButton = createElement('button','textContent','Remove');
        
        li.appendChild(removeButton);

        
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
        // console.log("Button Tag Name: ", button.tagName);
        if (button.tagName === 'BUTTON') {
            const listItem = button.parentNode;
            const ul = listItem.parentNode;
            const action = button.textContent.toLowerCase();
            const nameActions = {
                remove: () => {
                    ul.removeChild(listItem);
                },
                edit: () => {
                    const span = listItem.firstElementChild;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = span.textContent;
                    listItem.insertBefore(input, span);
                    listItem.removeChild(span);
                    button.textContent = 'Save';
                },
                save: () => {
                    const input = listItem.firstElementChild;
                    const span = document.createElement('span');
                    span.type = 'text';
                    span.innerText = input.value;
                    listItem.insertBefore(span, input);
                    listItem.removeChild(input);
                    button.textContent = 'Edit';
                }

            }
            
            // select and run action in button's name
            nameActions[action]();
            // if(button.textContent === 'Remove') {
            //     nameActions.remove();
            // } else  if ((button.textContent === 'Edit') ) {
            //     nameActions.edit();
            // } else if ((button.textContent === 'Save')){
            //     nameActions.save();
            // }
            
        }


    })
});