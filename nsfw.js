// Wait for the page to load first
window.onload = function() {

    //Get a reference to the link on the page
    // with an id of "mylink"
    var a = document.getElementById("linkToStuff");

    //Set code to run when the link is clicked
    // by assigning a function to "onclick"
    a.onclick = function() {
      if (window.confirm("WARNING!!!!! You are about to go to a Not Safe For Work site. The creator of this website does not take ANY responsibility for anything that the site causes for you.")) 
      {
        window.location.href = "https://pornhub.com/gay/"
      }
      else {};
    

    //If you don't want the link to actually 
    // redirect the browser to another page,
    // "google.com" in our example here, then
    // return false at the end of this block.
    // Note that this also prevents event bubbling,
    // which is probably what we want here, but won't 
    // always be the case.
          return false;
        }
      }