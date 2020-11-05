function buildLayout(vPage, vLevel, vDivision){
    //buildHead(vLevel, vDivision);
    buildBody(vPage, vLevel);
}

function fillLayout(vPage, vLevel, vDivision){
    fillHead(vLevel, vDivision);
    fillBody(vPage, vLevel);
}

function fillNavigation(vLevel){
	$( "#idCenterRowLeft" ).append( `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"../Index.html\">Video Games</a></li>
			<li><a class=\"navlinkA\" href=\"../Project1.html\">Truth</a></li>
			<li><a class=\"navlinkA\" href=\"../Project2.html\">The Wrong Ninja</a></li>
			<li><a class=\"navlinkA\" href=\"../Project3.html\">Gynowars</a></li>
			<li><a class=\"navlinkA\" href=\"../Project4.html\">Terminal World</a></li>
			<li><a class=\"navlinkA\" href=\"../Project5.html\">Mars: Opposition</a></li>
			<li><a class=\"navlinkA\" href=\"../Section1/Index.html\">Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"../Section2/Index.html\">Renley</a></li>
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkB\" href=\"./Project1.html\">Warring Nations</a></li>
				<li><a class=\"navlinkB\" href=\"./Project2.html\">Psychodom: The One Empire</a></li>
			</ul>
		</ul>
	`);
}

function buildBody(vPage, vLevel){
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

function fillBody(vPage, vLevel){
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
