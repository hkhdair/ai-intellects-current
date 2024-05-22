function sendmessage(x) {
    var form = document.getElementById(x);
    if (form.checkValidity()) {
        alert("Thank you. Your message has been sent!");
    } else {
        // Handle invalid form inputs here
        alert("Please fill out all required fields.");
    }
}



document.addEventListener('DOMContentLoaded', (event) => {
    var typed = new Typed("#typing", {
        strings: ["Education", "Healthcare", "Sales", "Marketing", "Customer Service", "Productivity"], 
        typeSpeed: 170,
        backSpeed: 100,
        loop: true
    });
});