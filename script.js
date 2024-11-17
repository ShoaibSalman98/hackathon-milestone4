// Get reference to the form and displye area.
var form = document.getElementById("resume-form");
var formarea = document.getElementById("resume-displye");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload.
    // collect input values.
    var username = document.getElementById('name').value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var phone = document.getElementById("phone").value;
    var experiance = document.getElementById("experiance").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically.
    var resumeHTML = "\n <h2><b>Editable Resume <b></h2>\n <h3>Personal Information<h3>\n <p><b>Name: </b><span contenteditable \"true\">".concat(username, "</span><P>\n<p><b>Email: </b><span contenteditable \"true\">").concat(email, "</span><P>\n<p><b>Phone Number: </b><span contenteditable \"true\">").concat(phone, "</span><P>\n\n<h3>Education<h3>\n<p contenteditable \"true\">").concat(education, "</p>\n\n<h3>Experiance<h3>\n<p contenteditable \"true\">").concat(experiance, "</p>\n\n<h3>Skills<h3>\n<p contenteditable \"true\">").concat(skills, "</p>\n ");
    // Display the resume content in the form area.
    if (formarea) {
        formarea.innerHTML = resumeHTML;
    }
    else {
        console.error("Form area not found.");
    }
});
