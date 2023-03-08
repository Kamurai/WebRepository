def getNavigation(vKey):
	vResult = ""
	vDefault = ""
	
	vDefault += """
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./AboutUs\">About Us</a></li>
			<li><a class=\"navlinkA\" href=\"./Media\">Media</a></li>
			<li><a class=\"navlinkA\" href=\"./GitHubs\">Git Hubs</a></li>
			<li><a class=\"navlinkA\" href=\"./WebApps\">Web Apps</a></li>
		</ul>
	"""
		
	if vKey == "0":
		vResult += vDefault
	elif vKey == "1":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index\">Board Games</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1\">The Way</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2\">Sacred Offerings</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3\">Conversion</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4\">Conspiratorium</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5\">Monster Office Workplace</a></li>
				<li><a class=\"navlinkA\" href=\"./Project6\">MacCreedy's Mansion</a></li>
				<li><a class=\"navlinkA\" href=\"./Project7\">Dundered Acre Wood</a></li>
				<li><a class=\"navlinkA\" href=\"./Project8\">Conquer</a></li>
				<li><a class=\"navlinkA\" href=\"./Project9\">Assault</a></li>
				<li><a class=\"navlinkA\" href=\"./Project10\">Battle Princesses</a></li>
				<li><a class=\"navlinkA\" href=\"./Project11\">Armor Up</a></li>
				<li><a class=\"navlinkA\" href=\"./Project12\">Gynowars: Battle Arena</a></li>
				<li><a class=\"navlinkA\" href=\"./Project13\">Land of the Orcish Empire: Age of Magic</a></li>
				<li><a class=\"navlinkA\" href=\"./Project14\">Coliseum: Arena</a></li>
				<li><a class=\"navlinkA\" href=\"./Project15\">Nine Card</a></li>
				<li><a class=\"navlinkA\" href=\"./Project16\">Wars of Antarrea</a></li>
				<li><a class=\"navlinkA\" href=\"./Project17\">Antarrea RPG</a></li>
				<li><a class=\"navlinkA\" href=\"./Project18\">Super Dungeon Adventure</a></li>
			</ul>
		"""
	elif vKey == "2":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index\">Digital Board Games</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1\">Kingdoms</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2\">Goblins and Guardians</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3\">Mega Fleets</a></li>
				<li><a class=\"navlinkA\" href=\"./Section1/Index\">Crash Ball</a></li>
			</ul>
		"""
	elif vKey == "2_1":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"../Index\">Digital Board Games</a></li>
				<li><a class=\"navlinkA\" href=\"../Project1\">Kingdoms</a></li>
				<li><a class=\"navlinkA\" href=\"../Project2\">Goblins and Guardians</a></li>
				<li><a class=\"navlinkA\" href=\"../Project3\">Mega Fleets</a></li>
				<li><a class=\"navlinkA\" href=\"../Section1/Index\">Crash Ball</a></li>
				<ul class=\"navigationUl\">
					<li><a class=\"navlinkB\" href=\"./Project1\">Antarrea: Crash Ball</a></li>
					<li><a class=\"navlinkB\" href=\"./Project2\">Gynowars: Crash Ball</a></li>
				</ul>
			</ul>
		"""
	elif vKey == "3":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index\">Video Games</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1\">Truth</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2\">The Wrong Ninja</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3\">Gynowars</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4\">Terminal World</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5\">Mars: Opposition</a></li>
				<li><a class=\"navlinkA\" href=\"./Section1/Index\">Antarrea</a></li>
				<li><a class=\"navlinkA\" href=\"./Section2/Index\">Renley</a></li>
			</ul>
		"""
	elif vKey == "3_1":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"../Index\">Video Games</a></li>
				<li><a class=\"navlinkA\" href=\"../Project1\">Truth</a></li>
				<li><a class=\"navlinkA\" href=\"../Project2\">The Wrong Ninja</a></li>
				<li><a class=\"navlinkA\" href=\"../Project3\">Gynowars</a></li>
				<li><a class=\"navlinkA\" href=\"../Project4\">Terminal World</a></li>
				<li><a class=\"navlinkA\" href=\"../Project5\">Mars: Opposition</a></li>
				<li><a class=\"navlinkA\" href=\"../Section1/Index\">Antarrea</a></li>
				<ul class=\"navigationUl\">
					<li><a class=\"navlinkB\" href=\"./Project1\">Revolutions: Invading Nations</a></li>
					<li><a class=\"navlinkB\" href=\"./Project2\">Revolutions: Rebellion Against the Fist</a></li>
					<li><a class=\"navlinkB\" href=\"./Project3\">Revolutions: Return to Arms</a></li>
					<li><a class=\"navlinkB\" href=\"./Project4\">Revolutions: Post Wars</a></li>
					<li><a class=\"navlinkB\" href=\"./Project5\">Avia:Elemental Angels</a></li>
				</ul>
				<li><a class=\"navlinkA\" href=\"../Section2/Index\">Renley</a></li>
			</ul>
		"""
	elif vKey == "3_2":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"../Indx\">Video Games</a></li>
				<li><a class=\"navlinkA\" href=\"../Project1\">Truth</a></li>
				<li><a class=\"navlinkA\" href=\"../Project2\">The Wrong Ninja</a></li>
				<li><a class=\"navlinkA\" href=\"../Project3\">Gynowars</a></li>
				<li><a class=\"navlinkA\" href=\"../Project4\">Terminal World</a></li>
				<li><a class=\"navlinkA\" href=\"../Project5\">Mars: Opposition</a></li>
				<li><a class=\"navlinkA\" href=\"../Section1/Index\">Antarrea</a></li>
				<li><a class=\"navlinkA\" href=\"../Section2/Index\">Renley</a></li>
				<ul class=\"navigationUl\">
					<li><a class=\"navlinkB\" href=\"./Project1\">Warring Nations</a></li>
					<li><a class=\"navlinkB\" href=\"./Project2\">Psychodom: The One Empire</a></li>
				</ul>
			</ul>
		"""
	elif vKey == "4":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index\">Downloadables</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1\">Cube World</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2\">Minecraft</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3\">Game Maker</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4\">Java</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5\">C#</a></li>
			</ul>
		"""
	elif vKey == "5":
		vResult += """
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index\">Database Work</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1\">Oracle</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2\">Derby</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3\">MySQL</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4\">SQL Server</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5\">Postgres</a></li>
			</ul>
		"""
	else:
		vResult = vDefault
	return vResult

