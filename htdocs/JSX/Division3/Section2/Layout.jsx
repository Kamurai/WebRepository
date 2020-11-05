function GetNavigation({vLevel}){
	return (
		<div>
			<ul class="navigationUl">
				<li><a class="navlinkA" href="../Index.html">Video Games</a></li>
				<li><a class="navlinkA" href="../Project1.html">Truth</a></li>
				<li><a class="navlinkA" href="../Project2.html">The Wrong Ninja</a></li>
				<li><a class="navlinkA" href="../Project3.html">Gynowars</a></li>
				<li><a class="navlinkA" href="../Project4.html">Terminal World</a></li>
				<li><a class="navlinkA" href="../Project5.html">Mars: Opposition</a></li>
				<li><a class="navlinkA" href="../Section1/Index.html">Antarrea</a></li>
				<li><a class="navlinkA" href="../Section2/Index.html">Renley</a></li>
				<ul class="navigationUl">
					<li><a class="navlinkB" href="./Project1.html">Warring Nations</a></li>
					<li><a class="navlinkB" href="./Project2.html">Psychodom: The One Empire</a></li>
				</ul>
			</ul>
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
					<GetGDR />
					<GetWinRar />
					<div id="idFooterContent" >
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