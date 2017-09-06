//import content;

function getLayout(vPage)
{
    document.write("<div id=\"idGeneralLayout\">")
        //get Header
        getHeader();
        
        //get NavBar Row
        
        //get Content Row
        getContent(vPage);
        
        
        //get Footer
        getFooter();
    document.write("</div>")

}

function getHeader()
{
    document.write("<header id=\"idHeader\">");
        document.write("This is the header.");
    document.write("</header>");
}


function getFooter()
{
    document.write("<footer id=\"idFooter\">");
        document.write("This is the footer.");
    document.write("</footer>");
}
