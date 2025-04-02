const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');


function validate(){
    
    if(name.value===''||name.value==null){
        messages.push('Name is required')
    }
    if(email.value===''||email.value==null){
        messages.push('Email is required')
    }
    if(phone.value===''||phone.value==null){
        messages.push('Phone is required')
    }
    alert("All fields are required")
}