var myvar;
function menuinit() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
		document.getElementById('m4').style.display = 'none';
		document.getElementById('m5').style.display = 'none';
	
}
function menuexpand (i) {
        menuinit();
        if (myvar == i) {
		document.getElementById(i).style.display = 'none';
		myvar = '';
	}
        else {
		document.getElementById(i).style.display = 'block';
		myvar = i;
	}
}

if ( typeof window.addEventListener != "undefined" )
    window.addEventListener( "load", menuinit, false );
else if ( typeof window.attachEvent != "undefined" ) {
    window.attachEvent( "onload", menuinit );
}
else {
    if ( window.onload != null ) {
        var oldOnload = window.onload;
        window.onload = function ( e ) {
            oldOnload( e );
            menuinit();
        };
    }
    else
        window.onload = init;
}
