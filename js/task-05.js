const newUser = {
    nameInput: document.querySelector(`#name-input`),
    nameOutput: document.querySelector(`#name-output`)
}

newUser.nameInput.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== ""){
        newUser.nameOutput.textContent = event.currentTarget.value;
    } else {
        newUser.nameOutput.textContent = "незнакомец"
    }
    
}