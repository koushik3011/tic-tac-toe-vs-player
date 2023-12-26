

var count =1;
for (let index = 0; index < document.querySelectorAll(".board").length; index++) {
    document.querySelectorAll(".board")[index].addEventListener("click",function (){
  
 if (gameover(arr)) {
    document.querySelector(".chance").innerHTML=" game over ";  
 } else{  
if (full(arr)) {
    document.querySelector(".result").innerHTML="DRAW";
    document.querySelector(".chance").innerHTML=" game over ";  
   for (let pl = 0; pl < document.querySelectorAll(".board").length; pl++) {
    document.querySelectorAll(".board")[pl].style.color="green"; 
   }
  }
else{

        if (count%2==0) {
            document.querySelector(".chance").innerHTML=" chance of O";
     if (ind[index]==true) {
        alert("Select other box ");
       
     }else{

        this.innerHTML="X";
       count++;
       ind[index]=true;
       var i =Math.floor(index/3);
       var j =index%3;
       arr[i][j]="X";
//alert(i+" "+j);
     }
    }else{
        document.querySelector(".chance").innerHTML=" chance of X";
        if (ind[index]==true) {
            alert("Select other box ");
           
         }else{
            this.innerHTML="O";
            this.style.backgroundcolor="red";
           count++;
           ind[index]=true;
           var i =Math.floor(index/3);
           var j =index%3
           arr[i][j]="O";
//alert(i+" "+j);
         }
    }
}
 }
 } 
 
 );
    
}

var arr=[["_","_","_"],["_","_","_"],["_","_","_"]];
var ind=[];

function full(array ) {
    for (let i = 0; i < 3; i++) {
        for(let j=0;j<3;j++) { 
          if (array[i][j]=="_") {
            return false
          }
    }
    }
    return true;
}

function gameover(array) {
    if (array[0][0]=="X"&&array[1][1]=="X"&&array[2][2]=="X")
        {
            document.querySelector(".result").innerHTML="Xwins  ";
            
            document.querySelectorAll(".board")[0].style.color="red";
            document.querySelectorAll(".board")[4].style.color="red";
            document.querySelectorAll(".board")[8].style.color="red";
            
            return true;
        } 
     if (array[0][2]=="X"&&array[1][1]=="X"&&array[2][0]=="X")
        {
            document.querySelector(".result").innerHTML="Xwins";
            document.querySelectorAll(".board")[2].style.color="red";
            document.querySelectorAll(".board")[4].style.color="red";
            document.querySelectorAll(".board")[6].style.color="red";
            
            return true;
        } 
  
  // rows check
        for(let i=0;i<3;i++) { 
    var f =1;
    for(let j=0;j<3;j++) {
    if (array[i][j]=="O"|| array[i][j]=="_") {
            f=0;
        }   
    }
     if (f==1) {
        document.querySelector(".result").innerHTML="Xwins";
      for (let p=i*3;p<(i*3)+3;p++){
        document.querySelectorAll(".board")[p].style.color="red";
      }
   return true;
    }
  }
//column check    
        for(let i=0;i<3;i++) { 
    var f =1;
    for(let j=0;j<3;j++) {
    if (array[j][i]=="O"|| array[j][i]=="_") {
            f=0;
        }   
    }
     if (f==1) {
        document.querySelector(".result").innerHTML="Xwins";
      for (let p=0;p<3;p++){
        document.querySelectorAll(".board")[i].style.color="red";
        i=i+3;
      }
   return true;
    }
  }
    
// for o
if (array[0][0]=="O"&&array[1][1]=="O"&&array[2][2]=="O")
{
    document.querySelector(".result").innerHTML="Owins  ";
    
    document.querySelectorAll(".board")[0].style.color="blue";
    document.querySelectorAll(".board")[4].style.color="blue";
    document.querySelectorAll(".board")[8].style.color="blue";
    
    return true;
} 
if (array[0][2]=="O"&&array[1][1]=="O"&&array[2][0]=="O")
{
    document.querySelector(".result").innerHTML="Owins";
    document.querySelectorAll(".board")[2].style.color="blue";
    document.querySelectorAll(".board")[4].style.color="blue";
    document.querySelectorAll(".board")[6].style.color="blue";
    
    return true;
} 


  for(let i=0;i<3;i++) { 
    var f =1;
    for(let j=0;j<3;j++) {
    if (array[i][j]=="X"|| array[i][j]=="_") {
            f=0;
        }   
    }
     if (f==1) {
        document.querySelector(".result").innerHTML="Owins";
      for (let p=i*3;p<(i*3)+3;p++){
        document.querySelectorAll(".board")[p].style.color="blue";
      }
   return true;
    }
  }
//column check    
        for(let i=0;i<3;i++) { 
    var f =1;
    for(let j=0;j<3;j++) {
    if (array[j][i]=="X"|| array[j][i]=="_") {
            f=0;
        }   
    }
     if (f==1) {
        document.querySelector(".result").innerHTML="Owins";
      for (let p=0;p<3;p++){
        document.querySelectorAll(".board")[i].style.color="blue";
        i=i+3;
      }
   return true;
    }
  }

      return false;
}
