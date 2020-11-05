<%@ Page Language="Javascript" AutoEventWireup="true" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<script language="JavaScript" src="../Universal.js" runat="server"></script>
	<script language="JavaScript" src="./Layout.js" runat="server"></script>
	<script language="JavaScript" src="./Custom.js" runat="server"></script>
	<%	
		var vPage  = 1;
		var vLevel = 1;
		var vDivision = 4;
		
		Response.Write(getHead(vLevel, vDivision));
		Response.Write(getLayout(vPage, vLevel));
	%>
</html>