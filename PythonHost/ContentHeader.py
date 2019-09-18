def getContentHeader(vPage, vLevel):
	vKey = vLevel+'_'+vPage
	
	vResult = ''
	vDefault = ''
	
	vDefault += 'Welcome to the House That Kamurai Built!'
	
	vResult += '<h4>'
	if vKey == '0_0':
		vResult += vDefault
	elif vKey == '0_1':
		vResult += 'About Us'
	elif vKey == '0_2':
		vResult += 'Media'
	elif vKey == '0_3':
		vResult += 'Minecraft!'
	elif vKey == '1_0':
		vResult += 'Web Programming'
	elif vKey == '1_1_0':
		vResult += 'Database Programming'
	elif vKey == '1_1_1':
		vResult += 'Oracle Programming'
	elif vKey == '1_1_2':
		vResult += 'Derby Programming'
	elif vKey == '1_1_3':
		vResult += 'MySQL Programming'
	elif vKey == '1_1_4':
		vResult += 'SQL Server Programming'
	elif vKey == '1_1_5':
		vResult += 'Postgres Programming'
	elif vKey == '2_0':
		vResult += 'Private Projects'
	elif vKey == '2_2':
		vResult += 'Assault CCG'
	elif vKey == '2_3':
		vResult += 'Mars Projects'
	elif vKey == '2_6':
		vResult += 'Truth'
	elif vKey == '2_7':
		vResult += 'Kingdoms'
	elif vKey == '2_8':
		vResult += 'Terminal World'
	elif vKey == '2_9':
		vResult += 'Monster Office Workplace'
	elif vKey == '2_10':
		vResult += 'Battle Princesses'
	elif vKey == '2_11':
		vResult += 'Sacred Offerings'
	elif vKey == '2_12':
		vResult += 'The Way'
	elif vKey == '2_13':
		vResult += 'Conspiratorium'
	elif vKey == '2_14':
		vResult += 'Conversion'
	elif vKey == '2_15':
		vResult += 'Conquer'
	elif vKey == '2_16':
		vResult += 'Armor Up!'
	elif vKey == '2_17':
		vResult += 'Goblins and Guardians'
	elif vKey == '2_1_0':
		vResult += 'Gynowars'
	elif vKey == '2_1_1':
		vResult += 'Gynowars RPG'
	elif vKey == '2_1_2':
		vResult += 'Gynowars: Battle Arena CCG'
	elif vKey == '2_1_3':
		vResult += 'Gynowars: Crash Ball'
	elif vKey == '2_4_0':
		vResult += 'Renley'
	elif vKey == '2_4_1':
		vResult += 'Warring Nations'
	elif vKey == '2_4_2':
		vResult += 'Psychodom: The One Empire'
	elif vKey == '2_5_0':
		vResult += 'Antarrea Projects'
	elif vKey == '2_5_1':
		vResult += 'Global Antarrea'
	elif vKey == '2_5_1_1':
		vResult += 'Team Tactical: Crash Ball'
	elif vKey == '2_5_1_2':
		vResult += 'Wars of Antarrea'
	elif vKey == '2_5_1_3':
		vResult += 'Revolutions: Invading Nations'
	elif vKey == '2_5_1_4':
		vResult += 'Revolutions: Rebellion Against the Fist'
	elif vKey == '2_5_1_5':
		vResult += 'Revolutions: Return to Arms'
	elif vKey == '2_5_1_6':
		vResult += 'Revolutions: Post Wars'
	elif vKey == '2_5_2_0':
		vResult += 'Grendol'
	elif vKey == '2_5_2_1':
		vResult += 'Land of the Orcish Empire: Age of Magic'
	elif vKey == '2_5_2_2':
		vResult += 'Coliseum: Arena'
	elif vKey == '2_5_3_0':
		vResult += 'Utopia'
	elif vKey == '2_5_3_1':
		vResult += 'Elemental Angels'
	elif vKey == '2_5_4_0':
		vResult += 'Elvia'
	elif vKey == '2_5_4_1':
		vResult += 'Nine Card'
	elif vKey == '3_0':
		vResult += 'Downloadable Projects'
	elif vKey == '3_1':
		vResult += 'Online Experience Downloads'
	elif vKey == '3_2':
		vResult += 'Game Maker Downloads'
	elif vKey == '3_3':
		vResult += 'Java Downloads'
	elif vKey == '3_4':
		vResult += 'C\# Downloads'
	elif vKey == '3_5':
		vResult += 'C++ Downloads'
	else:
		vResult += vDefault
	vResult += '</h4>'
	
	return vResult
