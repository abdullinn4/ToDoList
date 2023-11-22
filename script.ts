const enterTask : HTMLInputElement = <HTMLInputElement>document.getElementById('enter_task');
const toDoListLists : HTMLUListElement = <HTMLUListElement>document.getElementById('toDoList_lists');

function addTask(){
    if (enterTask.value === ''){
        alert('Введите что-то');
    }else{
        let li : HTMLLIElement = document.createElement("li");
        li.innerHTML = enterTask.value;
        toDoListLists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    enterTask.value='';
    saveTask();
}
toDoListLists.addEventListener("click", (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'LI'){
        target.classList.toggle("checked");
        saveTask();
    }else if (target.tagName === 'SPAN'){
        target.parentElement.remove();
        saveTask();
    }
},false);
function saveTask(){
    localStorage.setItem("data",toDoListLists.innerHTML);
}
function getTask(){
    toDoListLists.innerHTML = localStorage.getItem("data") || "";
}
getTask();
