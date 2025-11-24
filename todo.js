const input = document.getElementById("myInput");
const ul = document.querySelector("#myList ul");


function appendI() {
    if (input.value.trim() === "") return;

    const template = document.querySelector(".todo-template");
    const clone = template.cloneNode(true);
    clone.style.display = "flex";
    clone.querySelector("span").textContent = input.value;

    const checkbox = clone.querySelector("input[type='checkbox']")

    checkbox.addEventListener("change", () =>{
        if(checkbox.checked){
            clone.querySelector("span").style.textDecoration = "line-through";
            clone.querySelector("span").style.color ="#aaa";
        }
        else{
             clone.querySelector("span").style.textDecoration ="none";
            clone.querySelector("span").style.color = "#000";

        }
    })
   

    ul.appendChild(clone);
    input.value = "";
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        appendI();
    }
});

