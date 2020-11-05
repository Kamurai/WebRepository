Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Downloadables"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Cube World Downloads"
		ElseIf vPage = 2 Then
			vResult = vResult + "Minecraft Downloads"
		ElseIf vPage = 3 Then
			vResult = vResult + "Game Maker Downloads"
		ElseIf vPage = 4 Then
			vResult = vResult + "Java Downloads"
		ElseIf vPage = 5 Then
			vResult = vResult + "C# Downloads"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Downloadables"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Cube World Downloads"
		ElseIf vPage = 2 Then
			vResult = vResult + "Minecraft Downloads"
		ElseIf vPage = 3 Then
			vResult = vResult + "Game Maker Downloads"
		ElseIf vPage = 4 Then
			vResult = vResult + "Java Downloads"
		ElseIf vPage = 5 Then
			vResult = vResult + "C# Downloads"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to downloadable projects."
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Here are downloads to play Cube World with us:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + "Cube World:<t><a href=""http://htkb.dyndns.org/Downloads/CubeSetup3.exe"">Come play Cube World!</a></br>"
			vResult = vResult + "</br>"
			vResult = vResult + "DirectX:<t><a href=""http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe"">Direct X Redistrutable</a></br>"
			vResult = vResult + "DirectX ""Web"":<t><a href=""http://htkb.dyndns.org/Downloads/dxwebsetup.exe"">Direct X Redistrutable</a></br>"
			vResult = vResult + "</br>"
		ElseIf vPage = 2 Then
				vResult = vResult + "If you would like to play Minecraft with us, we have several different servers:</br>"
				vResult = vResult + "Mo Creatures Server: (1.7.10 Then htkb.dyndns.org:25565</br>"
				vResult = vResult + "Creative Server:     (1.7.10 Then htkb.dyndns.org:25567</br>"
					vResult = vResult + "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar'>Forge 1.7.10</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar'>Fossils and Archaeology</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>"
					vResult = vResult + "<a href='./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar'>Xaero's Minimap</a></br>"
				vResult = vResult + "Vanilla Server:      htkb.dyndns.org:25566</br>"
				vResult = vResult + "Here is a skin template to make custom skins:</br>"
				vResult = vResult + "<a href='./Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>"
			vResult = vResult + "<br/>"
			vResult = vResult + "<br/>"
				vResult = vResult + "For first time setups, please follow these steps to make your client compatible with the server:</br>"
					vResult = vResult + " 0 Then If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>"
					vResult = vResult + " 1 Then From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10 Then.</br>"
					vResult = vResult + " 2 Then Save the Profile, select the new profile and click play.</br>"
					vResult = vResult + " 3 Then Exit the program.</br>"
					vResult = vResult + " 4 Then Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>"
						vResult = vResult + "    Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>"
						vResult = vResult + "    Mac: ""Go to"" ~/Library/Application Support/minecraft</br>"
					vResult = vResult + " 5 Then If you are managing multiple non-compatible mods, then you man have to make folders like:</br>"
						vResult = vResult + "    ""..\Roaming\MoCreatures""</br>"
					vResult = vResult + " 6 Then If your folder doesn""t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>"
						vResult = vResult + "    Even if it works, don""t put two minimap mods in the same folder.</br>"
					vResult = vResult + " 7 Then Open the Minecraft Launcher, edit your version (e.g. 1.7.10 Then profile to use the forge version of the same.</br>"
					vResult = vResult + " 8 Then If you are using a different folder, then remember to change the Game Directory in the profile.</br>"
					vResult = vResult + " 9 Then Save the Profile, select the new profile and click play.</br>"
					vResult = vResult + "10 Then You should see the mods listed on the side of the Minecraft window.</br>"
					vResult = vResult + "11 Then Go to multiplayer and click add server.</br>"
					vResult = vResult + "12 Then Name the server something distinct and put ""htkb.dyndns.org:2556x"" in the address bar where ""x"" is the relevant port.</br>"
					vResult = vResult + "13 Then Save the server entry.  You should see a connection to the server.  Double click to join.</br>"
			vResult = vResult + "<br/>"
		ElseIf vPage = 3 Then
			vResult = vResult + "Here are Game Maker Projects to play:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Gamebox Client: v6.0"":<t><a href=""http://htkb.dyndns.org/Downloads/GameBox_Client_Installer_v6p0.exe"">Play games from...well, anywhere.</a></br>"
			vResult = vResult + """Gamebox Server: v6.0"":<t><a href=""http://htkb.dyndns.org/Downloads/GameBox_Server_Installer_v6p0.exe"">Host GameBox.</a></br>"
			vResult = vResult + """39dll.dll: v2.5"":<t><a href=""http://htkb.dyndns.org/Downloads/39dll.dll"">You may need this in your ""user/AppData/Local/GameBox_Client"" folder.</a></br>"
			vResult = vResult + """A Chess Server"":<t><a href=""http://htkb.dyndns.org/Downloads/Chess_Server.exe"">Host a Chess game.</a></br>"
			vResult = vResult + """A Chess Client"":<t><a href=""http://htkb.dyndns.org/Downloads/Chess_Client.exe"">A game of Chess from anywhere.</a></br>"
			vResult = vResult + """I Dunno"":<t><a href=""http://htkb.dyndns.org/Downloads/Idunno.exe"">I dunno, it""s a fun puzzle game though.</a></br>"
			vResult = vResult + """Purification"":<t><a href=""http://htkb.dyndns.org/Downloads/Zombies.exe"">Kill zombies...lots of zombies.</a></br>"
			vResult = vResult + """Trail of the Undead: The Way Home"":<t><a href=""http://htkb.dyndns.org/Downloads/TrailoftheUndead.exe"">An adventure of zombie killing goodness.</a></br>"
			vResult = vResult + """Discovery"" (buggy Alpha):<t><a href=""http://htkb.dyndns.org/Downloads/Discovery.exe"">Play a game of discovery and survival.</a></br>"
			vResult = vResult + """Twisted Tactics: Version 0.1"" (buggy Alpha):<t><a href=""http://htkb.dyndns.org/Downloads/Tactical.exe"">Scrapped two player tactical system.</a></br>"
			vResult = vResult + """Skitzo Burrito (Alpha)"": <t><a href=""http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe"">An emotional platform survival game.</a></br>"
		ElseIf vPage = 4 Then
			vResult = vResult + "Here are Java Programs to download:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Blood Bowl Manager"":<t><a href=""http://htkb.dyndns.org/Downloads/pichaku.zip"">This is currently not available.</a></br>"
		ElseIf vPage = 5 Then
			vResult = vResult + "Here are C# Programs to download:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Chess Program"":<t><a href=""http://htkb.dyndns.org/Downloads/pichaku.zip"">This is currently not available.</a></br>"
		Else
			vResult = vResult + vDefault
		End If
		
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division4/Index.html"">HTML</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division4/Index.php"">PHP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division4/Index.shtml"">Perl</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Index.html"">Apache SSI</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Index.html"">HTML Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Index.html"">JQuery</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Index.html"">Angular JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Index.html"">JSX</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Index.xml"">XSLT</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Index.xhtml"">JSF</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Index.jsp"">JSP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Index"">JSP Spring MVC</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Index.aspx"">ASP.NET Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Index.asp"">ASP VBscript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Index.cshtml"">ASP.NET Web App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Index.aspx"">ASP.NET Webform</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Index"">ASP.NET MVC App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:82/Division4/Index"">Python Web.py</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:83/Division4/Index"">Ruby on Rails</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:84/Division4/Index"">Node JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:85/Division4/Index"">Angular 2+</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:86/Division4/Index"">ReactJS</a></li>"
	
	vResult = vResult + "<ul class=""versionsUl"">"
		
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project1.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project1.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project1.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Project1.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Project1.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Project1.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Project1.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Project1.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project1.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Project1.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Project1.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Project1"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Project1.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Project1.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Project1.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Project1.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Project1"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division4/Project1"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division4/Project1"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division4/Project1"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division4/Project1"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division4/Project1"">ReactJS</a></li>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project2.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project2.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project2.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Project2.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Project2.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Project2.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Project2.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Project2.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project2.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Project2.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Project2.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Project2"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Project2.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Project2.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Project2.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Project2.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Project2"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division4/Project2"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division4/Project2"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division4/Project2"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division4/Project2"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division4/Project2"">ReactJS</a></li>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project3.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project3.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project3.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Project3.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Project3.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Project3.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Project3.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Project3.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project3.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Project3.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Project3.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Project3"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Project3.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Project3.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Project3.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Project3.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Project3"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division4/Project3"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division4/Project3"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division4/Project3"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division4/Project3"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division4/Project3"">ReactJS</a></li>"
	ElseIf vPage = 4 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project4.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project4.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project4.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Project4.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Project4.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Project4.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Project4.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Project4.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project4.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Project4.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Project4.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Project4"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Project4.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Project4.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Project4.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Project4.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Project4"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division4/Project4"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division4/Project4"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division4/Project4"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division4/Project4"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division4/Project4"">ReactJS</a></li>"
	ElseIf vPage = 5 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project5.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project5.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division4/Project5.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division4/Project5.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division4/Project5.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division4/Project5.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division4/Project5.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/AngularJS/Division4/Project5.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XSLT/AngularJS/Division4/Project5.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division4/Project5.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division4/Project5.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division4/Project5"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division4/Project5.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division4/Project5.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division4/Project5.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division4/Project5.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division4/Project5"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division4/Project5"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division4/Project5"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division4/Project5"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division4/Project5"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division4/Project5"">ReactJS</a></li>"
	Else
		vResult = vResult + vDefault
	End If
	
	vResult = vResult + "</ul>"
		
	getVersions = vResult
End Function
