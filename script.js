// JavaScript for the form submission details
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;
  
    // This is the Object that binds all of the separate elements together.
    const contactData = {
      name: name,
      email: email,
      phone: phone,
      comment: comment
    };
  
   
    let contacts = localStorage.getItem("contacts");
    if (contacts) {
      
      contacts = JSON.parse(contacts);
      contacts.push(contactData);
    } else {
      // If the else is to create the new data if it does not exist already. 
      contacts = [contactData];
    }
  
    // Store the updated data in local storage
    localStorage.setItem("contacts", JSON.stringify(contacts));
  
    // Clear the form inputs after submission
    document.querySelector(".contact-form").reset();
  
    // you can create a success message too using the window...how cool. Thank you internet.
    alert("Contact information submitted successfully!");
  });
  