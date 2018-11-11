import web
import Universal
import Navigation
import Title
import ContentHeader
import Content
import Versions

	
urls = (
	'/favicon.ico', 'icon',
	'/', 'Index',
	'/Index', 'Index',
	'/AboutUs', 'AboutUs',
	'/Media', 'Media',
	'/Minecraft', 'Minecraft',
	'/Division1/Index', 'Division1',
	'/Division1/Section1/Index', 'Division1_1',
	'/Division1/Section1/Project1', 'Division1_1P1',
	'/Division1/Section1/Project2', 'Division1_1P2',
	'/Division1/Section1/Project3', 'Division1_1P3',
	'/Division1/Section1/Project4', 'Division1_1P4',
	'/Division1/Section1/Project5', 'Division1_1P5',
	'/Division2/Index', 'Division2',
	'/Division2/Project2', 'Division2P2',
	'/Division2/Project3', 'Division2P3',
	'/Division2/Project6', 'Division2P6',
	'/Division2/Project7', 'Division2P7',
	'/Division2/Project8', 'Division2P8',
	'/Division2/Project9', 'Division2P9',
	'/Division2/Project10', 'Division2P10',
	'/Division2/Project11', 'Division2P11',
	'/Division2/Project12', 'Division2P12',
	'/Division2/Project13', 'Division2P13',
	'/Division2/Project14', 'Division2P14',
	'/Division2/Section1/Index', 'Division2_1',
	'/Division2/Section1/Project1', 'Division2_1P1',
	'/Division2/Section1/Project2', 'Division2_1P2',
	'/Division2/Section1/Project3', 'Division2_1P3',
	'/Division2/Section4/Index', 'Division2_4',
	'/Division2/Section4/Project1', 'Division2_4P1',
	'/Division2/Section4/Project2', 'Division2_4P2',
	'/Division2/Section5/Index', 'Division2_5',
	'/Division2/Section5/Section1/Index', 'Division2_5_1',
	'/Division2/Section5/Section1/Project1', 'Division2_5_1P1',
	'/Division2/Section5/Section1/Project2', 'Division2_5_1P2',
	'/Division2/Section5/Section1/Project3', 'Division2_5_1P3',
	'/Division2/Section5/Section1/Project4', 'Division2_5_1P4',
	'/Division2/Section5/Section1/Project5', 'Division2_5_1P5',
	'/Division2/Section5/Section1/Project6', 'Division2_5_1P6',
	'/Division2/Section5/Section2/Index', 'Division2_5_2',
	'/Division2/Section5/Section2/Project1', 'Division2_5_2P1',
	'/Division2/Section5/Section2/Project2', 'Division2_5_2P2',
	'/Division2/Section5/Section3/Index', 'Division2_5_3',
	'/Division2/Section5/Section3/Project1', 'Division2_5_3P1',
	'/Division2/Section5/Section4/Index', 'Division2_5_4',
	'/Division2/Section5/Section4/Project1', 'Division2_5_4P1',
	'/Division3/Index', 'Division3',
	'/Division3/Project1', 'Division3_1',
	'/Division3/Project2', 'Division3_2',
	'/Division3/Project3', 'Division3_3',
	'/Division3/Project4', 'Division3_4',
	'/Division3/Project5', 'Division3_5'
)

common_globals = {'getHead': Universal.getHead,
					'getLogo': Universal.getLogo,
					'getNavBar': Universal.getNavBar,
					'getNavigationHeader': Universal.getNavigationHeader,
					'getNavigation': Navigation.getNavigation,
					'getTitle': Title.getTitle,
					'getContentHeader': ContentHeader.getContentHeader,
					'getContent': Content.getContent,
					'getInformationHeader': Universal.getInformationHeader,
					'getInformation': Universal.getInformation,
					'getVersions': Versions.getVersions,
					'getGDR': Universal.getGDR,
					'getWinRar': Universal.getWinRar,
					'getFooter': Universal.getFooter,
					'getWebMaster': Universal.getWebMaster
					}


app = web.application(urls, globals(), autoreload=True)
render = web.template.render('templates/')#, base='Layout')

static = web.template.render('static/')

Main = web.template.render('templates/', globals=common_globals)
Division1 = web.template.render('templates/Division1/', globals=common_globals)
Division1_1 = web.template.render('templates/Division1/Section1/', globals=common_globals)
Division2 = web.template.render('templates/Division2/', globals=common_globals)
Division2_1 = web.template.render('templates/Division2/Section1/', globals=common_globals)
Division2_4 = web.template.render('templates/Division2/Section4/', globals=common_globals)
Division2_5 = web.template.render('templates/Division2/Section5/', globals=common_globals)
Division2_5_2 = web.template.render('templates/Division2/Section5/Section2/', globals=common_globals)
Division2_5_3 = web.template.render('templates/Division2/Section5/Section3/', globals=common_globals)
Division2_5_4 = web.template.render('templates/Division2/Section5/Section4/', globals=common_globals)
Division3 = web.template.render('templates/Division3/', globals=common_globals)

class static:
	def GET(self):
		return static()

#class icon:
#	def GET(self):
#		return static.favicon()

class Index:
	def GET(self):
		vPage = '0'
		vLevel = '0'
		vDivision = '0'
		return Main.Layout(vPage, vLevel, vDivision)
		
class AboutUs:
	def GET(self):
		vPage = '1'
		vLevel = '0'
		vDivision = '0'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Media:
	def GET(self):
		vPage = '2'
		vLevel = '0'
		vDivision = '0'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Minecraft:
	def GET(self):
		vPage = '3'
		vLevel = '0'
		vDivision = '0'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1:
	def GET(self):
		vPage = '0'
		vLevel = '1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)

class Division1_1:
	def GET(self):
		vPage = '0'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1_1P1:
	def GET(self):
		vPage = '1'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1_1P2:
	def GET(self):
		vPage = '2'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1_1P3:
	def GET(self):
		vPage = '3'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1_1P4:
	def GET(self):
		vPage = '4'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division1_1P5:
	def GET(self):
		vPage = '5'
		vLevel = '1_1'
		vDivision = '1'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2:
	def GET(self):
		vPage = '0'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P2:
	def GET(self):
		vPage = '2'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P3:
	def GET(self):
		vPage = '3'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P6:
	def GET(self):
		vPage = '6'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P7:
	def GET(self):
		vPage = '7'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P8:
	def GET(self):
		vPage = '8'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P9:
	def GET(self):
		vPage = '9'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P10:
	def GET(self):
		vPage = '10'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P11:
	def GET(self):
		vPage = '11'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P12:
	def GET(self):
		vPage = '12'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P13:
	def GET(self):
		vPage = '13'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2P14:
	def GET(self):
		vPage = '14'
		vLevel = '2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_1:
	def GET(self):
		vPage = '0'
		vLevel = '2_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_1P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_1P2:
	def GET(self):
		vPage = '2'
		vLevel = '2_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_1P3:
	def GET(self):
		vPage = '3'
		vLevel = '2_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_4:
	def GET(self):
		vPage = '0'
		vLevel = '2_4'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_4P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_4'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_4P2:
	def GET(self):
		vPage = '2'
		vLevel = '2_4'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5:
	def GET(self):
		vPage = '0'
		vLevel = '2_5'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1:
	def GET(self):
		vPage = '0'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P2:
	def GET(self):
		vPage = '2'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P3:
	def GET(self):
		vPage = '3'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P4:
	def GET(self):
		vPage = '4'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P5:
	def GET(self):
		vPage = '5'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_1P6:
	def GET(self):
		vPage = '6'
		vLevel = '2_5_1'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_2:
	def GET(self):
		vPage = '0'
		vLevel = '2_5_2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_2P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_5_2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_2P2:
	def GET(self):
		vPage = '2'
		vLevel = '2_5_2'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_3:
	def GET(self):
		vPage = '0'
		vLevel = '2_5_3'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_3P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_5_3'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_4:
	def GET(self):
		vPage = '0'
		vLevel = '2_5_4'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division2_5_4P1:
	def GET(self):
		vPage = '1'
		vLevel = '2_5_4'
		vDivision = '2'
		return Main.Layout(vPage, vLevel, vDivision)

class Division3:
	def GET(self):
		vPage = '0'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division3_1:
	def GET(self):
		vPage = '1'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division3_2:
	def GET(self):
		vPage = '2'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division3_3:
	def GET(self):
		vPage = '3'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division3_4:
	def GET(self):
		vPage = '4'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
class Division3_5:
	def GET(self):
		vPage = '5'
		vLevel = '3'
		vDivision = '3'
		return Main.Layout(vPage, vLevel, vDivision)
		
if __name__ == '__main__':
	app.run()