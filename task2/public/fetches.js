
function deleteTodo(_id) {
    fetch("/todos",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"DELETE",
        body:JSON.stringify({_id}),
    }).then(res=>{
        if(res.status === 200) {
            window.location.href = '/todos'
        }
    })
}
function editTodo(e,id) {
    const body = {
        todoText: e.target.childNodes[0].value,
        id
    }
    e.preventDefault();
    fetch("/todos",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"PUT",
        body:JSON.stringify(body),
    }).then((res)=>{
        if(res.status === 200) {
            window.location.href = '/'
        } else {
            console.error("change text")
        }
    })
}