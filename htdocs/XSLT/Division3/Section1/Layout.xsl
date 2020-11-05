<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:include href="../../Universal.xsl"/>
	<xsl:include href="./Page.xsl"/>
	
	<xsl:template name="GetNavigation">
		<xsl:param name = "vLevel"/>
		<xsl:variable name="vPath"><xsl:call-template name="GetPath"><xsl:with-param name="vLevel"><xsl:value-of select="$vLevel"/></xsl:with-param></xsl:call-template></xsl:variable>
		
		<ul class="navigationUl">
			<li><a class="navlinkA" href="../Index.xml">Video Games</a></li>
			<li><a class="navlinkA" href="../Project1.xml">Truth</a></li>
			<li><a class="navlinkA" href="../Project2.xml">The Wrong Ninja</a></li>
			<li><a class="navlinkA" href="../Project3.xml">Gynowars</a></li>
			<li><a class="navlinkA" href="../Project4.xml">Terminal World</a></li>
			<li><a class="navlinkA" href="../Project5.xml">Mars: Opposition</a></li>
			<li><a class="navlinkA" href="../Section1/Index.xml">Antarrea</a></li>
			<ul class="navigationUl">
				<li><a class="navlinkB" href="./Project1.xml">Revolutions: Invading Nations</a></li>
				<li><a class="navlinkB" href="./Project2.xml">Revolutions: Rebellion Against the Fist</a></li>
				<li><a class="navlinkB" href="./Project3.xml">Revolutions: Return to Arms</a></li>
				<li><a class="navlinkB" href="./Project4.xml">Revolutions: Post Wars</a></li>
				<li><a class="navlinkB" href="./Project5.xml">Avia:Elemental Angels</a></li>
			</ul>
			<li><a class="navlinkA" href="../Section2/Index.xml">Renley</a></li>
		</ul>
	</xsl:template>
	
	<xsl:template match="/">
		<xsl:variable name="vDivision">
			<xsl:value-of select="page/vDivision"/>
		</xsl:variable>
		<xsl:variable name="vLevel">
			<xsl:value-of select="page/vLevel"/>
		</xsl:variable>
		<xsl:variable name="vPage">
			<xsl:value-of select="page/vPage"/>
		</xsl:variable>
			
		<html>
			<xsl:call-template name="GetHead">
				<xsl:with-param name="vDivision">
					<xsl:value-of select="$vDivision"/>
				</xsl:with-param>
			</xsl:call-template>
			<body>
				<div id="idGeneralLayout">
					<div id="idHeaderRow">
						<div id="idHeaderRowCenter" >
							<xsl:call-template name="GetLogo" />
						</div>	
					</div>
					<div id="idNavigationRow">
						<div id="idNavigationBar" >
							<xsl:call-template name="GetNavBar">
								<xsl:with-param name="vLevel">
									<xsl:value-of select="$vLevel"/>
								</xsl:with-param>
							</xsl:call-template>
						</div>
					</div>
					<div id="idCenterRow">
						<div id="idCenterRowLeft" >
							<xsl:call-template name="GetNavigationHeader" />
							<xsl:call-template name="GetNavigation">
								<xsl:with-param name="vLevel">
									<xsl:value-of select="$vLevel"/>
								</xsl:with-param>
							</xsl:call-template>
						</div>	
						<div id="idCenterRowMain" >
							<xsl:call-template name="GetTitle">
								<xsl:with-param name="vPage">
									<xsl:value-of select="$vPage"/>
								</xsl:with-param>
							</xsl:call-template>
							<xsl:call-template name="GetContentHeader">
								<xsl:with-param name="vPage">
									<xsl:value-of select="$vPage"/>
								</xsl:with-param>
							</xsl:call-template>
							<xsl:call-template name="GetContent">
								<xsl:with-param name="vPage">
									<xsl:value-of select="$vPage"/>
								</xsl:with-param>
							</xsl:call-template>
						</div>	
						<div id="idCenterRowRight" >
							<xsl:call-template name="GetInformationHeader" />
							<xsl:call-template name="GetInformation" />
							<xsl:call-template name="GetVersions">
								<xsl:with-param name="vPage">
									<xsl:value-of select="$vPage"/>
								</xsl:with-param>
							</xsl:call-template>
						</div>	
					</div>
					<div id="idFooterRow">
						<div id="idFooterMain" >
							<div id="idFooterContent" >
								<xsl:call-template name="GetWinRar" />
								<xsl:call-template name="GetGDR" />
								<xsl:call-template name="GetFooter" />
							</div>
							<div id="idFooterManagement" >
								<xsl:call-template name="GetWebMaster" />
							</div>
						</div>	
					</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>