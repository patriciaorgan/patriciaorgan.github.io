$(document).ready(function() {
  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
	$("#returnmessage").empty(); // To empty previous error/success message.
	// Checking for blank fields.
	if (name == '' || email == '' || message == '') {
	  alert("Please Fill Required Fields");
	} else if (!validateEmail(email)) {
	} else {
	  var template = 'Thanks ' + name +'! For Contacting me.\n\n'
		+ 'Name: ' + name + '\n'
		+ 'Email: ' + email + '\n'
		+ 'Message: ' + message + '\n';
	  var mailto = "mailto:patriciaorgan82@gmail.com,"+ email + "?subject=From Portfolio website: "
	    + name + " , " + email + "&body=" + encodeURIComponent(template);
	  document.location.href = mailto;
	  //reset form
	  document.getElementById("form").reset();
	}
  });
});

function validateEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    } else {
    	return true;
    }
}