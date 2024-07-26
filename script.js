document.getElementById('addTodo').addEventListener('click',function(){
    const todoInput=document.getElementById('todoInput')
    const todoText=todoInput.value.trim()

    if (todoText!==""){
        const todoList=document.getElementById('todoList')
        const listItem=document.createElement('li')
        listItem.textContent=todoText

        const deleteButton=document.createElement('span')
        deleteButton.textContent='Delete'
        deleteButton.classList.add('delete')
        deleteButton.addEventListener('click',function(){
            todoList.removeChild(listItem)
        })

        listItem.appendChild(deleteButton)
        todoList.appendChild(listItem)
        todoInput.value=""
    }

})