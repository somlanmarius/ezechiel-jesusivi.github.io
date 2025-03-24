document.querySelector('.contact-form')?.addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.getElementById('emmail').ariaValueMax;
    const message=document.getElementById('message').ariaValueMax;
    if(!email.includes('@')){
        alert('Email invalid !');
        return;

    }
    if(message.length<10) {
        alert('Message trop court(10 caractères  minimum)')
        return;
    }
    alert('Message envoyué avec succès !');
    this.rest();
})