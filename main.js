let userInfo=document.getElementById("bioinfo");
let btnVal=document.getElementById("btn");
let fstname=document.getElementById("fname");
let lstname=document.getElementById("lname");
let placename=document.getElementById("place");
let path=document.getElementById("filename");

 let arr=[];
 
 btnVal.addEventListener("click",function(){
      
	  let fname=fstname.value;
	  let lname=lstname.value;
	  let place=placename.value;
	  let filename=path.value;
	  
	let obj={};
	
	   obj.fname=fname;
	   obj.lname=lname;
	   obj.place=place;
	   obj.filename=filename;
	   
	  arr.push(obj);
	  
	  fstname.value="";
	  lstname.value="";
	  placename.value="";
	  path.value="";
	  
	  console.log(arr);
 });	  
	   
	  
	    