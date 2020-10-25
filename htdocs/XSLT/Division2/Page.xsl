<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template name="GetTitle">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Private Projects'"/>
		
		<title>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 2">Assault CCG</xsl:when>
				<xsl:when test="$vPage = 3">Mars Projects</xsl:when>
				<xsl:when test="$vPage = 6">Truth</xsl:when>
				<xsl:when test="$vPage = 7">Kingdoms</xsl:when>
				<xsl:when test="$vPage = 8">Terminal World</xsl:when>
				<xsl:when test="$vPage = 9">Monster Office Workplace</xsl:when>
				<xsl:when test="$vPage = 10">Battle Princesses</xsl:when>
				<xsl:when test="$vPage = 11">Sacred Offerings</xsl:when>
				<xsl:when test="$vPage = 12">The Way</xsl:when>
				<xsl:when test="$vPage = 13">Conspiratorium</xsl:when>
				<xsl:when test="$vPage = 14">Conversion</xsl:when>
				<xsl:when test="$vPage = 15">Conquer</xsl:when>
				<xsl:when test="$vPage = 16">Armor Up!</xsl:when>
				<xsl:when test="$vPage = 17">Goblins and Guardians</xsl:when>
				<xsl:when test="$vPage = 18">MacCreedy's Mansion</xsl:when>
				<xsl:when test="$vPage = 19">Dundered Acre Wood</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</title>
	</xsl:template>
	
	<xsl:template name="GetContentHeader">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Private Projects'"/>
		
		<h2>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 2">Assault CCG</xsl:when>
				<xsl:when test="$vPage = 3">Mars Projects</xsl:when>
				<xsl:when test="$vPage = 6">Truth</xsl:when>
				<xsl:when test="$vPage = 7">Kingdoms</xsl:when>
				<xsl:when test="$vPage = 8">Terminal World</xsl:when>
				<xsl:when test="$vPage = 9">Monster Office Workplace</xsl:when>
				<xsl:when test="$vPage = 10">Battle Princesses</xsl:when>
				<xsl:when test="$vPage = 11">Sacred Offerings</xsl:when>
				<xsl:when test="$vPage = 12">The Way</xsl:when>
				<xsl:when test="$vPage = 13">Conspiratorium</xsl:when>
				<xsl:when test="$vPage = 14">Conversion</xsl:when>
				<xsl:when test="$vPage = 15">Conquer</xsl:when>
				<xsl:when test="$vPage = 16">Armor Up!</xsl:when>
				<xsl:when test="$vPage = 17">Goblins and Guardians</xsl:when>
				<xsl:when test="$vPage = 18">MacCreedy's Mansion</xsl:when>
				<xsl:when test="$vPage = 19">Dundered Acre Wood</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</h2>
	</xsl:template>
	
	<xsl:template name="GetContent">
		<xsl:param name = "vPage"/>
		<xsl:param name = "vLevel"/>
		
		<xsl:variable name="vDefault">
			This section is dedicated to HTKB projects.
		</xsl:variable>
		
		<div id="idCenterContent">
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:value-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 2">
					This section is dedicated CCG project \"Assault\".<br />
				</xsl:when>
				<xsl:when test="$vPage = 3">
					This section is dedicated to the Mars centered project "Opposition".<br />
				</xsl:when>
				<xsl:when test="$vPage = 6">
					This section is dedicated to the MMO RTS project "Truth".<br />
					Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.<br />
				</xsl:when>
				<xsl:when test="$vPage = 7">
					This section is dedicated to the digital board game project "Kingdoms".<br />
					Explore the world\"s Kingdoms, get rich, get strong and conquer.<br />
				</xsl:when>
				<xsl:when test="$vPage = 8">
					This section is dedicated to the simulation MMO centered project "Terminal World".<br />
					This is a virtual environment where a zombie outbreak is about to happen.<br />
					Can you beat the zombies?  Can you survive?<br />
				</xsl:when>
				<xsl:when test="$vPage = 9">
					This section is dedicated to the card and board game project "Monster Office Workplace".<br />
					These monsters mean serious business.<br />
					Can you earn the most credit and smooze your way into a promotion?<br />
				</xsl:when>
				<xsl:when test="$vPage = 10">
					This section is dedicated to the card game project "Battle Princesses".<br />
					Ever wanted to see your favorite princess battle for the kingdom?<br />
					These princess aren\"t your helpless maidens, but valiant warriors themselves.<br />
				</xsl:when>
				<xsl:when test="$vPage = 11">
					This section is dedicated to the board game project "Sacred Offerings".<br />			
					Being a god is hard, you have to eat, but don't want to fall out favor with the people more than the other deities.<br />
					Draw people to worship you, but be discerning about who is sacrificed.<br />
				</xsl:when>
				<xsl:when test="$vPage = 12">
					This section is dedicated to the card game project "The Way".<br />
					You seek to find enlightment by contemplating the elements.<br />
					Escape the binds of the world and the board to reach enlightment and win.<br />
				</xsl:when>
				<xsl:when test="$vPage = 13">
					This section is dedicated to the board game project "Conspiratorium".<br />
					A game of assassins and CIA, you must remember who is friend and who is not.<br />
				</xsl:when>
				<xsl:when test="$vPage = 14">
					This section is dedicated to the board game project "Conversion".<br />
					Compete on the elemental market by processing elements and becoming the elemental kingpin.<br />
				</xsl:when>
				<xsl:when test="$vPage = 15">
					This section is dedicated to the board game project "Conquer".<br />
					Battle other Kaiju for the right to rule over the ruins of a kingdom.<br />
				</xsl:when>
				<xsl:when test="$vPage = 16">
					This section is dedicated to the board game project "Armor Up!".<br />
					Armor up your princess to battle the other princesses for the throne.<br />
				</xsl:when>
				<xsl:when test="$vPage = 17">
					This section is dedicated to the board game project "Goblins and Guardians".<br />
					Goblins and Guardians battle it out in a labrynth of a building.<br />
				</xsl:when>
				<xsl:when test="$vPage = 18">
					This section is dedicated to the board game project "MacCreedy's Mansion".<br />
					Players compete in this worker placement to restore the great MacCreedy Mansion.<br />
				</xsl:when>
				<xsl:when test="$vPage = 19">
					This section is dedicated to the board game project "Dundered Acre Woods".<br />
					Animals prepare for the next Winter despite distractions in this dice draft and placement game.<br />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$vDefault"/>
				</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	
	<xsl:template name="GetVersions">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault">
			<a href='http://htkb.dyndns.org/Division2/Index.html'>HTML</a><br />
			<a href='http://htkb.dyndns.org/Division2/Index.php'>PHP</a><br />
			<a href='http://htkb.dyndns.org/Division2/Index.shtml'>Perl</a><br />
			<a href='http://htkb.dyndns.org/SSI/Division2/Index.html'>Apache SSI</a><br />
			<a href='http://htkb.dyndns.org/JQuery/Division2/Index.html'>JQuery</a><br />
			<a href='http://htkb.dyndns.org/AngularJS/Division2/Index.html'>Angular JS</a><br />
			<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml'>JSF</a><br />
			<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp'>JSP</a><br />
			<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Index.jsp'>JSP Spring MVC</a><br />
			<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx'>ASP.NET Javascript</a><br />
			<a href='http://htkb.dyndns.org:81/ASP/Division2/Index.asp'>ASP VBscript</a><br />
			<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml'>ASP.NET Web App</a><br />
			<a href='http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx'>ASP.NET Webform</a><br />
			<a href='http://htkb.dyndns.org:81/MVC/Division2/Index'>ASP.NET MVC App</a><br />
			<a href='http://htkb.dyndns.org:82/Division2/Index'>Python Web.py</a><br />
			<a href='http://htkb.dyndns.org:83/Division2/Index'>Ruby on Rails</a><br />
			<a href='http://htkb.dyndns.org:84/Division2/Index'>Node JS</a><br />
		</xsl:variable>
		
		<div>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:copy-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 2">
					<a href='http://htkb.dyndns.org/Division2/Project2.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project2.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project2.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project2.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project2.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project2.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project2.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project2'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project2'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project2'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project2'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 3">
					<a href='http://htkb.dyndns.org/Division2/Project3.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project3.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project3.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project3.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project3.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project3.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project3.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project3'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project3'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project3'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project3'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 6">
					<a href='http://htkb.dyndns.org/Division2/Project6.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project6.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project6.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project6.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project6.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project6.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project6.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project6.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project6'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project6'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project6'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project6'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 7">
					<a href='http://htkb.dyndns.org/Division2/Project7.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project7.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project7.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project7.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project7.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project7.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project7.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project7.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project7'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project7'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project7'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project7'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 8">
					<a href='http://htkb.dyndns.org/Division2/Project8.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project8.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project8.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project8.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project8.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project8.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project8.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project8.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project8'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project8'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project8'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project8'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 9">
					<a href='http://htkb.dyndns.org/Division2/Project9.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project9.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project9.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project9.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project9.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project9.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project9.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project9.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project9'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project9'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project9'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project9'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 10">
					<a href='http://htkb.dyndns.org/Division2/Project10.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project10.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project10.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project10.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project10.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project10.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project10.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project10.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project10'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project10'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project10'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project10'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 11">
					<a href='http://htkb.dyndns.org/Division2/Project11.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project11.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project11.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project11.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project11.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project11.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project11.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project11.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project11'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project11'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project11'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project11'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 12">
					<a href='http://htkb.dyndns.org/Division2/Project12.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project12.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project12.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project12.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project12.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project12.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project12.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project12.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project12'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project12'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project12'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project12'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 13">
					<a href='http://htkb.dyndns.org/Division2/Project13.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project13.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project13.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project13.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project13.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project13.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project13.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project13.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project13'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project13'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project13'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project13'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 14">
					<a href='http://htkb.dyndns.org/Division2/Project14.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project14.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project14.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project14.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project14.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project14.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project14.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project14.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project14'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project14'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project14'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project14'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 15">
					<a href='http://htkb.dyndns.org/Division2/Project15.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project15.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project15.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project15.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project15.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project15.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project15.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project15.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project15.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project15.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project15.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project15.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project15.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project15'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project15'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project15'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project15'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 16">
					<a href='http://htkb.dyndns.org/Division2/Project16.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project16.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project16.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project16.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project16.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project16.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project16.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project16.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project16.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project16.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project16.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project16.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project16.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project16'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project16'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project16'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project16'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 17">
					<a href='http://htkb.dyndns.org/Division2/Project17.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project17.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project17.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project17.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project17.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project17.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project17.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project17.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project17.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project17.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project17.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project17.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project17.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project17'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project17'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project17'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project17'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 18">
					<a href='http://htkb.dyndns.org/Division2/Project18.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project18.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project18.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project18.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project18.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project18.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project18.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project18.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project18.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project18.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project18.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project18.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project18.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project18'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project18'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project18'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project18'>Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 19">
					<a href='http://htkb.dyndns.org/Division2/Project19.html'>HTML</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project19.php'>PHP</a><br />
					<a href='http://htkb.dyndns.org/Division2/Project19.shtml'>Perl</a><br />
					<a href='http://htkb.dyndns.org/SSI/Division2/Project19.html'>Apache SSI</a><br />
					<a href='http://htkb.dyndns.org/JQuery/Division2/Project19.html'>JQuery</a><br />
					<a href='http://htkb.dyndns.org/AngularJS/Division2/Project19.html'>Angular JS</a><br />
					<a href='http://htkb.dyndns.org:8080/JSFApplication/Division2/Project19.xhtml'>JSF</a><br />
					<a href='http://htkb.dyndns.org:8080/JSPApplication/Division2/Project19.jsp'>JSP</a><br />
					<a href='http://htkb.dyndns.org:8080/SpringMVC/Division2/Project19.jsp'>JSP Spring MVC</a><br />
					<a href='http://htkb.dyndns.org:81/ASPNET/Division2/Project19.aspx'>ASP.NET Javascript</a><br />
					<a href='http://htkb.dyndns.org:81/ASP/Division2/Project19.asp'>ASP VBscript</a><br />
					<a href='http://htkb.dyndns.org:81/WebApplication/Division2/Project19.cshtml'>ASP.NET Web App</a><br />
					<a href='http://htkb.dyndns.org:81/WebForm/Division2/Project19.aspx'>ASP.NET Webform</a><br />
					<a href='http://htkb.dyndns.org:81/MVC/Division2/Project19'>ASP.NET MVC App</a><br />
					<a href='http://htkb.dyndns.org:82/Division2/Project19'>Python Web.py</a><br />
					<a href='http://htkb.dyndns.org:83/Division2/Project19'>Ruby on Rails</a><br />
					<a href='http://htkb.dyndns.org:84/Division2/Project19'>Node JS</a><br />
				</xsl:when>
				
				<xsl:otherwise>
					<xsl:copy-of select="$vDefault"/>
				</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	
</xsl:stylesheet>