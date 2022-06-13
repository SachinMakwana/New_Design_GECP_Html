function s1(){
    document.getElementById('s-container-1').style.backgroundImage="url(./images/p1.jpg)";
    document.getElementById('s-container-2').style.backgroundImage="url(./images/p2.jpg)";
    document.getElementById('s-container-3').style.backgroundImage="url(./images/p3.jpg)";
    document.getElementById('s-container-4').style.backgroundImage="url(./images/p4.jpg)";
} 
function s2(){
    document.getElementById('s-container-1').style.backgroundImage="url(./images/1.jpg)";
    document.getElementById('s-container-2').style.backgroundImage="url(./images/2.jpg)";
    document.getElementById('s-container-3').style.backgroundImage="url(./images/3.jpg)";
    document.getElementById('s-container-4').style.backgroundImage="url(./images/4.jpg)";
}
let SlideIndex=1;
function prev(){
  if(SlideIndex==1){
	document.getElementById('manual').style.backgroundImage="url(./images/4.jpg)";
        SlideIndex=4;
  }
  else if(SlideIndex==2){
	document.getElementById('manual').style.backgroundImage="url(./images/1.jpg)";
        SlideIndex=1;
  }
  else if(SlideIndex==3){
	document.getElementById('manual').style.backgroundImage="url(./images/2.jpg)";
        SlideIndex=2;
  }
  else{
	document.getElementById('manual').style.backgroundImage="url(./images/3.jpg)";
        SlideIndex=3;
  }
  
}
function next(){
    
   if(SlideIndex==1){
	document.getElementById('manual').style.backgroundImage="url(./images/2.jpg)";
        SlideIndex=2;
  }
  else if(SlideIndex==2){
	document.getElementById('manual').style.backgroundImage="url(./images/3.jpg)";
        SlideIndex=3;
  }
  else if(SlideIndex==3){
	document.getElementById('manual').style.backgroundImage="url(./images/4.jpg)";
        SlideIndex=4;
  }
  else{
	document.getElementById('manual').style.backgroundImage="url(./images/1.jpg)";
        SlideIndex=1;
  }
  
}
function morle(){
 
  if(document.getElementById("morle").innerHTML=="...more"){
    document.getElementById("compro").style.display="contents";
    document.getElementById("morle").innerHTML="...less";
  }
  else{
    document.getElementById("compro").style.display="none";
    document.getElementById("morle").innerHTML="...more"
  }
}
let HIndex=1; //min -1240px max 0px
function NavRight(){
  if(HIndex==1){
    document.getElementById('w-900').style.left="-310px";
          HIndex=2;
    }
    else if(HIndex==2){
    document.getElementById('w-900').style.left="-620px";
          HIndex=3;
    }
    else if(HIndex==3){
    document.getElementById('w-900').style.left="-930px";
          HIndex=4;
    }
    else if(HIndex==4){
    document.getElementById('w-900').style.left="-1240px";
          HIndex=5;
    } 
    else {
      document.getElementById('w-900').style.left="0px";
            HIndex=1;
      } 

}
function NavLeft(){
  if(HIndex==1){
    document.getElementById('w-900').style.left="-1240px";
          HIndex=5;
    }
    else if(HIndex==2){
    document.getElementById('w-900').style.left="0px";
          HIndex=1;
    }
    else if(HIndex==3){
    document.getElementById('w-900').style.left="-310px";
          HIndex=2;
    }
    else if(HIndex==4){
    document.getElementById('w-900').style.left="-620px";
          HIndex=3;
    } 
    else {
      document.getElementById('w-900').style.left="-930px";
            HIndex=4;
      } 

}
function a1(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h1.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-1<br/>Team-Leader";
      document.getElementById('first-alumni').style.display="block";
      document.getElementById('second-alumni').style.display="none";
      document.getElementById('third-alumni').style.display="none";
}
function a2(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h2.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-2<br/>Senior Devloper";
      document.getElementById('first-alumni').style.display="none";
      document.getElementById('second-alumni').style.display="block";
      document.getElementById('third-alumni').style.display="none";
}
function a3(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h3.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-3<br/>Project-Manager";
      document.getElementById('first-alumni').style.display="none";
      document.getElementById('second-alumni').style.display="none";
      document.getElementById('third-alumni').style.display="block";
}