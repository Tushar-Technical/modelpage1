
const div=document.getElementsByClassName("loginform")[0];

function login(){
    console.log("working")
 const element=document.getElementsByClassName("loginbutton")[0];
 
 
 console.log("tt")
 const list = element.classList;
list.add("loginform")
list.remove("opacity")
}

function remove(){
    console.log("working")
    const element=document.getElementsByClassName("loginbutton")[0];
    
    
    console.log("tt")
    const list = element.classList;
    list.add("opacity")
   list.remove("loginform")
}
