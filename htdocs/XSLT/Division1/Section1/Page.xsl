<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template name="GetTitle">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Database Programming'"/>
		
		<title>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 1">Oracle Programming</xsl:when>
				<xsl:when test="$vPage = 2">Derby Programming</xsl:when>
				<xsl:when test="$vPage = 3">MySQL Programming</xsl:when>
				<xsl:when test="$vPage = 4">SQL Server Programming</xsl:when>
				<xsl:when test="$vPage = 5">PostgreSQL Programming</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</title>
	</xsl:template>
	
	<xsl:template name="GetContentHeader">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault" select="'Database Programming'"/>
		
		<h2>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
				<xsl:when test="$vPage = 1">Oracle Programming</xsl:when>
				<xsl:when test="$vPage = 2">Derby Programming</xsl:when>
				<xsl:when test="$vPage = 3">MySQL Programming</xsl:when>
				<xsl:when test="$vPage = 4">SQL Server Programming</xsl:when>
				<xsl:when test="$vPage = 5">PostgreSQL Programming</xsl:when>
				<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
			</xsl:choose>
		</h2>
	</xsl:template>
	
	<xsl:template name="GetContent">
		<xsl:param name = "vPage"/>
		<xsl:variable name="vDefault">
			This section is dedicated to database programming.
		</xsl:variable>
		
		<div id="idCenterContent">
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:value-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 1">
					This section is dedicated to Oracle based programming.
				</xsl:when>
				<xsl:when test="$vPage = 2">
					This section is dedicated to Derby based programming.
				</xsl:when>
				<xsl:when test="$vPage = 3">
					This section is dedicated to MySQL based programming.
				</xsl:when>
				<xsl:when test="$vPage = 4">
					This section is dedicated to SQL Server based programming.
				</xsl:when>
				<xsl:when test="$vPage = 5">
					This section is dedicated to PostgreSQL based programming.
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
			<a href="http://htkb.dyndns.org/Division1/Section1/Index.html">HTML</a><br />
			<a href="http://htkb.dyndns.org/Division1/Section1/Index.php">PHP</a><br />
			<a href="http://htkb.dyndns.org/Division1/Section1/Index.shtml">Perl</a><br />
			<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Index.html">Apache SSI</a><br />
			<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Index.html">JQuery</a><br />
			<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Index.html">Angular JS</a><br />
			<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Index.xhtml">JSF</a><br />
			<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Index.jsp">JSP</a><br />
			<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Index.jsp">JSP Spring MVC</a><br />
			<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Index.aspx">ASP.NET Javascript</a><br />
			<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Index.asp">ASP VBscript</a><br />
			<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Index.cshtml">ASP.NET Web App</a><br />
			<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Index.aspx">ASP.NET Webform</a><br />
			<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Index">ASP.NET MVC App</a><br />
			<a href="http://htkb.dyndns.org:82/Division1/Section1/Index">Python Web.py</a><br />
			<a href="http://htkb.dyndns.org:83/Division1/Section1/Index">Ruby on Rails</a><br />
			<a href="http://htkb.dyndns.org:84/Division1/Section1/Index">Node JS</a><br />
		</xsl:variable>
		
		<div>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:copy-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 1">
					<a href="http://htkb.dyndns.org/Division1/Section1/Project1.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project1.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project1.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Project1.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Project1.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Project1.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project1.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project1.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project1.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project1.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Project1.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project1.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project1.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Project1">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Division1/Section1/Project1">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Division1/Section1/Project1">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Division1/Section1/Project1">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 2">
					<a href="http://htkb.dyndns.org/Division1/Section1/Project2.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project2.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project2.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Project2.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Project2.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Project2.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project2.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project2.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project2.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Project2.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project2.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project2.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Project2">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Division1/Section1/Project2">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Division1/Section1/Project2">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Division1/Section1/Project2">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 3">
					<a href="http://htkb.dyndns.org/Division1/Section1/Project3.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project3.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project3.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Project3.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Project3.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Project3.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project3.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project3.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project3.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project3.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Project3.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project3.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project3.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Project3">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Division1/Section1/Project3">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Division1/Section1/Project3">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Division1/Section1/Project3">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 4">
					<a href="http://htkb.dyndns.org/Division1/Section1/Project4.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project4.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project4.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Project4.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Project4.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Project4.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project4.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project4.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project4.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project4.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Project4.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project4.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project4.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Project4">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Division1/Section1/Project4">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Division1/Section1/Project4">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Division1/Section1/Project4">Node JS</a><br />
				</xsl:when>
				<xsl:when test="$vPage = 5">
					<a href="http://htkb.dyndns.org/Division1/Section1/Project5.html">HTML</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project5.php">PHP</a><br />
					<a href="http://htkb.dyndns.org/Division1/Section1/Project5.shtml">Perl</a><br />
					<a href="http://htkb.dyndns.org/SSI/Division1/Section1/Project5.html">Apache SSI</a><br />
					<a href="http://htkb.dyndns.org/JQuery/Division1/Section1/Project5.html">JQuery</a><br />
					<a href="http://htkb.dyndns.org/AngularJS/Division1/Section1/Project5.html">Angular JS</a><br />
					<a href="http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project5.xhtml">JSF</a><br />
					<a href="http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project5.jsp">JSP</a><br />
					<a href="http://htkb.dyndns.org:8080/SpringMVC/Division1/Section1/Project5.jsp">JSP Spring MVC</a><br />
					<a href="http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project5.aspx">ASP.NET Javascript</a><br />
					<a href="http://htkb.dyndns.org:81/ASP/Division1/Section1/Project5.asp">ASP VBscript</a><br />
					<a href="http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project5.cshtml">ASP.NET Web App</a><br />
					<a href="http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project5.aspx">ASP.NET Webform</a><br />
					<a href="http://htkb.dyndns.org:81/MVC/Division1/Section1/Project5">ASP.NET MVC App</a><br />
					<a href="http://htkb.dyndns.org:82/Division1/Section1/Project5">Python Web.py</a><br />
					<a href="http://htkb.dyndns.org:83/Division1/Section1/Project5">Ruby on Rails</a><br />
					<a href="http://htkb.dyndns.org:84/Division1/Section1/Project5">Node JS</a><br />
				</xsl:when>
				<xsl:otherwise>
					<xsl:copy-of select="$vDefault"/>
				</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	
</xsl:stylesheet>