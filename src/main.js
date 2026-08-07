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
    const cardHeader = document.createElement("div");
    const cardFooter = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardText = document.createElement("p");
    const favoriteIcon = document.createElement("img");
    const trashIcon = document.createElement("img");
    
    cardTitle.textContent = project.title;
    cardText.textContent = project.text;
    
    cardBlock.classList.add(
        "grid",
        "bg-white",
        "rounded-xl",
        "shadow-lg",    
        "border-l-7",
        "border-sky-500",
        "min-h-40",
        "gap-3"
    );

    cardHeader.classList.add(
        "flex",
        "flex-col"
    );

    cardTitle.classList.add(
        "text-[20px]",
        "font-bold",
        "p-2!",
    );
    cardText.classList.add(
        "h-auto",
        "p-2!",
    );

    cardFooter.classList.add(
        "flex",
        "justify-end",
    );

    favoriteIcon.classList.add(
        "svg-sidebar",
        "hover",
        "hover:scale-102",
        "hover:shadow-xl",
        "duration-200"
    );

    trashIcon.classList.add(
        "svg-sidebar",
        "hover",
        "hover:scale-102",
        "hover:shadow-xl",
        "duration-200"
    );

    favoriteIcon.src = "./src/assets/star-outline.svg";
    favoriteIcon.alt = "Favorite";
    trashIcon.src = "./src/assets/trash-can-outline.svg";
    trashIcon.alt = "Trash";

    projectsDashboard.append(cardBlock);
    cardBlock.append(cardHeader, cardFooter);
    cardHeader.append(cardTitle, cardText);
    cardFooter.append(favoriteIcon, trashIcon);
    

    projectsDashboard.classList.add("grid");
    

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