function validateFname(){
    var name = document.getElementById('fname').value;
    if(name == ' '||name==''){
        document.getElementById('fout').innerText="Please Enter First Name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email == ' '||email==''){
        document.getElementById('eout').innerText="Please Enter email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText="Please Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

function validatePassword(){
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of pwd is 8"
            document.getElementById('ppout').style.visibility="visible";
            document.getElementById('ppout').style.background="red";
        }else if(pwd.length<11){
            document.getElementById('pout').innerText=""
            document.getElementById('ppout').style.background="orange";
        }
    }else{
        document.getElementById('ppout').style.background="green";
    }
}

function validateCPassword(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does not match"
    }else{
        document.getElementById('cpout').innerText=""
    }
    
}

const getExp = () => {
    var exp = document.getElementById('exp').value;
    document.getElementById('exout').innerText=`Total Year of exp is ${exp}`
}