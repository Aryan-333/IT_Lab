document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var english = parseFloat(document.getElementById('english').value);
    var physics = parseFloat(document.getElementById('physics').value);
    var chemistry = parseFloat(document.getElementById('chemistry').value);

    // Calculate total percentage of marks obtained
    var totalMarks = english + physics + chemistry;
    var totalPercentage = (totalMarks / 300) * 100; // Assuming each subject is out of 100 marks

    // Display total percentage in div
    document.getElementById('total_percentage').textContent = "Total Percentage of Marks Obtained: " + totalPercentage.toFixed(2) + '%';
});
