import './style.css'

const modal = document.getElementById("modal");
const newButton = document.getElementById("newBlock");
const buttonCancelModal = document.getElementById("buttonCancelModal");

const reminders = document.getElementById("modal-reminders");
const newReminder = document.getElementById("newReminder");
const buttonCancelReminders = document.getElementById("buttonCancelReminders");

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
}
