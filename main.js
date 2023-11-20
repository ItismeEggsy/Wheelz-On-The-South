let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}




let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow' , window.scrollY > 0);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Replace the following condition with your server-side authentication logic
    if (username === 'your_username' && password === 'your_password') {
      document.getElementById('message').textContent = 'Login successful!';
    } else {
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });