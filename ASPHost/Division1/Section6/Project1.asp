<!DOCTYPE html>
<html>
	<script language="VBScript" src="../../Universal.vbs" runat="server"></script>
	<script language="VBScript" src="../../DataMethod.vbs" runat="server"></script>
	<script language="VBScript" src="../Layout.vbs" runat="server"></script>
	<script language="VBScript" src="Custom.vbs" runat="server"></script>
	
	<%
		dim vPage, vLevel
		vPage = 1
		vLevel = 2
		vCSS = "Section1.css"
		Response.Write("<head>")
			Call WriteHeader(vLevel, vCSS)
        Response.Write("</head>")
        Response.Write("<body id=""idBody"">")
        	Call WriteWebpage(vPage, vLevel)
		Response.Write("</body>")
	%>
</html>