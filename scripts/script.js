const tosCheckbox = document.getElementById('tos');
const submitButton = document.getElementById('submitButton');
const tosModal = document.getElementById('tosModal');
const showTosButton = document.getElementById('showTos');
const agreeButton = document.getElementById('agreeButton');
const tosContent = document.getElementById('tosContent');

showTosButton.addEventListener('click', () => {
tosModal.style.display = 'flex';
});

tosContent.addEventListener('scroll', () => {
if (tosContent.scrollHeight - tosContent.scrollTop === tosContent.clientHeight) {
    agreeButton.disabled = false;
}
});

agreeButton.addEventListener('click', () => {
tosCheckbox.checked = true;
tosCheckbox.disabled = false;
submitButton.disabled = false;
tosModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
if (event.target === tosModal) {
    tosModal.style.display = 'none';
}
});