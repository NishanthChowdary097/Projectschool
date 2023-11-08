const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const user = document.getElementById('uname');
const name = user.value;

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
fetch(`/checkTeacher?name=${user}`)
.then(response => response.json())
.then(data => {
	if (data.exists) {
		errorDiv.textContent = 'Username already in use';
	} else {
		errorDiv.textContent = '';
	}
})
.catch(error => console.error(error));