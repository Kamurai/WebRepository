function GetTitle({vPage}) {
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Web Programming";
	
	if(vPage <= 0){
		vResult += vDefault;
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
	
	vDefault += "Web Programming";
	
	if(vPage <= 0){
		vResult += vDefault;
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
			This section is dedicated to web-based programming.
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
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
			<a href="http://htkb.dyndns.org/Division1/Index.html">HTML</a><br />
			<a href="http://htkb.dyndns.org/Division1/Index.php">PHP</a><br />
			<a href="http://htkb.dyndns.org/Division1/Index.shtml">Perl</a><br />
			<a href="http://htkb.dyndns.org/SSI/Division1/Index.html">Apache SSI</a><br />
			<a href="http://htkb.dyndns.org/JQuery/Division1/Index.html">JQuery</a><br />
			<a href="http://htkb.dyndns.org/AngularJS/Division1/Index.html">Angular JS</a><br />
			<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml">JSF</a><br />
			<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp">JSP</a><br />
			<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Index.jsp">JSP Spring MVC</a><br />
			<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx">ASP.NET Javascript</a><br />
			<a href="http://htkb.dyndns.org:81/ASP/Division1/Index.asp">ASP VBscript</a><br />
			<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml">ASP.NET Web App</a><br />
			<a href="http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx">ASP.NET Webform</a><br />
			<a href="http://htkb.dyndns.org:81/MVC/Division1/Index">ASP.NET MVC App</a><br />
			<a href="http://htkb.dyndns.org:82/Division1/Index">Python Web.py</a><br />
			<a href="http://htkb.dyndns.org:83/Division1/Index">Ruby on Rails</a><br />
			<a href="http://htkb.dyndns.org:84/Division1/Index">Node JS</a><br />
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
    }else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}