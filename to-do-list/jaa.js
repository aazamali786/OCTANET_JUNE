let sb = document.querySelector("#name");
let va = document.querySelector(".two");


const myfunc = () => {
  //adding elements
  let box = document.createElement("div");
  box.setAttribute("class", "list");


  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "chkbox");

  box.appendChild(checkbox);

  let add = document.createElement("li");
  add.setAttribute("class", "txt");
  let tn = document.createTextNode(sb.value);
  //checking if input is not empty
  if (sb.value == "") {
    alert("Input something in Box");
    return;
  }

  //add list items
  add.appendChild(tn);
  box.appendChild(add);
  va.appendChild(box);

  // //setting image to button
  // let imagee= document.createElement("img");
  // imagee.src = "/shot.webp";

  //set search value to empty
  sb.value = "";

  //created delete button-->(dltbtn)
  let dltbtn = document.createElement("button");
  dltbtn.setAttribute("class", "button");

  let tex = document.createTextNode("Delete");
  dltbtn.appendChild(tex);
  box.appendChild(dltbtn);
  

  //remove unwanted task
  dltbtn.onclick = () => {
    box.remove();    
  };

  checkbox.onclick = ()=>{
    if(checkbox.checked){
      add.style.textDecoration = "line-through";
    }
    else{
      add.style.textDecoration = "";
    }
  }
};