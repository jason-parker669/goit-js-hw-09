const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";
const savedData = localStorage.getItem(storageKey);

if (savedData) { 
    form.elements.email.value = JSON.parse(savedData).email;
    form.elements.message.value = JSON.parse(savedData).message;
}

const formData = JSON.parse(savedData) || {email: "", message: ""};

form.addEventListener("input", () => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return;
    }
    
    formData.email = formData.email.trim();
    formData.message = formData.message.trim();
    console.log(formData);
    localStorage.removeItem(storageKey);
    form.reset();
    
});