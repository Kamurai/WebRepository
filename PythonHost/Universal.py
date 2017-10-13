def getHead(vDivision):
	vResult = '<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">'
	vResult += '<link href=' + getCSS(vDivision) + ' rel=\"stylesheet\" type="text/css">'
	return vResult
	
def getCSS(vDivision):
	if vDivision == '0':
		vResult = '/static/Styles/Main.css'
	elif vDivision == '1':
		vResult = '/static/Styles/Division1.css'
	elif vDivision == '2':
		vResult = '/static/Styles/Division2.css'
	elif vDivision == '3':
		vResult = '/static/Styles/Division3.css'
	else:
		vResult = '/static/Styles/Main.css'
	return vResult

def getHeader():
	vResult = '<img id=\"idLogo\" src=' + getLogo() + '>'
	return vResult

def getLogo():
	return "/static/Pictures/logoHTKB.jpg"

def getNavBar():
	vResult = '<a class=\'navBar\' href=\'/Index\'>Home</a>'
	vResult += '<a class=\'navBar\' href=\'/Division1/Index\'>Web Programming</a>'
	vResult += '<a class=\'navBar\' href=\'/Division2/Index\'>Private Projects</a>'
	vResult += '<a class=\'navBar\' href=\'/Division3/Index\'>Downloadable Projects</a>'
	return vResult

def getFooter():
	vResult = '<p id=\'idFooterContent\'>'
	vResult += '	Copyright 2012 All rights reserved<br>'
	vResult += '	House That Kamurai Built<br>'
	vResult += '</p>'
	vResult += '<p id=\'idFooterManagement\'>'
	vResult += '	Website managed by Kamurai.'
	vResult += '</p>'
	return vResult
	
