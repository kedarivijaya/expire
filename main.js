function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
fun_education(data.Education);
fun_achievements(data.achivements);
fun_skills(data.skills);
});


var div2=document.getElementById("child2");


function fun_career(career_obj){
  var heading1=document.createElement("h2");
  heading1.textContent="career objective";
  div2.appendChild(heading1);


  var horz=document.createElement("hr");
  heading1.appendChild(horz);


  var Info=document.createElement("p");
  div2.appendChild(Info);
  Info.textContent=career_obj.Info;
}
function fun_education(edu){
  var list1=document.createElement("h2");
  list1.textContent="Educational Qualifications";
  div2.appendChild(list1);

  var hr=document.createElement("hr");
  div2.appendChild(hr);

  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<edu.length;i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);
    var listItem1=document.createElement("p");
    listItem1.textContent=edu[i].institute;
    list.appendChild(listItem1);
    var listItem2=document.createElement("p");
    listItem2.textContent=edu[i].data;
    list.appendChild(listItem2);
  }
}


function fun_achievements(achieve){
  var heading2=document.createElement("h2");
  heading2.textContent="Achievements";
  div2.appendChild(heading2);

  var horz=document.createElement("hr");
  heading2.appendChild(horz);

  var ul=document.createElement("ul");
  div2.appendChild(ul);
// console.log(achieve.length);
  for(var i=0;i<achieve.length;i++){
    var listItem3=document.createElement("li");
    listItem3.innerHTML=achieve[i].name;
    ul.appendChild(listItem3);
  }

}
function fun_skills(tech){
  var heading3=document.createElement("h2");
  heading3.textContent="Technical Skills";
    div2.appendChild(heading3);

    var hr=document.createElement("hr");
    heading3.appendChild(hr);
    var tr="";
    var table=document.createElement("table");
    div2.appendChild(table);
  // console.log(achieve.length);
    for(var i=0;i<tech.length;i++){
      tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
    }
    table.innerHTML=tr;
    table.border="1";
  }
