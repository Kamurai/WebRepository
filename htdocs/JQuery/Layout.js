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
			<li><a class=\"navlinkA\" href=\"./AboutUs.html\">About Us</a></li>
			<li><a class=\"navlinkA\" href=\"./Media.html\">Media</a></li>
			<li><a class=\"navlinkA\" href=\"./GitHubs.html\">Git Hubs</a></li>
			<li><a class=\"navlinkA\" href=\"./WebApps.html\">Web Apps</a></li>
		</ul>
	`); //move to Custom
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
