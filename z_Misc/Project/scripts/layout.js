//import content;

function getLayout(vPage)
{
    document.write("<div id=\"idGeneralLayout\">")
        getHeader(vPage);
        
        getContent(vPage);
        
        getFooter(vPage);
    document.write("</div>")
}
