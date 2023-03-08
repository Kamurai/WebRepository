import web
import Universal
import Navigation
import Title
import ContentHeader
import Content
import Versions

	
urls = (
	"/static/favicon.ico", "icon",
	"/", "Index",
	"/Index", "Index",
	"/AboutUs", "AboutUs",
	"/Media", "Media",
	"/GitHubs", "GitHubs",
	"/WebApps", "WebApps",
	"/Division1/Index", "Division1",
	"/Division1/Project1", "Division1P1",
	"/Division1/Project2", "Division1P2",
	"/Division1/Project3", "Division1P3",
	"/Division1/Project4", "Division1P4",
	"/Division1/Project5", "Division1P5",
	"/Division1/Project6", "Division1P6",
	"/Division1/Project7", "Division1P7",
	"/Division1/Project8", "Division1P8",
	"/Division1/Project9", "Division1P9",
	"/Division1/Project10", "Division1P10",
	"/Division1/Project11", "Division1P11",
	"/Division1/Project12", "Division1P12",
	"/Division1/Project13", "Division1P13",
	"/Division1/Project14", "Division1P14",
	"/Division1/Project15", "Division1P15",
	"/Division1/Project16", "Division1P16",
	"/Division1/Project17", "Division1P17",
	"/Division1/Project18", "Division1P18",
	"/Division2/Index", "Division2",
	"/Division2/Project1", "Division2P1",
	"/Division2/Project2", "Division2P2",
	"/Division2/Project3", "Division2P3",
	"/Division2/Section1/Index", "Division2_1",
	"/Division2/Section1/Project1", "Division2_1P1",
	"/Division2/Section1/Project2", "Division2_1P2",
	"/Division3/Index", "Division3",
	"/Division3/Project1", "Division3P1",
	"/Division3/Project2", "Division3P2",
	"/Division3/Project3", "Division3P3",
	"/Division3/Project4", "Division3P4",
	"/Division3/Project5", "Division3P5",
	"/Division3/Section1/Index", "Division3_1",
	"/Division3/Section1/Project1", "Division3_1P1",
	"/Division3/Section1/Project2", "Division3_1P2",
	"/Division3/Section1/Project3", "Division3_1P3",
	"/Division3/Section1/Project4", "Division3_1P4",
	"/Division3/Section1/Project5", "Division3_1P5",
	"/Division3/Section2/Index", "Division3_2",
	"/Division3/Section2/Project1", "Division3_2P1",
	"/Division3/Section2/Project2", "Division3_2P2",
	"/Division4/Index", "Division4",
	"/Division4/Project1", "Division4P1",
	"/Division4/Project2", "Division4P2",
	"/Division4/Project3", "Division4P3",
	"/Division4/Project4", "Division4P4",
	"/Division4/Project5", "Division4P5",
	"/Division5/Index", "Division5",
	"/Division5/Project1", "Division5P1",
	"/Division5/Project2", "Division5P2",
	"/Division5/Project3", "Division5P3",
	"/Division5/Project4", "Division5P4",
	"/Division5/Project5", "Division5P5"
)

common_globals = {"getHead": Universal.getHead,
					"getLogo": Universal.getLogo,
					"getNavBar": Universal.getNavBar,
					"getNavigationHeader": Universal.getNavigationHeader,
					"getNavigation": Navigation.getNavigation,
					"getTitle": Title.getTitle,
					"getContentHeader": ContentHeader.getContentHeader,
					"getContent": Content.getContent,
					"getInformationHeader": Universal.getInformationHeader,
					"getInformation": Universal.getInformation,
					"getVersions": Versions.getVersions,
					"getGDR": Universal.getGDR,
					"getWinRar": Universal.getWinRar,
					"getFooter": Universal.getFooter,
					"getWebMaster": Universal.getWebMaster
					}


app = web.application(urls, globals(), autoreload=True)
static = web.template.render("static/")

Layouts = web.template.render("templates/", globals=common_globals)

class static:
	def GET(self):
		return static()

#class icon:
#	def GET(self):
#		return static.favicon()

class Index:
	def GET(self):
		vPage = "0"
		vLevel = "0"
		vDivision = "0"
		return Layouts.Main(vPage, vLevel, vDivision)
		
class AboutUs:
	def GET(self):
		vPage = "1"
		vLevel = "0"
		vDivision = "0"
		return Layouts.Main(vPage, vLevel, vDivision)
		
class Media:
	def GET(self):
		vPage = "2"
		vLevel = "0"
		vDivision = "0"
		return Layouts.Main(vPage, vLevel, vDivision)
		
class GitHubs:
	def GET(self):
		vPage = "3"
		vLevel = "0"
		vDivision = "0"
		return Layouts.Main(vPage, vLevel, vDivision)
		
class WebApps:
	def GET(self):
		vPage = "4"
		vLevel = "0"
		vDivision = "0"
		return Layouts.Main(vPage, vLevel, vDivision)
		
class Division1:
	def GET(self):
		vPage = "0"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)

class Division1P1:
	def GET(self):
		vPage = "1"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P2:
	def GET(self):
		vPage = "2"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P3:
	def GET(self):
		vPage = "3"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P4:
	def GET(self):
		vPage = "4"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P5:
	def GET(self):
		vPage = "5"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P6:
	def GET(self):
		vPage = "6"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P7:
	def GET(self):
		vPage = "7"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P8:
	def GET(self):
		vPage = "8"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P9:
	def GET(self):
		vPage = "9"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P10:
	def GET(self):
		vPage = "10"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P11:
	def GET(self):
		vPage = "11"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P12:
	def GET(self):
		vPage = "12"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P13:
	def GET(self):
		vPage = "13"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P14:
	def GET(self):
		vPage = "14"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P15:
	def GET(self):
		vPage = "15"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P16:
	def GET(self):
		vPage = "16"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P17:
	def GET(self):
		vPage = "17"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division1P18:
	def GET(self):
		vPage = "18"
		vLevel = "1"
		vDivision = "1"
		return Layouts.Division1(vPage, vLevel, vDivision)
		
class Division2:
	def GET(self):
		vPage = "0"
		vLevel = "2"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2P1:
	def GET(self):
		vPage = "1"
		vLevel = "2"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2P2:
	def GET(self):
		vPage = "2"
		vLevel = "2"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2P3:
	def GET(self):
		vPage = "3"
		vLevel = "2"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2_1:
	def GET(self):
		vPage = "0"
		vLevel = "2_1"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2_1P1:
	def GET(self):
		vPage = "1"
		vLevel = "2_1"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division2_1P2:
	def GET(self):
		vPage = "2"
		vLevel = "2_1"
		vDivision = "2"
		return Layouts.Division2(vPage, vLevel, vDivision)
		
class Division3:
	def GET(self):
		vPage = "0"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)
		
class Division3P1:
	def GET(self):
		vPage = "1"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)
		
class Division3P2:
	def GET(self):
		vPage = "2"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)
		
class Division3P3:
	def GET(self):
		vPage = "3"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)
		
class Division3P4:
	def GET(self):
		vPage = "4"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)
		
class Division3P5:
	def GET(self):
		vPage = "5"
		vLevel = "3"
		vDivision = "3"
		return Layouts.Division3(vPage, vLevel, vDivision)

class Division3_1:
	def GET(self):
		vPage = "0"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)
		
class Division3_1P1:
	def GET(self):
		vPage = "1"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)
		
class Division3_1P2:
	def GET(self):
		vPage = "3"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)

class Division3_1P3:
	def GET(self):
		vPage = "3"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)

class Division3_1P4:
	def GET(self):
		vPage = "4"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)

class Division3_1P5:
	def GET(self):
		vPage = "5"
		vLevel = "3_1"
		vDivision = "3"
		return Layouts.Division3_1(vPage, vLevel, vDivision)

class Division3_2:
	def GET(self):
		vPage = "0"
		vLevel = "3_2"
		vDivision = "3"
		return Layouts.Division3_2(vPage, vLevel, vDivision)
		
class Division3_2P1:
	def GET(self):
		vPage = "1"
		vLevel = "3_2"
		vDivision = "3"
		return Layouts.Division3_2(vPage, vLevel, vDivision)
		
class Division3_2P2:
	def GET(self):
		vPage = "2"
		vLevel = "3_2"
		vDivision = "3"
		return Layouts.Division3_2(vPage, vLevel, vDivision)
		
class Division4:
	def GET(self):
		vPage = "0"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division4P1:
	def GET(self):
		vPage = "1"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division4P2:
	def GET(self):
		vPage = "2"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division4P3:
	def GET(self):
		vPage = "3"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division4P4:
	def GET(self):
		vPage = "4"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division4P5:
	def GET(self):
		vPage = "5"
		vLevel = "4"
		vDivision = "4"
		return Layouts.Division4(vPage, vLevel, vDivision)
		
class Division5:
	def GET(self):
		vPage = "0"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
class Division5P1:
	def GET(self):
		vPage = "1"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
class Division5P2:
	def GET(self):
		vPage = "2"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
class Division5P3:
	def GET(self):
		vPage = "3"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
class Division5P4:
	def GET(self):
		vPage = "4"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
class Division5P5:
	def GET(self):
		vPage = "5"
		vLevel = "5"
		vDivision = "5"
		return Layouts.Division5(vPage, vLevel, vDivision)
		
if __name__ == "__main__":
	app.run()