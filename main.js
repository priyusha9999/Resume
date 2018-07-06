function loadjson(file,callback){
  var a=new XMHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if(a.readyState==4 && a.status=="200"){
      callback(a.responseText);
    }
  }
  a.send(null);
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  console(data.basics);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career Object";
career.appendChild(document.createElement("HR"));
right.appendChild(career);
function career(Priyusha){
  var p=document.createElement("p");
  cop.textContent=Priyusha.basic;
  career.appendChild(cop);
}
right.appendChild(career);
