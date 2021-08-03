document.getElementById("send").addEventListener("click", validateForm);
function validateForm() {
  //gets the first name
  let name = document.getElementById("fname").value;
  //gets the last name
  let name = document.getElementById("lname").value;
  //gets the email
  let email = document.getElementById("email").value;
  //gets the message
  let message = document.getElementById("subject").value;

  //checks if all fields have been filled before sending message.
  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(name, email, message);
  }
}
function sendMessage(fname, lname, email, subject) {
  //sends the name, email and message by passing them as url parameters
  window.location.href =
    "https://us-central1-naishare.cloudfunctions.net/sendMail?name=" +
    fname +
    "&email=" +
    lname +
    "&email=" +
    email +
    "&message=" +
    subject +
    "";
}

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

		if (setTheme == null){
			swapStyle('light.css')
		}else{
			swapStyle(setTheme)
		}

		function swapStyle(sheet){
			document.getElementById('mystylesheet').href = sheet
			localStorage.setItem('theme', sheet)
		}



