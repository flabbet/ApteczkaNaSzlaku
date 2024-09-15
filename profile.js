const nameInp = document.querySelector("#name-inp");
const phoneInp = document.querySelector("#phone-inp");

nameInp.value = localStorage.getItem("name");
phoneInp.value = localStorage.getItem("phone");

nameInp.addEventListener("change", (e) => {
    localStorage.setItem("name", e.target.value);
});


phoneInp.addEventListener("change", (e) => {
    localStorage.setItem("phone", e.target.value);
});