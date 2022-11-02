function addTodo() {
    let ip = document.getElementById('input').value;
    let li_item = document.createElement('li');
    let done_btn = document.createElement('button');
    let del_btn = document.createElement('button');
    let ul = document.querySelector('ul');
    li_item.innerText = ip;
    done_btn.innerText = 'Done';
    del_btn.innerText = 'Delete';
    ul.appendChild(li_item);
    li_item.appendChild(done_btn);
    li_item.appendChild(del_btn);
    li_item.style.marginTop = '10px';
    li_item.style.backgroundColor = 'skyBlue';
    li_item.style.borderRadius = '5px';
    li_item.style.color = 'blue';
    // li_item.style.maxWidth = '90%';
    done_btn.style.backgroundColor = 'green';
    done_btn.style.position = 'fixed'
    done_btn.style.left = '80vw';
    del_btn.style.position = 'fixed';
    del_btn.style.left = '85vw'
    del_btn.style.backgroundColor = 'orangeRed';
    done_btn.addEventListener('click', function () {
        li_item.style.textDecoration = 'line-through';
    })
    del_btn.addEventListener('click', function () {
        li_item.remove();
    })
    document.getElementById('input').value = '';
    if (ip == '') {
        done_btn.style.display = 'none';
        del_btn.style.display = 'none';
        document.getElementById('input').placeholder = 'Enter First';
    }
}