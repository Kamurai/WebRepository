function GetNavigation({vLevel}){
	return (
		<ul class="navigationUl">
			<li><a class="navlinkA" href="./Index.html">Board Games</a></li>
			<li><a class="navlinkA" href="./Project1.html">The Way</a></li>
			<li><a class="navlinkA" href="./Project2.html">Sacred Offerings</a></li>
			<li><a class="navlinkA" href="./Project3.html">Conversion</a></li>
			<li><a class="navlinkA" href="./Project4.html">Conspiratorium</a></li>
			<li><a class="navlinkA" href="./Project5.html">Monster Office Workplace</a></li>
			<li><a class="navlinkA" href="./Project6.html">MacCreedy's Mansion</a></li>
			<li><a class="navlinkA" href="./Project7.html">Dundered Acre Wood</a></li>
			<li><a class="navlinkA" href="./Project8.html">Conquer</a></li>
			<li><a class="navlinkA" href="./Project9.html">Assault</a></li>
			<li><a class="navlinkA" href="./Project10.html">Battle Princesses</a></li>
			<li><a class="navlinkA" href="./Project11.html">Armor Up</a></li>
			<li><a class="navlinkA" href="./Project12.html">Gynowars: Battle Arena</a></li>
			<li><a class="navlinkA" href="./Project13.html">Land of the Orcish Empire: Age of Magic</a></li>
			<li><a class="navlinkA" href="./Project14.html">Coliseum: Arena</a></li>
			<li><a class="navlinkA" href="./Project15.html">Nine Card</a></li>
			<li><a class="navlinkA" href="./Project16.html">Wars of Antarrea</a></li>
			<li><a class="navlinkA" href="./Project17.html">Antarrea RPG</a></li>
			<li><a class="navlinkA" href="./Project18.html">Super Dungeon Adventure</a></li>
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