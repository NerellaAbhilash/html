function openModal(img) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");
});

document.getElementById("contactform").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Store in localStorage
  const contactData = {
    name: name,
    email: email,
    message: message,
    submittedAt: new Date().toLocaleString()
  };

  localStorage.setItem("contactFormData", JSON.stringify(contactData));

  alert("Your message has been saved locally!");

  // Optionally clear the form
  this.reset();
});

