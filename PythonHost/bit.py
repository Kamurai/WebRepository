urls = (
	"/favicon.ico", "icon",
	"/", "index",
	"/index", "index",
	"/AboutUs", "AboutUs",
	"/Media", "Media",
	"/Minecraft", "Minecraft",
	
	"/Division1/index", "Division1",
	"/Division2/index", "Division2",
	"/Division3/index", "Division3",
	"/Division3/Project1", "Division3_1",
	"/Division3/Project2", "Division3_2",
	"/Division3/Project3", "Division3_3"
)

Main = web.template.render('/')
Universal = web.template.render('/Universal')
MainContent = web.template.render('Content/')
Division1 = web.template.render('Division1/')
Division2 = web.template.render('Division2/')
Division3 = web.template.render('Division3/')

class icon:
    def GET(self):
        return Main.Universal()

class index:
    def GET(self):
        return Main.Layout(0, 0, "Main.css")

class AboutUs:
    def GET(self):
        return Main.Layout(1, 0, "Main.css")

class Media:
    def GET(self):
        return Main.Layout(2, 0, "Main.css")

class Minecraft:
    def GET(self):
        return Main.Layout(3, 0, "Main.css")

class Division1:
    def GET(self):
        return Division1.Layout(0, 1, "Division1.css")

class Division2:
    def GET(self):
        return Division2.Layout(0, 1, "Division2.css")

class Division3:
    def GET(self):
        return Division3.Layout(0, 1, "Division3.css")

class Division3_1
    def GET(self):
        return Division3.Layout(1, 1, "Division3.css")

class Division3_2:
    def GET(self):
        return Division3.Layout(2, 1, "Division3.css")

class Division3_3:
    def GET(self):
        return Division3.Layout(3, 1, "Division3.css")

		
		
		
		
		
		
		