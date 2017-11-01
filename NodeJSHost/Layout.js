var vUniversal = require('./Universal');
var vCustom = require('./Custom');

getgetNavigation = function (vLevel)
{
    var vResult = "";
	
	vResult += "<a class=\"navlinkA\" href=\""+vUniversal.getPath(vLevel)+"AboutUs\">About Us</a><br/><br/>";
    vResult += "<a class=\"navlinkA\" href=\""+vUniversal.getPath(vLevel)+"Media\">Media</a><br/><br/>";
    vResult += "<a class=\"navlinkA\" href=\""+vUniversal.getPath(vLevel)+"Minecraft\">Minecraft!</a><br/><br/>";

    return vResult;
}

exports.getBody = function (vPage, vLevel)
{
    var vResult = "";
        
        vResult += "<body id=\"idBody\">";
            vResult += "<table id=\"idTableMain\">";
            vResult += "<tr id=\"idHeaderRow\">";
                vResult += "<td id=\"idHeaderRowCenter\" colspan=\"3\">";
                    vResult += vUniversal.getLogo(vLevel);
                vResult += "</td>";
            vResult += "</tr>";
            vResult += "<tr id=\"idNavigationRow\">";
                vResult += "<td id=\"idNavigationBar\" colspan=\"3\">";
                    vResult += vUniversal.getNavBar(vLevel);
                vResult += "</td>";
            vResult += "</tr>";    
            vResult += "<tr id=\"idCenterRow\">";
                vResult += "<td id=\"idCenterRowLeft\">";
                    vResult += vUniversal.getNavigationHeader();
                    vResult += getNavigation(vLevel);
                vResult += "</td>";
                vResult += "<td id=\"idCenterRowMain\">";
                    vResult += vCustom.getTitle(vPage);
                    vResult += vCustom.getContentHeader(vPage);
                    vResult += vCustom.getContent(vPage);
                vResult += "</td>";
                vResult += "<td id=\"idCenterRowRight\">";
                    vResult += vUniversal.getInformationHeader();
                    vResult += vUniversal.getInformation();
                    vResult += vCustom.getVersions(vPage);
                vResult += "</td>";
            vResult += "</tr>";
            vResult += "<tr id=\"idFooterRow\">";
                vResult += "<td id=\"idFooterMain\" colspan=\"3\">";
                    vResult += "<p id=\"idFooterContent\">";
                        vResult += vUniversal.getFooter();
                    vResult += "</p>";
                    vResult += "<p id=\"idFooterManagement\">";
                        vResult += vUniversal.getWebMaster();
                    vResult += "</p>";
                vResult += "</td>";
            vResult += "</tr>";
        vResult += "</table>";
        vResult += "</body>";
    
	return vResult;
}
