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
		</xsl:variable>
		
		<div>
			<xsl:choose>
				<xsl:when test="$vPage &lt;= 0">
					<xsl:copy-of select="$vDefault"/>
				</xsl:when>
				<xsl:when test="$vPage = 1">
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
				</xsl:when>
				<xsl:when test="$vPage = 2">
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
				</xsl:when>
				<xsl:when test="$vPage = 3">
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
				</xsl:when>
				<xsl:when test="$vPage = 4">
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
				</xsl:when>
				<xsl:when test="$vPage = 5">
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
				</xsl:when>
				<xsl:otherwise>
					<xsl:copy-of select="$vDefault"/>
				</xsl:otherwise>
			</xsl:choose>
		</div>
	</xsl:template>
	
</xsl:stylesheet>