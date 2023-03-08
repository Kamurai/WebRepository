def getContent(vPage, vLevel):
	vKey = vLevel+"_"+vPage
	
	vResult = ""
	vDefault = ""
	
	vDefault += """
		The House That Kamurai Built is an entertainment company with the primary focus 
		of increasing awesome by stimulating intelligent conversation and entertainment via discussion and 
		game design.<br>
		Increase the Awesome with us!
	"""
	vResult += "<div id=\"idCenterContent\">"
	if vKey == "0_0":
		vResult += vDefault
	elif vKey == "0_1":
		vResult += """
			We are working to build this into a better place.</br>
			If you found this, then you must be at least (Awesome/2).</br>
			Stay tuned, right now it\"s all about laying foundation for the future.
		"""
	elif vKey == "0_2":
		vResult += """
			You can find us at all these different places:</br>
			<br/>
			<br/>
				#WeAreMovieClub:
			<br/>
			<br/>
				<a href=\"http://www.youtube.com/WeAreMovieClub\">Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>
				<a href=\"http://WeAreMovieClub.tumblr.com\">WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>
				<a href=\"http://www.twitter.com/WeAreMovieClub\">@WeAreMovieClub on Twitter: Let us know about your movie thoughts.</a></br>
				<a href=\"http://www.facebook.com/WeAreMovieClub\">facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>
			<br/>
			<br/>
				HTKB Productions
			<br/>
			<br/>
				<a href=\"http://www.youtube.com/GamingDivision528\">Gaming Division:  A Youtube Channel for game stuff.</a></br>
				<a href=\"http://www.youtube.com/JamOnToast528\">Jam On Toast:  A Youtube Channel for media stuff.</a></br>
				<a href=\"http://www.ustream.tv/channel/Kamurai\">UStream:  Streams show up here too.</a></br>
				<a href=\"http://www.firetalk.com/HTKB\">FireTalk:  Streams show up here too.</a></br>
				<a href=\"http://www.younow.com/HTKB\">YouNow:  Streams show up here too.</a></br>
				<a href=\"http://www.soundcloud.com/HTKB\">Sound Cloud:  Listen to our podcasts.</a></br>
				<a href=\"http://HTKB.podbean.com/\">Pod Bean:  Listen to our podcasts.</a></br>
				<a href=\"http://www.youtube.com/HTKB\">Youtube:  Thoughts and life discussions.</a></br>
				<a href=\"http://www.patreon.com/HTKBProductions\">Patreon:  You can help make our dreams reality.</a></br>
				<a href=\"http://www.facebook.com/HouseThatKamuraiBuilt\">Facebook: Talk about movie with us.</a></br>
				<a href=\"http://HouseThatKamuraiBuilt.tumblr.com\">HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>
				<a href=\"http://myspace.com/HouseThatKamuraiBuilt\">Myspace: Wow, there\"s even a MySpace!</a></br>
			<br/>
				Here are some of our member\"s pages:</br>
			<br/>
					Kamurai:
			<br/>
			<br/>
				<a href=\"http://twitter.com/#!/Kamurai25\">Kamurai\"s Twitter.</a></br>
				<a href=\"http://Instagram.com/Kamurai25\">Kamurai\"s Instagram.</a></br>
				<a href=\"./.\">Kamurai\"s Snapchat: Kamurai</a></br>
				<a href=\"http://www.facebook.com/cris.kamurai\">Kamurai\"s Facebook.</a></br>
				<a href=\"https://www.gplus.com/Members/Cris-Kamurai\">Kamurai\"s Google Plus.</a></br>
				<a href=\"http://www.yoyogames.com/users/Kamurai\">Kamurai\"s YoYo Games page:  See some of the games he\"s posted.</a></br>
		"""
	elif vKey == "0_3":
		vResult += """
			Here are some GitHub Repositories related to this site:
		"""
	elif vKey == "0_4":
		vResult += """
			Here are some related Web Applications:
		"""
	elif vKey == "1_0":
		vResult += """
			This section is dedicated to board game projects.
		"""
	elif vKey == "1_1":
		vResult += """
			This section is dedicated to the card game project \"The Way\".<br/>
			You seek to find enlightment by contemplating the elements.<br/>
			Escape the binds of the world and the board to reach enlightment and win.<br/>
			<br/>
			You can download the Tabletop Simulator mod here:
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=652925835\">Steam Workshop</a>
			<br/>
			<br/>
			The Way Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/The_Way_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_2":
		vResult += """
			This section is dedicated to the board game project \"Sacred Offerings\".<br/>
			Being a god is hard, you have to eat, but don\"t want to fall out favor with the people more than the other deities.<br/>
			Draw people to worship you, but be discerning about who is sacrificed.<br/>
			<br/>
			You can download the Tabletop Simulator mod here:
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=652957007\">Steam Workshop</a>
			<br/>
			<br/>
			Sacred Offerings Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Sacred_Offerings_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_3":
		vResult += """
			This section is dedicated to the board game project \"Conversion\".<br/>
			Compete on the elemental market by processing elements and becoming the elemental kingpin.<br/>
			<br/>
			You can download the Tabletop Simulator mod here:
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=658966981\">Steam Workshop</a>
			<br/>
			<br/>
			Conversion Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Conversion_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_4":
		vResult += """
			This section is dedicated to the board game project \"Conspiratorium\".<br/>
			A game of assassins and CIA, you must remember who is friend and who is not.<br/>
			<br/>
			You can download the Tabletop Simulator mod here:
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=656617895\">Steam Workshop</a>
			<br/>
			<br/>
			Conspiratorium Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Conspiratorium_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_5":
		vResult += """
			This section is dedicated to the card and board game project \"Monster Office Workplace\".<br/>
			These monsters mean serious business.<br/>
			Can you earn the most credit and smooze your way into a promotion?<br/>
			<br/>
			You can download the Tabletop Simulator mod here:<br/>
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=691344800\">Steam Workshop</a><br/>
			<br/>
			<br/>
			Monster Office Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Monster_Office_Workplace_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_6":
		vResult += """
			This section is dedicated to the board game project \"MacCreedy's Mansion\".<br />
			Players compete in this worker placement to restore the great MacCreedy Mansion.
		"""
	elif vKey == "1_7":
		vResult += """
			This section is dedicated to the board game project \"Dundered Acre Woods\".<br />
			Animals prepare for the next Winter despite distractions in this dice draft and placement game.
		"""
	elif vKey == "1_8":
		vResult += """
			This section is dedicated to the board game project \"Conquer\".<br/>
			Battle other Kaiju for the right to rule over the ruins of a kingdom.
		"""
	elif vKey == "1_9":
		vResult += """
			This section is dedicated CCG project \"Assault\".
		"""
	elif vKey == "1_10":
		vResult += """
			This section is dedicated to the card game project \"Battle Princesses\".<br/>
			Ever wanted to see your favorite princess battle for the kingdom?<br/>
			These princess aren\"t your helpless maidens, but valiant warriors themselves.<br/>
			<br/>
			You can download the Tabletop Simulator mod here:
			<a href=\"http://steamcommunity.com/sharedfiles/filedetails/?id=1206167982\">Steam Workshop</a>
			<br/>
			<br/>
			Battle Princesses Ruleset v0.1<br/>
			<a href=\"http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Battle_Princesses_Game_Ruleset.pdf\">Download here.</a>
		"""
	elif vKey == "1_11":
		vResult += """
			This section is dedicated to the board game project \"Armor Up\".<br/>
			Armor up your princess to battle the other princesses for the throne.
		"""
	elif vKey == "1_12":
		vResult += """
			\"Gynowars: Battle Arena\" is a CCG that pits teams of creatures against each other 
			in an arena-like environment.  There are several scenarios to run, to include:<br />
			\"Death Match\", \"Ring the Bell\", and \"Head Hunt\".
		"""
	elif vKey == "1_13":
		vResult += """
			\"Land of the Orcish Empire: Age of Magic\" is a CCG based on the different factions that 
			comprise the Grendol Empire.
		"""
	elif vKey == "1_14":
		vResult += """
			\"Coliseum: Arena\" is a CCG representing the gladitorial arenas of Grendol.
		"""
	elif vKey == "1_15":
		vResult += """
			\"Nine Card\" is a Tactical card game played through the Elvia Empire.
		"""
	elif vKey == "1_16":
		vResult += """
			\"Wars of Antarrea\" is a table-top game where two or more armies battle for supremacy.
		"""
	elif vKey == "1_17":
		vResult += """
			This section is dedicated to the Antarrea RPG project.
		"""
	elif vKey == "1_18":
		vResult += """
			This section is dedicated to the \"Super Dungeon Adventure\" RPG project.
		"""
	elif vKey == "2_0":
		vResult += """
			This section is dedicated to digital board game projects.
		"""
	elif vKey == "2_1":
		vResult += """
			This section is dedicated to the digital board game project Kingdoms.<br>
			Explore the world's Kingdoms, get rich, get strong and conquer.
		"""
	elif vKey == "2_2":
		vResult += """
			This section is dedicated to the board game project \"Goblins and Guardians\".<br/>
			Goblins and Guardians battle it out in a labrynth of a building.
		"""
	elif vKey == "2_3":
		vResult += """
			This section is dedicated to the board game project \"Mega Fleets\".
		"""
	elif vKey == "2_1_0":
		vResult += """
			This section is dedicated to Crash Ball.
		"""
	elif vKey == "2_1_1":
		vResult += """
			Antarrea: Crash Ball is a tactical board game centered on a battle version of football.
		"""
	elif vKey == "2_1_2":
		vResult += """
			Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.
		"""
	elif vKey == "3_0":
		vResult += """
			This section is dedicated to video game projects.
		"""
	elif vKey == "3_1":
		vResult += """
			This section is dedicated to the MMO RTS project \"Truth\".<br>
			Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.
		"""
	elif vKey == "3_2":
		vResult += """
			This section is dedicated to the 2D platformer project \"The Wrong Ninja\".
		"""
	elif vKey == "3_3":
		vResult += """
			The Gynowars RPG is a \"pokemon-like\" tactical RPG.<br>
			The protagonist uses creatures to fight battles against other creatures to progress through the storyline.
		"""
	elif vKey == "3_4":
		vResult += """
			This section is dedicated to the simulation MMO centered project \"Terminal World\".<br>
			This is a virtual environment where a zombie outbreak is about to happen.
			Can you beat the zombies?  Can you survive?
		"""
	elif vKey == "3_5":
		vResult += """
			This section is dedicated to the Mars centered project \"Opposition\".
		"""
	elif vKey == "3_1_0":
		vResult += """
			Revolutions:  Invading Nations:           	Tactical RPG, 1st story arc.</br>
			Revolutions:  Rebellion Against the Fist 	Tactical RPG, 2nd story arc.</br>
			Revolutions:  Return to Arms:            	Tactical RPG, 3rd story arc.</br>
			Revoultions:  Post Wars:                  	Tactical RPG, 4th story arc.</br>
			Avia:  Elemental Angel                       Avia: Elemental Angels: Adventure game with RPG elements.
		"""
	elif vKey == "3_1_1":
		vResult += """
			Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.
		"""
	elif vKey == "3_1_2":
		vResult += """
			Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.
		"""
	elif vKey == "3_1_3":
		vResult += """
			Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.
		"""
	elif vKey == "3_1_4":
		vResult += """
			Revolutions is a Tactical RPG with Post Wars as its 4th story arc.
		"""
	elif vKey == "3_1_5":
		vResult += """
			Elemental Angels: An adventure game with RPG elements based in the Avia Nation.
		"""
	elif vKey == "3_2_0":
		vResult += """
			This section is dedicated to projects centered in the Renley universe.
		"""
	elif vKey == "3_2_1":
		vResult += """
			Warring Nations is a Tactical RPG involving squad based battles.
			Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.
		"""
	elif vKey == "3_2_2":
		vResult += """
			Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.
			The protagonist is tasked with investigating various situations leading
			to a conspiracy about who is really ruling the continent.
		"""
	elif vKey == "4_0":
		vResult += """
			This section is dedicated to downloadable projects.
		"""
	elif vKey == "4_1":
		vResult += """
			Here are downloads to play Cube World with us:</br>
			</br>
			Cube World:<t><a href=\"http://htkb.dyndns.org/Downloads/CubeSetup3.exe\">Come play Cube World!</a></br>
			</br>
			DirectX:<t><a href=\"http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>
			DirectX \"Web\":<t><a href=\"http://htkb.dyndns.org/Downloads//dxwebsetup.exe\">Direct X Redistrutable</a>
		"""
	elif vKey == "4_2":
		vResult += """
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
					Windows: It is in a hidden folder: c:\\Users\\*Username*\\Appdata\\Roaming\\.minecraft</br>
					Mac: \"Go to\" ~/Library/Application Support/minecraft</br>
				 5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>
					\"..\Roaming\MoCreatures\"</br>
				 6) If your folder doesn\'t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>
					Even if it works, don\'t put two minimap mods in the same folder.</br>
				 7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>
				 8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>
				 9) Save the Profile, select the new profile and click play.</br>
				10) You should see the mods listed on the side of the Minecraft window.</br>
				11) Go to multiplayer and click add server.</br>
				12) Name the server something distinct and put \"htkb.dyndns.org:2556x\" in the address bar where \"x\" is the relevant port.</br>
				13) Save the server entry.  You should see a connection to the server.  Double click to join.
		"""
	elif vKey == "4_3":
		vResult += """
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
			Skitzo Burrito (Alpha): <t><a href=\"http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a>
		"""
	elif vKey == "4_4":
		vResult += """
			Here are Java Programs to download:</br>
			</br>
			Blood Bowl Manager:<t><a href=\".http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a>
		"""
	elif vKey == "4_5":
		vResult += """
			Here are C# Programs to download:</br>
			</br>
			Chess Program:<t><a href=\".http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a>
		"""
	elif vKey == "5_0":
		vResult += """
			This section is dedicated to database programming.
		"""
	elif vKey == "5_1":
		vResult += """
			This section is dedicated to Oracle programming.
		"""
	elif vKey == "5_2":
		vResult += """
			This section is dedicated to Derby programming.
		"""
	elif vKey == "5_3":
		vResult += """
			This section is dedicated to MySQL programming.
		"""
	elif vKey == "5_4":
		vResult += """
			This section is dedicated to SQL Server programming.
		"""
	elif vKey == "5_5":
		vResult += """
			This section is dedicated to Postgres programming.
		"""
	else:
		vResult += vDefault
	vResult += "</div>"
	
	return vResult
