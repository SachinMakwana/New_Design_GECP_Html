function s1(){
    document.getElementById('s-container-1').style.backgroundImage="url(./images/p1.jpg)";
    document.getElementById('s-container-2').style.backgroundImage="url(./images/p2.jpg)";
    document.getElementById('s-container-3').style.backgroundImage="url(./images/p3.jpg)";
    document.getElementById('s-container-4').style.backgroundImage="url(./images/p4.jpg)";
    document.getElementById('p1').style.backgroundColor="white";
    document.getElementById('p2').style.backgroundColor="transparent";
} 
function s2(){
    document.getElementById('s-container-1').style.backgroundImage="url(./images/1.jpg)";
    document.getElementById('s-container-2').style.backgroundImage="url(./images/2.jpg)";
    document.getElementById('s-container-3').style.backgroundImage="url(./images/3.jpg)";
    document.getElementById('s-container-4').style.backgroundImage="url(./images/4.jpg)";
    document.getElementById('p2').style.backgroundColor="white";
    document.getElementById('p1').style.backgroundColor="transparent";
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
      if(window.screen.width>=1376){
            if(HIndex==1){
                  document.getElementById('w-900').style.left="-25%";
                        HIndex=2;
                  }
                  else if(HIndex==2){
                  document.getElementById('w-900').style.left="-50%";
                        HIndex=3;
                  }
                  else if(HIndex==3){
                  document.getElementById('w-900').style.left="-75%";
                        HIndex=4;
                  }
                  else if(HIndex==4){
                  document.getElementById('w-900').style.left="-100%";
                        HIndex=5;
                  } 
                  else {
                    document.getElementById('w-900').style.left="0px";
                          HIndex=1;
                    } 
      }
else{      
  if(HIndex==1){
    document.getElementById('w-900').style.left="-275px";
          HIndex=2;
    }
    else if(HIndex==2){
    document.getElementById('w-900').style.left="-550px";
          HIndex=3;
    }
    else if(HIndex==3){
    document.getElementById('w-900').style.left="-825px";
          HIndex=4;
    }
    else if(HIndex==4){
    document.getElementById('w-900').style.left="-1100px";
          HIndex=5;
    } 
    else {
      document.getElementById('w-900').style.left="0px";
            HIndex=1;
      } 
}    

}
function NavLeft(){
if(window.screen.width>=1376){
      if(HIndex==1){
            document.getElementById('w-900').style.left="-100%";
                  HIndex=5;
            }
            else if(HIndex==2){
            document.getElementById('w-900').style.left="0px";
                  HIndex=1;
            }
            else if(HIndex==3){
            document.getElementById('w-900').style.left="-25%";
                  HIndex=2;
            }
            else if(HIndex==4){
            document.getElementById('w-900').style.left="-50%";
                  HIndex=3;
            } 
            else {
              document.getElementById('w-900').style.left="-75%";
                    HIndex=4;
            } 
}      
else{      
  if(HIndex==1){
    document.getElementById('w-900').style.left="-1100px";
          HIndex=5;
    }
    else if(HIndex==2){
    document.getElementById('w-900').style.left="0px";
          HIndex=1;
    }
    else if(HIndex==3){
    document.getElementById('w-900').style.left="-275px";
          HIndex=2;
    }
    else if(HIndex==4){
    document.getElementById('w-900').style.left="-550px";
          HIndex=3;
    } 
    else {
      document.getElementById('w-900').style.left="-825px";
            HIndex=4;
      } 
}      

}
function a1(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h1.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-1<br/>Team-Leader";
      document.getElementById('first-alumni').style.display="block";
      document.getElementById('second-alumni').style.display="none";
      document.getElementById('third-alumni').style.display="none";
      document.getElementById('a1').style.backgroundColor="#00b7ff";
      document.getElementById('a2').style.backgroundColor="transparent";
      document.getElementById('a3').style.backgroundColor="transparent";
}
function a2(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h2.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-2<br/>Senior Devloper";
      document.getElementById('first-alumni').style.display="none";
      document.getElementById('second-alumni').style.display="block";
      document.getElementById('third-alumni').style.display="none";
      document.getElementById('a2').style.backgroundColor="#00b7ff";
      document.getElementById('a1').style.backgroundColor="transparent";
      document.getElementById('a3').style.backgroundColor="transparent";
}
function a3(){
      document.getElementById('alumni-image').style.backgroundImage="url(./images/h3.jpg)";
      document.getElementById('alumni-name').innerHTML="Student-3<br/>Project-Manager";
      document.getElementById('first-alumni').style.display="none";
      document.getElementById('second-alumni').style.display="none";
      document.getElementById('third-alumni').style.display="block";
      document.getElementById('a3').style.backgroundColor="#00b7ff";
      document.getElementById('a2').style.backgroundColor="transparent";
      document.getElementById('a1').style.backgroundColor="transparent";
}
var CouncilIndex=1;
function NextSC(){
      if(CouncilIndex==1){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('Sname').innerHTML="Amit Shah";
            document.getElementById('Swork').innerHTML="SS";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="block";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=2;
      }
      else  if(CouncilIndex==2){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('Sname').innerHTML="Smriti Irani";
            document.getElementById('Swork').innerHTML="CS";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="block";
            CouncilIndex=3;
      }
      else  if(CouncilIndex==3){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('Sname').innerHTML="Nitin Gadkari";
            document.getElementById('Swork').innerHTML="GS";
            document.getElementById('first-council').style.display="block";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=4;
      }
      else  if(CouncilIndex==4){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('Sname').innerHTML="Piyush Goyal";
            document.getElementById('Swork').innerHTML="Team-Leader";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="block";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=5;
      }
      else{
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('Sname').innerHTML="Prakash Javdekar";
            document.getElementById('Swork').innerHTML="Team-Leader";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="block";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=1;
      }

}
function PrevSC(){
      if(CouncilIndex==1){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('Sname').innerHTML="Piyush Goyal";
            document.getElementById('Swork').innerHTML="Team-Leader";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="block";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=5;
      }
      else  if(CouncilIndex==2){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('Sname').innerHTML="Prakash Javdekar";
            document.getElementById('Swork').innerHTML="Team-Leader";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="block";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=1;
      }
      else  if(CouncilIndex==3){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('Sname').innerHTML="Amit Shah";
            document.getElementById('Swork').innerHTML="SS";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="block";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=2;
      }
      else  if(CouncilIndex==4){
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('Sname').innerHTML="Smriti Irani";
            document.getElementById('Swork').innerHTML="CS";
            document.getElementById('first-council').style.display="none";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="block";
            CouncilIndex=3;
      }
      else{
            document.getElementById('bg-s1').style.backgroundImage="url(./images/h4.jpg)";
            document.getElementById('bg-s2').style.backgroundImage="url(./images/h5.jpg)";
            document.getElementById('bg-s3').style.backgroundImage="url(./images/h1.jpg)";
            document.getElementById('bg-s4').style.backgroundImage="url(./images/h2.jpg)";
            document.getElementById('bg-s5').style.backgroundImage="url(./images/h3.jpg)";
            document.getElementById('Sname').innerHTML="Nitin Gadkari";
            document.getElementById('Swork').innerHTML="GS";
            document.getElementById('first-council').style.display="block";
            document.getElementById('second-council').style.display="none";
            document.getElementById('third-council').style.display="none";
            document.getElementById('fourth-council').style.display="none";
            document.getElementById('fifth-council').style.display="none";
            CouncilIndex=4;
      }

}
function act1(){
      document.getElementById("actd-1").innerHTML="<h6 class='blue'>The First True Genrator On the Internet</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("actd-2").innerHTML="<h6 class='blue'>Versions Have Evolved Over The Years</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("acti-2").style.backgroundImage="url(./images/marathon.webp)";
      document.getElementById("acti-1").style.backgroundImage="url(./images/camera.jpg)";
      document.getElementById('a1').style.backgroundColor="#00b7ff";
      document.getElementById('a2').style.backgroundColor="transparent";
      document.getElementById('a3').style.backgroundColor="transparent";
}
function act2(){
      document.getElementById("actd-1").innerHTML="<h6 class='blue'>The First True Genrator On the Internet</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("actd-2").innerHTML="<h6 class='blue'>Versions Have Evolved Over The Years</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("acti-2").style.backgroundImage="url(./images/parties.webp)";
      document.getElementById("acti-1").style.backgroundImage="url(./images/garba.jpg)";
      document.getElementById('a2').style.backgroundColor="#00b7ff";
      document.getElementById('a3').style.backgroundColor="transparent";
      document.getElementById('a1').style.backgroundColor="transparent";
}
function act3(){
      document.getElementById("actd-1").innerHTML="<h6 class='blue'>The First True Genrator On the Internet</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("actd-2").innerHTML="<h6 class='blue'>Versions Have Evolved Over The Years</h6><p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>";
      document.getElementById("acti-2").style.backgroundImage="url(./images/marathon.webp)";
      document.getElementById("acti-1").style.backgroundImage="url(./images/camera.jpg)";
      document.getElementById('a3').style.backgroundColor="#00b7ff";
      document.getElementById('a2').style.backgroundColor="transparent";
      document.getElementById('a1').style.backgroundColor="transparent";
}
let Cindex=1;
function nextcomp(){
      if(Cindex==1){
            document.getElementById("comp-1").style.backgroundImage="url(./images/Torrent-power.png)"; 
            document.getElementById("compstate-1").innerHTML=" lorem ipsum of Torrent-power ";
            document.getElementById("comp-2").style.backgroundImage="url(./images/ap.png)"; 
            document.getElementById("compstate-2").innerHTML=" lorem ipsum of AsianPaints ";
            Cindex=2;
      }
      else if(Cindex==2){
            document.getElementById("comp-1").style.backgroundImage="url(./images/amazon.jpg)"; 
            document.getElementById("compstate-1").innerHTML=" lorem ipsum of amazon ";
            document.getElementById("comp-2").style.backgroundImage="url(./images/byjus.jfif)"; 
            document.getElementById("compstate-2").innerHTML=" lorem ipsum of byjus ";
            Cindex=3;
      }
      else if(Cindex==3){
            document.getElementById("comp-1").style.backgroundImage="url(./images/ABB.jpg)"; 
            document.getElementById("compstate-1").innerHTML='<p class="blue align-center">Lorem ipsum dolor</p>  sit amet consectetur adipisicing elit. Ut corrupti dolorum, aliquid fuga a reiciendis repellendus aliquam dolorem doloribus dolore voluptatem eaque aperiam, quod suscipit iusto esse nostrum amet nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione exercitationem consequuntur est, corrupti nulla cupiditate, odio corporis enim natus officiis beatae repellat consequatur ab rem autem distinctio qui laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam minus, facilis accusantium magni tempore, nobis iure explicabo labore incidunt officiis totam exercitationem animi asperiores quis dolore quas a aspernatur!';
            document.getElementById("comp-2").style.backgroundImage="url(./images/AMW.jpg)"; 
            document.getElementById("compstate-2").innerHTML='<p class="blue align-center">Lorem ipsum dolor</p> sit amet consectetur adipisicing elit. Ut corrupti dolorum, aliquid fuga a reiciendis repellendus aliquam dolorem doloribus dolore voluptatem eaque aperiam, quod suscipit iusto esse nostrum amet nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione exercitationem consequuntur est, corrupti nulla cupiditate, odio corporis enim natus officiis beatae repellat consequatur ab rem autem distinctio qui laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam minus, facilis accusantium magni tempore, nobis iure explicabo labore incidunt officiis totam exercitationem animi asperiores quis dolore quas a aspernatur!';
            Cindex=1;
      }
}
function prevcomp(){
      if(Cindex==1){
            document.getElementById("comp-1").style.backgroundImage="url(./images/amazon.jpg)"; 
            document.getElementById("compstate-1").innerHTML=" lorem ipsum of amazon ";
            document.getElementById("comp-2").style.backgroundImage="url(./images/byjus.jfif)"; 
            document.getElementById("compstate-2").innerHTML=" lorem ipsum of byjus ";
            Cindex=3;
      }
      else if(Cindex==2){
            document.getElementById("comp-1").style.backgroundImage="url(./images/ABB.jpg)"; 
            document.getElementById("compstate-1").innerHTML='<p class="blue align-center">Lorem ipsum dolor</p>  sit amet consectetur adipisicing elit. Ut corrupti dolorum, aliquid fuga a reiciendis repellendus aliquam dolorem doloribus dolore voluptatem eaque aperiam, quod suscipit iusto esse nostrum amet nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione exercitationem consequuntur est, corrupti nulla cupiditate, odio corporis enim natus officiis beatae repellat consequatur ab rem autem distinctio qui laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam minus, facilis accusantium magni tempore, nobis iure explicabo labore incidunt officiis totam exercitationem animi asperiores quis dolore quas a aspernatur!';
            document.getElementById("comp-2").style.backgroundImage="url(./images/AMW.jpg)"; 
            document.getElementById("compstate-2").innerHTML='<p class="blue align-center">Lorem ipsum dolor</p> sit amet consectetur adipisicing elit. Ut corrupti dolorum, aliquid fuga a reiciendis repellendus aliquam dolorem doloribus dolore voluptatem eaque aperiam, quod suscipit iusto esse nostrum amet nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione exercitationem consequuntur est, corrupti nulla cupiditate, odio corporis enim natus officiis beatae repellat consequatur ab rem autem distinctio qui laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam minus, facilis accusantium magni tempore, nobis iure explicabo labore incidunt officiis totam exercitationem animi asperiores quis dolore quas a aspernatur!';
            Cindex=1;
      }
      else if(Cindex==3){
            document.getElementById("comp-1").style.backgroundImage="url(./images/Torrent-power.png)"; 
            document.getElementById("compstate-1").innerHTML=" lorem ipsum of Torrent-power. ";
            document.getElementById("comp-2").style.backgroundImage="url(./images/ap.png)"; 
            document.getElementById("compstate-2").innerHTML=" lorem ipsum of AsianPaints ";
            Cindex=2;
      }
}