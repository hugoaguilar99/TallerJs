
let list = [];

function onClick() {
  let x = document.getElementById("t1").value;

  let ul = document.getElementById("list");

  ul.appendChild(List(x));
  list.push(x);
}

let List = x => {
  let li = document.createElement("li");
  li.innerHTML = x;
  return li;
}
