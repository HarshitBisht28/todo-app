const input = document.getElementById("myInput");
const ul = document.querySelector("#myList ul");
const btnRow = document.querySelector(".btnRow");

function appendI() {
    if (input.value.trim() === "") return;

    const template = document.querySelector(".todo-template");
    const clone = template.cloneNode(true);
    clone.style.display = "flex";
    clone.classList.add("todo");
    clone.querySelector("span").textContent = input.value;

    const checkbox = clone.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            clone.querySelector("span").style.textDecoration = "line-through";
            clone.querySelector("span").style.color = "#aaa";
        } else {
            clone.querySelector("span").style.textDecoration = "none";
            clone.querySelector("span").style.color = "#000";
        }
    });

    ul.appendChild(clone);
    input.value = "";
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") appendI();
});

btnRow.addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;

    const allTodos = document.querySelectorAll(".todo");

    switch (e.target.id) {
        case "showAll":
            allTodos.forEach(todo => todo.style.display = "flex");
            break;

        case "showActive":
            allTodos.forEach(todo => {
                const checkbox = todo.querySelector("input[type='checkbox']");
                todo.style.display = checkbox.checked ? "none" : "flex";
            });
            break;

        case "showCompleted":
            allTodos.forEach(todo => {
                const checkbox = todo.querySelector("input[type='checkbox']");
                todo.style.display = checkbox.checked ? "flex" : "none";
            });
            break;

        case "clearCompleted":
            allTodos.forEach(todo => {
                const checkbox = todo.querySelector("input[type='checkbox']");
                if (checkbox.checked) todo.remove();
            });
            break;
    }
});
