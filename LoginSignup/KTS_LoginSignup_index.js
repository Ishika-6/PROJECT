let container = document.getElementById('container')
let signUpForm = document.getElementById('signUpForm');
let signInForm = document.getElementById('signInForm');
let users = JSON.parse(localStorage.getItem('users')) || [];

signUpForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('su_username').value;
	const email = document.getElementById('su_email').value;
	const password = document.getElementById('su_password').value;
	const user = {username, email, password};
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
	alert('Sign up successful');
	signUpForm.reset();
});

signInForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('si_username').value;
	const password = document.getElementById('si_password').value;
	const user = users.find(
		(user) => user.username === username && user.password === password
	);

	if (user) {
		alert('Sign in successful');
		signInForm.reset();
		window.location.href = '../index.html';
	}
	else {
		alert('Invalid username or password');
	}
})


toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

 