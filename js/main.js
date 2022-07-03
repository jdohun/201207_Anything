for(let i = 0 ; i<10 ;++i){
  $("body").append("<div class='Row'></div>")
}

for(let j = 0; j<10; ++j){
  $(".Row").append("<input type='text' class='Box' onkeypress='Check()'>");
}

function Move(keyCode){
  let node = document.querySelector(".Box:focus");
  let count = 0;

  if(keyCode == 119){ // w
    if(node.parentElement.previousElementSibling != null){
      let upNode = node.parentElement.previousElementSibling.firstElementChild;
      while(node.previousElementSibling != null) {
        node = node.previousElementSibling;
        ++count;
      }

      for(let i = 0; i<count; ++i){
        upNode = upNode.nextElementSibling;
      }
      upNode.focus();
    }
  }
  else if(keyCode == 97){ //a
    if(node.previousElementSibling != null){
      node = node.previousElementSibling;
      node.focus();
    }
  }
  else if(keyCode == 115){ //s
    if(node.parentElement.nextElementSibling != null){
      let downNode = node.parentElement.nextElementSibling.firstElementChild;
      while(node.previousElementSibling != null) {
        node = node.previousElementSibling;
        ++count;
      }

      for(let i = 0; i<count; ++i){
        downNode = downNode.nextElementSibling;
      }
      downNode.focus();
    }
  }
  else if(keyCode == 100){ //d
    if(node.nextElementSibling != null) {
      node = node.nextElementSibling;
      node.focus();
    }
  }
}
function Check(){
    Move(window.event.keyCode);
}
