<!DOCTYPE html>
<html>
	<script language="VBScript" src="../Universal.vbs" runat="server"></script>
	<script language="VBScript" src="./Layout.vbs" runat="server"></script>
	<script language="VBScript" src="./Custom.vbs" runat="server"></script>
	<%
		dim vPage, vLevel, vDivision;
		vPage = 0;
		vLevel = 1;
		vDivision = 1;
		
		Response.Write(Call getHead(vLevel, vDivision));
        Response.Write(Call getLayout(vPage, vLevel));        
        	Call getLayout(vPage, vLevel)
	%>
</html>