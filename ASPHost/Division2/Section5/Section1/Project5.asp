<!DOCTYPE html>
<html>
	<script language="VBScript" src="../../../Universal.vbs" runat="server"></script>
	<script language="VBScript" src="./Layout.vbs" runat="server"></script>
	<script language="VBScript" src="./Custom.vbs" runat="server"></script>
	<%
		dim vPage, vLevel, vDivision;
		vPage = 5;
		vLevel = 3;
		vDivision = 2;
		
		Response.Write(Call getHead(vLevel, vDivision));
		Response.Write(Call getLayout(vPage, vLevel));		
	%>
</html>