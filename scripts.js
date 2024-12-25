
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way
    
    const service = document.getElementById("service").value;
    const professional = document.getElementById("professional").value;
    const date = document.getElementById("date").value;

    if (!service || !professional || !date) {
        alert("Please fill in all the fields.");
    } else {
        // Simulate a booking confirmation message
        const confirmationMessage = `Booking Confirmed!\n\nService: ${service}\nProfessional: ${professional}\nDate: ${date}`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;
    }
});
// scripts.js

document.getElementById('plumberBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    const date = document.getElementById('date').value;
    const problem = document.getElementById('problem').value;

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `Your booking for a plumber has been confirmed!<br>Service Date and Time: ${date}<br>Problem: ${problem}`;

    // Clear the form fields
    document.getElementById('plumberBookingForm').reset();
});
// Handle form submission
document.getElementById('plumberBookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const issue = document.getElementById('issue').value;

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `Your plumber booking is confirmed!<br>Service Date and Time: ${date}<br>Issue: ${issue}`;

    // Reset form fields
    document.getElementById('plumberBookingForm').reset();
});
// Get the signup form element
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting automatically

    // Clear any previous error messages
    document.getElementById('error-message').textContent = "";

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form fields
    if (!username || !email || !phone || !password || !confirmPassword) {
        document.getElementById('error-message').textContent = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Passwords do not match.";
        return;
    }

    if (password.length < 6) {
        document.getElementById('error-message').textContent = "Password must be at least 6 characters long.";
        return;
    }

    // If all fields are valid, display a success message (you can implement form submission here)
    alert("Sign Up Successful!");

    // Optionally, reset the form fields after successful validation
    document.getElementById('signupForm').reset();
});
