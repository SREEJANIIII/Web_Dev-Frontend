let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let hrs=0;
let min=0;
let sec=0;
let msec=0;


function startTimeR() {
       msec++;
    if(msec==100){
        sec++;
        msec=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hrs++;
        min=0;
    }
    document.getElementById('timer').textContent=`${hrs.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}:${msec.toString().padStart(2,'0')}`;
}
stop.onclick=function(){
    clearInterval(timer);
}
reset.onclick=function(){
    clearInterval(timer);
    hrs=0;
    min=0;
    sec=0;
    msec=0;
    document.getElementById('timer').textContent=`${hrs.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}:${msec.toString().padStart(2,'0')}`;
}
start.onclick=function(){
    timer=setInterval(startTimeR,10);
}