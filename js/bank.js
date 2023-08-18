document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField= document.getElementById('user-email');
    const email = emailField.value;
//    ==========
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    // -----------
    if(email === 'nabil@gmail.com' && pass === 'nabil9775'){
        window.location.href = 'bank.html'
    }else{
        alert('please enter a valid email & password')
    }
})