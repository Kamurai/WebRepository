def getContentHeader(vPage, vLevel):
	vKey = vLevel+"_"+vPage
	
	vResult = ""
	vDefault = "Welcome to the House That Kamurai Built!"
	
	vResult += "<h2>"
	if vKey == "0_0":
		vResult += vDefault
	elif vKey == "0_1":
		vResult += "About Us"
	elif vKey == "0_2":
		vResult += "Media"
	elif vKey == "0_3":
		vResult += "Git Hubs"
	elif vKey == "0_4":
		vResult += "Web Apps"
	elif vKey == "1_0":
		vResult += "Board Games"
	elif vKey == "1_1":
		vResult += "The Way"
	elif vKey == "1_2":
		vResult += "Sacred Offerings"
	elif vKey == "1_3":
		vResult += "Conversion"
	elif vKey == "1_4":
		vResult += "Conspiratorium"
	elif vKey == "1_5":
		vResult += "Monster Office Workplace"
	elif vKey == "1_6":
		vResult += "MacCreedy's Mansion"
	elif vKey == "1_7":
		vResult += "Dundered Acre Wood"
	elif vKey == "1_8":
		vResult += "Conquer"
	elif vKey == "1_9":
		vResult += "Assault"
	elif vKey == "1_10":
		vResult += "Battle Princesses"
	elif vKey == "1_11":
		vResult += "Armor Up"
	elif vKey == "1_12":
		vResult += "Gynowars: Battle Arena"
	elif vKey == "1_13":
		vResult += "Land of the Orcish Empire: Age of Magic"
	elif vKey == "1_14":
		vResult += "Coliseum: Arena"
	elif vKey == "1_15":
		vResult += "Nine Card"
	elif vKey == "1_16":
		vResult += "Wars of Antarrea"
	elif vKey == "1_17":
		vResult += "Antarrea RPG"
	elif vKey == "1_18":
		vResult += "Super Dungeon Adventure"
	elif vKey == "2_0":
		vResult += "Digital Board Games"
	elif vKey == "2_1":
		vResult += "Kingdoms"
	elif vKey == "2_2":
		vResult += "Goblins and Guardians"
	elif vKey == "2_3":
		vResult += "Mega Fleets"
	elif vKey == "2_1_0":
		vResult += "Crash Ball"
	elif vKey == "2_1_1":
		vResult += "Antarrea: Crash Ball"
	elif vKey == "2_1_2":
		vResult += "Gynowars: Crash Ball"
	elif vKey == "3_0":
		vResult += "Video Games"
	elif vKey == "3_1":
		vResult += "Truth"
	elif vKey == "3_2":
		vResult += "The Wrong Ninja"
	elif vKey == "3_3":
		vResult += "Gynowars"
	elif vKey == "3_4":
		vResult += "Terminal World"
	elif vKey == "3_5":
		vResult += "Mars: Opposition"
	elif vKey == "3_1_0":
		vResult += "Antarrea"
	elif vKey == "3_1_1":
		vResult += "Revolutions: Invading Nations"
	elif vKey == "3_1_2":
		vResult += "Revolutions: Rebellion Against the Fist"
	elif vKey == "3_1_3":
		vResult += "Revolutions: Return to Arms"
	elif vKey == "3_1_4":
		vResult += "Revolutions: Post Wars"
	elif vKey == "3_1_5":
		vResult += "Avia: Elemental Angel"
	elif vKey == "3_2_0":
		vResult += "Renley"
	elif vKey == "3_2_1":
		vResult += "Warring Nations"
	elif vKey == "3_2_2":
		vResult += "Psychodom: The One Empire"
	elif vKey == "4_0":
		vResult += "Downloadables"
	elif vKey == "4_1":
		vResult += "Cube World Downloads"
	elif vKey == "4_2":
		vResult += "Minecraft Downloads"
	elif vKey == "4_3":
		vResult += "Game Maker Downloads"
	elif vKey == "4_4":
		vResult += "Java Downloads"
	elif vKey == "4_5":
		vResult += "C# Downloads"
	elif vKey == "5_0":
		vResult += "Database Work"
	elif vKey == "5_1":
		vResult += "Oracle Programming"
	elif vKey == "5_2":
		vResult += "Derby Programming"
	elif vKey == "5_3":
		vResult += "MySQL Programming"
	elif vKey == "5_4":
		vResult += "SQL Server Programming"
	elif vKey == "5_5":
		vResult += "Postgres Programming"
	else:
		vResult += vDefault
	vResult += "</h2>"
	
	return vResult
