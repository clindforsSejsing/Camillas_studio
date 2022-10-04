  const myAnimation = document.getElementById("text_under_header");
  const headerClicked = document.getElementById("click_on_header");
  myAnimation.style.visibility = "visible";

  headerClicked.addEventListener("click", displayNextPage);

  function displayNextPage(){
    location.href= "main.html";
  }

  