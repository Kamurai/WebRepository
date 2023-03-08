urls = (
	"/static/favicon.ico", "icon",
	"/", "index",
	"/index", "index",
	"/AboutUs", "AboutUs",
	"/Media", "Media",
	"/GitHubs", "GitHubs",
	"/WebApps", "WebApps",
	
	"/Division1/index", "Division1",
	"/Division2/index", "Division2",
	"/Division3/index", "Division3",
	"/Division4/index", "Division4",
	"/Division5/index", "Division5"
)

Main = web.template.render('/')
Universal = web.template.render('/Universal')
MainContent = web.template.render('Content/')
Division1 = web.template.render('Division1/')
Division2 = web.template.render('Division2/')
Division3 = web.template.render('Division3/')
Division4 = web.template.render('Division4/')
Division5 = web.template.render('Division5/')

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

class GitHubs:
    def GET(self):
        return Main.Layout(3, 0, "Main.css")

class WebApps:
    def GET(self):
        return Main.Layout(4, 0, "Main.css")

class Division1:
    def GET(self):
        return Division1.Layout(0, 1, "Division1.css")

class Division2:
    def GET(self):
        return Division2.Layout(0, 1, "Division2.css")

class Division3:
    def GET(self):
        return Division3.Layout(0, 1, "Division3.css")

class Division4:
    def GET(self):
        return Division4.Layout(0, 1, "Division4.css")

class Division5:
    def GET(self):
        return Division5.Layout(0, 1, "Division5.css")		