document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the page from reloading

            const submitBtn = contactForm.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            
            // Show loading state
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // Collect form data
            const formData = new FormData(contactForm);
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwBhd4r5hdBgW8_qpIQ1lVqyE6fQe-keIrkzP1NGPozVrzLGP9wq7ZbcXEGlZj3MFty/exec'; // PASTE YOUR URL HERE

            // Use Fetch API to send data via JavaScript
            fetch(scriptURL, { 
                method: 'POST', 
                body: formData 
            })
            .then(response => {
                submitBtn.innerText = "Message Sent Succesfully!";
                contactForm.reset(); // Clear the form
                alert("Thank you! Your inquiry has been stored and sent to our team.");
                
                // Re-enable button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitBtn.innerText = "Error. Try Again.";
                submitBtn.disabled = false;
            });
        });
    }
});