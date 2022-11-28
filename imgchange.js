function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector().src="../template/save.png";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(min-width: 560px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes