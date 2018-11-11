<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<script language="VBScript" src="../../Universal.vbs" runat="server"></script>
	<script language="VBScript" src="./Layout.vbs" runat="server"></script>
	<script language="VBScript" src="./Custom.vbs" runat="server"></script>
	<%
		dim vPage, vLevel, vDivision
		vPage = 0
		vLevel = 2
		vDivision = 1
		
		Response.Write( getHead(vLevel, vDivision) )
		Response.Write( getBody(vPage, vLevel) )		
	%>
</html>