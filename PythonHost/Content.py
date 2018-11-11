def getContent(vPage, vLevel):
	vKey = vLevel+'_'+vPage
	
	vResult = ''
	vDefault = ''
	
	vDefault += 'The House That Kamurai Built is an '
	vDefault += 'entertainment company with the primary '
	vDefault += 'focus of increasing awesome by stimulating '
	vDefault += 'intelligent conversation and entertainment '
	vDefault += 'via discussion and game design. <br>'
	vDefault += 'Increase the Awesome with us!<br>'

	vResult += '<div id=\'idCenterContent\'>'
	if vKey == '0_0':
		vResult += vDefault
	elif vKey == '0_1':
		vResult += 'We are working to build this into a better place.</br>'
		vResult += 'If you found this, then you must be at least (Awesome/2).</br>'
		vResult += 'Stay tuned, right now it\'s all about laying foundation for the future.</br>'
	elif vKey == '0_2':
		vResult += 'You can find us at all these different places:</br>'
		vResult += '<br/>'
		vResult += '<br/>'
		vResult += '	#WeAreMovieClub:'
		vResult += '<br/>'
		vResult += '<br/>'
		vResult += '	<a href=\'http://www.youtube.com/WeAreMovieClub\'>Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>'
		vResult += '	<a href=\'http://WeAreMovieClub.tumblr.com\'>WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>'
		vResult += '	<a href=\'http://www.twitter.com/WeAreMovieClub\'>@WeAreMovieClub on Twitter: Let us know about your movie thoughts.</a></br>'
		vResult += '	<a href=\'http://www.facebook.com/WeAreMovieClub\'>facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>'
		vResult += '<br/>'
		vResult += '<br/>'
		vResult += '	HTKB Productions'
		vResult += '<br/>'
		vResult += '<br/>'
		vResult += '	<a href=\'http://www.youtube.com/GamingDivision528\'>Gaming Division:  A Youtube Channel for game stuff.</a></br>'
		vResult += '	<a href=\'http://www.youtube.com/JamOnToast528\'>Jam On Toast:  A Youtube Channel for media stuff.</a></br>'
		vResult += '	<a href=\'http://www.ustream.tv/HTKB\'>UStream:  Streams show up here too.</a></br>'
		vResult += '	<a href=\'http://www.firetalk.com/HTKB\'>FireTalk:  Streams show up here too.</a></br>'
		vResult += '	<a href=\'http://www.younow.com/HTKB\'>YouNow:  Streams show up here too.</a></br>'
		vResult += '	<a href=\'http://www.soundcloud.com/HTKB\'>Sound Cloud:  Listen to our podcasts.</a></br>'
		vResult += '	<a href=\'http://HTKB.podbean.com/\'>Pod Bean:  Listen to our podcasts.</a></br>'
		vResult += '	<a href=\'http://www.youtube.com/HTKB\'>Youtube:  Thoughts and life discussions.</a></br>'
		vResult += '	<a href=\'http://www.patreon.com/HTKBProductions\'>Patreon:  You can help make our dreams reality.</a></br>'
		vResult += '	<a href=\'http://www.facebook.com/HouseThatKamuraiBuilt\'>Facebook: Talk about movie with us.</a></br>'
		vResult += '	<a href=\'http://HouseThatKamuraiBuilt.tumblr.com\'>HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>'
		vResult += '	<a href=\'http://myspace.com/HouseThatKamuraiBuilt\'>Myspace: Wow, there\'s even a MySpace!</a></br>'
		vResult += '<br/>'
		vResult += '	Here are some of our member\'s pages:</br>'
		vResult += '<br/>'
		vResult += '		Kamurai:'
		vResult += '<br/>'
		vResult += '<br/>'
		vResult += '	<a href=\'http://twitter.com/#!/Kamurai25\'>Kamurai\'s Twitter.</a></br>'
		vResult += '	<a href=\'http://Instagram.com/Kamurai25\'>Kamurai\'s Instagram.</a></br>'
		vResult += '	<a href=\'./.\'>Kamurai\'s Snapchat: Kamurai</a></br>'
		vResult += '	<a href=\'http://www.facebook.com/cris.kamurai\'>Kamurai\'s Facebook.</a></br>'
		vResult += '	<a href=\'https://www.gplus.com/Members/Cris-Kamurai\'>Kamurai\'s Google Plus.</a></br>'
		vResult += '	<a href=\'http://www.yoyogames.com/users/Kamurai\'>Kamurai\'s YoYo Games page:  See some of the games he\'s posted.</a></br>'
	elif vKey == '0_3':
		vResult += '	If you would like to play Minecraft with us, we have several different servers:</br>'
		vResult += '	Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>'
		vResult += '	Creative Server:	 (1.7.10) htkb.dyndns.org:25567</br>'
		vResult += '		This is a list of mods that we are using on the server, compatible with 1.7.10.</br>'
		vResult += '		<a href=\'./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar\'>Forge 1.7.10</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip\'>Dr Zhark\'s Mo Creatures</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip\'>Custom Mob Spawner</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar\'>iPixeli\'s Gender Mod</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/BspkrsCore-1.7.10.jar\'>Bspkrs Core</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar\'>Tree Capitator</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/MoarFood-5.8.0.jar\'>Moar Food</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/MoarOres-2.4.5.jar\'>Moar Ores</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar\'>Biblio Craft</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar\'>Fossils and Archaeology</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar\'>Rei\'s Minimap</a></br>'
		vResult += '		<a href=\'./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar\'>Xaero\'s Minimap</a></br>'
		vResult += '	Vanilla Server:	  htkb.dyndns.org:25566</br>'
		vResult += '	Here is a skin template to make custom skins:</br>'
		vResult += '	<a href=\'./Downloads/Minecraft/skin_template.png\'>Steve skin template</a></br>'
		vResult += '	<br/>'
		vResult += '	<br/>'
		vResult += '	For first time setups, please follow these steps to make your client compatible with the server:</br>'
		vResult += '		 0) If you don\'t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>'
		vResult += '		 1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>'
		vResult += '		 2) Save the Profile, select the new profile and click play.</br>'
		vResult += '		 3) Exit the program.</br>'
		vResult += '		 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>'
		vResult += '			Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>'
		vResult += '			Mac: \'Go to\' ~/Library/Application Support/minecraft</br>'
		vResult += '		 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>'
		vResult += '			\'..\Roaming\MoCreatures\'</br>'
		vResult += '		 6) If your folder doesn\'t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>'
		vResult += '			Even if it works, don\'t put two minimap mods in the same folder.</br>'
		vResult += '		 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>'
		vResult += '		 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>'
		vResult += '		 9) Save the Profile, select the new profile and click play.</br>'
		vResult += '		10) You should see the mods listed on the side of the Minecraft window.</br>'
		vResult += '		11) Go to multiplayer and click add server.</br>'
		vResult += '		12) Name the server something distinct and put \'htkb.dyndns.org:2556x\' in the address bar where \'x\' is the relevant port.</br>'
		vResult += '		13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>'
	elif vKey == '1_0':
		vResult += 'This section is dedicated to Web based programming.'
	elif vKey == '1_1_0':
		vResult += 'This section is dedicated to database based programming.'
	elif vKey == '1_1_1':
		vResult += 'This section is dedicated to Oracle programming.'
	elif vKey == '1_1_2':
		vResult += 'This section is dedicated to Derby programming.'
	elif vKey == '1_1_3':
		vResult += 'This section is dedicated to MySQL programming.'
	elif vKey == '1_1_4':
		vResult += 'This section is dedicated to SQL Server programming.'
	elif vKey == '1_1_5':
		vResult += 'This section is dedicated to Postgres programming.'
	elif vKey == '2_0':
		vResult += 'This section is dedicated to HTKB projects.'
	elif vKey == '2_2':
		vResult += 'This section is dedicated CCG project \'Assault\'.'
	elif vKey == '2_3':
		vResult += 'This section is dedicated to the Mars centered project \'Opposition\'.'
	elif vKey == '2_6':
		vResult += 'This section is dedicated to the MMO RTS project \'Truth\'.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.'
	elif vKey == '2_7':
		vResult += 'This section is dedicated to the digital board game project \'Kingdoms\'.  Explore the world\'s Kingdoms, get rich, get strong and conquer.'
	elif vKey == '2_8':
		vResult += 'This section is dedicated to the simulation MMO centered project \'Terminal World\'.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat the zombies?  Can you survive?'
	elif vKey == '2_9':
		vResult += 'This section is dedicated to the card and board game project \'Monster Office Workplace\'.  These monsters mean serious business.  Can you earn the most credit and smooze your way into a promotion?'
	elif vKey == '2_10':
		vResult += 'This section is dedicated to the card game project \'Battle Princesses\'.  Ever wanted to see your favorite princess battle for the kingdom?  These princess aren\'t your helpless maidens, but valiant warriors themselves.'
	elif vKey == '2_11':
		vResult += 'This section is dedicated to the board game project \'Sacred Offerings\'.  Being a god is hard, you have to eat, but don\'t want to fall out favor with the people more than the other deities.  Draw people to worship you, but be discerning about who is sacrificed.'
	elif vKey == '2_12':
		vResult += 'This section is dedicated to the card game project \'The Way\'.  You seek to find enlightment by contemplating the elements.  Escape the binds of the world and the board to reach enlightment and win.'
	elif vKey == '2_13':
		vResult += 'This section is dedicated to the board game project \'Conspiratorium\'.  A game of assassins and CIA, you must remember who is friend and who is not.'
	elif vKey == '2_14':
		vResult += 'This section is dedicated to the board game project \'Conversion\'.  Compete on the elemental market by processing elements and becoming the elemental kingpin.'
	elif vKey == '2_1_0':
		vResult += 'This section is dedicated to projects centered in the Gynowars universe.'
	elif vKey == '2_1_1':
		vResult += 'The Gynowars RPG is a \'pokemon-like\' tactical RPG.  The protagonist uses creatures to fight battles against other creatures to progress through the storyline.'
	elif vKey == '2_1_2':
		vResult += 'Gynowars: Battle Arena is a CCG that pits teams of creatures against each other in an arena-like environment.  There are several scenarios to run, to include:</br>\'Death Match\', \'Ring the Bell\', and \'Head Hunt\'.										'
	elif vKey == '2_1_3':
		vResult += 'Gynowars: Crash Ball is a turn based strategy board game.  Basically it\'s gridiron with Gynos.'
	elif vKey == '2_4_0':
		vResult += 'This section is dedicated to projects centered in the Renley universe.'
	elif vKey == '2_4_1':
		vResult += 'Warring Nations is a Tactical RPG involving squad based battles. Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.'
	elif vKey == '2_4_2':
		vResult += 'Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.  The protagonist is tasked with investigating various situations leading to a conspiracy about who is really ruling the continent.'
	elif vKey == '2_5_0':
		vResult += '<h3>'
		vResult += '	Global:'
		vResult += '</h3>'
		vResult += 'Here are projects based in the Antarrea universe:</br>'
		vResult += '</br>'
		vResult += 'Team Tactical: Crash Ball:			   Tactical board game centered on a battle version of football.</br>'
		vResult += 'Wars of Antarrea:						Table-top game where two or more armies battle for supremacy.</br>'
		vResult += 'Revolutions: Invading Nations:		   Tactical RPG, 1st story arc.</br>'
		vResult += 'Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>'
		vResult += 'Revolutions: Return to Arms:			 Tactical RPG, 3rd story arc.</br>'
		vResult += 'Revoultions: Post Wars:				  Tactical RPG, 4th story arc.</br>'
		vResult += '<h3>'
		vResult += '	<div id=\'idCenterContent\'>'
		vResult += '		Grendol:'
		vResult += '	</div>'
		vResult += '</h3>'
		vResult += '<div id=\'idCenterContent\'>'
		vResult += '	 Here are projects based in the Grendol universe:</br>'
		vResult += '	</br>'
		vResult += '	Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>'
		vResult += '	Grendol: Coliseum: Arena:						 CCG.</br>'
		vResult += '</div>'
		vResult += '<h3>'
		vResult += '	<div id=\'idCenterContent\'>'
		vResult += '		Utopia:'
		vResult += '	</div>'
		vResult += '</h3>'
		vResult += '<div id=\'idCenterContent\'>'
		vResult += '	Here are projects based in the Utopia universe:</br>'
		vResult += '   </br>'
		vResult += '	Avia: Elemental Angels: Adventure game with RPG elements.</br>'
		vResult += '</div>'
		vResult += '<h3>'
		vResult += '	<div id=\'idCenterContent\'>'
		vResult += '		Elvia:'
		vResult += '	</div>'
		vResult += '</h3>'
		vResult += '<div id=\'idCenterContent\'>'
		vResult += '	Here are projects based in the Elvia universe:</br>'
		vResult += '	</br>'
		vResult += '	Nine Card: Tactical card game.</br>'
		vResult += '</div>'
	elif vKey == '2_5_1':
		vResult += 'Here are projects based in the Antarrea universe:</br>'
		vResult += '</br>'
		vResult += 'Team Tactical: Crash Ball:			   Tactical board game centered on a battle version of football.</br>'
		vResult += 'Wars of Antarrea:						Table-top game where two or more armies battle for supremacy.</br>'
		vResult += 'Revolutions: Invading Nations:		   Tactical RPG, 1st story arc.</br>'
		vResult += 'Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>'
		vResult += 'Revolutions: Return to Arms:			 Tactical RPG, 3rd story arc.</br>'
		vResult += 'Revoultions: Post Wars:				  Tactical RPG, 4th story arc.</br>'
	elif vKey == '2_5_1_1':
		vResult += 'Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.'
		vResult += '</br>'
	elif vKey == '2_5_1_2':
		vResult += 'Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>'
	elif vKey == '2_5_1_3':
		vResult += 'Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>'
	elif vKey == '2_5_1_4':
		vResult += 'Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>'
	elif vKey == '2_5_1_5':
		vResult += 'Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>'
	elif vKey == '2_5_1_6':
		vResult += 'Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>'
	elif vKey == '2_5_2_0':
		vResult += 'Here are projects based in the Grendol Empire:</br>'
		vResult += '</br>'
		vResult += 'Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that comprise the Grendol Empire.</br>'
		vResult += 'Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>'
	elif vKey == '2_5_2_1':
		vResult += 'Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that '
		vResult += 'comprise the Grendol Empire.'
	elif vKey == '2_5_2_2':
		vResult += 'Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.'
	elif vKey == '2_5_3_0':
		vResult += 'Here are projects based in the Utopia Nation:</br>'
		vResult += '</br>'
		vResult += 'Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>'
	elif vKey == '2_5_3_1':
		vResult += 'Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>'
	elif vKey == '2_5_4_0':
		vResult += 'Here are projects based in the Elvia Empire:</br>'
		vResult += '</br>'
		vResult += 'Nine Card: a Tactical card game played through the Elvia Empire.</br>'
	elif vKey == '2_5_4_1':
		vResult += 'Nine Card is a Tactical card game played through the Elvia Empire.</br>'
	elif vKey == '3_0':
		vResult += 'This section is dedicated to downloadable projects.'
	elif vKey == '3_1':
		vResult += 'Here are downloads to play Cube World with us:</br>'
		vResult += '</br>'
		vResult += 'Cube World:<t><a href=\'http://htkb.dyndns.org/downloadsCubeSetup3.exe\'>Come play Cube World!</a></br>'
		vResult += '</br>'
		vResult += 'DirectX:<t><a href=\'http://htkb.dyndns.org/downloadsdirectx_Jun2010_redist.exe\'>Direct X Redistrutable</a></br>'
		vResult += 'DirectX \'Web\':<t><a href=\'http://htkb.dyndns.org/downloadsdxwebsetup.exe\'>Direct X Redistrutable</a></br>'
		vResult += '</br>'
	elif vKey == '3_2':
		vResult += 'Here are Game Maker Projects to play:</br>'
		vResult += '</br>'
		vResult += '\'Gamebox Client: v6.0\':<t><a href=\'http://htkb.dyndns.org/downloadsGameBox_Client_Installer_v6p0.exe\'>Play games from...well, anywhere.</a></br>'
		vResult += '\'Gamebox Server: v6.0\':<t><a href=\'http://htkb.dyndns.org/downloadsGameBox_Server_Installer_v6p0.exe\'>Host GameBox.</a></br>'
		vResult += '\'39dll.dll: v2.5:\'<t><a href=\'http://htkb.dyndns.org/downloads39dll.dll\'>You may need this in your \'useruser/AppData/Local/GameBox_Client\' folder.</a></br>'
		vResult += '\'A Chess Client\':<t><a href=\'http://htkb.dyndns.org/downloadsChess_Client.exe\'>A game of Chess from anywhere.</a></br>'
		vResult += '\'I Dunno\':<t><a href=\'http://htkb.dyndns.org/downloadsIdunno.exe\'>I dunno, it\'s a fun puzzle game though.</a></br>'
		vResult += '\'Purification\':<t><a href=\'http://htkb.dyndns.org/downloadsZombies.exe\'>Kill zombies...lots of zombies.</a></br>'
		vResult += '\'Trail of the Undead: The Way Home\':<t><a href=\'http://htkb.dyndns.org/downloadsTrailoftheUndead.exe\'>An adventure of zombie killing goodness.</a></br>'
		vResult += '\'Discovery\' (buggy Alpha):<t><a href=\'http://htkb.dyndns.org/downloadsDiscovery.exe\'>Play a game of discovery and survival.</a></br>'
		vResult += '\'Twisted Tactics: Version 0.1\' (buggy Alpha):<t><a href=\'http://htkb.dyndns.org/downloadsTactical.exe\'>Scrapped two player tactical system.</a></br>'
		vResult += '\'Skitzo Burrito (Alpha): <t><a href=\'http://htkb.dyndns.org/downloadsEmotive-Default-1.0.0.3.exe\'>An emotional platform survival game.</a></br>'
	elif vKey == '3_3':
		vResult += 'Here are Java Programs to download:</br>'
		vResult += '</br>'
		vResult += '\'Blood Bowl Manager\':<t><a href=\'http://htkb.dyndns.org/downloads/pichaku.zip\'>This is currently not available.</a></br>'
	elif vKey == '3_4':
		vResult += 'Here are C\# Programs to download:</br>'
		vResult += '</br>'
		vResult += '\'Chess Program\':<t><a href=\'http://htkb.dyndns.org/downloads/pichaku.zip\'>This is currently not available.</a></br>'
	elif vKey == '3_5':
		vResult += 'Here are C++ Programs to download:</br>'
		vResult += '</br>'
		vResult += '\'HTKB Bar Code System\':<t><a href=\'http://htkb.dyndns.org/downloads/pichaku.zip\'>This is currently not available.</a></br>'
	else:
		vResult += vDefault
	vResult += '</div>'
	
	return vResult
