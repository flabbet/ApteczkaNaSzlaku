const steps = [
    {
        content: "Aby rozpocząć, podaj swój numer telefonu",
        title: "Cześć podróżniku!",
        inputType: "tel",
        placeholder: "123 456 789"
    },
    {
        content: "Jak chcesz, żebyśmy Cię nazywali?",
        title: "To już prawie wszystko",
        inputType: "text",
        isName: true,
        placeholder: "Ania"
    },
]

let currentStep = -1;

const title = document.querySelector("#title");
const content = document.querySelector("#contentText");
const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");

let name = null;
let tel = null;

formElement.onsubmit = (e) => {
    e.preventDefault();

    nextStep();
}

export function nextStep() {

    if(currentStep >= 0) {
    const currentStepElement = steps[currentStep];


    if (currentStepElement.isName) {
        name = inputElement.value;
        localStorage.setItem("name", name);
    }

    if(currentStepElement.inputType === "tel"){
        tel = inputElement.value;
        localStorage.setItem("phone", tel);
    }
}

    currentStep++;
    if (steps.length <= currentStep) {
        window.location = "/dashboard.html";
        return;
    }

    const step = steps[currentStep];
    title.innerText = step.title;
    content.innerText = step.content;
    inputElement.value = null;
    inputElement.type = step.inputType;
    inputElement.placeholder = step.placeholder;
}

nextStep();