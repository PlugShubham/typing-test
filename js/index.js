    var counter=0;
    var start;
    var stop;    
    function startTime(){
        var date =new Date();
        start=((date.getMinutes())*60)+date.getSeconds();
    } 
      
        
    function testSpeed(){
        if(event.keyCode==32){
            counter++;
            document.getElementById("showSpeed").innerHTML="WORDS:"+counter;
        }
    }
    
    function stopTime(){
        var date =new Date();
        stop=((date.getMinutes())*60)+date.getSeconds();
        var resultValue= Math.round(counter/((stop-start)/60));
        document.getElementById("result").innerHTML="<h3>Total Seconds:  "+(stop-start)+"<br>"+"Final Speed:  "+resultValue+" words/min</h3>";
    }