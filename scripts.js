// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", ()=>{   
    let rocketPosX = 0;
    let rocketPosY = 0;
    
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const status =  document.getElementById("flightStatus");
    const bg = document.getElementById("shuttleBackground"); 
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");


takeoffButton.addEventListener("click", ()=>{ 
    if( ! confirm("Confirm that the shuttle is ready for takeoff.") ){
        alert("Shuttle not ready!"); 

    } else {
        status.innerHTML = "Shuttle in fight";
        bg.style.backgroundColor = 'blue'; 
        shuttleHeight.innerHTML = 10000;  

                
    }

    
});

landButton.addEventListener("click", () => { 
alert("The shuttle is landing. Landing gear engaged");
status.innerHTML = "The shuttle has landed.";
bg.style.backgroundColor = 'green';
shuttleHeight.innerHTML = 0;

});

abortMission.addEventListener("click", () => {

if (!confirm("Confirm that you want to abort the missin.") ){
    alert("Mission continued.");
}else {
    status.innerHTML = "Mission aborted.";
    bg.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;

}
});

document.addEventListener("click", function(event){



    if (event.target.id === "up"){
        rocketPosY += 10;
        rocket.style.marginBottom =   rocketPosY + 'px';
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }

    if(event.target.id === "down"){
        rocketPosY -= 10;
        rocket.style.marginBottom =   rocketPosY + 'px';
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    }

    if(event.target.id === "left"){
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

    if(event.target.id === "right"){
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }

});




});
