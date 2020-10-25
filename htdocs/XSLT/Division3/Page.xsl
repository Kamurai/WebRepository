<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template name="GetTitle">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Downloadable Projects'"/>
		
		<title>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 1">Online Experience Downloads</xsl:when>
				<xsl:when test="$vPage = 2">Game Maker Downloads</xsl:when>
				<xsl:when test="$vPage = 3">Java Downloads</xsl:when>
				<xsl:when test="$vPage = 4">C# Downloads</xsl:when>
				<xsl:when test="$vPage = 5">C++ Downloads</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</title>
	</xsl:template>
	
	<xsl:template name="GetContentHeader">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Downloadable Projects'"/>
		
		<h2>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 1">Online Experience Downloads</xsl:when>
				<xsl:when test="$vPage = 2">Game Maker Downloads</xsl:when>
				<xsl:when test="$vPage = 3">Java Downloads</xsl:when>
				<xsl:when test="$vPage = 4">C# Downloads</xsl:when>
				<xsl:when test="$vPage = 5">C++ Downloads</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</h2>
	</xsl:template>
	
	<xsl:template name="GetContent">
		<xsl:param name = "vPage"/>
		<xsl:param name = "vLevel"/>
		
		<xsl:variable name="vDefault">
			This section is dedicated to downloadable projects.
		</xsl:variable>
		
		<div id="idCenterContent">
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:value-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 1">
					We are working to build this into a better place.<br />
					If you found this, then you must be at least (Awesome/2).<br />
					Stay tuned, right now it's all about laying foundation for the future.<br />
				</xsl:when>
				<xsl:when test="$vPage = 2">
					Here are Game Maker Projects to play:<br /><br />
					"Gamebox Client: v6.0":<t /><a href="http://htkb.dyndns.org/downloads/GameBox_Client_Installer_v6p0.exe">Play games from...well, anywhere.</a><br />
					"Gamebox Server: v6.0":<t /><a href="http://htkb.dyndns.org/downloads/GameBox_Server_Installer_v6p0.exe">Host GameBox.</a><br />
					"39dll.dll: v2.5":<t /><a href="http://htkb.dyndns.org/downloads/39dll.dll">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a><br />
					"A Chess Server":<t /><a href="http://htkb.dyndns.org/downloads/Chess_Server.exe">Host a Chess game.</a><br />
					"A Chess Client":<t /><a href="http://htkb.dyndns.org/downloads/Chess_Client.exe">A game of Chess from anywhere.</a><br />
					"I Dunno":<t /><a href="http://htkb.dyndns.org/downloads/Idunno.exe">I dunno, it\"s a fun puzzle game though.</a><br />
					"Purification":<t /><a href="http://htkb.dyndns.org/downloads/Zombies.exe">Kill zombies...lots of zombies.</a><br />
					"Trail of the Undead: The Way Home":<t /><a href="http://htkb.dyndns.org/downloads/TrailoftheUndead.exe">An adventure of zombie killing goodness.</a><br />
					"Discovery" (buggy Alpha):<t /><a href="http://htkb.dyndns.org/downloads/Discovery.exe">Play a game of discovery and survival.</a><br />
					"Twisted Tactics: Version 0.1" (buggy Alpha):<t /><a href="http://htkb.dyndns.org/downloads/Tactical.exe">Scrapped two player tactical system.</a><br />
				"Skitzo Burrito (Alpha)": <t /><a href="http://htkb.dyndns.org/downloads/Emotive-Default-1.0.0.3.exe">An emotional platform survival game.</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 3">
					Here are Java Programs to download:<br /><br />
					"Blood Bowl Manager":<t /><a href="http://htkb.dyndns.org/downloads/pichaku.zip">This is currently not available.</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 4">
					Here are C# Programs to download:<br /><br />
					"Chess Program":<t /><a href="http://htkb.dyndns.org/downloads/pichaku.zip">This is currently not available.</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 5">
					Here are C++ Programs to download:<br /><br />
					"HTKB Bar Code System":<t /><a href="http://htkb.dyndns.org/downloads/pichaku.zip">This is currently not available.</a><br />
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
			<a href="http://htkb.dyndns.org/Index.html">HTML</a><br />
			<a href="http://htkb.dyndns.org/Index.php">PHP</a><br />
			<a href="http://htkb.dyndns.org/Index.shtml">Perl</a><br />
			<a href="http://htkb.dyndns.org/SSI/Index.html">Apache SSI</a><br />
			<a href="http://htkb.dyndns.org/JQuery/Index.html">JQuery</a><br />
			<a href="http://htkb.dyndns.org/AngularJS/Index.html">Angular JS</a><br />
			<a href="http://htkb.dyndns.org:8080/JSFApplication/Index.xhtml">JSF</a><br />
			<a href="http://htkb.dyndns.org:8080/JSPApplication/Index.jsp">JSP</a><br />
			<a href="http://htkb.dyndns.org:8080/SpringMVC/Index.jsp">JSP Spring MVC</a><br />
			<a href="http://htkb.dyndns.org:81/ASPNET/Index.aspx">ASP.NET Javascript</a><br />
			<a href="http://htkb.dyndns.org:81/ASP/Index.asp">ASP VBscript</a><br />
			<a href="http://htkb.dyndns.org:81/WebApplication/Index.cshtml">ASP.NET Web App</a><br />
			<a href="http://htkb.dyndns.org:81/WebForm/Index.aspx">ASP.NET Webform</a><br />
			<a href="http://htkb.dyndns.org:81/MVC/Index">ASP.NET MVC App</a><br />
			<a href="http://htkb.dyndns.org:82/Index">Python Web.py</a><br />
			<a href="http://htkb.dyndns.org:83/Index">Ruby on Rails</a><br />
			<a href="http://htkb.dyndns.org:84/Index">Node JS</a><br />
		</xsl:variable>
		
		<div>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:copy-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 1">
					<a href="http://htkb.dyndns.org/Project1.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Project1.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Project1.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Project1.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Project1.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Project1.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Project1.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Project1.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Project1.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Project1.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Project1.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Project1.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Project1.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Project1">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Project1">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Project1">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Project1">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 2">
					<a href="http://htkb.dyndns.org/Project2.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Project2.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Project2.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Project2.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Project2.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Project2.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Project2.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Project2.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Project2.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Project2.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Project2.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Project2.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Project2.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Project2">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Project2">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Project2">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Project2">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 3">
					<a href="http://htkb.dyndns.org/Project3.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Project3.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Project3.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Project3.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Project3.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Project3.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Project3.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Project3.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Project3.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Project3.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Project3.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Project3.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Project3.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Project3">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Project3">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Project3">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Project3">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 4">
					<a href="http://htkb.dyndns.org/Project4.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Project4.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Project4.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Project4.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Project4.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Project4.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Project4.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Project4.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Project4.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Project4.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Project4.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Project4.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Project4.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Project4">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Project4">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Project4">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Project4">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 5">
					<a href="http://htkb.dyndns.org/Project5.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Project5.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Project5.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Project5.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Project5.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Project5.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Project5.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Project5.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Project5.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Project5.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Project5.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Project5.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Project5.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Project5">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Project5">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Project5">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Project5">Node JS</a><br />
				</xsl:when>
				<xsl:otherwise>
					<xsl:copy-of select="$vDefault"/>
				</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	
</xsl:stylesheet>