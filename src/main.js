import './style.css'

let openModal = document.getElementById("newBlock");
let modal = document.getElementById("modal");
let reminders = document.getElementById("modal-reminders")
let buttonCancelModal = document.getElementById("buttonCancelModal");
let buttonCancelReminders = document.getElementById("buttonCancelReminders")


newBlock.addEventListener("click", function(){
    modal.classList.remove("hidden");
    modal.style.display = "grid";
});

buttonCancelModal.addEventListener("click", function() {
    modal.style.display = "none";
});

newReminder.addEventListener("click", function(){
    reminders.classList.remove("hidden");
    reminders.style.display = "grid";
});

buttonCancelReminders.addEventListener("click", function() {
    reminders.style.display = "none";
});

