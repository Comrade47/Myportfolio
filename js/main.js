var fnames=document.getElementById('fname');
var fname_errors=document.getElementById('fname_error');

var femails=document.getElementById('femail');
var femails_error=document.getElementById('femail_error');

function error_msg (){
    if(fnames.value==""){
        fname_errors.innerHTML='Please Enter your name';
        fname_errors.style='color:#dc3545 ; font-size:2rem';
        fnames.style='box-shadow:0 0 0.3rem 0.2rem #dc3545';
        return false
    }

    else if(femails.value==''){
        femails_error.innerHTML='Please Enter your name';
        femails_error.style='color:#dc3545 ; font-size:2rem';
        femails.style='box-shadow:0 0 0.3rem 0.2rem #dc3545';
        return false
    }
}


function remove_error(){
    if(fnames.value!=''){
        fname_errors.innerHTML='';
        fnames.style='inherit';
    }

    if(femails.value!=''){
        femails_error.innerHTML='';
        femails.style='inherit';
    }
}

fnames.addEventListener('blur',remove_error);
femails.addEventListener('blur',remove_error);