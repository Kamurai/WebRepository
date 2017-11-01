Function OracleMethod(rowID, col)
	dim sqlStatement, vResult, rs, conObj
	
	rs = new ActiveXObject("ADODB.Recordset")
	conObj = new ActiveXObject('ADODB.Connection')
	sqlStatement = "Select "
	
	if col <= 0 then
		sqlStatement = sqlStatement + "indext "
	else
		sqlStatement = sqlStatement + "color "
	end if

	sqlStatement = sqlStatement + "from test where "        
	
	if col <= 0 then 
		sqlStatement = sqlStatement + "indext "
	else
		sqlStatement = sqlStatement + "color "
	end if

	sqlStatement = sqlStatement + "= '" + rowID + "'"
	
	openOracleConnection(conObj)
	
	rs.Open(sqlStatement,conObj)
	
	vResult = rs(0)
	
	rs.close
	
	closeOracleConnection()
	
	OracleMethod=vResult
End Function

Function openOracleConnection(conObj)
	dim driver, url, dbName, dbUsername, dbPassword, connectionstring

	dim driver = "oracle.jdbc.driver.OracleDriver"
	dim url = "localhost:1521:xe"
	dim dbName = "Test"
	dim dbUsername = "kamurai"
	dim dbPassword = "bluezer0"
    dim connectionstring="Driver="+driver+"Data Source="+url+"Initial Catalog="+dbName+"User ID="+dbUsername+"Password="+dbPassword

	Set OraDatabase = Server.CreateObject("ADODB.Connection")
	OraDatabase.Open "connectionstring" //dsn=OracleDSNuid=useridpwd=password"

	conObj.Open(connectionstring)
End Function

Function openOracleConnectionBU2()
	dim driver = "oracle.jdbc.driver.OracleDriver"
	dim url = "jdbc:oracle:thin:@localhost:1521:xe"
	dim dbName = "Test"
	dim dbUsername = "kamurai"
	dim dbPassword = "bluezer0"
    
	//dim conObj = new OracleConnection() //ActiveXObject('ADODB.Connection')
	//dim connectionString = "Provider="+driver+"URL="+url+""
	//dim connectionstring="Driver="+driver+"Data Source="+url+"Initial Catalog="+dbName+"User ID="+dbUsername+"Password="+dbPassword+""//Provider=SQLOLEDB"

	
	//conObj.Open(connectionString, dbUsername, dbPassword)
	//conObj.Open(connectionstring)
End Function

Function closeOracleConnection()
	//conObj.close
End Function

