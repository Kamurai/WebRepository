function buildLayout(vPage, vLevel, vDivision)
{
    buildHead(vLevel, vDivision);
    buildBody(vPage, vLevel);
}

function fillLayout(vPage, vLevel, vDivision)
{
    fillHead(vLevel, vDivision);
    fillBody(vPage, vLevel);
}

function buildBody(vPage, vLevel)
{
    var tableMain = document.createElement("table");
    tableMain.setAttribute("id", "idTableMain");
    $( "body" ).append( tableMain );
    
    var tableRowHeader = document.createElement("tr");
    tableRowHeader.setAttribute("id", "idHeaderRow");
    $( "#idTableMain" ).append( tableRowHeader );
    
    var tableRowHeaderCenter = document.createElement("td");
    tableRowHeaderCenter.setAttribute("id", "idHeaderRowCenter");
    tableRowHeaderCenter.setAttribute("colSpan", 3);
    $( "#idHeaderRow" ).append( tableRowHeaderCenter );
    
    //TitlePicture(vLevel);
    
    var tableRowNavigation = document.createElement("tr");
    tableRowNavigation.setAttribute("id", "idNavigationRow");
    $( "#idTableMain" ).append( tableRowNavigation );
    
    var tableRowNavigationCenter = document.createElement("td");
    tableRowNavigationCenter.setAttribute("id", "idNavigationBar");
    tableRowNavigationCenter.setAttribute("colSpan", 3);
    $( "#idNavigationRow" ).append( tableRowNavigationCenter );
    
    //NavBar(vLevel);
    
    var tableRowCenter = document.createElement("tr");
    tableRowCenter.setAttribute("id", "idCenterRow");
    $( "#idTableMain" ).append( tableRowCenter );
    
    var tableRowCenterLeft = document.createElement("td");
    tableRowCenterLeft.setAttribute("id", "idCenterRowLeft");
    $( "#idCenterRow" ).append( tableRowCenterLeft );
    
    //NavigationHeader(tableRowCenterLeft);
    
    //Navigation(vLevel)
    

    var tableRowCenterMain = document.createElement("td");
    tableRowCenterMain.setAttribute("id", "idCenterRowMain");
    $( "#idCenterRow" ).append( tableRowCenterMain );
    
    //Title(vPage);
    //Header(vPage, tableRowCenterMain);
    //Content(vPage, tableRowCenterMain);
    
    var tableRowCenterRight = document.createElement("td");
    tableRowCenterRight.setAttribute("id", "idCenterRowRight");
    $( "#idCenterRow" ).append( tableRowCenterRight );

    //InformationHeader(tableRowCenterRight);
    //Versions(vPage, tableRowCenterRight);

    var tableRowFooter = document.createElement("tr");
    tableRowFooter.setAttribute("id", "idFooterRow");
    $( "#idTableMain" ).append( tableRowFooter );
    
    var tableFooterMain = document.createElement("td");
    tableFooterMain.setAttribute("id", "idFooterRowMain");
    tableFooterMain.setAttribute("colSpan", 3);
    $( "#idFooterRow" ).append( tableFooterMain );
    
    var tableFooterMainContent = document.createElement("p");
    tableFooterMainContent.setAttribute("id", "idFooterContent");
    $( "#idFooterRowMain" ).append( tableFooterMainContent );
        
    var tableFooterMainManagement = document.createElement("p");
    tableFooterMainManagement.setAttribute("id", "idFooterManagement");
    $( "#idFooterRowMain" ).append( tableFooterMainManagement );
        
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
