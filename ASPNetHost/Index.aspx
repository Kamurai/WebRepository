<%@ Page Language="Javascript" AutoEventWireup="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<script language="javascript" src="Universal.js" runat="server"></script>
<script language="javascript" src="Layout.js" runat="server"></script>
<script language="javascript" src="Custom.js" runat="server"></script>
<%    
    var vPage  = 0;
    var vLevel = 0;
    var vExtension = 2;
    var vCSS = "Main.css";
	Response.Write("<head>");
        WriteHeader(vLevel, vCSS);
    Response.Write("</head>");
    Response.Write("<body id=\"idBody\">");
        WriteWebpage(vPage, vLevel);
    Response.Write("</body>");
%>
</html>