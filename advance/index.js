var items = ["apple", "mango", "glasses", "tyres"];
var i;
var text;
var len;



function trigger(){
var data = document.getElementById("in1").value;
items.push(data);


}

function check(){
  for (i = 0, len = items.length, text = ""; i < len; i++) {
  text += "<li>" + items[i] + "<br>";
  document.getElementById('demo').innerHTML = text;
}

}
function remove(){
  items.pop();  

}
