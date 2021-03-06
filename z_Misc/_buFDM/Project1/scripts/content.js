function getHead()
{
    //document.write("Debug: Head");
    //link CSS
    document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"./styles/main.css\">");
}

function getHeader()
{
    //document.write("Debug: Header");
    
    //Header
    document.write("<header id=\"idHeaderRow\">");
        //Left Header Cell
        document.write("<span id=\"idHeaderLeft\">");
            //Logo
            document.write("<img id=\"idLogo\" src=\"./images/logo-TP.jpg\">");
        document.write("</span>");
        //Empty Cell for spacing
        document.write("<span class=\"classEmptySpan\">");
        document.write("</span>");
        //Right Header Cell
        document.write("<span id=\"idHeaderRight\">");
        /*
            //Holding Table
            document.write("<div id=\"idInfoTable\">");
                //Row for Phone Number
                document.write("<div id=\"idCallTPRow\">");
                    //Phone Number Container
                    document.write("<span id=\"idCallTPCell\">");
                        document.write("Call TP 800 800 8000");
                    document.write("</span>");
                document.write("</div>");
                document.write("<div id=\"idHeadButtons\">");
                    //Login Button Container
                    document.write("<span id=\"idLoginCell\">");
                        //Login Button
                        document.write("<a id=\"idHeadLoginButton\" href=\"./login.html\">Login</a>");
                    document.write("</span>");
                    //Register Button Container
                    document.write("<span id=\"idRegisterCell\">");
                        //Register Button
                        document.write("<a id=\"idHeadRegisterButton\" href=\"./register.html\">Register</a>");
                    document.write("</span>");
                document.write("</div>");
            document.write("</div>");
        document.write("</span>");
        */
    document.write("</header>");
}

function getContent(vPage)
{
    document.write("Debug: Content");
    
    //Content by page
    if(vPage == "index")
    {
        //Picture row
        document.write("<div id=\"idPictureRow\">");
            //Overlay text container
            document.write("<span id=\"idPictureText\">");
            document.write("</span>");
        document.write("</div>");
        //Navigation Row
        document.write("<div id=\"idNavRow\">");
            //Tab Menu Container
            document.write("<span id=\"idTabMenu\">");
            document.write("</span>");
        document.write("</div>");
        //Article Row
        document.write("<div id=\"idArticleRow\">");
            //Article Sub Row
            document.write("<div class=\"classArticleSubRow\">");
                //Article
                document.write("<span class=\"classArticle\">");
                document.write("</span>");
                //Article
                document.write("<span class=\"classArticle\">");
                document.write("</span>");
            document.write("</div>");
            //Article Sub Row
            document.write("<div class=\"classArticleSubRow\">");
                //Article
                document.write("<span class=\"classArticle\">");
                document.write("</span>");
                //Article
                document.write("<span class=\"classArticle\">");
                document.write("</span>");
            document.write("</div>");
        document.write("</div>");
    }
    else if(vPage == "login")
    {
        //Login form container
        document.write("<div id=\"idLoginBox\">");
            //Login form
            document.write("<form id=\"idLoginForm\">");
                //Username Input
                document.write("<input type=\"text\" value=\"Username\" required>");
                //Password Input
                document.write("<input type=\"text\" value=\"Password\" required>");
                //Submit row
                    //Remember Me checkbox
                    document.write("<input type=\"checkbox\" value=\"Remember Me\">");
                    //Login button
                    document.write("<input type=\"submit\" value=\"Login\">");
                //Lost Password
                document.write("<a class=\"classLoginLinks\" href=\"./register.html\">Lost your password?</a>");
                //Register
                document.write("<a class=\"classLoginLinks\" href=\"./register.html\">Register</a>");
            document.write("</form>");
        document.write("</div>");
    }
    else if(vPage == "register")
    {
        //Register form container
        document.write("<div id=\"idRegisterBox\">");
            //Register form
            document.write("<form id=\"idRegisterForm\">");
                //First Name Input
                document.write("<input type=\"text\" value=\"First name\" required>");
                //Last Name Input
                document.write("<input type=\"text\" value=\"Last name\" required>");
                //Username Input
                document.write("<input type=\"text\" value=\"Username\" required>");
                //Email Input
                document.write("<input type=\"text\" value=\"Last name\" required>");
                //Create Password
                document.write("<input type=\"text\" value=\"Username\" required>");
                //Confirm Password
                document.write("<input type=\"text\" value=\"Username\" required>");
                //Acceptance checkbox
                document.write("<input type=\"checkbox\" value=\"I accept\">");
                document.write("<a class=\"classRegisterLinks\" href=\"./register.html\">TP's terms and conditions</a>");
                //Submit row
                //Register button
                document.write("<input type=\"submit\" value=\"Login\">");
            document.write("</form>");
        document.write("</div>");
    }
    else
    {
        document.write("NOPE!");
    }
    
}


    
function getFooter()
{
    document.write("Debug: Footer");
    
    //Footer
    document.write("<footer id=\"idFooterRow\">");
        //First row
        document.write("<div id=\"idUpperFooter\">");
        //Horizontal Line Rule
        document.write("</div>");
        //Second row
        document.write("<div id=\"idLowerFooter\">");
            //Social Media
            document.write("<span id=\"idSocialMedia\">");
            document.write("</span>");
            //Empty Span for spacing
            document.write("<span class=\"classEmptySpan\">");
            document.write("</span>");
            //Copyright
            document.write("<span id=\"idCopyRight\">");
            document.write("</span>");
        document.write("</div>");
    document.write("</footer>");
}