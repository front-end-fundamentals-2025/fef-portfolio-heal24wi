const buttonElement = document.getElementById("submit-button");
const nameElement = document.getElementById("input-name");
const emailElement = document.getElementById("input-e-mail");
const mainElement = document.getElementById("main-part");
const footerElement = document.getElementById("footer-part");

//If you click Submit button - the main part dissappears
buttonElement.addEventListener("click", function () {
  //saves the Value that was typed into the input field
  let enteredName = nameElement.value;
  let enteredEmail = emailElement.value;

  //if you have entered anything, the main part + footer will dissappear
  if (enteredName !== "" && enteredEmail !== "") {
    //The "display = none" is from ChatGpt https://chatgpt.com/share/67a46f07-167c-8010-adf3-478a0f275ed3, accessed: 06.02. 25
    mainElement.style.display = "none";
    footerElement.style.display = "none";

    //Create new text after everything dissapeared
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Thank you " + enteredName + " !";
    newParagraph.classList.add("bold");
    document.body.appendChild(newParagraph);

    let newParagraphTwo = document.createElement("p");
    newParagraphTwo.textContent =
      "You will receive an E-Mail to " + "'" + enteredEmail + "'";
    newParagraphTwo.classList.add("bold-two");
    document.body.appendChild(newParagraphTwo);
  }
});
