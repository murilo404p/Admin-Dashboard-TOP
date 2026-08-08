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
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const timeConjunto = month + "/" + day + "/" + year + " " + hours + ":" + minutes;
    
    const project = {
        title: inputTitle.value,
        text: inputText.value,
        time: timeConjunto
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
    const iconsContainer = document.createElement("div");
    const timerContainer = document.createElement("div");
    const timer = document.createElement("div");
    const clockIcon = document.createElement("img");
    const favoriteIcon = document.createElement("img");
    const trashIcon = document.createElement("img");
    let isFavorite = false;
    
    cardTitle.textContent = project.title;
    cardText.textContent = project.text;
    timer.textContent = project.time;

    cardBlock.classList.add(
        "grid",
        "bg-white",
        "rounded-xl",
        "shadow-lg",    
        "border-l-7",
        "border-sky-500",
        "min-h-40",
        "gap-3",
        "hover",
        "hover:scale-101",
        "duration-200",
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
        "justify-between",
        "p-1!"
    );

    iconsContainer.classList.add(
        "flex",
        "items-center",
        "p-1!"
    );

    favoriteIcon.classList.add(
        "svg-sidebar",
        "hover",
        "hover:scale-120",
        "duration-200",
        "cursor-pointer",
    );

    trashIcon.classList.add(
        "svg-sidebar",
        "hover",
        "hover:scale-120",
        "duration-200",
        "cursor-pointer",
    );

    timerContainer.classList.add(
        "flex",
        "items-center",
        "gap-1",
    );

    clockIcon.classList.add(
        "svg-sidebar",
    );

    favoriteIcon.src = "./src/assets/star-outline.svg";
    favoriteIcon.alt = "Favorite";
    trashIcon.src = "./src/assets/trash-can-outline.svg";
    trashIcon.alt = "Trash";
    clockIcon.src = "./src/assets/clock-outline.svg";
    clockIcon.alt = "clock";

    trashIcon.addEventListener("click", () => {
        cardBlock.classList.add("card-delete");
        setTimeout(() => {
            cardBlock.remove();
        }, 300);
    });

    favoriteIcon.addEventListener("click", () => {
        if (isFavorite === false) {
            isFavorite = true
            favoriteIcon.src = "./src/assets/yellowstar.svg";
        } else {
            isFavorite = false
            favoriteIcon.src = "./src/assets/star-outline.svg";
        }
    });

    favoriteIcon.addEventListener("click", () => {

    });


    projectsDashboard.append(cardBlock);
    cardBlock.append(cardHeader, cardFooter);
    cardHeader.append(cardTitle, cardText);
    cardFooter.append(timerContainer, iconsContainer);
    timerContainer.append(clockIcon,timer);
    iconsContainer.append(favoriteIcon, trashIcon);
    

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