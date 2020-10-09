function GetTitle({vPage}) {
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Grendol";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Land of the Orcish Empire: Age of Magic";
	}else if(vPage == 2){
		vResult += "Coliseum: Arena";
	}else{
		vResult += vDefault;
	}
    
	return (
		<title>
			{vResult}
		</title>
	);
}

function GetContentHeader({vPage}) {
    var vResult = "";
    var vDefault = "";
	
	vDefault += "Grendol";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Land of the Orcish Empire: Age of Magic";
	}else if(vPage == 2){
		vResult += "Coliseum: Arena";
	}else{
		vResult += vDefault;
	}
	
    return(
		<h2>
			{vResult}
		</h2>
	);
}

function GetContent({vPage, vLevel}) {
    var vResult = "";
    var vDefault = "";
	
	vDefault = (
		<div id="idCenterContent">
			Here are projects based in the Grendol Empire:<br /><br />
			Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that 
			comprise the Grendol Empire.<br />
			Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.<br />
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
	}else if(vPage == 1){
		vResult = (
			<div id="idCenterContent">
				Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that 
				comprise the Grendol Empire.<br />
			</div>
		);
	}else if(vPage == 2){
		vResult = (
			<div id="idCenterContent">
				Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.<br />
			</div>
		);
	}else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}
//export {getContent};

function GetVersions({vPage}) {
	var vResult = "";
	var vDefault = (
		<div>
			<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Index.html">HTML</a><br />
			<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Index.php">PHP</a><br />
			<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Index.shtml">Perl</a><br />
			<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Index.html">Apache SSI</a><br />
			<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Index.html">JQuery</a><br />
			<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section2/Index.html">Angular JS</a><br />
			<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Index.xhtml">JSF</a><br />
			<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Index.jsp">JSP</a><br />
			<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section2/Index.jsp">JSP Spring MVC</a><br />
			<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Index.aspx">ASP.NET Javascript</a><br />
			<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Index.asp">ASP VBscript</a><br />
			<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Index.cshtml">ASP.NET Web App</a><br />
			<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Index.aspx">ASP.NET Webform</a><br />
			<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Index">ASP.NET MVC App</a><br />
			<a href="http://htkb.dyndns.org:82/Division2/Section5/Section2/Index">Python Web.py</a><br />
			<a href="http://htkb.dyndns.org:83/Division2/Section5/Section2/Index">Ruby on Rails</a><br />
			<a href="http://htkb.dyndns.org:84/Division2/Section5/Section2/Index">Node JS</a><br />
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
    }else if(vPage == 1){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project1.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project1.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project1.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project1.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project1.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section2/Project1.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project1.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project1.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section2/Project1.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project1.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project1.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project1.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project1.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Project1">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section2/Project1">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section2/Project1">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section2/Project1">Node JS</a><br />
			</div>
		);
    }else if(vPage == 2){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project2.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project2.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section2/Project2.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project2.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project2.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section2/Project2.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project2.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project2.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section2/Project2.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project2.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project2.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project2.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project2.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Project2">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section2/Project2">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section2/Project2">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section2/Project2">Node JS</a><br />
			</div>
		);
    }else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}