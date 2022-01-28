function myFunction() {
    var x = document.getElementById("top1");
    if (x.className === "top") {
      x.className += " responsive";
    } else {
      x.className = "top";
    }
  }