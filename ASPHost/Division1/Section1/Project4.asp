<!DOCTYPE html>
<html>
	<script language="VBScript" src="../../Universal.vbs" runat="server"></script>
	<script language="VBScript" src="./Layout.vbs" runat="server"></script>
	<script language="VBScript" src="./Custom.vbs" runat="server"></script>
	<%
		dim vPage, vLevel, vDivision
		vPage = 4
		vLevel = 2
		vDivision = 1
		
		Response.Write( getHead(vLevel, vDivision) )
		Response.Write( getBody(vPage, vLevel) )
	%>
</html>