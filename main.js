let dayinput = document.querySelector(".day-box input");
let daylabel = document.querySelector(".day-box label");
let daybox = document.querySelector(".day-box");

let monthinput = document.querySelector(".month-box input");
let monthlabel = document.querySelector(".month-box label");
let monthbox = document.querySelector(".month-box");

let yearinput = document.querySelector(".year-box input");
let yearlabel = document.querySelector(".year-box label");
let yearbox = document.querySelector(".year-box");

let pyears = document.querySelector(".years span");
let pmonths = document.querySelector(".months span");
let pdays = document.querySelector(".days span");

let btn = document.querySelector(".btn");

btn.onclick = function () {
  check();
};
function check(){
if(dayinput.value=="" && monthinput.value=="" && yearinput.value==""){
  let alle=document.querySelectorAll(".empty");
  alle.forEach((i)=>i.style.display='block');

  let allinput=document.querySelectorAll('input');
  allinput.forEach(i=>i.style.borderColor="var(--Lightred)");

  let allv=document.querySelectorAll('.valid');
  allv.forEach((i)=>i.style.display='none');

  let alllabel=document.querySelectorAll('label');
  alllabel.forEach(i=>i.style.color='var(--Lightred)')
}
 if(dayinput.value>31)
{
  document.querySelector('.day-box .valid').style.display='block';
  document.querySelector(".day-box .empty").style.display='none';
 
  daylabel.style.color="var(--Lightred)";
 
  dayinput.style.borderColor="var(--Lightred)";
}
if(monthinput.value>12){
  document.querySelector('.month-box .valid').style.display='block';
  document.querySelector(".month-box .empty").style.display='none';
  
  monthlabel.style.color="var(--Lightred)";
 
  monthinput.style.borderColor="var(--Lightred)";
}

if(yearinput.value>2023){
  document.querySelector('.year-box .valid').style.display='block';
  document.querySelector(".year-box .empty").style.display='none';
  
  yearlabel.style.color="var(--Lightred)";
  
  yearinput.style.borderColor="var(--Lightred)";
}
if(dayinput.value==""){
  document.querySelector("day-box .empty").style.display='block';
  document.querySelector('.day-box .valid').style.display='none';
 
  daylabel.style.color="var(--Lightred)";
  
  dayinput.style.borderColor="var(--Lightred)";
}
if(monthinput.value==""){
  document.querySelector("month-box .empty").style.display='block';
  document.querySelector('month-box .valid').style.display='none';
  monthlabel.style.color="var(--Lightred)";
 
  monthinput.style.borderColor="var(--Lightred)";
}
 if(yearinput.value==""){
document.querySelector("year-box.empty").style.display='block';
  document.querySelector('year-box .valid').style.display='none';
  yearlabel.style.color="var(--Lightred)";
 
  yearinput.style.borderColor="var(--Lightred)";

}
if(dayinput.value!="" && monthinput.value!="" && yearinput.value!=""
&& dayinput.value<=31 &&monthinput.value<=12 && yearinput.value<=2023
) {
  
  let allinput=document.querySelectorAll('input');
  allinput.forEach(i=>i.style.borderColor="grey");

  let alle=document.querySelectorAll(".empty");
  alle.forEach((i)=>i.style.display='none');

  let allv=document.querySelectorAll('.valid');
  allv.forEach((i)=>i.style.display='none');

  let alllabel=document.querySelectorAll('label');
  alllabel.forEach(i=>i.style.color='black')

  calculataDate();
}
}


function calculataDate() {
  let date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let [y1, m1, d1] = [yearinput.value, monthinput.value, dayinput.value];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let y = y2 - y1;
  pyears.innerHTML = y;
  let m = m2 - m1;
  pmonths.innerHTML = m;
  let d = d2 - d1;
  pdays.innerHTML = d;
}
