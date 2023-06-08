document.addEventListener('DOMcontentLoaded', function(){
const navMenu = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li');

// Add an event listener to each navigation menu item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the "active" class from all navigation menu items
    navItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add the "active" class to the clicked navigation menu item
    item.classList.add('active');
  });
});

// Select the form and its input fields
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Message sent successfully!");
        document.querySelector("form").reset();
    }
});

// Add an event listener to the form's submit button
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the user's input values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Send the user's input values to a server or service
  // (not shown in this example)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear the form input fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
})
