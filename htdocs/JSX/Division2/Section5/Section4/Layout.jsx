function GetNavigation({vLevel}){
	return (
		<div>
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Section1/Index.html"}>Gynowars</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project2.html"}>Assault</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project3.html"}>Mars</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Section4/Index.html"}>Renley</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Section5/Index.html"}>Antarrea</a><br /><br />
				<a className="navlinkB" href={getPath(vLevel)+"Division2/Section5/Section1/Index.html"}>Global</a><br /><br />
				<a className="navlinkB" href={getPath(vLevel)+"Division2/Section5/Section2/Index.html"}>Grendol</a><br /><br />
				<a className="navlinkB" href={getPath(vLevel)+"Division2/Section5/Section3/Index.html"}>Utopia</a><br /><br />
				<a className="navlinkB" href={getPath(vLevel)+"Division2/Section5/Section4/Index.html"}>Elvia</a><br /><br />
					<a className="navlinkC" href={getPath(vLevel)+"Division2/Section5/Section4/Project1.html"}>Nine Card</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project6.html"}>Truth</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project7.html"}>Kingdoms</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project8.html"}>Terminal World</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project9.html"}>Monster Office Workplace</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project10.html"}>Battle Princesses</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project11.html"}>Sacred Offerings</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project12.html"}>The Way</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project13.html"}>Conspiratorium</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project14.html"}>Conversion</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project15.html"}>Conquer</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project16.html"}>Armor Up!</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project17.html"}>Goblins and Guardians</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project18.html"}>MacCreedy's Mansion</a><br /><br />
			<a className="navlinkA" href={getPath(vLevel)+"Division2/Project19.html"}>Dundered Acre Wood</a><br /><br />
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