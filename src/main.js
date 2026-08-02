import './style.css'

let openModal = document.getElementById("newBlock");
let modal = document.getElementById("modal");
let buttonCancelModal = document.getElementById("buttonCancelModal");
let openReminders = document.getElementById("newReminder");
let reminders = document.getElementById("modal-reminders");
let buttonCancelReminders = document.getElementById("buttonCancelReminders");


openModal.addEventListener("click", function(){
    modal.classList.remove("hidden");
    modal.classList.add("grid");
});

buttonCancelModal.addEventListener("click", function() {
    modal.classList.remove("grid");
    modal.classList.add("hidden");
});

openReminders.addEventListener("click", function(){
    reminders.classList.remove("hidden");
    reminders.classList.add("grid");
})

buttonCancelReminders.addEventListener("click", function() {
    reminders.classList.remove("grid");
    reminders.classList.add("hidden");
});

