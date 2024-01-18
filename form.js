const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const email = form.email.value;
	const password = form.password.value;

	console.log(`آدرس ایمیل: ${email}`);
	console.log(`رمز عبور: ${password}`);

	form.reset();
});
