<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:template name="GetHead">
		<xsl:param name = "vDivision"/>
		<xsl:variable name="styleFile"><xsl:call-template name="GetStyleFile"><xsl:with-param name="vDivision"><xsl:value-of select="$vDivision"/></xsl:with-param></xsl:call-template></xsl:variable>
		
		<head>
			<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'/>
			<link href="http://htkb.dyndns.org/Styles/{$styleFile}" rel='stylesheet' type='text/CSS'/>
		</head>
	</xsl:template>
	
	
	<xsl:template name="GetStyleFile">
		<xsl:param name = "vDivision"/>
		<xsl:variable name="vDefault" select="'Main.css'"/>
		
		<xsl:choose>
			<xsl:when test="$vDivision &lt;= 0"><xsl:value-of select="$vDefault"/></xsl:when>
			<xsl:when test="$vDivision = 1">Division1.css</xsl:when>
			<xsl:when test="$vDivision = 2">Division2.css</xsl:when>
			<xsl:when test="$vDivision = 3">Division3.css</xsl:when>
			<xsl:otherwise><xsl:value-of select="$vDefault"/></xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	
	<xsl:template name="GetLogo">
		<div>
			<img id="idLogo" src="http://htkb.dyndns.org/Pictures/logoHTKB.jpg"/><br />
		</div>
	</xsl:template>
	
	<xsl:template name="GetNavBar">
		<xsl:param name = "vLevel"/>
		<xsl:variable name="vPath">
			<xsl:call-template name="GetPath">
				<xsl:with-param name="vLevel">
					<xsl:value-of select="$vLevel"/>
				</xsl:with-param>
			</xsl:call-template>
		</xsl:variable>
		
		<div>
			<a className='navBar' href="{$vPath}Index.xml">Home</a>
			<a className='navBar' href="{$vPath}Division1/Index.xml">Web Programming</a>
			<a className='navBar' href="{$vPath}Division2/Index.xml">Private Projects</a>
			<a className='navBar' href="{$vPath}Division3/Index.xml">Downloadable Projects</a>
		</div>
	</xsl:template>
	
	<xsl:template name="GetNavigationHeader">
		<h4>
			Navigation
		</h4>
	</xsl:template>
	
	<xsl:template name="GetInformationHeader">
		<h4>
			Information
		</h4>
	</xsl:template>
	
	<xsl:template name="GetInformation">
		<div>
			This is written with XSLT.<br />
			Other versions can be found here:<br />
		</div>
	</xsl:template>
	
	<xsl:template name="GetGDR">
		<div>
			<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a><br />
		</div>
	</xsl:template>
	
	<xsl:template name="GetWinRar">
		<div>
			<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a><br />
		</div>
	</xsl:template>
	
	<xsl:template name="GetFooter">
		<div id='idFooterContent'>
			Copyright 2012 All rights reserved<br />   
			House That Kamurai Built<br />
		</div>
	</xsl:template>
	
	<xsl:template name="GetWebMaster">
		<div id='idFooterManagement'>
			Website managed by Kamurai.
		</div>
	</xsl:template>
	
	
	
	<xsl:template name="Quesodilla">
		<param name="vLevel"/>
			Quesodillas!
	</xsl:template>
	
	<xsl:template name="GetPath">
		<xsl:param name="vLevel"/>
		
		<xsl:choose>
			<xsl:when test="$vLevel &lt;= 0">./</xsl:when>
			<xsl:when test="$vLevel = 1">../</xsl:when>
			<xsl:when test="$vLevel = 2">../../</xsl:when>
			<xsl:when test="$vLevel = 3">../../../</xsl:when>
			<xsl:when test="$vLevel = 4">../../../../</xsl:when>
			<xsl:when test="$vLevel = 5">../../../../../</xsl:when>
			<xsl:when test="$vLevel = 6">../../../../../../</xsl:when>
			<xsl:when test="$vLevel = 7">../../../../../../../</xsl:when>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>