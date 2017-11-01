function getHead()
{
    //document.write("Debug: Head");
    //link CSS
    document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"./styles/main.css\">");
    //link fontsize
    document.write("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">");
}

function getContent(vPage)
{
    //document.write("Debug: Content");
    
    //Content by page
    if(vPage == "index")
    {
        document.write("<div id=\"idContentRow\">");
            document.write("This is the homepage.");
        document.write("</div>");
    }
}
