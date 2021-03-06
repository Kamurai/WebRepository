function fillTitle(vPage){
	var vResult = "";
	var vDefault = "Downloadable Projects"; 
	
	if(vPage == 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Cube World Downloads";
	}else if(vPage == 2){
		vResult += "Minecraft Downloads";
	}else if(vPage == 3){
		vResult += "Game Maker Downloads";
	}else if(vPage == 4){
		vResult += "Java Downloads";
	}else if(vPage == 5){
		vResult += "C# Downloads";
	}else{
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function fillHeader(vPage)
{
	var vResult = "";
	var vDefault = "Downloadable Projects";
	
	var vCenterRowMainHeader = document.createElement("h2");

	if(vPage == 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += "Cube World Downloads";
	}else if(vPage == 2){
		vResult += "Minecraft Downloads";
	}else if(vPage == 3){
		vResult += "Game Maker Downloads";
	}else if(vPage == 4){
		vResult += "Java Downloads";
	}else if(vPage == 5){
		vResult += "C# Downloads";
	}else{
        vResult += vDefault;
    }
    vCenterRowMainHeader.textContent = vResult;
	$( "#idCenterRowMain" ).append( vCenterRowMainHeader );
}

function fillContent(vPage, vLevel){
	var vResult = "";
	var vDefault = "This section is dedicated to downloadable projects.";
	
	var vCenterContent = document.createElement("div");
	vCenterContent.setAttribute("id", "idCenterContent");
    	
	if(vPage == 0){
		vResult += vDefault;
	}else if(vPage == 1){
		vResult += `
			Here are downloads to play Cube World with us:</br>
			</br>
			Cube World:<t><a href=\"http://htkb.dyndns.org/Downloads/CubeSetup3.exe\">Come play Cube World!</a></br>
			</br>
			DirectX:<t><a href=\"http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>
			DirectX \"Web\":<t><a href=\"http://htkb.dyndns.org/Downloads//dxwebsetup.exe\">Direct X Redistrutable</a></br>
			</br>	
		`;
	}else if(vPage == 2){
		vResult += `
			If you would like to play Minecraft with us, we have several different servers:</br>
			Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>
			Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>
				This is a list of mods that we are using on the server, compatible with 1.7.10.</br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar\">Forge 1.7.10</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip\">Dr Zhark\"s Mo Creatures</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip\">Custom Mob Spawner</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar\">iPixeli\"s Gender Mod</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/BspkrsCore-1.7.10.jar\">Bspkrs Core</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar\">Tree Capitator</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/MoarFood-5.8.0.jar\">Moar Food</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/MoarOres-2.4.5.jar\">Moar Ores</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar\">Biblio Craft</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar\">Fossils and Archaeology</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar\">Rei\"s Minimap</a></br>
				<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar\">Xaero\"s Minimap</a></br>
			Vanilla Server:      htkb.dyndns.org:25566</br>
			Here is a skin template to make custom skins:</br>
			<a href=\"http://htkb.dyndns.org/Downloads/Minecraft/skin_template.png\">Steve skin template</a></br>
			<br/>
			<br/>
			For first time setups, please follow these steps to make your client compatible with the server:</br>
				 0) If you don\"t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>
				 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>
				 2) Save the Profile, select the new profile and click play.</br>
				 3) Exit the program.</br>
				 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>
					Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>
					Mac: \"Go to\" ~/Library/Application Support/minecraft</br>
				 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>
					\"..\Roaming\MoCreatures\"</br>
				 6) If your folder doesn\"t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>
					Even if it works, don\"t put two minimap mods in the same folder.</br>
				 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>
				 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>
				 9) Save the Profile, select the new profile and click play.</br>
				10) You should see the mods listed on the side of the Minecraft window.</br>
				11) Go to multiplayer and click add server.</br>
				12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>
				13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>
			`;
	}else if(vPage == 3){
		vResult += `
			Here are Game Maker Projects to play:</br>
			</br>
			Gamebox Client: v6.0:<t><a href=\"http://htkb.dyndns.org/Downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>
			Gamebox Server: v6.0:<t><a href=\"http://htkb.dyndns.org/Downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>
			39dll.dll: v2.5:<t><a href=\"http://htkb.dyndns.org/Downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>
			A Chess Server:<t><a href=\"http://htkb.dyndns.org/Downloads/Chess_Server.exe\">Host a Chess game.</a></br>
			A Chess Client:<t><a href=\"http://htkb.dyndns.org/Downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>
			I Dunno:<t><a href=\"http://htkb.dyndns.org/Downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>
			Purification:<t><a href=\"http://htkb.dyndns.org/Downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>
			Trail of the Undead: The Way Home:<t><a href=\"http://htkb.dyndns.org/Downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>
			Discovery (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/Downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>
			Twisted Tactics: Version 0.1 (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/Downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>
			Skitzo Burrito (Alpha): <t><a href=\"http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>
		`;
	}else if(vPage == 4){
		vResult += `
			Here are Java Programs to download:</br>
			</br>
			Blood Bowl Manager:<t><a href=\".http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a></br>
		`;
	}else if(vPage == 5){
		vResult += `
			Here are C# Programs to download:</br>
			</br>
			Chess Program:<t><a href=\".http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a></br>
		`;
	}else{
        vResult += vDefault;
    }
	
    $( "#idCenterRowMain" ).append( vCenterContent );
	$( "#idCenterContent" ).append( vResult );
}

function fillVersions(vPage){
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Index.html\">Angular JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Index.jsp\">JSP Spring MVC</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division3/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division3/Index\">Ruby on Rails</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division3/Index\">Node JS</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project1.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project1.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project1.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project1.xhtml\">JSF</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp\">JSP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project1.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project1.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project1\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project1\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project1\">Node JS</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.php\">PHP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project2.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project2.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project2.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project2.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project2.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project2\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project2\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project2\">Node JS</a><br>";
    }
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.php\">PHP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project3.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project3.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project3.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project3.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project3.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project3\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project3\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project3\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project3\">Node JS</a><br>";
    }
	else
	{
		vResult += vDefault;
	}
	
	$( "#idCenterRowRight" ).append( vResult );
}
