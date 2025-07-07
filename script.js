var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
main.addEventListener("mousemove",function(dets){
//  console.log("event performed");
//  
// //the events given by dets depends on event listener
  //as we have already selector cursor so no need to write it in the form of an ID
       gsap.to(cursor,{
            x:dets.x,
            y:dets.y,//these commands will follow the cursor.
            duration:1,
            
            
       })
})

image.addEventListener("mouseenter",()=>{
     cursor.innerHTML="view more";
     gsap.to(cursor,{
       scale:4,
        
     })
})
image.addEventListener("mouseleave",()=>{
     cursor.innerHTML=""
     gsap.to(cursor,{
       scale:1,
        
     })
})
