def getHead(vLevel, vDivision):
	vResult = ""
	
	vResult += "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">"
	vResult += getStyle(vDivision)
	
	return vResult
	
def getStyle(vDivision):
	vResult = ""
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/"
	vResult += getStyleFile(vDivision)
	vResult += "\" rel=\"stylesheet\" type=\"text/CSS\">"
	
	return vResult
	
def getStyleFile(vDivision):
	vResult = ""
	vDefault = ""
	
	vDefault += "Main.css"

	if vDivision == "0":
		vResult = vDefault
	elif vDivision == "1":
		vResult = "Division1.css"
	elif vDivision == "2":
		vResult = "Division2.css"
	elif vDivision == "3":
		vResult = "Division3.css"
	elif vDivision == "4":
		vResult = "Division4.css"
	elif vDivision == "5":
		vResult = "Division5.css"
	elif vDivision == "6":
		vResult = "Division6.css"
	elif vDivision == "7":
		vResult = "Division7.css"
	else:
		vResult = vDefault
		
	return vResult

def getLogo():
	vResult = ""
	
	vResult += "<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\">"
	
	return vResult

def getNavBar():
	vResult = ""
	
	vResult += """
		<ul class=\"navBarUl\">
			<li><a class=\"navBar\" href=\"/Index\">Home</a></li>
			<li><a class=\"navBar\" href=\"/Division1/Index\">Board Games</a></li>
			<li><a class=\"navBar\" href=\"/Division2/Index\">Digital Board Games</a></li>
			<li><a class=\"navBar\" href=\"/Division3/Index\">Video Games</a></li>
			<li><a class=\"navBar\" href=\"/Division4/Index\">Downloadables</a></li>
			<li><a class=\"navBar\" href=\"/Division5/Index\">Database Work</a></li>
		</ul>
	"""
	
	return vResult

def getNavigationHeader():
	vResult = ""
	
	vResult += """
		<h4 class=\"headerColorBlack\">
			Navigation
		</h4>
	"""
	
	return vResult
	
def getInformationHeader():
	vResult = ""
	
	vResult += """
		<h4 class=\"headerColorBlack\">
			Information
		</h4>
	"""
	
	return vResult
	
def getInformation():
	vResult = ""
	
	vResult += """
		This is written with Web.py.
		Other versions can be found here:<br>
	"""
	
	return vResult
	
def getGDR():
	vResult = ""
	
	vResult += "<a href=\"http://htkb.dyndns.org/downloads/GDR.zip\">You can download my Games Development Report here.</a>"
	
	return vResult
	
def getWinRar():
	vResult = ""
	
	vResult += "<a href=\"http://htkb.dyndns.org/downloads/wrar371.exe\">You may need WinRar to open zip files from this site.</a>"
	
	return vResult
	
def getFooter():
	vResult = ""
	
	vResult += """
		<div id=\"idFooterContent\">
			Copyright 2012 All rights reserved<br>
			House That Kamurai Built<br>
		</div>
	"""
	
	return vResult
	
def getWebMaster():
	vResult = ""
	
	vResult += """
		<div id=\"idFooterManagement\">
			Website managed by Kamurai.
		</div>
	"""
	
	return vResult