function GetHead({vDivision}){
	var styleFile = getStyleFile(vDivision);
	
	return (
		<div>
			<meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1'/>
			<link href={"http://htkb.dyndns.org/Styles/"+styleFile} rel='stylesheet' type='text/CSS'/>
		</div>
	)
}

function getStyleFile(vDivision){
	var vResult = "";
	var vDefault= "";
	
	vDefault= "Main.css";
	
	if(vDivision == 0){
		vResult = vDefault;
	}else if(vDivision == 1){
		vResult = "Division1.css";
	}else if(vDivision == 2){
		vResult = "Division2.css";
	}else if(vDivision == 3){
		vResult = "Division3.css";
	}else if(vDivision == 4){
		vResult = "Division4.css";
	}else if(vDivision == 5){
		vResult = "Division5.css";
	}else if(vDivision == 6){
		vResult = "Division6.css";
	}else if(vDivision == 7){
		vResult = "Division7.css";
	}else{
		vResult = vDefault;
	}
	
	return vResult;
}

function GetNavBar({vLevel}) {
	var vPath = getPath(vLevel);

	return (
		<ul className="navBarUl">
			<li><a className="navBar" href="/JSX/Index.html">Home</a></li>
			<li><a className="navBar" href="/JSX/Division1/Index.html">Board Games</a></li>
			<li><a className="navBar" href="/JSX/Division2/Index.html">Digital Board Games</a></li>
			<li><a className="navBar" href="/JSX/Division3/Index.html">Video Games</a></li>
			<li><a className="navBar" href="/JSX/Division4/Index.html">Downloadables</a></li>
			<li><a className="navBar" href="/JSX/Division5/Index.html">Database Work</a></li>
		</ul>
	)
}

var GetLogo = function(){
	return (
		<div>
			<img id="idLogo" src="http://htkb.dyndns.org/Pictures/logoHTKB.jpg"/>
		</div>
	);
}

function GetNavigationHeader(){
	return (
		<h4 className="headerColorBlack">
			Navigation
		</h4>
	);
}

function GetInformationHeader(){
	return (
		<h4 className="headerColorBlack">
			Information
		</h4>
	);
}

function GetInformation(){
	return (
		<div>
			This is written with JSX.<br />
			Other versions can be found here:<br />
		</div>
	);
}

function GetGDR(){
	return (
		<div>
			<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a><br />
		</div>
	);
}

function GetWinRar(){
	return (
		<div>
			<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a><br />
		</div>
	);
}

function GetFooter(){
  return (
    <div id='idFooterContent'>
		Copyright 2012 All rights reserved<br />   
		House That Kamurai Built<br />
    </div>
  );
}

function GetWebMaster(){
  return (
    <div id='idFooterManagement'>
        Website managed by Kamurai.
	</div>
  );
}

function getPath(vLevel){
	var vResult = "";
	
    if(vLevel <= 0)
    {
        vResult = "./";
    }
    else if(vLevel == 1)
    {
        vResult = "../";
    }
    else if(vLevel == 2)
    {
        vResult = "../../";
    }
    else if(vLevel == 3)
    {
        vResult = "../../../";
    }
    else if(vLevel == 4)
    {
        vResult = "../../../../";
    }
    else if(vLevel == 5)
    {
        vResult = "../../../../../";
    }
    else if(vLevel == 6)
    {
        vResult = "../../../../../../";
    }
    else if(vLevel == 7)
    {
        vResult = "../../../../../../../";
    }
	
	return vResult;
}