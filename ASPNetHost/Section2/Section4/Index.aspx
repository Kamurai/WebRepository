<%@ Page Language="Javascript" AutoEventWireup="true" %>

<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<script language="JavaScript" src="../../Universal.js" runat="server"></script>
<script language="JavaScript" src="Layout.js" runat="server"></script>
<script language="javascript" src="Custom.js" runat="server"></script>
<%	
	var vPage  = 0;
	var vLevel = 2;
	var vCSS = "Section2.css";
	Response.Write("<head>")
		Call WriteHeader(vLevel, vCSS)
	Response.Write("</head>")
	Response.Write("<body id=\"idBody\">")
		WriteWebpage(vPage, vLevel);
	Response.Write("</body>");
%>
</html>