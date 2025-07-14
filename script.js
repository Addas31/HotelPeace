// Handle Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("bookingName").value;
    const roomType = document.getElementById("roomType").value;
    const bookingcheckinDate = document.getElementById("bookingcheckinDate").value;
    const bookingcheckoutDate = document.getElementById("bookingcheckoutDate").value;

    alert("Thank you for your booking ! Your reservation has been successfully confirmed. We value your privacy and ensure that your personal information is handled securely and will never be shared without your consent.");
});



// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value;

    alert("Thank you ! Your message has been sent. We will get back to you soon.");

});