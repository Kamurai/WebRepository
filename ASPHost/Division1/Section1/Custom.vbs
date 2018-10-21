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
		ElseIf vPage = 6 Then
			vResult = vResult + "XML Programming"
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
		ElseIf vPage = 6 Then
			vResult = vResult + "XML Programming"
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
	
	vResult = vResult + "<p id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "This section is dedicated to Oracle based programming."
			vResult = vResult + "<table>"
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
			vResult = vResult + "</table>"
			
		ElseIf vPage = 2 Then
			vResult = vResult + "This section is dedicated to Derby based programming."
		ElseIf vPage = 3 Then
			vResult = vResult + "This section is dedicated to MySQL based programming."
		ElseIf vPage = 4 Then
			'SQLServerDataList()
		
			vResult = vResult + "This section is dedicated to SQL Server based programming."
			vResult = vResult + "<table>"
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
			vResult = vResult + "</table>"
		ElseIf vPage = 5 Then
			vResult = vResult + "This section is dedicated to Postgres based programming."
		ElseIf vPage = 6 Then
			vResult = vResult + "This section is dedicated to XML based programming."
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</p>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division1/Section1/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division1/Section1/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division1/Section1/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Division1/Section1/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Javascript/Division1/Section1/Index.html"">HTML Javascript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Division1/Section1/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/AngularJS/Division1/Section1/Index.html"">Angular JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Index.aspx"">ASP.NET JavaScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Division1/Section1/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Division1/Section1/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Division1/Section1/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Division1/Section1/Index"">Ruby On Rails</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Division1/Section1/Index"">Node JS</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project1.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project1.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project1.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division1/Section1/Project1.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division1/Section1/Project1.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division1/Section1/Project1.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division1/Section1/Project1.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project1.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project1.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project1.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project1.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division1/Section1/Project1"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division1/Section1/Project1"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division1/Section1/Project1"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division1/Section1/Project1"">Node JS</a><br>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division1/Section1/Project2.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division1/Section1/Project2.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division1/Section1/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division1/Section1/Project2.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project2.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division1/Section1/Project2"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division1/Section1/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division1/Section1/Project2"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division1/Section1/Project2"">Node JS</a><br>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division1/Section1/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division1/Section1/Project3.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division1/Section1/Project3.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division1/Section1/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division1/Section1/Project3.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project3.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division1/Section1/Project3"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division1/Section1/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division1/Section1/Project3"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division1/Section1/Project3"">Node JS</a><br>"
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult    
End Function