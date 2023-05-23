// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const projectsLink = document.getElementById("projects-link");
    const contactLink = document.getElementById("contact-link");
  
    const homeSection = document.getElementById("home-section");
    const aboutSection = document.getElementById("about-section");
    const projectsSection = document.getElementById("projects-section");
    const contactSection = document.getElementById("contact-section");
  
    // Function to show a section and hide others
    function showSection(section) {
      homeSection.style.display = "none";
      aboutSection.style.display = "none";
      projectsSection.style.display = "none";
      contactSection.style.display = "none";
  
      section.style.display = "block";
    }
  
    // Add click event listeners to the navigation links
    homeLink.addEventListener("click", function(event) {
      event.preventDefault();
      showSection(homeSection);
    });
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      showSection(aboutSection);
    });
  
    projectsLink.addEventListener("click", function(event) {
      event.preventDefault();
      showSection(projectsSection);
    });
  
    contactLink.addEventListener("click", function(event) {
      event.preventDefault();
      showSection(contactSection);
    });

    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
  
    // Add submit event listener to the form
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Simulate form submission
      // Here, you can add your own logic to handle the form data (e.g., send it to a server)
      // In this example, we're just displaying a success message
  
      // Display the success message
      successMessage.style.display = "block";
      contactForm.reset(); // Reset the form fields
    });
  });
  
  