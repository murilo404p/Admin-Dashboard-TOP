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

newButton.addEventListener("click", function() {
    openModal(modal);
});

buttonCancelModal.addEventListener("click", function() {
    closeModal(modal);
});

newReminder.addEventListener("click", function() {
    openModal(reminders);
});

buttonCancelReminders.addEventListener("click", function(){
    closeModal(reminders);
});

function openModal(element) {
    element.classList.remove("hidden");
    element.classList.add("grid");
}

function closeModal(element) {
    element.classList.remove("grid");
    element.classList.add("hidden");
    inputText.value = "";
    inputTitle.value = "";
    inputReminders.value = "";
}

buttonSaveModal.addEventListener("click", function(){
    const project = {
        title: inputTitle.value,
        text: inputText.value
    }   
    saveModal(project);
});

function saveModal(element) {
    console.log(element);
}

inputTitle.addEventListener("input", () => {
    titleCharCounter.innerText = inputTitle.value.length;
});

inputText.addEventListener("input", ()=> {
    textCharCounter.innerText = inputText.value.length;
});

inputReminders.addEventListener("input", () => {
    remindersCharCounter.innerText = inputReminders.value.length;
});