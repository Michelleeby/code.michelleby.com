// Toggle Show Input/Output
function toggleShowInputOutput() {
  let buttons = document.querySelectorAll(".code-post.code-post-sample i.arrow");
  for (let button of buttons) {
    button.addEventListener("click", function(event){
      event.preventDefault();
      if (button.classList.includes("up")) {
        button.classList.remove("up").toggle("down");
      } else {
        button.classList.remove("down").toggle("up");
      }
      
    })
  }
}
toggleShowInputOutput()