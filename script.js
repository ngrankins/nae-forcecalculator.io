// script.js
document.getElementById('force-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the input fields and replace comma with a dot
    let mass = document.getElementById('mass').value.trim();
    let acceleration = document.getElementById('acceleration').value.trim();

    // Check if the input fields are not empty
    if (!mass || !acceleration) {
        document.getElementById('result').innerHTML = '<strong>Error:</strong> Please fill in all fields.';
        return;
    }

    // Replace comma with dot if it exists
    mass = mass.replace(',', '.');
    acceleration = acceleration.replace(',', '.');

    // Convert to numbers
    mass = parseFloat(mass);
    acceleration = parseFloat(acceleration);

    // Check if the values are valid
    if (!isNaN(mass) && !isNaN(acceleration) && mass > 0 && acceleration > 0) {
        // Calculate the force
        const force = mass * acceleration;

        // Display the result
        document.getElementById('result').innerHTML = `Calculated Force: <strong>${force} N</strong>`;
    } else {
        // If the values are invalid
        document.getElementById('result').innerHTML = '<strong>Error:</strong> Please enter valid values for mass and acceleration.';
    }
});
