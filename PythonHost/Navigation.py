def getNavigation(vKey):
	vResult = ''
	vDefault = ''
	
	vDefault += '<a class=\'navlinkA\' href=\'/AboutUs\'>About Us</a></br></br>'
	vDefault += '<a class=\'navlinkA\' href=\'/Media\'>Media</a></br></br>'
	vDefault += '<a class=\'navlinkA\' href=\'/Minecraft\'>Minecraft!</a></br></br>'
		
	if vKey == '0':
		vResult += vDefault
	elif vKey == '1':
		vResult += '<a class=\'navlinkA\' href=\'/Division1/Section1/Index\'>Databases</a></br></br>'
	elif vKey == '1_1':
		vResult += '<a class=\'navlinkA\' href=\'/Division1/Section1/Index\'>Databases</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division1/Section1/Project1\'>Oracle</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division1/Section1/Project2\'>Derby</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division1/Section1/Project3\'>MySQL</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division1/Section1/Project4\'>SQL Server</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division1/Section1/Project5\'>Postgres</a></br></br>'
	elif vKey == '2':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_1':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section1/Project1\'>Gynowars RPG</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section1/Project2\'>Gynowars: Battle Arena CCG</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section1/Project3\'>Gynowars: Crash Ball</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_4':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section4/Project1\'>Warring Nations</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section4/Project2\'>Psychodom: The One Empire</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_5':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section1/Index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section2/Index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section3/Index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section4/Index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_5_1':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section1/Index\'>Global</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project1\'>Team Tactial: Crash Ball</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project2\'>Wars of Antarrea</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project3\'>Revolutions: Invading Nations:</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project4\'>Revolutions: Rebellion Against the Fist</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project5\'>Revolutions: Return to Arms</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section1/Project6\'>Revolutions: Post Wars</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section2/Index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section3/Index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section4/Index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_5_2':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section1/Index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section2/Index\'>Grendol</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section2/Project1\'>Land of the Orcish Empire: Age of Magic</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section2/Project2\'>Coliseum: Arena</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section3/Index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section4/Index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_5_3':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section1/Index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section2/Index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section3/Index\'>Utopia</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section3/Project1\'>Avia:Elemental Angels</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section4/Index\'>Elvia</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '2_5_4':
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section1/Index\'>Gynowars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project2\'>Assault</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project3\'>Mars</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section4/Index\'>Renley</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Section5/Index\'>Antarrea</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section1/Index\'>Global</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section2/Index\'>Grendol</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section3/Index\'>Utopia</a></br></br>'
		vResult += '	<a class=\'navlinkB\' href=\'/Division2/Section5/Section4/Index\'>Elvia</a></br></br>'
		vResult += '		<a class=\'navlinkC\' href=\'/Division2/Section5/Section4/Project1\'>Nine Card</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project6\'>Truth</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project7\'>Kingdoms</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project8\'>Terminal World</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project9\'>Monster Office Workplace</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project10\'>Battle Princesses</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project11\'>Sacred Offerings</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project12\'>The Way</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project13\'>Conspiratorium</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project14\'>Conversion</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project15\'>Conquer</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project16\'>Armor Up!</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division2/Project17\'>Goblins and Guardians</a></br></br>'
	elif vKey == '3':
		vResult += '<a class=\'navlinkA\' href=\'/Division3/Project1\'>Online Experience Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division3/Project2\'>Game Maker Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division3/Project3\'>Java Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division3/Project4\'>C# Downloads</a></br></br>'
		vResult += '<a class=\'navlinkA\' href=\'/Division3/Project5\'>C++ Downloads</a></br></br>'
	else:
		vResult = vDefault
	return vResult

