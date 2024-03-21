function transitionToPage(pageURL) {
    window.location.href = pageURL;
}

function showDetails(item) {

     // Add a console.log() statement to log the value of the item parameter
     console.log("Item:", item);
     
    // Get the modal
    var modal = document.getElementById("modal");

    // Get the modal title and description elements
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");

    // Set the title and description based on the selected item
    switch (item) {
        case 'ATTITUDE_OF_JUSTICE':
            modalTitle.textContent = 'ATTITUDE OF JUSTICE';
            modalDescription.textContent = 'Description for ATTITUDE OF JUSTICE.';
            break;
        case 'JUXTAPOSED_JEWELZ':
            modalTitle.textContent = 'JUXTAPOSED_JEWELZ';
            modalDescription.textContent = 'Description for JUXTAPOSED_JEWELZ.';
            break;
        case 'WAR':
            modalTitle.textContent = 'WAR';
            modalDescription.textContent = 'Description for WAR.';
            break;
        // Add more cases for additional items if needed
        default:
            break;
    }

    // Display the modal
    modal.style.display = "block";
}

function closeModal() {
    // Get the modal element
    var modal = document.getElementById("modal");
    
    // Hide the modal by setting its display property to "none"
    modal.style.display = "none";
}

