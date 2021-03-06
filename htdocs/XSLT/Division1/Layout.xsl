<?xml version="1.0" ?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:include href="../Universal.xsl"/>
	<xsl:include href="./Page.xsl"/>
	
	<xsl:template name="GetNavigation">
		<xsl:param name = "vLevel"/>
		<xsl:variable name="vPath"><xsl:call-template name="GetPath"><xsl:with-param name="vLevel"><xsl:value-of select="$vLevel"/></xsl:with-param></xsl:call-template></xsl:variable>
		
		<ul class="navigationUl">
			<li><a class="navlinkA" href="./Index.xml">Board Games</a></li>
			<li><a class="navlinkA" href="./Project1.xml">The Way</a></li>
			<li><a class="navlinkA" href="./Project2.xml">Sacred Offerings</a></li>
			<li><a class="navlinkA" href="./Project3.xml">Conversion</a></li>
			<li><a class="navlinkA" href="./Project4.xml">Conspiratorium</a></li>
			<li><a class="navlinkA" href="./Project5.xml">Monster Office Workplace</a></li>
			<li><a class="navlinkA" href="./Project6.xml">MacCreedy's Mansion</a></li>
			<li><a class="navlinkA" href="./Project7.xml">Dundered Acre Wood</a></li>
			<li><a class="navlinkA" href="./Project8.xml">Conquer</a></li>
			<li><a class="navlinkA" href="./Project9.xml">Assault</a></li>
			<li><a class="navlinkA" href="./Project10.xml">Battle Princesses</a></li>
			<li><a class="navlinkA" href="./Project11.xml">Armor Up</a></li>
			<li><a class="navlinkA" href="./Project12.xml">Gynowars: Battle Arena</a></li>
			<li><a class="navlinkA" href="./Project13.xml">Land of the Orcish Empire: Age of Magic</a></li>
			<li><a class="navlinkA" href="./Project14.xml">Coliseum: Arena</a></li>
			<li><a class="navlinkA" href="./Project15.xml">Nine Card</a></li>
			<li><a class="navlinkA" href="./Project16.xml">Wars of Antarrea</a></li>
			<li><a class="navlinkA" href="./Project17.xml">Antarrea RPG</a></li>
			<li><a class="navlinkA" href="./Project18.xml">Super Dungeon Adventure</a></li>
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