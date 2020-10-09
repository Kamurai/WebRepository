function GetNavigation({vLevel}){
	return (
		<div>
			<a className="navlinkA" href={getPath(vLevel)+"Division3/Project1.html"}>Online Experience Downloads</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division3/Project2.html"}>Game Maker Downloads</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division3/Project3.html"}>Java Downloads</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division3/Project4.html"}>C# Downloads</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division3/Project5.html"}>C++ Downloads</a><br /><br />
		</div>
	);
}

function Layout({vPage, vLevel, vDivision}){
	return (
		<div id="idGeneralLayout">
			<div id="idHeaderRow">
				<div id="idHeaderRowCenter" >
					<GetLogo />
				</div>	
			</div>
			<div id="idNavigationRow">
				<div id="idNavigationBar" >
					<GetNavBar vLevel = {vLevel}/>
				</div>
			</div>
			<div id="idCenterRow">
				<div id="idCenterRowLeft" >
					<GetNavigationHeader />
					<GetNavigation vLevel = {vLevel} />
				</div>	
				<div id="idCenterRowMain" >
					<GetTitle vPage = {vPage} />
					<GetContentHeader vPage = {vPage} />
					<GetContent vPage = {vPage} vLevel = {vLevel} />
				</div>	
				<div id="idCenterRowRight" >
					<GetInformationHeader />
					<GetInformation />
					<GetVersions vPage = {vPage} />
				</div>	
			</div>
			<div id="idFooterRow">
				<div id="idFooterMain" >
					<div id="idFooterContent" >
						<GetWinRar />
						<GetFooter />
					</div>
					<div id="idFooterManagement" >
						<GetWebMaster />
					</div>
				</div>	
			</div>
		</div>
	);
}