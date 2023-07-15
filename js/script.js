//console.log(new Date());
//console.log(currentYear+1);
//console.log(newYear);
//console.log(currentDate);
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");




function razor1(){
const currentYear=new Date().getFullYear();
const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);
const currentDate= new Date();
const diff=newYear-currentDate;
const razordays=Math.floor(diff/1000/60/60/24);
const razorhours=Math.floor((diff/1000/60/60)%24);
const razormins=Math.floor((diff/1000/60)%60);
const razorseconds=Math.floor((diff/1000)%60);
days.innerHTML=razordays<10?"0"+razordays:razordays;
hours.innerHTML=razorhours<10?"0"+razorhours:razorhours;
minutes.innerHTML=razormins<10?"0"+razormins:razormins;
seconds.innerHTML=razorseconds<10?"0"+razorseconds:razorseconds;


//console.log(razordays+" " +razorhours+" "+razormins+" "+razorseconds);

}

setInterval(razor1,1000);
//razor1();

set
//console.log(diff/1000/60/60/24);

//console.log(razordays);

//console.log(razorhours);

//console.log(razormins);

//console.log(razorseconds);
/*
1000ms = 1s
60s = 1m
60m = 1hr
24hrs = 1day
*/

