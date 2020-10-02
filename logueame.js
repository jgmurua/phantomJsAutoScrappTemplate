

function Logueame() {
    try {

     var user =document.getElementById('j_username');
	 var pass =document.getElementById('j_password');
	 user.value='admin';
	 pass.value='pass';
		
	 document.getElementsByClassName('submit-button primary')[0].click();
	 
    } catch (e) {


    }
}

setTimeout('Logueame()', 2000);

