exports.getTitle = function (vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault = `
		Renley
	`;
	
	vResult += "<title>";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Warring Nations
			`;
		}else if(vPage == 2){
			vResult += `
				Psychodom: The One Empire
			`;
		}else{
			vResult += vDefault;
		}vResult += "</title>";
	
    return vResult;
}

exports.getContentHeader = function (vPage){
	var vResult = "";
    var vDefault = "";
	
	vDefault += `
		Renley
	`;
	
	vResult += "<h2>";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Warring Nations
			`;
		}else if(vPage == 2){
			vResult += `
				Psychodom: The One Empire
			`;
		}else{
			vResult += vDefault;
		}vResult += "</h2>";
	
    return vResult;
}

exports.getContent = function (vPage){
	var vResult = "";
    var vDefault = "";
	
	vDefault += `
		Renley
	`;
	
	vResult += "<div id=\"idCenterContent\">";
    	if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				Warring Nations is a Tactical RPG involving squad based battles.
				Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.
			`;
		}else if(vPage == 2){
			vResult += `
				Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.
				The protagonist is tasked with investigating various situations leading 
				to a conspiracy about who is really ruling the continent.
			`;
		}else{
			vResult += vDefault;
		}vResult += "</div>";
	
    return vResult;
}

exports.getVersions = function (vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += `
		<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Index.html\">HTML</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Index.php\">PHP</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Index.shtml\">Perl</a></li>
		<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section2/Index.html\">Apache SSI</a></li>
		<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section2/Index.html\">HTML Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section2/Index.html\">JQuery</a></li>
		<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section2/Index.html\">Angular JS</a></li>
		<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section2/Index.html\">JSX</a></li>
		<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section2/Index.xml\">XSLT</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section2/Index.xhtml\">JSF</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section2/Index.jsp\">JSP</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section2/Index\">JSP Spring MVC</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section2/Index.aspx\">ASP.NET Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section2/Index.asp\">ASP VBscript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section2/Index.cshtml\">ASP.NET Web App</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section2/Index.aspx\">ASP.NET Webform</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section2/Index\">ASP.NET MVC App</a></li>
		<li><a href=\"http://htkb.dyndns.org:82/Division3/Section2/Index\">Python Web.py</a></li>
		<li><a href=\"http://htkb.dyndns.org:83/Division3/Section2/Index\">Ruby on Rails</a></li>
		<li><a href=\"http://htkb.dyndns.org:84/Division3/Section2/Index\">Node JS</a></li>
		<li><a href=\"http://htkb.dyndns.org:85/Division3/Section2/Index\">Angular 2+</a></li>
		<li><a href=\"http://htkb.dyndns.org:86/Division3/Section2/Index\">ReactJS</a></li>
	`;
	
	vResult += "<ul class=\"versionsUl\">";
		if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section2/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section2/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section2/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section2/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section2/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section2/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section2/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section2/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section2/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section2/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section2/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section2/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section2/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section2/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section2/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section2/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section2/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section2/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section2/Project1\">ReactJS</a></li>
			`;
		}else if(vPage == 2){
			vResult += `
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section2/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section2/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section2/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section2/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section2/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section2/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section2/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section2/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section2/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section2/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section2/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section2/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section2/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section2/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section2/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section2/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section2/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section2/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section2/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section2/Project2\">ReactJS</a></li>
			`;
		}else{
			vResult += vDefault;
		}
    vResult += "</ul>";
    
    return vResult;
}