function greeting(){
  var name;
  var greet
  name = prompt("What is your name?");
  if(name=="") {
    greet=document.getElementById('greeting');
    greet.innerHTML="ToDo List";
  }
  else{
    greet=document.getElementById('greeting');
    greet.innerHTML=name+"'s"+" ToDo List";
  }
}

function newTask() {
  var li = document.createElement("li");

  var chck=document.createElement('input');
  chck.type = 'checkbox';
  chck.className="chckboxs"  
  li.appendChild(chck);
  
  var inputText = document.getElementById("add-input").value;
  var textElement = document.createTextNode(inputText);
  li.appendChild(textElement);

  var del_btn = document.createElement("button");
  del_btn.innerHTML="delete";
  del_btn.className = "delButtonStyle";
  li.appendChild(del_btn);
    

  if (inputText == '') {
    alert("Please, add your task!!!!!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("add-input").value = "";
  
  chck.onclick=function(){
    if(li.className!="done")
      li.classList.add("done");
    else li.classList.remove("done");
  };

  var remove = document.getElementsByClassName("delButtonStyle");
  for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}









