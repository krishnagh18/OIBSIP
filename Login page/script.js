document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'user' && password === 'password') {
      showMessage('Login successful!', 'success');
      setTimeout(() => {
        window.location.href = 'main1.html';
      }, 1000);
    } else {
      showMessage('Invalid username or password.', 'error');
    }
  });
  
  function showMessage(message, messageType) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = messageType;
  }
  