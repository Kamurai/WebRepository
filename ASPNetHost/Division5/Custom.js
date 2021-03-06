function getTitle(vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Database Programming";
	
	vResult += "<title>";
		if(vPage == 0){
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
			vResult += "Postgres Programming";
		}else{
			vResult += vDefault;
		}
	vResult += "</title>";
	
	return vResult;
}

function getContentHeader(vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Database Programming";
	
	vResult += "<h2>";
		if(vPage == 0){
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
			vResult += "Postgres Programming";
		}else{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
	return vResult;
}

function getContent(vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "This section is dedicated to database based programming.";
	
	vResult += "<div id=\"idCenterContent\">";
    	if(vPage == 0){
			vResult += vDefault;
		}else if(vPage == 1){
			vResult += "This section is dedicated to Oracle based programming.";
			vResult += "<div>";
				vResult += "<tr>";
					vResult += "<td>";
						vResult += "Index";
					vResult += "</td>";
					vResult += "<td>";
						vResult += "Color";
					vResult += "</td>";
				vResult += "</tr>";
				vResult += "<tr>";
					vResult += "<td>";
						//OracleMethod("1",0);
					vResult += "</td>";
					vResult += "<td>";
						//OracleMethod("Red",0);
					vResult += "</td>";
				vResult += "</tr>";
			vResult += "</div>";
			
		}else if(vPage == 2){
			vResult += "This section is dedicated to Derby based programming.";
		}else if(vPage == 3){
			vResult += "This section is dedicated to MySQL based programming.";
		}else if(vPage == 4){
			//SQLServerDataList();
		
			vResult += "This section is dedicated to SQL Server based programming.";
			vResult += "<div>";
				vResult += "<tr>";
					vResult += "<td>";
						vResult += "Index";
					vResult += "</td>";
					vResult += "<td>";
						vResult += "Color";
					vResult += "</td>";
				vResult += "</tr>";
				vResult += "<tr>";
					vResult += "<td>";
						//vResult += "<%#Container.DataItem(\"Index\")%>";
					vResult += "</td>";
					vResult += "<td>";
						//vResult += "<%#Container.DataItem(\"Color\")%>";
					vResult += "</td>";
				vResult += "</tr>";
			vResult += "</div>";
			
		}else if(vPage == 5){
			vResult += "This section is dedicated to Postgres based programming.";
		}else{
			vResult += vDefault;
		}
	vResult += "</div>";
	
	return vResult;
}

function getVersions(vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<li><a href=\"http://htkb.dyndns.org/Division5/Index.html\">HTML</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/Division5/Index.php\">PHP</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/Division5/Index.shtml\">Perl</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Index.html\">Apache SSI</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Index.html\">HTML Javascript</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Index.html\">JQuery</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Index.html\">Angular JS</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Index.html\">JSX</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Index.xml\">XSLT</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Index.xhtml\">JSF</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Index.jsp\">JSP</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Index\">JSP Spring MVC</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Index.aspx\">ASP.NET Javascript</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Index.asp\">ASP VBscript</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Index.cshtml\">ASP.NET Web App</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Index.aspx\">ASP.NET Webform</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Index\">ASP.NET MVC App</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Index\">Python Web.py</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Index\">Ruby on Rails</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Index\">Node JS</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Index\">Angular 2+</a></li>";
	vDefault += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Index\">ReactJS</a></li>";
	
	vResult += "<ul class=\"versionsUl\">";
		
	if(vPage == 0){
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project1.html\">HTML</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project1.php\">PHP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project1.shtml\">Perl</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project1.html\">Apache SSI</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project1.html\">HTML Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project1.html\">JQuery</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project1.html\">Angular JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project1.html\">JSX</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project1.xml\">XSLT</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project1.xhtml\">JSF</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project1.jsp\">JSP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project1\">JSP Spring MVC</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project1.aspx\">ASP.NET Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project1.asp\">ASP VBscript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project1.cshtml\">ASP.NET Web App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project1.aspx\">ASP.NET Webform</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project1\">ASP.NET MVC App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Project1\">Python Web.py</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Project1\">Ruby on Rails</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Project1\">Node JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Project1\">Angular 2+</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Project1\">ReactJS</a></li>";
    }else if(vPage == 1){
        vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project2.html\">HTML</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project2.php\">PHP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project2.shtml\">Perl</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project2.html\">Apache SSI</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project2.html\">HTML Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project2.html\">JQuery</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project2.html\">Angular JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project2.html\">JSX</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project2.xml\">XSLT</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project2.xhtml\">JSF</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project2.jsp\">JSP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project2\">JSP Spring MVC</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project2.aspx\">ASP.NET Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project2.asp\">ASP VBscript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project2.cshtml\">ASP.NET Web App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project2.aspx\">ASP.NET Webform</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project2\">ASP.NET MVC App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Project2\">Python Web.py</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Project2\">Ruby on Rails</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Project2\">Node JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Project2\">Angular 2+</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Project2\">ReactJS</a></li>";
    }else if(vPage == 2){
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.php\">PHP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project2.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section1/Project2.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Section1/Project2.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project2.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project2.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project2\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project2\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project2\">Node JS</a><br>";
    }else if(vPage == 3){
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project3.html\">HTML</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project3.php\">PHP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project3.shtml\">Perl</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project3.html\">Apache SSI</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project3.html\">HTML Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project3.html\">JQuery</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project3.html\">Angular JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project3.html\">JSX</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project3.xml\">XSLT</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project3.xhtml\">JSF</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project3.jsp\">JSP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project3\">JSP Spring MVC</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project3.aspx\">ASP.NET Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project3.asp\">ASP VBscript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project3.cshtml\">ASP.NET Web App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project3.aspx\">ASP.NET Webform</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project3\">ASP.NET MVC App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Project3\">Python Web.py</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Project3\">Ruby on Rails</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Project3\">Node JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Project3\">Angular 2+</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Project3\">ReactJS</a></li>";
    }else if(vPage == 4){
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project4.html\">HTML</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project4.php\">PHP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project4.shtml\">Perl</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project4.html\">Apache SSI</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project4.html\">HTML Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project4.html\">JQuery</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project4.html\">Angular JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project4.html\">JSX</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project4.xml\">XSLT</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project4.xhtml\">JSF</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project4.jsp\">JSP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project4\">JSP Spring MVC</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project4.aspx\">ASP.NET Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project4.asp\">ASP VBscript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project4.cshtml\">ASP.NET Web App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project4.aspx\">ASP.NET Webform</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project4\">ASP.NET MVC App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Project4\">Python Web.py</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Project4\">Ruby on Rails</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Project4\">Node JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Project4\">Angular 2+</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Project4\">ReactJS</a></li>";
    }else if(vPage == 5){
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project5.html\">HTML</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project5.php\">PHP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Division5/Project5.shtml\">Perl</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project5.html\">Apache SSI</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project5.html\">HTML Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project5.html\">JQuery</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project5.html\">Angular JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project5.html\">JSX</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project5.xml\">XSLT</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project5.xhtml\">JSF</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project5.jsp\">JSP</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project5\">JSP Spring MVC</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project5.aspx\">ASP.NET Javascript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project5.asp\">ASP VBscript</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project5.cshtml\">ASP.NET Web App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project5.aspx\">ASP.NET Webform</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project5\">ASP.NET MVC App</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:82/Division5/Project5\">Python Web.py</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:83/Division5/Project5\">Ruby on Rails</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:84/Division5/Project5\">Node JS</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:85/Division5/Project5\">Angular 2+</a></li>";
		vResult += "<li><a href=\"http://htkb.dyndns.org:86/Division5/Project5\">ReactJS</a></li>";
    }else{
		vResult += vDefault;
	}
	
	return vResult;
}