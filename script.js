const enterTask = document.getElementById("enter_task");
const toDoListLists = document.getElementById("toDoList_lists");
function addTask(){
    if (enterTask.value === ''){
        alert("Напишите что-то!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = enterTask.value;
        toDoListLists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    enterTask.value = '';
    saveTask();
}
toDoListLists.addEventListener("click",function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("data",toDoListLists.innerHTML);
}
function getTask(){
    toDoListLists.innerHTML = localStorage.getItem("data")
}
getTask();