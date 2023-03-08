exports.getTitle = function (vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += `
		Downloadables
	`;
	
	vResult += "<title>";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Cube World Downloads
			`;
		}else if(vPage == 2){
			vResult += `
				Minecraft Downloads
			`;
		}else if(vPage == 3){
			vResult += `
				Game Maker Downloads
			`;
		}else if(vPage == 4){
			vResult += `
				Java Downloads
			`;
		}else if(vPage == 5){
			vResult += `
				C# Downloads
			`;
		}else{
			vResult += vDefault;
		}
	vResult += "</title>";
	
    return vResult;
}

exports.getContentHeader = function (vPage){
	var vResult = "";
    var vDefault = "";
	
	vDefault += `
		Downloadables
	`;
	
	vResult += "<h2>";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Cube World Downloads
			`;
		}else if(vPage == 2){
			vResult += `
				Minecraft Downloads
			`;
		}else if(vPage == 3){
			vResult += `
				Game Maker Downloads
			`;
		}else if(vPage == 4){
			vResult += `
				Java Downloads
			`;
		}else if(vPage == 5){
			vResult += `
				C# Downloads
			`;
		}else{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
    return vResult;
}

exports.getContent = function (vPage){
	var vResult = "";
    var vDefault = "";
	
	vDefault += `
		
	`;
	
	vResult += "<div id=\"idCenterContent\">";
    	if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Here are downloads to play Cube World with us:</br>
				</br>
				Cube World:<t><a href=\"http://htkb.dyndns.org/downloads/CubeSetup3.exe\">Come play Cube World!</a></br>
				</br>
				DirectX:<t><a href=\"http://htkb.dyndns.org/downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>
				DirectX \"Web\":<t><a href=\"http://htkb.dyndns.org/downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>
			`;
		}else if(vPage == 2){
			vResult += `
				Here are Game Maker Projects to play:</br>
				</br>
				\"Gamebox Client: v6.0\":<t><a href=\"http://htkb.dyndns.org/downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>
				\"Gamebox Server: v6.0\":<t><a href=\"http://htkb.dyndns.org/downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>
				\"39dll.dll: v2.5\":<t><a href=\"http://htkb.dyndns.org/downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>
				\"A Chess Server\":<t><a href=\"http://htkb.dyndns.org/downloads/Chess_Server.exe\">Host a Chess game.</a></br>
				\"A Chess Client\":<t><a href=\"http://htkb.dyndns.org/downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>
				\"I Dunno\":<t><a href=\"http://htkb.dyndns.org/downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>
				\"Purification\":<t><a href=\"http://htkb.dyndns.org/downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>
				\"Trail of the Undead: The Way Home\":<t><a href=\"http://htkb.dyndns.org/downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>
				\"Discovery\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>
				\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>
				\"Skitzo Burrito (Alpha)\": <t><a href=\"http://htkb.dyndns.org/downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>
			`;
		}else if(vPage == 3){
			vResult += `
				Here are Java Programs to download:</br>
				</br>
				\"Blood Bowl Manager\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>
			`;
		}else if(vPage == 4){
			vResult += `
				Here are C# Programs to download:</br>
				</br>
				\"Chess Program\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>
			`;
		}else if(vPage == 5){
			vResult += `
				Here are C++ Programs to download:</br>
				</br>
				\"HTKB Bar Code System\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>
			`;
		}else{
			vResult += vDefault;
		}
	vResult += "</div>";
	
    return vResult;
}

exports.getVersions = function (vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += `
		<li><a href=\"http://htkb.dyndns.org/Division4/Index.html\">HTML</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division4/Index.php\">PHP</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division4/Index.shtml\">Perl</a></li>
		<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Index.html\">Apache SSI</a></li>
		<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Index.html\">HTML Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Index.html\">JQuery</a></li>
		<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Index.html\">Angular JS</a></li>
		<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Index.html\">JSX</a></li>
		<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Index.xml\">XSLT</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Index.xhtml\">JSF</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Index.jsp\">JSP</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Index\">JSP Spring MVC</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Index.aspx\">ASP.NET Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Index.asp\">ASP VBscript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Index.cshtml\">ASP.NET Web App</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Index.aspx\">ASP.NET Webform</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Index\">ASP.NET MVC App</a></li>
		<li><a href=\"http://htkb.dyndns.org:82/Division4/Index\">Python Web.py</a></li>
		<li><a href=\"http://htkb.dyndns.org:83/Division4/Index\">Ruby on Rails</a></li>
		<li><a href=\"http://htkb.dyndns.org:84/Division4/Index\">Node JS</a></li>
		<li><a href=\"http://htkb.dyndns.org:85/Division4/Index\">Angular 2+</a></li>
		<li><a href=\"http://htkb.dyndns.org:86/Division4/Index\">ReactJS</a></li>
	`;
	
	vResult += "<ul class=\"versionsUl\">";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division4/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division4/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division4/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division4/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division4/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division4/Project1\">ReactJS</a></li>
			`;
		}else if(vPage == 2){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division4/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division4/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division4/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division4/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division4/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division4/Project2\">ReactJS</a></li>
			`;
		}else if(vPage == 3){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division4/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division4/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division4/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division4/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division4/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division4/Project3\">ReactJS</a></li>
			`;
		}else if(vPage == 4){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division4/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division4/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division4/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division4/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division4/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division4/Project4\">ReactJS</a></li>
			`;
		}else if(vPage == 5){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division4/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division4/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division4/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division4/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division4/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division4/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AngularJS/Division4/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division4/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division4/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division4/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division4/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division4/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division4/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division4/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division4/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division4/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division4/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division4/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division4/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division4/Project5\">ReactJS</a></li>
			`;
		}else{
			vResult += vDefault;
		}
	vResult += "</ul>";
    
    return vResult;
}
