let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            datasets: [
                {
                    label: "work load",
                    data: [2, 9, 3, 17, 6, 3, 7],
                    backgroundColor:"#bcd4e6",
                },
                {
                    label: "free hours",
                    data: [2, 2, 5, 5, 2, 1, 10],
                    backgroundColor:"#e7feff",
                },
            ],
        },
    });
    const xValues = ["JAN", "FEB", "MAR", "APR", "MAY"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("chart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "our  Production sales 2024"
    }
  }
});
//calendar
const daycontainer=document.querySelector(".days"),
nextbtn=document.querySelector(".btn-next"),
prevbtn=document.querySelector(".btn-prev"),
todaybtn=document.querySelector(".btn-today"),
month=document.querySelector(".month");
const months=["jan","feb","march","april","may","june","july","august","sep","oct","nov","dec"];
const days=["sun","mon","tus","wed","thu","fri","sat"];
const date=new Date();
let currentmonth=date.getMonth();
let currentyear=date.getFullYear();
function rendercalendar(){
  date.setDate(1);
  const firstday=new Date(currentyear,currentmonth,1);
  const lastday=new Date(currentyear,currentmonth + 1 , 0);
  const lastdayindex=lastday.getDay();
  const lastdaydate=lastday.getDate();
  const prevlastday=new Date(currentyear ,currentmonth ,0);
  const prevlastdaydate=prevlastday.getDate();
  const nextdays = 7 - lastdayindex -1;
  month.innerHTML=`${months[currentmonth]} ${currentyear}`;
  let days="";
  for (let x =firstday.getDay(); x > 0; x--) {
    days += `<div class="day day-prev">${prevlastdaydate - x + 1}</div>`;
  }
   for(let i=1; i <= lastdaydate ;i++){
    if(i===new Date().getDate()&&
  currentmonth=== new Date().getMonth()&&
  currentyear === new Date().getFullYear()){
    days +=`<div class="day today">${i}</div>`;
  }
  else{
    days +=`<div class="day">${i}</div>`;

  }
  }
  for(let j=1;j<= nextdays;j++){
    days +=`<div class="day day-next">${j}</div>`;

  }
  daycontainer.innerHTML=days;
  hideTodaybtn();
}
nextbtn.addEventListener("click",function(){
  currentmonth++;
  if(currentmonth >11){
    currentmonth=0;
    currentyear =currentyear+1;
  }
 rendercalendar();
});
prevbtn.addEventListener("click",function(){
currentmonth--;
if(currentmonth<0){
currentyear--;
currentmonth =11;
}
rendercalendar();
});
todaybtn.addEventListener("click",function(){
currentyear=date.getFullYear();
currentmonth=date.getMonth();
rendercalendar();
});
rendercalendar();

function  hideTodaybtn(){
if(currentmonth === new Date().getMonth()&& 
  currentyear=== new Date().getFullYear()){
    todaybtn.style.display="none"
  }
  else{
    todaybtn.style.display="flex";
  }
}



    