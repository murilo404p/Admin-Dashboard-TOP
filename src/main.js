import './style.css'

const modal = document.getElementById("modal");
const newButton = document.getElementById("newBlock");
const buttonCancelModal = document.getElementById("buttonCancelModal");

const reminders = document.getElementById("modal-reminders");
const newReminder = document.getElementById("newReminder");
const buttonCancelReminders = document.getElementById("buttonCancelReminders");

const inputTitle = document.getElementById("inputTitle");
const inputText =  document.getElementById("inputText");
const inputReminders = document.getElementById("inputReminders");

const buttonSaveModal = document.getElementById("buttonSaveModal");
const buttonSaveReminders = document.getElementById("buttonSaveReminders");

const titleCharCounter =  document.getElementById("title-char-counter");
const textCharCounter =  document.getElementById("text-char-counter");
const remindersCharCounter = document.getElementById("reminders-char-counter");

const projectsDashboard = document.getElementById("projects");
const remindersDashboard = document.getElementById("reminders");

newButton.addEventListener("click", () => {
    openModal(modal);
});

buttonCancelModal.addEventListener("click", () => {
    closeModal(modal);
    clearInput(inputText, textCharCounter);
    clearInput(inputTitle, titleCharCounter);
});

newReminder.addEventListener("click", () => {
    openModal(reminders);
});

buttonCancelReminders.addEventListener("click", () =>{
    closeModal(reminders);
    clearInput(inputReminders, remindersCharCounter);
});

function openModal(element) {
    element.classList.remove("hidden");
    element.classList.add("grid");
}

function closeModal(element) {
    element.classList.remove("grid");
    element.classList.add("hidden");
}

buttonSaveModal.addEventListener("click", () => {
    const project = {
        title: inputTitle.value,
        text: inputText.value
    }
    if(!validateEmptyFields(inputTitle, inputText)) {
        return;
    }
    createProjectCard(project);
    clearInput(inputTitle, titleCharCounter);
    clearInput(inputText, textCharCounter);
    closeModal(modal);
});

function createProjectCard(project) {
    const cardBlock = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardText = document.createElement("p");
    
    cardTitle.textContent = project.title;
    cardText.textContent = project.text;
    
    cardBlock.classList.add(
        "grid",
        "bg-white",
        "rounded-xl",
        "shadow-lg",    
        "p-20!",
        "border-l-7",
        "border-sky-500",
    );

    cardTitle.classList.add(
        "bg-sky-500"
    );
    cardText.classList.add(
        "bg-red-600"
    );

    projectsDashboard.append(cardBlock);
    cardBlock.append(cardTitle, cardText);

    projectsDashboard.classList.add("grid");
    
    const totalCards = projectsDashboard.children.length; // retorna quantos filhos tem dentro de projects
    
    if(totalCards % 3 === 0) {
        projectsDashboard.style.gridTemplateColumns = "1fr";
    } else if (totalCards % 3 === 1) {
        projectsDashboard.style.gridTemplateColumns = "1fr";
    } else if(totalCards % 3 === 2) {
        projectsDashboard.style.gridTemplateColumns = "1fr 1fr";
    } else {
        projectsDashboard.style.gridTemplateColumns = "1fr 1fr 1fr"; 
    }
}

inputTitle.addEventListener("input", () => {
    updateCounter(titleCharCounter, inputTitle);
});

inputText.addEventListener("input", ()=> {
    updateCounter(textCharCounter, inputText);
});

inputReminders.addEventListener("input", () => {
    updateCounter(remindersCharCounter, inputReminders);
});

function updateCounter(counter, input){
    counter.innerText = input.value.length;
}

function clearInput(input, counter) {
    input.value = "";
    counter.innerText = "0";
}

function validateEmptyFields(title, text) {
    if (title.value.trim() === "" || (text.value.trim() === "")) {
        return false;
    } else {
        return true;
    }
}