
const form = document.getElementById("addressForm");
const toggleButton = document.getElementById("toggleButton");
const showButton = document.getElementById("showButton");

toggleButton.onclick = function() {
    form.style.display = "none";
    toggleButton.style.display = "none";
    showButton.style.display = "inline-block"; // Show the "Show Form" button
};

showButton.onclick = function() {
    form.style.display = "flex";
    toggleButton.style.display = "inline-block"; // Show the "Hide Form" button
    showButton.style.display = "none"; // Hide the "Show Form" button
};











document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const photoInput = document.getElementById('photo');
    const photo = URL.createObjectURL(photoInput.files[0]);

    const contactList = document.getElementById('contactList');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    contactDiv.innerHTML = `
        <img src="${photo}" alt="${firstName} ${lastName}">
        <div class="contact-details">
            <strong>${firstName} ${middleName} ${lastName}</strong>
            <span>Mobile: ${mobile}</span>
            <span>Address: ${address}</span>
            <span>Email: ${email}</span>
        </div>
    `;
    
    contactList.appendChild(contactDiv);

    // Clear the form
    document.getElementById('addressForm').reset();
    add.style.display = "none";
});
