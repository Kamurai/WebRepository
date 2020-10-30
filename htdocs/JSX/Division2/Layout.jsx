function GetNavigation({vLevel}){
	return (
		<ul class="navigationUl">
			<li><a class="navlinkA" href="./Project1.html">Kingdoms</a></li>
			<li><a class="navlinkA" href="./Project2.html">Goblins and Guardians</a></li>
			<li><a class="navlinkA" href="./Project3.html">Mega Fleets</a></li>
			<li><a class="navlinkA" href="./Section1/Index.html">Crash Ball</a></li>
		</ul>
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
						<GetGDR />
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