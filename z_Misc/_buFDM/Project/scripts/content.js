function getHead()
{
    //document.write("Debug: Head");
    //link CSS
    document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"./styles/main.css\">");
    //link fontsize
    document.write("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">");
}

function getHeader(vPage)
{
    //document.write("Debug: Header");
    
    //Header
    document.write("<header id=\"idHeaderRow\">");
        //Logo
        document.write("<img id=\"idLogo\" src=\"./images/logo-TP.jpg\">");
        
        //Right Header Cell
        document.write("<div id=\"idHeaderRight\">");
            //Row for Phone Number
            document.write("<div id=\"idCallTPRow\">");
                //Phone Number Container
                document.write("<div id=\"idCallTPCell\">");
                    //Phone Number
                    document.write("<i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Call TP 800 800 8000");
                document.write("</div>");
            document.write("</div>");    
            document.write("<div id=\"idHeadButtons\">");
                document.write("<div id=\"idLoginCell\">");
                    //Login Button
                    document.write("<a href=\"./login.html\"><input class=" + getLoginButtonClass(vPage) + " type=\"button\"  value=\"Login\"></a>");
                document.write("</div>"); 
                document.write("<div id=\"idRegisterCell\">");
                    //Register Button
                    document.write("<a href=\"./register.html\"><input class=" + getRegisterButtonClass(vPage) + " type=\"button\"  value=\"Register\"></a>");
                document.write("</div>"); 
            document.write("</div>");
        document.write("</div>");
    document.write("</header>");
}

function getLoginButtonClass()
{
    if(vPage == "login")
    {
        return "\"classHeadButtonSelected\"";
    }
    else
    {
        return "\"classHeadButton\"";
    }
}

function getRegisterButtonClass()
{
    if(vPage == "register")
    {
        return "\"classHeadButtonSelected\"";
    }
    else
    {
        return "\"classHeadButton\"";
    }
}


function getContent(vPage)
{
    //document.write("Debug: Content");
    
    //Content by page
    if(vPage == "index")
    {
        //Picture row
        document.write("<div id=\"idPictureRow\">");
        //document.write("Debug: Picture Row");
            //Overlay text container
            document.write("<div id=\"idPictureText\">");
                document.write("<div id=\"idPictureTextBackground\">");
                    document.write("<div id=\"idPictureTextTitle\">");
                        document.write("Why Choose TP?");
                    document.write("</div>");
                    document.write("<div id=\"idPictureTextText\">");
                        document.write("Manage your own investments on your own time.  TP website's powerful, user-friendly stock trading tools designed to provide everything you need for online trading.");
                        document.write("<a href=\"./index.html\"><input id=\"idPictureTextButton\" type=\"button\" value=\"OPEN AN ACCOUNT\"></a>");
                    document.write("</div>");
                document.write("</div>");
			document.write("</div>");
        document.write("</div>");
        //Navigation Row
        document.write("<div id=\"idNavRow\">");
        //document.write("Debug: Navigation Row");
            //Tab Menu Container
            document.write("<div id=\"idTabMenu\">");
                document.write("<div class=\"classTabMenuTab\">");
                    document.write("<input type=\"radio\" id=\"classTabMenuTab-1\" name=\"classTabMenuTab-group-1\" checked>");
                    document.write("<label for=\"classTabMenuTab-1\">Home</label>"); //Tab Label
                   
                    document.write("<div class=\"classTabMenuContent\">");
                   
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Fusce ultricies");
                            document.write("</div>")
                        document.write("</div>")
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Aliquam tempus");
                            document.write("</div>")
                        document.write("</div>")
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Proin aliquam");
                            document.write("</div>")
                        document.write("</div>")
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-cubes\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Nunc sapien");
                            document.write("</div>")
                        document.write("</div>")
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-money\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Mauris iaculis");
                            document.write("</div>")
                        document.write("</div>")
                        document.write("<div class=\"classTabMenuContentDiv\">")
                            document.write("<div class=\"classTabMenuContentDivSymbol\">")
                                document.write("<i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>");
                            document.write("</div>")
                            document.write("<div class=\"classTabMenuContentDivText\">")
                                document.write("Morbi rutrum");
                            document.write("</div>")
                        document.write("</div>")
                        
                       
                       
                       
                    document.write("</div>");
                document.write("</div>");
                
                document.write("<div class=\"classTabMenuTab\">");
                   document.write("<input type=\"radio\" id=\"classTabMenuTab-2\" name=\"classTabMenuTab-group-1\">");
                   document.write("<label for=\"classTabMenuTab-2\">Online Trading</label>"); //Tab Label
                   
                   document.write("<div class=\"classTabMenuContent\">");
                       document.write("Second");
                   document.write("</div>");
                document.write("</div>");
                
                document.write("<div class=\"classTabMenuTab\">");
                   document.write("<input type=\"radio\" id=\"classTabMenuTab-3\" name=\"classTabMenuTab-group-1\">"); document.write("<label for=\"classTabMenuTab-3\">Online Brokerage</label>"); //Tab Label
                 
                   document.write("<div class=\"classTabMenuContent\">");
                       document.write("Third");
                   document.write("</div>");
                document.write("</div>");
                
                document.write("<div class=\"classTabMenuTab\">");
                   document.write("<input type=\"radio\" id=\"classTabMenuTab-4\" name=\"classTabMenuTab-group-1\">"); document.write("<label for=\"classTabMenuTab-4\">Investment Products</label>"); //Tab Label
                 
                   document.write("<div class=\"classTabMenuContent\">");
                       document.write("Fourth");
                   document.write("</div>");
                document.write("</div>");
                
                document.write("<div class=\"classTabMenuTab\">");
                   document.write("<input type=\"radio\" id=\"classTabMenuTab-5\" name=\"classTabMenuTab-group-1\">"); document.write("<label for=\"classTabMenuTab-5\">TP Services</label>"); //Tab Label
                 
                   document.write("<div class=\"classTabMenuContent\">");
                       document.write("Fifth");
                   document.write("</div>");
                document.write("</div>");
                
                document.write("<div class=\"classTabMenuTab\">");
                   document.write("<input type=\"radio\" id=\"classTabMenuTab-6\" name=\"classTabMenuTab-group-1\">"); document.write("<label for=\"classTabMenuTab-6\">Contact Us</label>"); //Tab Label
                 
                   document.write("<div class=\"classTabMenuContent\">");
                       document.write("Sixth");
                   document.write("</div>");
                document.write("</div>");
                
            document.write("</div>");
        document.write("</div>");
        //Article Row
        document.write("<div id=\"idArticleRow\">");
        //document.write("Debug: Article Row");
            //Article Sub Row
            document.write("<div class=\"classArticleSubRow\">");
                //Article
                document.write("<div class=\"classArticle\">");
                    document.write("<div class=\"classArticleLeft\">");
                        document.write("<img class=\"classArticlePicture\" src=\"./images/round-images1.png\">");
                    document.write("</div>");
                    document.write("<div class=\"classArticleRight\">");
                        writeArticleRight("Online Trading", "Nunc nulla purus, tempus vitae consectetur nec, blandit vel quam. Suspendisse pellentewque volutpat dictum.  Proin aliquam porta velit sit amet auctor.  Nunc sapien magna, suscipit ac gravida sed, interdum at ipsum.", "");
                    document.write("</div>");
                document.write("</div>");
                //Article
                document.write("<div class=\"classArticle\">");
                    document.write("<div class=\"classArticleLeft\">");
                        document.write("<img class=\"classArticlePicture\" src=\"./images/round-images3.png\">");
                    document.write("</div>");
                    document.write("<div class=\"classArticleRight\">");
                        writeArticleRight("Investment Products", "Phasellus convallis mollis ligula eu tincidunt.  Fusce ultricies venenatis enim, vitae suscipit sapien viverra nec.<br><br>Donec scelerisque diam nec augue tempus cursus.", "");
                    document.write("</div>");
                document.write("</div>");
            document.write("</div>");
            //Article Sub Row
            document.write("<div class=\"classArticleSubRow\">");
                //Article
                document.write("<div class=\"classArticle\">");
                    document.write("<div class=\"classArticleLeft\">");
                        document.write("<img class=\"classArticlePicture\" src=\"./images/round-images2.png\">");
                    document.write("</div>");
                    document.write("<div class=\"classArticleRight\">");
                        writeArticleRight("Online Brokerage", "Aliquam tempus orci iaculis neque ullamcorper sed semper magna molestie", "Vivamus ullamcorper blandit lacus id pretium, eleifend a tincidunt sit amet, tincidunt id est.  Quisque blandit aliquet urna vitae placerat, Mauris et diam lorem, vel viverra libero...");
                    document.write("</div>");
                document.write("</div>");
                //Article
                document.write("<div class=\"classArticle\">");
                    document.write("<div class=\"classArticleLeft\">");
                        document.write("<img class=\"classArticlePicture\" src=\"./images/round-images4.png\">");
                    document.write("</div>");
                    document.write("<div class=\"classArticleRight\">");
                        writeArticleRight("TP Services", "Suspendisse potenti.  Proin pulvinar lectus et nisl blandit aliquam.", "Nulla facilisi.  Morbi rutrum, enim at posuere elementum, tortor quam posuere erat, vel rhoncus uma orci nec diam.");
                    document.write("</div>");
                document.write("</div>");
            document.write("</div>");
        document.write("</div>");
    }
    else if(vPage == "login")
    {
        //Login form container
        document.write("<div id=\"idLoginBox\">");
            document.write("<label id=\"idLoginLabel\">Login</label>");
            //Login form
            document.write("<form id=\"idLoginForm\">");
                //Username Input
                document.write("<span class=\"classLoginInputIcon\">");
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i>");
                document.write("</span>");
                document.write("<input class=\"classLoginInput\" type=\"text\" placeholder=\"Username\" required>");
                //Password Input
                document.write("<span class=\"classLoginInputIcon\">");
                    document.write("<i class=\"fa fa-lock\" aria-hidden=\"true\"></i>");
                document.write("</span>");
                document.write("<input class=\"classLoginInput\" type=\"text\" placeholder=\"Password\" required>");
                //Submit row
                document.write("<div id=\"idLoginSubmitRow\">");
                    document.write("<div id=\"idLoginSubmitRowCheckBox\">");
                        //Remember Me checkbox
                        document.write("<input id=\"idLoginRememberMe\" type=\"checkbox\"><label id=\"idLoginRememberMeLabel\" for=\"idLoginRememberMe\">Remember Me</label>");
                    document.write("</div>");
                    document.write("<div id=\"idLoginSubmitRowButton\">");
                        //Login button
                        document.write("<input id=\"idLoginButton\" type=\"submit\" value=\"Login\">");
                    document.write("</div>");
                document.write("</div>");
                document.write("<div class=\"idLoginLoginLinksHolder\">");    
                    //Lost Password
                    document.write("<a class=\"classLoginLinks\" href=\"./register.html\">Lost your password?</a>");
                document.write("</div>");
                document.write("<div class=\"idLoginLoginLinksHolder\">");
                    //Register
                    document.write("<a class=\"classLoginLinks\" href=\"./register.html\">Register</a>");
                document.write("</div>");
            document.write("</form>");
        document.write("</div>");
    }
    else if(vPage == "register")
    {
        //Register form container
        document.write("<div id=\"idRegisterBox\">");
            document.write("<label id=\"idRegisterLabel\">Register</label>");
            //Register form
            document.write("<form id=\"idRegisterForm\">");
                document.write("<div class=\"classRegisterInputBox\">");
                    //First Name Input
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"text\" placeholder=\"First name\" required>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    //Last Name Input
                    document.write("<i class=\"fa fa-lock\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"text\" placeholder=\"Last name\" required>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    //Username Input
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"text\" placeholder=\"Username\" required>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    //Email Input
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"email\" placeholder=\"Email\" required>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    //Create Password
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"password\" placeholder=\"Email\" required>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    //Confirm Password
                    document.write("<i class=\"fa fa-user\" aria-hidden=\"true\"></i><input class=\"classRegisterInput\" type=\"password\" placeholder=\"Email\" required>");
                document.write("</div>");
                document.write("<div id=\"idRegisterCheckboxRow\">");
                    //Acceptance checkbox
                    document.write("<input id=\"idRegisterAcceptance\" type=\"checkbox\"><label id=\"idRegisterAcceptanceLabel\" for=\"idRegisterAcceptance\">I accept</label>");
                    document.write("<a class=\"classRegisterLinks\" href=\"./register.html\">TP's terms and conditions</a>");
                document.write("</div>");
                document.write("<div class=\"classRegisterInputBox\">");
                    document.write("<div id=\"idRegisterButtonRow\">");
                        //Register button
                            document.write("<input id=\"idRegisterButton\" type=\"submit\" value=\"Register\">");
                    document.write("</div>");
                document.write("</div>");
                document.write("</form>");
        document.write("</div>");
    }
    else
    {
        document.write("NOPE!");
    }
    
}

function writeArticleRight(vHeader, vBody, vFlavor)
{
    writeArticleHeader(vHeader);
    writeArticleBody(vBody);
    writeArticleFlavor(vFlavor);
    writeArticleLearnMoreButtonHolder();
}

function writeArticleHeader(vHeader)
{
    document.write("<div class=\"classArticleRightHeader\">");
        document.write(vHeader);
    document.write("</div>");
}

function writeArticleBody(vBody)
{
    document.write("<div class=\"classArticleRightBody\">");
        document.write(vBody);
    document.write("</div>");
}

function writeArticleFlavor(vFlavor)
{
    document.write("<div class=\"classArticleRightFlavor\">");
        document.write(vFlavor);
    document.write("</div>");
}


function writeArticleLearnMoreButtonHolder()
{
    document.write("<div class=\"classArticleRightButtonHolder\">");
        document.write("<input class=\"classArticleRightButton\" type=\"button\" value=\"Learn more\">");
    document.write("</div>");
}

    
function getFooter()
{
    
    //Footer
    document.write("<footer id=\"idFooterRow\">");
		//document.write("Debug: Footer");
        //Social Media
        document.write("<div id=\"idSocialMedia\">");
            document.write("<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>  ");
            document.write("<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>  ");
            document.write("<i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>  ");
            document.write("<i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>  ");
            document.write("<i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>  ");
        document.write("</div>");
        //Copyright
        document.write("<div id=\"idCopyRight\">");
            document.write("&#9400; 2015 TP tradingplatform.com.  All rights reserved.")
        document.write("</div>");
    document.write("</footer>");
}