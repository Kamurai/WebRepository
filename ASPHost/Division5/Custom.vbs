Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Database Programming"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Oracle Programming"
		ElseIf vPage = 2 Then
			vResult = vResult + "Derby Programming"
		ElseIf vPage = 3 Then
			vResult = vResult + "MySQL Programming"
		ElseIf vPage = 4 Then
			vResult = vResult + "SQL Server Programming"
		ElseIf vPage = 5 Then
			vResult = vResult + "Postgres Programming"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Database Programming"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Oracle Programming"
		ElseIf vPage = 2 Then
			vResult = vResult + "Derby Programming"
		ElseIf vPage = 3 Then
			vResult = vResult + "MySQL Programming"
		ElseIf vPage = 4 Then
			vResult = vResult + "SQL Server Programming"
		ElseIf vPage = 5 Then
			vResult = vResult + "Postgres Programming"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to database based programming."
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "This section is dedicated to Oracle based programming."
			vResult = vResult + "<div>"
				vResult = vResult + "<tr>"
					vResult = vResult + "<td>"
						vResult = vResult + "Index"
					vResult = vResult + "</td>"
					vResult = vResult + "<td>"
						vResult = vResult + "Color"
					vResult = vResult + "</td>"
				vResult = vResult + "</tr>"
				vResult = vResult + "<tr>"
					vResult = vResult + "<td>"
						'OracleMethod("1",0)
					vResult = vResult + "</td>"
					vResult = vResult + "<td>"
						'OracleMethod("Red",0)
					vResult = vResult + "</td>"
				vResult = vResult + "</tr>"
			vResult = vResult + "</div>"
			
		ElseIf vPage = 2 Then
			vResult = vResult + "This section is dedicated to Derby based programming."
		ElseIf vPage = 3 Then
			vResult = vResult + "This section is dedicated to MySQL based programming."
		ElseIf vPage = 4 Then
			'SQLServerDataList()
		
			vResult = vResult + "This section is dedicated to SQL Server based programming."
			vResult = vResult + "<div>"
				vResult = vResult + "<tr>"
					vResult = vResult + "<td>"
						vResult = vResult + "Index"
					vResult = vResult + "</td>"
					vResult = vResult + "<td>"
						vResult = vResult + "Color"
					vResult = vResult + "</td>"
				vResult = vResult + "</tr>"
				vResult = vResult + "<tr>"
					vResult = vResult + "<td>"
						'vResult = vResult + "<%#Container.DataItem(""Index"")%>"
					vResult = vResult + "</td>"
					vResult = vResult + "<td>"
						'/vResult = vResult + "<%#Container.DataItem(""Color"")%>"
					vResult = vResult + "</td>"
				vResult = vResult + "</tr>"
			vResult = vResult + "</div>"
		ElseIf vPage = 5 Then
			vResult = vResult + "This section is dedicated to Postgres based programming."
		ElseIf vPage = 6 Then
			vResult = vResult + "This section is dedicated to XML based programming."
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division5/Index.html"">HTML</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division5/Index.php"">PHP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division5/Index.shtml"">Perl</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Index.html"">Apache SSI</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Index.html"">HTML Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Index.html"">JQuery</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Index.html"">Angular JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Index.html"">JSX</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Index.xml"">XSLT</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Index.xhtml"">JSF</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Index.jsp"">JSP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Index"">JSP Spring MVC</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Index.aspx"">ASP.NET Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Index.asp"">ASP VBscript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Index.cshtml"">ASP.NET Web App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Index.aspx"">ASP.NET Webform</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Index"">ASP.NET MVC App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:82/Division5/Index"">Python Web.py</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:83/Division5/Index"">Ruby on Rails</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:84/Division5/Index"">Node JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:85/Division5/Index"">Angular 2+</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:86/Division5/Index"">ReactJS</a></li>"
	
	vResult = vResult + "<ul class=""versionsUl"">"
		
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project1.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project1.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project1.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Project1.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Project1.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Project1.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Project1.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Project1.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Project1.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Project1.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Project1.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Project1"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Project1.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Project1.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Project1.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Project1.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Project1"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division5/Project1"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division5/Project1"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division5/Project1"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division5/Project1"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division5/Project1"">ReactJS</a></li>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project2.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project2.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project2.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Project2.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Project2.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Project2.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Project2.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Project2.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Project2.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Project2.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Project2.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Project2"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Project2.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Project2.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Project2.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Project2.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Project2"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division5/Project2"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division5/Project2"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division5/Project2"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division5/Project2"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division5/Project2"">ReactJS</a></li>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project3.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project3.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project3.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Project3.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Project3.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Project3.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Project3.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Project3.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Project3.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Project3.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Project3.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Project3"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Project3.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Project3.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Project3.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Project3.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Project3"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division5/Project3"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division5/Project3"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division5/Project3"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division5/Project3"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division5/Project3"">ReactJS</a></li>"
	ElseIf vPage = 4 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project4.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project4.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project4.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Project4.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Project4.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Project4.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Project4.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Project4.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Project4.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Project4.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Project4.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Project4"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Project4.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Project4.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Project4.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Project4.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Project4"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division5/Project4"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division5/Project4"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division5/Project4"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division5/Project4"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division5/Project4"">ReactJS</a></li>"
	ElseIf vPage = 5 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project5.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project5.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division5/Project5.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division5/Project5.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division5/Project5.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division5/Project5.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division5/Project5.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division5/Project5.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division5/Project5.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division5/Project5.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division5/Project5.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division5/Project5"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division5/Project5.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division5/Project5.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division5/Project5.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division5/Project5.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division5/Project5"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division5/Project5"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division5/Project5"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division5/Project5"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division5/Project5"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division5/Project5"">ReactJS</a></li>"
	Else
		vResult = vResult + vDefault
	End If
	
	vResult = vResult + "</ul>"
		
	getVersions = vResult    
End Function