def getVersions(vPage, vLevel):
	vKey = vLevel+"_"+vPage

	vResult = ""
	vDefault = ""
	
	vDefault += """
		<ul class=\"versionsUl\">
			<li><a href=\"http://htkb.dyndns.org/Index.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Index.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Index.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Index.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Index.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Index.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Index.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Index.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Index.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Index.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Index\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Index.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Index.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Index.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Index.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Index\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Index\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Index\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Index\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Index\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Index\">ReactJS</a></li>
		</ul>
	"""
	
	if vKey == "0_0":
		vResult += vDefault
	elif vKey == "0_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/AboutUs.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/AboutUs.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/AboutUs.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/AboutUs.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/AboutUs.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/AboutUs.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/AboutUs.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/AboutUs.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/AboutUs.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/AboutUs\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/AboutUs.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/AboutUs\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/AboutUs\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/AboutUs\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/AboutUs\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/AboutUs\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/AboutUs\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "0_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Media.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Media.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Media.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Media.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Media.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Media.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Media.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Media.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Media.xml\">XLST</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Media\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Media.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Media.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Media.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Media.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Media\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Media\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Media\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Media\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Media\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Media\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "0_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/GitHubs.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/GitHubs.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/GitHubs.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/GitHubs.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/GitHubs.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/GitHubs.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/GitHubs.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/GitHubs.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/GitHubs.xml\">XLST</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/GitHubs.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/GitHubs.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/GitHubs\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/GitHubs.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/GitHubs.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/GitHubs.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/GitHubs.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/GitHubs\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/GitHubs\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/GitHubs\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/GitHubs\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/GitHubs\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/GitHubs\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "0_4":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/WebApps.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/WebApps.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/WebApps.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/WebApps.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/WebApps.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/WebApps.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/WebApps.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/WebApps.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/WebApps.xml\">XLST</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/WebApps.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/WebApps.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/WebApps\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/WebApps.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/WebApps.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/WebApps.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/WebApps.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/WebApps\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/WebApps\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/WebApps\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/WebApps\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/WebApps\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/WebApps\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project3\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_4":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project4\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_5":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project5\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_6":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project6.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project6.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project6.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project6.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project6.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project6.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project6.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project6.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project6.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project6.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project6.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project6\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project6.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project6.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project6.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project6.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project6\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project6\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project6\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project6\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project6\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project6\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_7":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project7.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project7.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project7.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project7.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project7.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project7.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project7.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project7.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project7.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project7.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project7.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project7\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project7.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project7.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project7.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project7.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project7\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project7\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project7\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project7\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project7\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project7\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_8":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project8.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project8.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project8.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project8.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project8.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project8.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project8.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project8.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project8.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project8.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project8.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project8\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project8.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project8.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project8.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project8.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project8\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project8\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project8\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project8\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project8\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project8\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_9":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project9.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project9.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project9.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project9.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project9.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project9.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project9.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project9.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project9.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project9.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project9.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project9\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project9.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project9.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project9.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project9.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project9\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project9\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project9\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project9\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project9\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project9\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_10":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project10.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project10.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project10.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project10.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project10.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project10.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project10.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project10.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project10.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project10.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project10.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project10\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project10.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project10.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project10.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project10.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project10\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project10\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project10\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project10\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project10\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project10\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_11":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project11.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project11.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project11.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project11.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project11.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project11.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project11.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project11.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project11.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project11.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project11.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project11\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project11.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project11.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project11.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project11.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project11\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project11\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project11\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project11\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project11\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project11\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_12":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project12.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project12.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project12.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project12.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project12.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project12.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project12.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project12.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project12.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project12.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project12.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project12\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project12.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project12.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project12.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project12.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project12\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project12\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project12\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project12\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project12\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project12\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_13":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project13.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project13.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project13.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project13.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project13.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project13.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project13.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project13.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project13.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project13.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project13.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project13\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project13.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project13.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project13.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project13.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project13\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project13\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project13\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project13\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project13\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project13\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_14":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project14.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project14.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project14.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project14.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project14.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project14.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project14.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project14.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project14.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project14.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project14.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project14\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project14.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project14.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project14.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project14.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project14\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project14\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project14\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project14\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project14\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project14\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_15":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project15.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project15.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project15.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project15.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project15.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project15.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project15.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project15.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project15.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project15.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project15.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project15\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project15.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project15.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project15.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project15.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project15\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project15\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project15\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project15\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project15\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project15\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_16":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project16.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project16.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project16.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project16.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project16.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project16.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project16.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project16.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project16.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project16.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project16.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project16\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project16.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project16.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project16.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project16.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project16\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project16\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project16\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project16\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project16\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project16\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_17":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project17.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project17.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project17.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project17.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project17.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project17.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project17.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project17.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project17.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project17.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project17.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project17\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project17.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project17.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project17.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project17.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project17\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project17\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project17\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project17\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project17\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project17\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "1_18":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division1/Project18.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project18.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division1/Project18.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division1/Project18.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division1/Project18.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division1/Project18.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project18.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division1/Project18.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division1/Project18.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project18.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project18.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project18\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project18.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project18.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project18.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project18.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project18\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division1/Project18\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division1/Project18\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division1/Project18\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division1/Project18\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division1/Project18\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Project3\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_1_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_1_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "2_1_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Project3\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_4":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Project4\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_5":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Project5\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project3\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_4":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project4\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_1_5":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project5\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "3_2_0":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "3_2_1":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "3_2_2":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_0":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_1":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_2":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_3":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_4":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	elif vKey == "4_5":
		vResult += """
			<ul class=\"versionsUl\">
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
			</ul>
		"""
	
	elif vKey == "5_0":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Index.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Index.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Index.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Index.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Index.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Index.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Index.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Index.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Index.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Index.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Index.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Index\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Index.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Index.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Index.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Index.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Index\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Index\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Index\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Index\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Index\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Index\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "5_1":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project1\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "5_2":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project2\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "5_3":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project3\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "5_4":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project4\">ReactJS</a></li>
			</ul>
		"""
	elif vKey == "5_5":
		vResult += """
			<ul class=\"versionsUl\">
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project5\">ReactJS</a></li>
			</ul>
		"""
	else:
		vResult = vDefault
	return vResult


