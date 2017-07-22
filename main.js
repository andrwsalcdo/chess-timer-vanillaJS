
    let playerOne = {
        id: 1, 
        sec: 240,
        btn: document.getElementById("player1"), 
        timer: document.getElementById('timer1'), 
        going: 0 
    }; 

    let playerTwo = {
        id: 2, 
        sec: 240, 
        btn: document.getElementById("player2"), 
        timer: document.getElementById('timer2'), 
        going: 0 
    }

    /* function for onClick events. 
        Starts and Pauses the timers. 
        args: 
            btnObj = this objects represents the Player that was clicked 
            oppObj = the object that changes state due to click event, or 
                it's on the Player  on the other side of the page. 
    */
    function stopGo(btnObj, oppObj) {
        if(oppObj.going == 0) {
            oppObj.going = 1; 
            decrement(oppObj); 
            btnObj.going = 0; 
            oppObj.btn.innerHTML = "Your Turn!"; 
            btnObj.btn.innerHTML = "Player "+ btnObj.id; 
        } else if (btnObj.btn.innerHTML = "Your Turn!") {
            btnObj.going = 0; 
            btnObj.btn.innerHTML = "Player "+ btnObj.id; 
            oppObj.going = 1; 
        }
    }

    /* fn that decreases timer from  4 mins. 
        takes a player object
    */
    function decrement(player) {
        if(player.going == 1) {
            setTimeout(() => {
                //sec count down
                player.sec--; 
                //display the time on the page
                player.timer.innerHTML = displayTime(player);                 
                //continue decrementing the timer
                decrement(player); 
            }, 1000)
        } 
    }

    // figures out the time to display on the page
    function displayTime(player) {
        let mins = Math.floor( player.sec / 60 ); 
        let secs = Math.floor( player.sec % 60); 

        // time -> 01:13 or :01:09
       return (secs >= 10) ? mins+':'+secs : mins+':0'+secs; 
    }


   
   
  

