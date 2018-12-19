$(document).ready(function(){
   
    
    
    
    
$(".fancybox").fancybox();
	
    
  
    
  
  
        
 
  
       
    
   
   
});



/*JAVA SCRIPT CODE*/
var correct;
var action;

document.getElementById('start').onclick = function(){
   
    
     generateQA();
}


function generateQA(){
    var x= 3*Math.round(3*Math.random());
     var y= 2*Math.round(4*Math.random());
    correctAnswer=x+y;
    document.getElementById("question").innerHTML= x+ "+" +y;
    var correct=1+Math.round(3*Math.random());
    document.getElementById("answer"+correct).innerHTML=correctAnswer;//fill in button the correct answer
    //fill in other buttons with wrong answer
    var answers=[correctAnswer];
    for(i=1;i<5;i++){
        if(i !==correct){
            var wrong;
           
         do{
              
                wrong = (Math.round(Math.random()))+(Math.round(Math.random()));
         
         }  while(answers.indexOf(wrong)>-1)
            document.getElementById("answer"+i).innerHTML=wrong;
            answers.push(wrong);
            
        }
    }
   
    
};

for(i=1;i<5;i++){
document.getElementById('answer'+i).onclick = function(){
    if(this.innerHTML == correctAnswer){
      
       document.getElementById('good').style.display ="block" ;
         document.getElementById('tryagain').style.display ="none" ;
         generateQA();
       
    }else{
        document.getElementById('tryagain').style.display ="block" ; 
          document.getElementById('good').style.display ="none" ; 
    }
}
};









/*JAVA SCRIPT CODE*/
var correct2;


document.getElementById('start2').onclick = function(){
   
    
     generateQA2();
}


function generateQA2(){
    var A= 4*Math.round(3*Math.random());
     var B= 2*Math.round(1*Math.random());
    correctAnswer2=A-B;
    document.getElementById("question2").innerHTML= A+ "-" +B;
    var correct2=1+Math.round(3*Math.random());
    document.getElementById("answers"+correct2).innerHTML=correctAnswer2;//fill in button the correct answer
    //fill in other buttons with wrong answer
    var answers2=[correctAnswer2];
    for(i=1;i<5;i++){
        if(i !==correct2){
            var wrong2;
           
         do{
              
                wrong2 = (Math.round(Math.random()))+(Math.round(Math.random()));
         
         }  while(answers2.indexOf(wrong2)>-1)
            document.getElementById("answers"+i).innerHTML=wrong2;
            answers2.push(wrong2);
            
        }
    }
   
    
}

for(i=1;i<5;i++){
document.getElementById('answers'+i).onclick = function(){
    if(this.innerHTML == correctAnswer2){
      
       document.getElementById('good2').style.display ="block" ;
         document.getElementById('tryagain2').style.display ="none" ;
         generateQA2();
       
    }else{
        document.getElementById('tryagain2').style.display ="block" ; 
          document.getElementById('good2').style.display ="none" ; 
    };
};
};







































//
///*JAVA SCRIPT CODE*/
//var correctAnswer;
//var action;
//
//document.getElementById('start').onclick = function(){
//   
//    
//     generateQA();
//}
//
//
//function generateQA(){
//    var x= 3*Math.round(3*Math.random());
//     var y= 2*Math.round(4*Math.random());
//    correctAnswer=x+y;
//    document.getElementById("question").innerHTML= x+ "+" +y;
//    var correct=1+Math.round(3*Math.random());
//    document.getElementById("answer"+correct).innerHTML=correctAnswer;//fill in button the correct answer
//    //fill in other buttons with wrong answer
//    var answers=[correctAnswer];
//    for(i=1;i<5;i++){
//        if(i !==correct){
//            var wrong;
//           
//         do{
//              
//                wrong = (Math.round(Math.random()))+(Math.round(Math.random()));
//         
//         }  while(answers.indexOf(wrong)>-1)
//            document.getElementById("answer"+i).innerHTML=wrong;
//            answers.push(wrong);
//            
//        }
//    }
//   
//    
//}


