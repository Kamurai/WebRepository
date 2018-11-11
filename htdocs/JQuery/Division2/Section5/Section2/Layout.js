function buildLayout(vPage, vLevel, vDivision)
{
    //buildHead(vLevel, vDivision);
    buildBody(vPage, vLevel);
}

function fillLayout(vPage, vLevel, vDivision)
{
    fillHead(vLevel, vDivision);
    fillBody(vPage, vLevel);
}

function fillNavigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section1/Index.html\">Gynowars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project2.html\">Assault</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project3.html\">Mars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section4/Index.html\">Renley</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section5/Index.html\">Antarrea</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section1/Index.html\">Global</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section2/Index.html\">Grendol</a><br><br>");
			$( "#idCenterRowLeft" ).append( "<a class=\"navlinkC\" href=\""+getPath(vLevel)+"Division2/Section5/Section2/Project1.html\">Land of the Orcish Empire: Age of Magic</a><br><br>");
			$( "#idCenterRowLeft" ).append( "<a class=\"navlinkC\" href=\""+getPath(vLevel)+"Division2/Section5/Section2/Project2.html\">Coliseum: Arena</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section3/Index.html\">Utopia</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section4/Index.html\">Elvia</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project6.html\">Truth</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project7.html\">Kingdoms</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project8.html\">Terminal World</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project9.html\">Monster Office Workplace</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project10.html\">Battle Princesses</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project11.html\">Sacred Offerings</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project12.html\">The Way</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project13.html\">Conspiratorium</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project14.html\">Conversion</a><br><br>");
}

function buildBody(vPage, vLevel)
{
    var vGeneralLayout = document.createElement("div");
    vGeneralLayout.setAttribute("id", "idGeneralLayout");
    $( "body" ).append( vGeneralLayout );
    
    var vHeaderRow = document.createElement("Header");
    vHeaderRow.setAttribute("id", "idHeaderRow");
    $( "#idGeneralLayout" ).append( vHeaderRow );
    
    var vHeaderRowCenter = document.createElement("div");
    vHeaderRowCenter.setAttribute("id", "idHeaderRowCenter");
    $( "#idHeaderRow" ).append( vHeaderRowCenter );
    
    //TitlePicture(vLevel);
    
    var vNavigationRow = document.createElement("nav");
    vNavigationRow.setAttribute("id", "idNavigationRow");
    $( "#idGeneralLayout" ).append( vNavigationRow );
    
    var vNavigationBar = document.createElement("div");
    vNavigationBar.setAttribute("id", "idNavigationBar");
    $( "#idNavigationRow" ).append( vNavigationBar );
    
    //NavBar(vLevel);
    
    var vCenterRow = document.createElement("div");
    vCenterRow.setAttribute("id", "idCenterRow");
    $( "#idGeneralLayout" ).append( vCenterRow );
    
    var vCenterRowLeft = document.createElement("div");
    vCenterRowLeft.setAttribute("id", "idCenterRowLeft");
    $( "#idCenterRow" ).append( vCenterRowLeft );
    
    //NavigationHeader(vCenterRowLeft);
    
    //Navigation(vLevel)
    

    var vCenterRowMain = document.createElement("div");
    vCenterRowMain.setAttribute("id", "idCenterRowMain");
    $( "#idCenterRow" ).append( vCenterRowMain );
    
    //Title(vPage);
    //Header(vPage, vCenterRowMain);
    //Content(vPage, vCenterRowMain);
    
    var vCenterRowRight = document.createElement("div");
    vCenterRowRight.setAttribute("id", "idCenterRowRight");
    $( "#idCenterRow" ).append( vCenterRowRight );

    //InformationHeader(vCenterRowRight);
    //Versions(vPage, vCenterRowRight);

    var vFooterRow = document.createElement("Footer");
    vFooterRow.setAttribute("id", "idFooterRow");
    $( "#idGeneralLayout" ).append( vFooterRow );
    
    var vFooterRowMain = document.createElement("div");
    vFooterRowMain.setAttribute("id", "idFooterRowMain");
    $( "#idFooterRow" ).append( vFooterRowMain );
    
    var vFooterContent = document.createElement("div");
    vFooterContent.setAttribute("id", "idFooterContent");
    $( "#idFooterRowMain" ).append( vFooterContent );
        
    var vFooterManagement = document.createElement("div");
    vFooterManagement.setAttribute("id", "idFooterManagement");
    $( "#idFooterRowMain" ).append( vFooterManagement );
        
    //Footer();
    //WebMaster();
}

function fillBody(vPage, vLevel)
{
    fillLogo(vLevel);
    fillNavBar(vLevel);
    
    fillNavigationHeader();
    fillNavigation(vLevel)
    
    fillTitle(vPage);
    fillHeader(vPage);
    fillContent(vPage);
    
    fillInformationHeader();
	fillInformation();
    fillVersions(vPage);

    fillFooter();
    fillWebMaster();
}
