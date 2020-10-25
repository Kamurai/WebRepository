<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:include href="../Universal.xsl"/>
	<xsl:include href="./Page.xsl"/>
	
	<xsl:template name="GetNavigation">
		<xsl:param name = "vLevel"/>
		<xsl:variable name="vPath"><xsl:call-template name="GetPath"><xsl:with-param name="vLevel"><xsl:value-of select="$vLevel"/></xsl:with-param></xsl:call-template></xsl:variable>
		
		<div>
			<a className="navlinkA" href="{$vPath}Division2/Section1/Index.xml">Gynowars</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project2.xml">Assault</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project3.xml">Mars</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Section4/Index.xml">Renley</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Section5/Index.xml">Antarrea</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project6.xml">Truth</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project7.xml">Kingdoms</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project8.xml">Terminal World</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project9.xml">Monster Office Workplace</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project10.xml">Battle Princesses</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project11.xml">Sacred Offerings</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project12.xml">The Way</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project13.xml">Conspiratorium</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project14.xml">Conversion</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project15.xml">Conquer</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project16.xml">Armor Up!</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project17.xml">Goblins and Guardians</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project18.xml">MacCreedy's Mansion</a><br /><br />
			<a className="navlinkA" href="{$vPath}Division2/Project19.xml">Dundered Acre Wood</a><br /><br />
    	</div>
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
								<xsl:with-param name="vLevel">
									<xsl:value-of select="$vLevel"/>
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