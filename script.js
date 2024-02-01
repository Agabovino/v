
   
    let formContainer = document.querySelector('.form');

    let tittle = document.createElement('h1');
    tittle.textContent = 'My Shopping list';
    formContainer.appendChild(tittle);
   
    let label = document.createElement('label');
    label.setAttribute('for', 'input');
    label.textContent = 'Enter a new item: ';
    formContainer.appendChild(label);

    let input = document.createElement('input');
    input.classList.add('input');
    formContainer.appendChild(input);


    let btn = document.createElement('button');
    btn.textContent = 'add item';
    btn.addEventListener('click', ()=>{

        let inputValue = input.value;
        input.value = null;
        input.focus();

        let li = document.createElement('li');
        li.textContent = inputValue;
        list.appendChild(li);

    })
   
    formContainer.appendChild(btn);

    let list = document.createElement('ul');
    formContainer.appendChild(list);


    