<script type="application/javascript" src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script type="application/javascript" src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
<script type="application/javascript" src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

function testUniversal(){
	return "Universal works<br>";
}
/*
function fillHead(vLevel, vDivision){

	document.write( "fillHead Start<br>" );
	
	document.write( "fillHead End<br>" );

}

function getHead(vLevel, vDivision){
	const temp = getStyle(vLevel, vDivision);

	return(
		"<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">"
		{temp}
	)
}
*/

function App(){
	return(
		<div>
			Ducks!
		</div>
	)
}

function getStyle(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile(vDivision) + "\" rel=\"stylesheet\" type=\"text/css\">";
	
	return vResult;
}

function getStyleFile(vDivision){
    var vResult = "";
    var vDefault = "Main.css";
    
    if( vDivision == 0 )
    {
        vResult += vDefault;
    }
    else if( vDivision == 1 )
    {
        vResult += "Division1.css";
    }
    else if( vDivision == 2 )
    {
        vResult += "Division2.css";
    }
    else if( vDivision == 3 )
    {
        vResult += "Division3.css";
    }
    else
    {
        vResult += vDefault;
    }
    
    return vResult;
}

function fillLogo(vLevel)
{
    $( "#idHeaderRowCenter" ).append( getLogo(vLevel) );
}

function getLogo(vLevel){
	return(
		<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\"><br>
	)
}

function fillNavBar(vLevel)
{
    $( "#idNavigationBar" ).append( getNavBar(vLevel) );
}

function getNavBar(vLevel)
{
	var vResult = "";
	
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Index.html'>Home</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division1/Index.html'>Web Programming</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division2/Index.html'>Private Projects</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division3/Index.html'>Downloadable Projects</a>";
	
	return vResult;
}

function fillNavigationHeader()
{
    var tableRowCenterLeftHeader = document.createElement("h4");
    tableRowCenterLeftHeader.textContent = getNavigationHeader();
    $( "#idCenterRowLeft" ).append( tableRowCenterLeftHeader );
}

function getNavigationHeader()
{
    var vResult = "";
	
    vResult += "Navigation";
	
	return vResult;
}

function fillInformationHeader()
{
    var tableRowCenterRightHeader = document.createElement("h4");
    tableRowCenterRightHeader.textContent = getInformationHeader();
    $( "#idCenterRowRight" ).append( tableRowCenterRightHeader );
}

function getInformationHeader()
{
    var vResult = "";
	
    vResult += "Information";
	
	return vResult;
}

function fillInformation()
{
    $( "#idCenterRowRight" ).append( getInformation() );
}

function getInformation()
{
    var vResult = "";
	
    vResult += "This is written with basic HTML and javascript.<br><br>";
	vResult += "Other versions of this page are here:<br>";
	
	return vResult;
}

function fillGDR()
{
    $( "#idFooterContent" ).append( getGDR );
}

function getGDR()
{
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return vResult;
}

function fillWinRar()
{
    $( "#idFooterContent" ).append( getWinRar() );
}

function getWinRar()
{
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
	
	return vResult;
}

function fillFooter()
{
    $( "#idFooterContent" ).append( getFooter() );
}

function getFooter()
{
    var vResult = "";
	
    vResult += "© Copyright 2012 All rights reserved<br>";    
    vResult += "House That Kamurai Built<br>";
	
	return vResult;   
}

function fillWebMaster()
{
    $( "#idFooterManagement" ).append( getWebMaster() );
}

function getWebMaster()
{
    var vResult = "";
	
    vResult += "Website managed by Kamurai.";
	
	return vResult;
}

function getPath(vLevel)
{
	var vResult = "";
	
    if(vLevel <= 0)
    {
        vResult = "./";
    }
    else if(vLevel == 1)
    {
        vResult = "../";
    }
    else if(vLevel == 2)
    {
        vResult = "../../";
    }
    else if(vLevel == 3)
    {
        vResult = "../../../";
    }
    else if(vLevel == 4)
    {
        vResult = "../../../../";
    }
    else if(vLevel == 5)
    {
        vResult = "../../../../../";
    }
    else if(vLevel == 6)
    {
        vResult = "../../../../../../";
    }
    else if(vLevel == 7)
    {
        vResult = "../../../../../../../";
    }
	
	return vResult;
}