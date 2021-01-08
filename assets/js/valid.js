let flag =false;

  function clear()
  {
      let x=document.getElementsByTagName("input");
      for (var i = 0; i < x.length; i++)
      {
        x[i].value="";
        x[i].style.border=""; 
      }
  }

  function error(y){
      document.getElementById(y).style.border="3px solid #FF0000"
     document.getElementById(y).nextElementSibling.style.display="block";
      flag=false;
  }


  function success(z){
    document.getElementById(z).style.border = " 3px solid #00FF00";
    document.getElementById(z).nextElementSibling.style.display="none";
    flag=true;
  }


  function nameCheck(a){
      if(document.getElementById(a).value.length<3) error(a);
      else success(a);
  }

  function emailCheck(b){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById(b).value)) success(b); 
      else error(b);
  }


  function passcheck(c){
      if(document.getElementById(c).value.length<8) error(c);
      else success(c);  
  }


  function confirmCheck(c,d){
      let original=document.getElementById(c).value;
      let current=document.getElementById(d).value;
      if(original.localeCompare(current)==0 && (current.length>=8)) success(d)
      else error(d);

  }


function validateForm() 
{
    let a=document.myForm.name.id;
    let b=document.myForm.email.id;
    let c=document.myForm.password.id;
    let d=document.myForm.confirmpass.id;
    nameCheck(a);
    emailCheck(b);
    passcheck(c);
    confirmCheck(c,d);

    if(flag){
        setTimeout(clear,3000);
    }
    
}



