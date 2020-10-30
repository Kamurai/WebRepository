function GetTitle({vPage}){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Database Programming";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Oracle Programming";
	}else if(vPage == 2){
		vResult += "Derby Programming";
	}else if(vPage == 3){
		vResult += "MySQL Programming";
	}else if(vPage == 4){
		vResult += "SQL Server Programming";
	}else if(vPage == 5){
		vResult += "PostgreSQL Programming";
	}else{
		vResult += vDefault;
	}
    
	return (
		<title>
			{vResult}
		</title>
	);
}

function GetContentHeader({vPage}){
    var vResult = "";
    var vDefault = "";
	
	vDefault += "Database Programming";
	
	if(vPage <= 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Oracle Programming";
	}else if(vPage == 2){
		vResult += "Derby Programming";
	}else if(vPage == 3){
		vResult += "MySQL Programming";
	}else if(vPage == 4){
		vResult += "SQL Server Programming";
	}else if(vPage == 5){
		vResult += "PostgreSQL Programming";
	}else{
		vResult += vDefault;
	}
	
    return(
		<h2>
			{vResult}
		</h2>
	);
}

function GetContent({vPage, vLevel}){
    var vResult = "";
    var vDefault = "";
	
	vDefault = (
		<div id="idCenterContent">
			This section is dedicated to database programming.
		</div>
	);
	
	if(vPage == 0){
		vResult = vDefault;
	}else if(vPage == 1){
		vResult = (
			<div id="idCenterContent">
				This section is dedicated to Oracle based programming.
			</div>
		);
	}else if(vPage == 2){
		vResult = (
			<div id="idCenterContent">
				This section is dedicated to Derby based programming.
			</div>
		);
	}else if(vPage == 3){
		vResult = (
			<div id="idCenterContent">
				This section is dedicated to MySQL based programming.
			</div>
		);
	}else if(vPage == 4){
		vResult = (
			<div id="idCenterContent">
				This section is dedicated to SQL Server based programming.
			</div>
		);
	}else if(vPage == 5){
		vResult = (
			<div id="idCenterContent">
				This section is dedicated to PostgreSQL based programming.
			</div>
		);
	}else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}

function GetVersions({vPage}){
	var vResult = "";
	var vDefault = (
		<ul class="versionsUl">
			<li><a href="http://htkb.dyndns.org/Division5/Index.html">HTML</a></li>
			<li><a href="http://htkb.dyndns.org/Division5/Index.php">PHP</a></li>
			<li><a href="http://htkb.dyndns.org/Division5/Index.shtml">Perl</a></li>
			<li><a href="http://htkb.dyndns.org/SSI/Division5/Index.html">Apache SSI</a></li>
			<li><a href="http://htkb.dyndns.org/Javascript/Division5/Index.html">HTML Javascript</a></li>
			<li><a href="http://htkb.dyndns.org/JQuery/Division5/Index.html">JQuery</a></li>
			<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Index.html">Angular JS</a></li>
			<li><a href="http://htkb.dyndns.org/JSX/Division5/Index.html">JSX</a></li>
			<li><a href="http://htkb.dyndns.org/XLST/Division5/Index.xml">XSLT</a></li>
			<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Index.xhtml">JSF</a></li>
			<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Index.jsp">JSP</a></li>
			<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Index">JSP Spring MVC</a></li>
			<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Index.aspx">ASP.NET Javascript</a></li>
			<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Index.asp">ASP VBscript</a></li>
			<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Index.cshtml">ASP.NET Web App</a></li>
			<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Index.aspx">ASP.NET Webform</a></li>
			<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Index">ASP.NET MVC App</a></li>
			<li><a href="http://htkb.dyndns.org:82/Division5/Index">Python Web.py</a></li>
			<li><a href="http://htkb.dyndns.org:83/Division5/Index">Ruby on Rails</a></li>
			<li><a href="http://htkb.dyndns.org:84/Division5/Index">Node JS</a></li>
			<li><a href="http://htkb.dyndns.org:85/Division5/Index">Angular 2+</a></li>
			<li><a href="http://htkb.dyndns.org:86/Division5/Index">ReactJS</a></li>
		</ul>
	);
	if(vPage == 0){
		vResult = vDefault;
	}else if(vPage == 1){
		vResult = (
			<ul class="versionsUl">
				<li><a href="http://htkb.dyndns.org/Division5/Project1.html">HTML</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project1.php">PHP</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project1.shtml">Perl</a></li>
				<li><a href="http://htkb.dyndns.org/SSI/Division5/Project1.html">Apache SSI</a></li>
				<li><a href="http://htkb.dyndns.org/Javascript/Division5/Project1.html">HTML Javascript</a></li>
				<li><a href="http://htkb.dyndns.org/JQuery/Division5/Project1.html">JQuery</a></li>
				<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Project1.html">Angular JS</a></li>
				<li><a href="http://htkb.dyndns.org/JSX/Division5/Project1.html">JSX</a></li>
				<li><a href="http://htkb.dyndns.org/XLST/Division5/Project1.xml">XSLT</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Project1.xhtml">JSF</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Project1.jsp">JSP</a></li>
				<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Project1">JSP Spring MVC</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Project1.aspx">ASP.NET Javascript</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Project1.asp">ASP VBscript</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Project1.cshtml">ASP.NET Web App</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Project1.aspx">ASP.NET Webform</a></li>
				<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Project1">ASP.NET MVC App</a></li>
				<li><a href="http://htkb.dyndns.org:82/Division5/Project1">Python Web.py</a></li>
				<li><a href="http://htkb.dyndns.org:83/Division5/Project1">Ruby on Rails</a></li>
				<li><a href="http://htkb.dyndns.org:84/Division5/Project1">Node JS</a></li>
				<li><a href="http://htkb.dyndns.org:85/Division5/Project1">Angular 2+</a></li>
				<li><a href="http://htkb.dyndns.org:86/Division5/Project1">ReactJS</a></li>
			</ul>
		);
    }else if(vPage == 2){
		vResult = (
			<ul class="versionsUl">
				<li><a href="http://htkb.dyndns.org/Division5/Project2.html">HTML</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project2.php">PHP</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project2.shtml">Perl</a></li>
				<li><a href="http://htkb.dyndns.org/SSI/Division5/Project2.html">Apache SSI</a></li>
				<li><a href="http://htkb.dyndns.org/Javascript/Division5/Project2.html">HTML Javascript</a></li>
				<li><a href="http://htkb.dyndns.org/JQuery/Division5/Project2.html">JQuery</a></li>
				<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Project2.html">Angular JS</a></li>
				<li><a href="http://htkb.dyndns.org/JSX/Division5/Project2.html">JSX</a></li>
				<li><a href="http://htkb.dyndns.org/XLST/Division5/Project2.xml">XSLT</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Project2.xhtml">JSF</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Project2.jsp">JSP</a></li>
				<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Project2">JSP Spring MVC</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Project2.aspx">ASP.NET Javascript</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Project2.asp">ASP VBscript</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Project2.cshtml">ASP.NET Web App</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Project2.aspx">ASP.NET Webform</a></li>
				<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Project2">ASP.NET MVC App</a></li>
				<li><a href="http://htkb.dyndns.org:82/Division5/Project2">Python Web.py</a></li>
				<li><a href="http://htkb.dyndns.org:83/Division5/Project2">Ruby on Rails</a></li>
				<li><a href="http://htkb.dyndns.org:84/Division5/Project2">Node JS</a></li>
				<li><a href="http://htkb.dyndns.org:85/Division5/Project2">Angular 2+</a></li>
				<li><a href="http://htkb.dyndns.org:86/Division5/Project2">ReactJS</a></li>
			</ul>
		);
    }else if(vPage == 3){
		vResult = (
			<ul class="versionsUl">
				<li><a href="http://htkb.dyndns.org/Division5/Project3.html">HTML</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project3.php">PHP</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project3.shtml">Perl</a></li>
				<li><a href="http://htkb.dyndns.org/SSI/Division5/Project3.html">Apache SSI</a></li>
				<li><a href="http://htkb.dyndns.org/Javascript/Division5/Project3.html">HTML Javascript</a></li>
				<li><a href="http://htkb.dyndns.org/JQuery/Division5/Project3.html">JQuery</a></li>
				<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Project3.html">Angular JS</a></li>
				<li><a href="http://htkb.dyndns.org/JSX/Division5/Project3.html">JSX</a></li>
				<li><a href="http://htkb.dyndns.org/XLST/Division5/Project3.xml">XSLT</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Project3.xhtml">JSF</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Project3.jsp">JSP</a></li>
				<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Project3">JSP Spring MVC</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Project3.aspx">ASP.NET Javascript</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Project3.asp">ASP VBscript</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Project3.cshtml">ASP.NET Web App</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Project3.aspx">ASP.NET Webform</a></li>
				<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Project3">ASP.NET MVC App</a></li>
				<li><a href="http://htkb.dyndns.org:82/Division5/Project3">Python Web.py</a></li>
				<li><a href="http://htkb.dyndns.org:83/Division5/Project3">Ruby on Rails</a></li>
				<li><a href="http://htkb.dyndns.org:84/Division5/Project3">Node JS</a></li>
				<li><a href="http://htkb.dyndns.org:85/Division5/Project3">Angular 2+</a></li>
				<li><a href="http://htkb.dyndns.org:86/Division5/Project3">ReactJS</a></li>
			</ul>
		);
    }else if(vPage == 4){
		vResult = (
			<ul class="versionsUl">
				<li><a href="http://htkb.dyndns.org/Division5/Project4.html">HTML</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project4.php">PHP</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project4.shtml">Perl</a></li>
				<li><a href="http://htkb.dyndns.org/SSI/Division5/Project4.html">Apache SSI</a></li>
				<li><a href="http://htkb.dyndns.org/Javascript/Division5/Project4.html">HTML Javascript</a></li>
				<li><a href="http://htkb.dyndns.org/JQuery/Division5/Project4.html">JQuery</a></li>
				<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Project4.html">Angular JS</a></li>
				<li><a href="http://htkb.dyndns.org/JSX/Division5/Project4.html">JSX</a></li>
				<li><a href="http://htkb.dyndns.org/XLST/Division5/Project4.xml">XSLT</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Project4.xhtml">JSF</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Project4.jsp">JSP</a></li>
				<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Project4">JSP Spring MVC</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Project4.aspx">ASP.NET Javascript</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Project4.asp">ASP VBscript</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Project4.cshtml">ASP.NET Web App</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Project4.aspx">ASP.NET Webform</a></li>
				<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Project4">ASP.NET MVC App</a></li>
				<li><a href="http://htkb.dyndns.org:82/Division5/Project4">Python Web.py</a></li>
				<li><a href="http://htkb.dyndns.org:83/Division5/Project4">Ruby on Rails</a></li>
				<li><a href="http://htkb.dyndns.org:84/Division5/Project4">Node JS</a></li>
				<li><a href="http://htkb.dyndns.org:85/Division5/Project4">Angular 2+</a></li>
				<li><a href="http://htkb.dyndns.org:86/Division5/Project4">ReactJS</a></li>
			</ul>
		);
    }else if(vPage == 5){
		vResult = (
			<ul class="versionsUl">
				<li><a href="http://htkb.dyndns.org/Division5/Project5.html">HTML</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project5.php">PHP</a></li>
				<li><a href="http://htkb.dyndns.org/Division5/Project5.shtml">Perl</a></li>
				<li><a href="http://htkb.dyndns.org/SSI/Division5/Project5.html">Apache SSI</a></li>
				<li><a href="http://htkb.dyndns.org/Javascript/Division5/Project5.html">HTML Javascript</a></li>
				<li><a href="http://htkb.dyndns.org/JQuery/Division5/Project5.html">JQuery</a></li>
				<li><a href="http://htkb.dyndns.org/AngularJS/Division5/Project5.html">Angular JS</a></li>
				<li><a href="http://htkb.dyndns.org/JSX/Division5/Project5.html">JSX</a></li>
				<li><a href="http://htkb.dyndns.org/XLST/Division5/Project5.xml">XSLT</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSFApplication/Division5/Project5.xhtml">JSF</a></li>
				<li><a href="http://htkb.dyndns.org:8080/JSPApplication/Division5/Project5.jsp">JSP</a></li>
				<li><a href="http://htkb.dyndns.org:8080/SpringMVC/Division5/Project5">JSP Spring MVC</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASPNET/Division5/Project5.aspx">ASP.NET Javascript</a></li>
				<li><a href="http://htkb.dyndns.org:81/ASP/Division5/Project5.asp">ASP VBscript</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebApplication/Division5/Project5.cshtml">ASP.NET Web App</a></li>
				<li><a href="http://htkb.dyndns.org:81/WebForm/Division5/Project5.aspx">ASP.NET Webform</a></li>
				<li><a href="http://htkb.dyndns.org:81/MVC/Division5/Project5">ASP.NET MVC App</a></li>
				<li><a href="http://htkb.dyndns.org:82/Division5/Project5">Python Web.py</a></li>
				<li><a href="http://htkb.dyndns.org:83/Division5/Project5">Ruby on Rails</a></li>
				<li><a href="http://htkb.dyndns.org:84/Division5/Project5">Node JS</a></li>
				<li><a href="http://htkb.dyndns.org:85/Division5/Project5">Angular 2+</a></li>
				<li><a href="http://htkb.dyndns.org:86/Division5/Project5">ReactJS</a></li>
			</ul>
		);
    }else{
		vResult = vDefault;
	}
        
    return (
		vResult
	);
}