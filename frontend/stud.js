const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const user = document.getElementById('uname');
const result=document.getElementById("note");

const name = user.value;

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
user.addEventListener('input', () => {
    fetch(`/checkStudent?name=${user}`)
        .then(response => response.json())
        .then(data => {
	    if (data.exists) {
		    result.innerHTML= 'Username already in use';
    	} else {
	    	result.innerHTML = '';
	    }
    })
    .catch(error => console.error(error));
});