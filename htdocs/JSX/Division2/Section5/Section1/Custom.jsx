function GetTitle({vPage}) {
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Private Projects";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Team Tactical: Crash Ball";
	}else if(vPage == 2){
		vResult += "Wars of Antarrea";
	}else if(vPage == 3){
		vResult += "Revolutions: Invading Nations";
	}else if(vPage == 4){
		vResult += "Revolutions: Rebellion Against the Fist";
	}else if(vPage == 5){
		vResult += "Revolutions: Return to Arms";
	}else if(vPage == 6){
		vResult += "Revolutions: Post Wars";
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
	
	vDefault += "Private Projects";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Team Tactical: Crash Ball";
	}else if(vPage == 2){
		vResult += "Wars of Antarrea";
	}else if(vPage == 3){
		vResult += "Revolutions: Invading Nations";
	}else if(vPage == 4){
		vResult += "Revolutions: Rebellion Against the Fist";
	}else if(vPage == 5){
		vResult += "Revolutions: Return to Arms";
	}else if(vPage == 6){
		vResult += "Revolutions: Post Wars";
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
			Here are projects based in the Antarrea universe:<br /><br />
			Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.<br />
			Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.<br />
			Revolutions: Invading Nations:           Tactical RPG, 1st story arc.<br />
			Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.<br />
			Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.<br />
			Revolutions: Post Wars:                  Tactical RPG, 4th story arc.<br />
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
	}else if(vPage == 1){
		vResult = (
			<div id="idCenterContent">
				Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.<br />
			</div>
		);
	}else if(vPage == 2){
		vResult = (
			<div id="idCenterContent">
				Wars of Antarrea is a table-top game where two or more armies battle for supremacy.<br />
			</div>
		);
	}else if(vPage == 3){
		vResult = (
			<div id="idCenterContent">
				Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.<br />
			</div>
		);
	}else if(vPage == 4){
		vResult = (
			<div id="idCenterContent">
				Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.<br />
			</div>
		);
	}else if(vPage == 5){
		vResult = (
			<div id="idCenterContent">
				Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.<br />
			</div>
		);
	}else if(vPage == 6){
		vResult = (
			<div id="idCenterContent">
				Revolutions is a Tactical RPG with Post Wars as its 4th story arc.<br />
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
			<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Index.html">HTML</a><br />
			<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Index.php">PHP</a><br />
			<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Index.shtml">Perl</a><br />
			<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Index.html">Apache SSI</a><br />
			<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Index.html">JQuery</a><br />
			<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Index.html">Angular JS</a><br />
			<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Index.xhtml">JSF</a><br />
			<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Index.jsp">JSP</a><br />
			<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Index.jsp">JSP Spring MVC</a><br />
			<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Index.aspx">ASP.NET Javascript</a><br />
			<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Index.asp">ASP VBscript</a><br />
			<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Index.cshtml">ASP.NET Web App</a><br />
			<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Index.aspx">ASP.NET Webform</a><br />
			<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Index">ASP.NET MVC App</a><br />
			<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Index">Python Web.py</a><br />
			<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Index">Ruby on Rails</a><br />
			<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Index">Node JS</a><br />
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
    }else if(vPage == 1){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project1.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project1.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project1.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project1.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project1.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project1.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project1.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project1.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project1.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project1.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project1.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project1.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project1.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project1">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project1">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project1">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project1">Node JS</a><br />
			</div>
		);
    }else if(vPage == 2){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project2.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project2.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project2.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project2.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project2.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project2.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project2.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project2.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project2.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project2.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project2.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project2.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project2.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project2">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project2">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project2">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project2">Node JS</a><br />
			</div>
		);
    }else if(vPage == 3){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project3.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project3.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project3.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project3.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project3.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project3.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project3.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project3.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project3.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project3.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project3.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project3.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project3.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project3">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project3">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project3">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project3">Node JS</a><br />
			</div>
		);
    }else if(vPage == 4){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project4.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project4.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project4.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project4.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project4.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project4.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project4.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project4.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project4.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project4.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project4.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project4.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project4.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project4">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project4">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project4">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project4">Node JS</a><br />
			</div>
		);
    }else if(vPage == 5){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project5.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project5.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project5.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project5.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project5.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project5.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project5.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project5.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project5.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project5.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project5.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project5.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project5.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project5">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project5">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project5">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project5">Node JS</a><br />
			</div>
		);
    }else if(vPage == 6){
		vResult = (
			<div>
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project6.html">HTML</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project6.php">PHP</a><br />
				<a href="http://htkb.dyndns.org/Division2/Section5/Section1/Project6.shtml">Perl</a><br />
				<a href="http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project6.html">Apache SSI</a><br />
				<a href="http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project6.html">JQuery</a><br />
				<a href="http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project6.html">Angular JS</a><br />
				<a href="http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project6.xhtml">JSF</a><br />
				<a href="http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project6.jsp">JSP</a><br />
				<a href="http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project6.jsp">JSP Spring MVC</a><br />
				<a href="http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project6.aspx">ASP.NET Javascript</a><br />
				<a href="http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project6.asp">ASP VBscript</a><br />
				<a href="http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project6.cshtml">ASP.NET Web App</a><br />
				<a href="http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project6.aspx">ASP.NET Webform</a><br />
				<a href="http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project6">ASP.NET MVC App</a><br />
				<a href="http://htkb.dyndns.org:82/Division2/Section5/Section1/Project6">Python Web.py</a><br />
				<a href="http://htkb.dyndns.org:83/Division2/Section5/Section1/Project6">Ruby on Rails</a><br />
				<a href="http://htkb.dyndns.org:84/Division2/Section5/Section1/Project6">Node JS</a><br />
			</div>
		);
    }else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}