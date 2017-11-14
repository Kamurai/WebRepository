def getHead(vLevel, vDivision):
	vResult = ''
	
	vResult += '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">'
	vResult += getStyle(vDivision)
	
	return vResult
	
def getStyle(vDivision):
	vResult = ''
	
	vResult += '<link href=\"http://htkb.dyndns.org/'
	vResult += getStyleFile(vDivision)
	vResult += '\" rel=\"stylesheet\" type="text/CSS">'
	
	return vResult
	
def getStyleFile(vDivision):
	vResult = ''
	vDefault = ''
	
	vDefault += 'Main.css'

	if vDivision == '0':
		vResult = vDefault
	elif vDivision == '1':
		vResult = 'Division1.css'
	elif vDivision == '2':
		vResult = 'Division2.css'
	elif vDivision == '3':
		vResult = 'Division3.css'
	else:
		vResult = vDefault
		
	return vResult

def getLogo():
	vResult = ''
	
	vResult += '<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\">'
	
	return vResult

def getNavBar():
	vResult = ''
	
	vResult += '<a class=\'navBar\' href=\'/Index\'>Home</a>'
	vResult += '<a class=\'navBar\' href=\'/Division1/Index\'>Web Programming</a>'
	vResult += '<a class=\'navBar\' href=\'/Division2/Index\'>Private Projects</a>'
	vResult += '<a class=\'navBar\' href=\'/Division3/Index\'>Downloadable Projects</a>'
	
	return vResult

def getNavigationHeader():
	vResult = ''
	
	vResult += '<h4>'
	vResult += 'Navigation'
	vResult += '</h4>'
	
	return vResult
	
def getInformationHeader():
	vResult = ''
	
	vResult += '<h4>'
	vResult += 'Information'
	vResult += '</h4>'
	
	return vResult
	
def getInformation():
	vResult = ''
	
	vResult += 'This is written with generic ASP.NET and javascript.'
	vResult += 'Other versions can be found here:'
	
	return vResult
	
def getGDR():
	vResult = ''
	
	vResult += '<a href=\"http://htkb.dyndns.org/downloads/GDR.zip\">You can download my Games Development Report here.</a></br>'
	
	return vResult
	
def getWinRar():
	vResult = ''
	
	vResult += '<a href=\"http://htkb.dyndns.org/downloads/wrar371.exe\">You may need WinRar to open zip files from this site.</a></br>'
	
	return vResult
	
def getFooter():
	vResult = ''
	
	vResult += '<p id=\'idFooterContent\'>'
	vResult += '	Copyright 2012 All rights reserved<br>'
	vResult += '	House That Kamurai Built<br>'
	vResult += '</p>'
	
	return vResult
	
def getWebMaster():
	vResult = ''
	
	vResult += '<p id=\'idFooterManagement\'>'
	vResult += '	Website managed by Kamurai.'
	vResult += '</p>'
	
	return vResult