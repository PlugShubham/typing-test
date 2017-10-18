    const startbutton=document.getElementById("start");
    const stopbutton=document.getElementById("stop");
    const hinttext=document.getElementById("hint-area");
    let hinttextvalue;
    function resetText(){
        document.getElementById("typingArea").value="";
        
        //console.log(val);
    }
    function showText(){
        
        hinttextvalue=hinttext.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non fringilla metus. Sed nec euismod velit. Phasellus venenatis vitae justo ac feugiat. Proin suscipit leo felis, id tristique tortor semper id. Pellentesque risus magna, efficitur ut ex ut, tristique vestibulum est. Integer semper porta felis. Integer neque diam, imperdiet vitae mi in, tempus placerat ipsum. Quisque ut enim vitae tellus varius feugiat et sit amet lacus. Cras tortor mauris, lacinia ut pharetra ac, posuere non neque. Morbi gravida, velit commodo posuere sollicitudin, orci erat ultrices magna, sit amet hendrerit nulla mi non nibh. Vivamus vel auctor tellus, vitae lacinia mauris.";
        
    }
    var counter=1;
    var count1=0;
    var start;
    var stop;  
    function resetText(){
        document.getElementById("typingArea").value="";
        counter=0;
        //console.log(val);
    }
    function startTime(){
        var date =new Date();
        start=((date.getMinutes())*60)+date.getSeconds();
    } 
      
        
    function testSpeed(){
        if(event.keyCode==32){
            counter++;
            //document.getElementById("showSpeed").innerHTML="WORDS:"+counter;
        }
    }
    
    function calAccuracy(){
        if((document.getElementById("typingArea").value)==""){
            document.getElementById("result").innerHTML="";
            alert ("enter the text first")
        }
        else{
        var date =new Date();
        stop=((date.getMinutes())*60)+date.getSeconds();
        var text1=hinttextvalue.split(" ");
        //console.log(text1);
        var text2=(document.getElementById("typingArea").value).split(" ");
        //console.log(text2);
        var textlength=text2.length;
        //console.log(textlength);
        for(var i=0;i<textlength;i++){
            if(text1[i]!=text2[i]){
                count1++;
            }
        }
        var resultValue= Math.round((counter+1)/((stop-start)/60));
        //console.log(counter+1+"this is textarea value");
        //console.log(count1+"this is value of count");
        var accuracy= Math.round((((counter+1)-count1)/(counter+1))*100);
        //console.log(accuracy);
        document.getElementById("result").innerHTML="<h3>Total Seconds:  "+(stop-start)+"<br>"+"Final Speed:  "+resultValue+" words/min<br>"
            +"Accuracy:"+accuracy+" %</h3>";
        }
    }
    startbutton.addEventListener("click",startTime);//start the timer
    startbutton.addEventListener("click",showText);// show text in hint area
    startbutton.addEventListener("click",resetText);// reset text area
    startbutton.addEventListener("click",function(){
        document.getElementById("stop").style.display="inline";//display stop button
    });
    stopbutton.addEventListener("click",calAccuracy);//result
