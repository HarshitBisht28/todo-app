const input = document.getElementById("myInput");
const ul = document.querySelector("#myList ul");


function appendI() {
    if (input.value.trim() === "") return;

    const template = document.querySelector(".todo-template");
    const clone = template.cloneNode(true);
    clone.style.display = "flex";
    clone.querySelector("span").textContent = input.value;

    ul.appendChild(clone);
    input.value = "";
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        appendI();
    }
});

