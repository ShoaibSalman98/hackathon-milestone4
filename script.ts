// Get reference to the form and displye area.

const form = document.getElementById("resume-form") as HTMLFormElement;
const formarea=document.getElementById("resume-displye") as HTMLDivElement;

// handle form submission

form.addEventListener("submit",(event:Event)=> {
    event.preventDefault(); // prevent page reload.


// collect input values.
const username = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value
const education = (document.getElementById("education") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const experiance = (document.getElementById("experiance") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

// Generate the resume content dynamically.

 const resumeHTML =`
 <h2><b>Editable Resume <b></h2>
 <h3>Personal Information<h3>
 <p><b>Name: </b><span contenteditable "true">${username}</span><P>
<p><b>Email: </b><span contenteditable "true">${email}</span><P>
<p><b>Phone Number: </b><span contenteditable "true">${phone}</span><P>

<h3>Education<h3>
<p contenteditable "true">${education}</p>

<h3>Experiance<h3>
<p contenteditable "true">${experiance}</p>

<h3>Skills<h3>
<p contenteditable "true">${skills}</p>
 `;


 // Display the resume content in the form area.
 if(formarea) {
  formarea.innerHTML = resumeHTML;
 }
 else {
  console.error("Form area not found.");
 }
})