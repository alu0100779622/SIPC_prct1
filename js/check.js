function validateForm() {

  var x = document.forms["form"]["name"].value;
  var y = document.forms["form"]["mail"].value;
  var z = document.forms["form"]["select"].value;

  if (x == null || x == "",y == null || y == "",z == false) {
    alert("All the inputs must be filled out");
    return false;
  }

  //if(document.form["form"]["name"].value.match()

  var mailformat = /^(\w+([\.-]?\w+)*){3,50}@(\w+([\.-]?\w+)*){3,50}(\.\w{2,3})+$/;

  if(document.forms["form"]["mail"].value.match(mailformat)){
    return true;
  }
  else{
    alert("You have entered an invalid email address!");
    return false;
  }
}
