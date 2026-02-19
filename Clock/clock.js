function updateClock(){
    const now = new Date();
    const hrs=now.getHours().toString().padStart(2,'0');
    const min=now.getMinutes().toString().padStart(2,'0');
    const sec=now.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').textContent=`${hrs}:${min}:${sec}`;
}
updateClock();
setInterval(updateClock,1000); // Update every second