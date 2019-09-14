<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Private Projects';
        
        $vResult = $vResult.'<title>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==2)
			{
				$vResult = $vResult.'Assault CCG';
			}
			else if($vPage==3)
			{
				$vResult = $vResult.'Mars Projects';
			}
			else if($vPage==6)
			{
				$vResult = $vResult.'Truth';
			}
			else if($vPage==7)
			{
				$vResult = $vResult.'Kingdoms';
			}
			else if($vPage==8)
			{
				$vResult = $vResult.'Terminal World';
			}
			else if($vPage==9)
			{
				$vResult = $vResult.'Monster Office Workplace';
			}
			else if($vPage==10)
			{
				$vResult = $vResult.'Battle Princesses';
			}
			else if($vPage==11)
			{
				$vResult = $vResult.'Sacred Offerings';
			}
			else if($vPage==12)
			{
				$vResult = $vResult.'The Way';
			}
			else if($vPage==13)
			{
				$vResult = $vResult.'Conspiratorium';
			}
			else if($vPage==14)
			{
				$vResult = $vResult.'Conversion';
			}
			else
			{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult.'</title>';
        
        return $vResult;
    }

    function getContentHeader($vPage)
    {
        $vResult = '';
        $vDefault = '';
        
		$vDefault = $vDefault.'Private Projects';
        
        $vResult = $vResult.'<h2>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==2)
			{
				$vResult = $vResult.'Assault CCG';
			}
			else if($vPage==3)
			{
				$vResult = $vResult.'Mars Projects';
			}
			else if($vPage==6)
			{
				$vResult = $vResult.'Truth';
			}
			else if($vPage==7)
			{
				$vResult = $vResult.'Kingdoms';
			}
			else if($vPage==8)
			{
				$vResult = $vResult.'Terminal World';
			}
			else if($vPage==9)
			{
				$vResult = $vResult.'Monster Office Workplace';
			}
			else if($vPage==10)
			{
				$vResult = $vResult.'Battle Princesses';
			}
			else if($vPage==11)
			{
				$vResult = $vResult.'Sacred Offerings';
			}
			else if($vPage==12)
			{
				$vResult = $vResult.'The Way';
			}
			else if($vPage==13)
			{
				$vResult = $vResult.'Conspiratorium';
			}
			else if($vPage==14)
			{
				$vResult = $vResult.'Conversion';
			}
			else
			{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult.'</h2>';
		
        return $vResult;
    }
    
    function getContent($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'This section is dedicated to HTKB projects.';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'This section is dedicated CCG project Assault.';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'This section is dedicated to the Mars centered project Opposition.';
        }
        else if($vPage==6)
        {
            $vResult = $vResult.'This section is dedicated to the MMO RTS project Truth.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.';
        }
        else if($vPage==7)
        {
            $vResult = $vResult.'This section is dedicated to the digital board game project Kingdoms.  Explore the world\'s Kingdoms, get rich, get strong and conquer.';
        }
        else if($vPage==8)
        {
            $vResult = $vResult.'This section is dedicated to the simulation MMO centered project Terminal World.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beatthe zombies?  Can you survive?';
        }
        else if($vPage==9)
        {
            $vResult = $vResult.'This section is dedicated to the card and board game project \'Monster Office Workplace\'.  These monsters mean serious business.<br/>';
			$vResult = $vResult.'Can you earn the most credit and smooze your way into a promotion?<br/>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:<br/>';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=691344800\'>Steam Workshop</a><br/>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'Monster Office Ruleset v0.1<br/>';
			$vResult = $vResult.'<br/>';
			$vResult = $vResult.'<ol class=\'classFirstOrder\'>';
				$vResult = $vResult.'<li>Player resources:</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Resource deck: Work (Resource) Cards</li>';
					$vResult = $vResult.'<li>Project Deck: Cards representing project tiles.</li>';
					$vResult = $vResult.'<li>Player tokens</li>';
					$vResult = $vResult.'<li>Credit tokens</li>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>Setup:</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Each player gets 3 resource cards, and 1 project card.</li>';
					$vResult = $vResult.'<li>Before the game, each player plays their project card.</li>';
					$vResult = $vResult.'<li>Going first:</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Each player plays 1 card face down and everyone reveals at once(do not discard).</li>';
						$vResult = $vResult.'<li>The highest non-common card (ties are eliminated), goes first.</li>';
						$vResult = $vResult.'<li>In the case that everyone ties, perform rounds until someone wins.</li>';
						$vResult = $vResult.'<li>If all cards are played, then 1 card is dealt to each player face up until a winner occurs.</li>';
						$vResult = $vResult.'<li>Each player keeps the cards he/she is dealt.</li>';
					$vResult = $vResult.'</ol>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>Grid map to which project tiles are played.</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Player must place to a valid space, if available.</li>';
					$vResult = $vResult.'<li>If no space is available, then the player chooses how projects shift.</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>The player must shift the least amount of projects.</li>';
					$vResult = $vResult.'</ol>';
				$vResult = $vResult.'</ol>';	
				$vResult = $vResult.'<li>Projects require different resources by type and number/quantity.</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>When meeting project requirements, place a player token on the card stack</li>';
					$vResult = $vResult.'<li>Points of credit are earned upon project completion by project rewards (Listed on the project tile.).</li>';
					$vResult = $vResult.'<li>There are 6 \'colors\' of resources with the following quantities:</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>1 card with quantity of 5.</li>';
						$vResult = $vResult.'<li>2 cards with quantity of 4.</li>';
						$vResult = $vResult.'<li>3 cards with quantity of 3.</li>';
						$vResult = $vResult.'<li>4 cards with quantity of 2.</li>';
						$vResult = $vResult.'<li>5 cards with quantity of 1.</li>';
					$vResult = $vResult.'</ol>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>Actions:</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Draw Project: only 1.</li>';
					$vResult = $vResult.'<li>Play Project: only 1.</li>';
					$vResult = $vResult.'<li>Draw Resources: 3 resources.</li>';
					$vResult = $vResult.'<li>Play Resources: As many as available.</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Place a number of tokens equal to the number on the resource card on the project tile.</li>';
					$vResult = $vResult.'</ol>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>Restrictions</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Hand Limit: each player has a hand limit of 6 cards.</li>';
					$vResult = $vResult.'<li>Workhorse: the player with the lowest score has no hand limit.</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Any player with a score of zero counts as a Workhorse.</li>';
						$vResult = $vResult.'<li>People tied for Workhorse are all Workhorses.</li>';
					$vResult = $vResult.'</ol>';
					$vResult = $vResult.'<li>Workhorse is evaluated at each person\'s discard phase, i.e. a player only discards if they are NOT a workhorse at THEIR discard phase.</li>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>Scoring:</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>A player who completes the project collects the project.</li>';
					$vResult = $vResult.'<li>A player gets 1 point of credit for completing a project\'s color set (exactly) once the project has been completed.</li>';
					$vResult = $vResult.'<li>A player gets 1 point of credit for each player token on the project that has been completed.</li>';
					$vResult = $vResult.'<li>A player gets a number of points of credit equal to the number of color sets on the project tile, for being the one to complete a project.</li>';
				$vResult = $vResult.'</ol>';
				$vResult = $vResult.'<li>End Conditions:</li>';
				$vResult = $vResult.'<ol class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Game ends when 10 projects have been completed.</li>';
					$vResult = $vResult.'<li>Player with the most \'credit\' wins.</li>';
				$vResult = $vResult.'</ol>';
			$vResult = $vResult.'</ol>';
        }
        else if($vPage==10)
        {
            $vResult = $vResult.'This section is dedicated to the card game project \'Battle Princesses\'.  Ever wanted to see your favorite princess battle for the kingdom?';
            $vResult = $vResult.'These princess aren\'t your helpless maidens, but valiant warriors themselves.';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=1206167982\'>Steam Workshop</a>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'Battle Princesses Ruleset v0.1<br/>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Downloads/Game_Rules/HTKB_SGS/Battle_Princesses_Game_Ruleset.pdf\'>Download here.</a>';
        }
        else if($vPage==11)
        {
            $vResult = $vResult.'This section is dedicated to the board game project \'Sacred Offerings\'.<br/>';
			$vResult = $vResult.'Being a god is hard, you have to eat, but';
			$vResult = $vResult.'don\'t want to fall out favor with the people more than the other deities.';
			$vResult = $vResult.'Draw people to worship you, but be discerning about who is sacrificed.';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=652957007\'>Steam Workshop</a>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'Sacred Offerings Ruleset v0.1<br/>';
			$vResult = $vResult.'<ol class=\'classFirstOrder\'>';
				$vResult = $vResult.'<li>Setup:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Select a board for the number of players (from 2 to 6):</li>';
					$vResult = $vResult.'<li>The two player board is a square with two alters.</li>';
					$vResult = $vResult.'<li>The three player board is a triangle with an alter at its center.</li>';
					$vResult = $vResult.'<li>The four player board is a square with an alter at its center.</li>';
					$vResult = $vResult.'<li>The five player board is a pentagon with an alter at its center.</li>';
					$vResult = $vResult.'<li>The six player board is a hexagon with an alter at its center.</li>';
					$vResult = $vResult.'<li>Set tokens on the board in the following manner for each player corner:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>2 players: </li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>1 4-point tokens</li>';
							$vResult = $vResult.'<li>3 3-point tokens</li>';
							$vResult = $vResult.'<li>5 2-point tokens</li>';
							$vResult = $vResult.'<li>7 1-point tokens</li>';
						$vResult = $vResult.'</ul>';
						$vResult = $vResult.'<li>3 players: </li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>8 1-point tokens</li>';
							$vResult = $vResult.'<li>6 2-point tokens</li>';
							$vResult = $vResult.'<li>4 3-point tokens</li>';
							$vResult = $vResult.'<li>2 4-point tokens</li>';
						$vResult = $vResult.'</ul>';
						$vResult = $vResult.'<li>4 players: </li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>7 1-point tokens</li>';
							$vResult = $vResult.'<li>5 2-point tokens</li>';
							$vResult = $vResult.'<li>3 3-point tokens</li>';
							$vResult = $vResult.'<li>1 4-point tokens</li>';
						$vResult = $vResult.'</ul>';
						$vResult = $vResult.'<li>5 players: </li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>8 1-point tokens</li>';
							$vResult = $vResult.'<li>6 2-point tokens</li>';
							$vResult = $vResult.'<li>4 3-point tokens</li>';
							$vResult = $vResult.'<li>2 4-point tokens</li>';
						$vResult = $vResult.'</ul>';
						$vResult = $vResult.'<li>6 players: </li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>8 1-point tokens</li>';
							$vResult = $vResult.'<li>6 2-point tokens</li>';
							$vResult = $vResult.'<li>4 3-point tokens</li>';
							$vResult = $vResult.'<li>2 4-point tokens</li>';
						$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Determine First player:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Decide amongst yourself through any method of yelling, rolling dice, pulling straws (not hair), etc.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Player turn:<br/>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Each turn a player must move a character on the board.</li>';
					$vResult = $vResult.'<li>Tokens move in one of two ways:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>One space in any direction. (Like a King in chess)</li>';
						$vResult = $vResult.'<li>Able to jump multiple pieces. (Like a King in checkers)</li>';
					$vResult = $vResult.'</ul>';
					$vResult = $vResult.'<li>That character must end closer to the alter than they began.</li>';
					$vResult = $vResult.'<li>If a player CAN sacrifice a character, they must.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Scoring:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>A player get +1 points equal to the value of the character sacrificed.</li>';
					$vResult = $vResult.'<li>A player gets -1 point on a turn they did not sacrifice a character.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>End condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'No characters are left on the board.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Victory condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'The player with the lower points wins!</li>';
				$vResult = $vResult.'</ul>';
			$vResult = $vResult.'</ol>';
        }
        else if($vPage==12)
        {
            $vResult = $vResult.'This section is dedicated to the card game project \'The Way\'.<br/>';
			$vResult = $vResult.'You seek to find enlightment by contemplating the elements.';
			$vResult = $vResult.'Escape the binds of the world and the board to reach enlightment and win.';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=652925835\'>Steam Workshop</a>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'The Way Ruleset v0.1<br/>';
			$vResult = $vResult.'<br/>';
			$vResult = $vResult.'<ol class=\'classFirstOrder\'>';
				$vResult = $vResult.'<li>Setup:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
						$vResult = $vResult.'<li>Board:</li>';
						$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
							$vResult = $vResult.'<li>Place the board on the table.  Place one player piece for each player in the center of the board.</li>';
						$vResult = $vResult.'</ul>';	
						$vResult = $vResult.'<li>Deck:</li>';
						$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
							$vResult = $vResult.'<li>Shuffle the card deck and deal 4 cards to each player.</li>';
						$vResult = $vResult.'</ul>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Symbols:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
						$vResult = $vResult.'<li>There are 4 basic symbols that represent directions on the board:</li>';
						$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
							$vResult = $vResult.'<li>Air moves a player piece towards the yellow gate.</li>';
							$vResult = $vResult.'<li>Earth moves a player piece towards the brown gate.</li>';
							$vResult = $vResult.'<li>Fire moves a player piece towards the red gate.</li>';
							$vResult = $vResult.'<li>Water moves a player piece towards the blue gate.</li>';
						$vResult = $vResult.'</ul>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Play:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>On each player\'s turn, they may do one of the following things:</li>';
					$vResult = $vResult.'<ol class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Draw a card.</li>';
						$vResult = $vResult.'<li>Play a card:</li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<ol class=\'classFifthOrder\'>';
								$vResult = $vResult.'<li>This can affect your piece.</li>';
								$vResult = $vResult.'<li>This can affect pieces belonging to other players.</li>';
								$vResult = $vResult.'<li>This cannot result in a player exiting the board through another player\'s side of the board.</li>';
							$vResult = $vResult.'</ol>';
							$vResult = $vResult.'<li>Cards work by targeting 1, 2, or all player pieces.</li>';
							$vResult = $vResult.'<li>This is represented by the number of borders on the card, 1 set of borders, 2 sets of borders, or 4 sets of borders.</li>';
							$vResult = $vResult.'<li>Cards with 1 set of borders will have 1 or 2 symbols, representing how far in the direction of the symbol to move the player piece.</li>';
							$vResult = $vResult.'<li>Cards with 2 sets of borders will have 1 symbol in each set of borders, representing that the player may make two independent moves.</li>';
							$vResult = $vResult.'<li>This can be one target twice, or two targets once.</li>';
							$vResult = $vResult.'<li>Cards with 4 sets of borders will have 1 symbol, representing 1 movement for ALL player pieces in the direction of the symbol.</li>';
						$vResult = $vResult.'</ul>';
						$vResult = $vResult.'<li>Discard a card to draw two cards.</li>';
					$vResult = $vResult.'</ol>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>End Condition:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>A player is moved off of the board.</li>';
					$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Win Condition:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>The player moved off the board is the winner.</li>';
					$vResult = $vResult.'</ul>';
			$vResult = $vResult.'</ol>';
        }
        else if($vPage==13)
        {
            $vResult = $vResult.'This section is dedicated to the board game project \'Conspiratorium\'.<br/>';
			$vResult = $vResult.'A game of assassins and CIA, you must remember who is friend and who is not.';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=656617895\'>Steam Workshop</a>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'Conspiratorium Ruleset v0.1<br/>';
			$vResult = $vResult.'<br/>';
			$vResult = $vResult.'<ol class=\'classFirstOrder\'>';
				$vResult = $vResult.'<li>Setup:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Board</li>';
					$vResult = $vResult.'<li>Token Set: 100 tokens per player</li>';
					$vResult = $vResult.'<li>Divide tokens equally amongst players, e.g. For two players, each gets 50 tokens of each players\' type.</li>';
					$vResult = $vResult.'<li>Each player places x number of tokens on the board:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Short game: 10 tokens.</li>';
						$vResult = $vResult.'<li>Medium game: 24 tokens.</li>';
						$vResult = $vResult.'<li>Long game: 48 tokens.</li>';
					$vResult = $vResult.'</ul>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Round:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Each player takes a turn performing one action.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Turn:<br/>';
					$vResult = $vResult.'<li>On its turn, a player may do one of the following actions:</li>';
					$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
						$vResult = $vResult.'<li>Recon:  Look at a token affiliation.</li>';
						$vResult = $vResult.'<li>Turn:  Change the affiliation of a token.</li>';
						$vResult = $vResult.'<li>Move Asset:  Move a token to an adajecent space on the board.</li>';
						$vResult = $vResult.'<li>Assasinate:  Have a token on the board remove another adjacent token on the board.</li>';
					$vResult = $vResult.'</ul>';	
				$vResult = $vResult.'<li>End Condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>One token is left on the board.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Win Condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>The player matching the affiliation of the last remaining token on the board wins.</li>';
				$vResult = $vResult.'</ul>';
			$vResult = $vResult.'</ol>';
        }
        else if($vPage==14)
        {
            $vResult = $vResult.'This section is dedicated to the board game project \'Conversion\'.<br/>';
			$vResult = $vResult.'Compete on the elemental market by processing elements and becoming the elemental kingpin.';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'You can download the Tabletop Simulator mod here:';
			$vResult = $vResult.'<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=658966981\'>Steam Workshop</a>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'</br>';
			$vResult = $vResult.'Conversion Ruleset v0.1<br/>';
			$vResult = $vResult.'<br/>';
			$vResult = $vResult.'<ol class=\'classFirstOrder\'>';
				$vResult = $vResult.'<li>Setup:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Place board on table.</li>';
					$vResult = $vResult.'<li>Place element tokens on the board, these are piece limited.</li>';
					$vResult = $vResult.'<li>Place currency tokens to the side of the board.</li>';
					$vResult = $vResult.'<li>Deal two objective cards to each player.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Round:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>The round leader is the first player to go in a round.</li>';
					$vResult = $vResult.'<li>The round leader rotates clockwise each round.</li>';
					$vResult = $vResult.'<li>Each player takes one action on their turn.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Turn:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Go to Work:</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Generate an element.</li>';
						$vResult = $vResult.'<li>Place elements in worker spots to do different conversions:</li>';
						$vResult = $vResult.'<ul class=\'classFourthOrder\'>';
							$vResult = $vResult.'<li>Double an element</li>';
							$vResult = $vResult.'<li>Fire to Air</li>';
							$vResult = $vResult.'<li>Air to Water</li>';
							$vResult = $vResult.'<li>Water to Earth</li>';
							$vResult = $vResult.'<li>Earth to Fire</li>';
							$vResult = $vResult.'<li>Fire to Earth</li>';
							$vResult = $vResult.'<li>Earth to Water</li>';
							$vResult = $vResult.'<li>Water to Air</li>';
							$vResult = $vResult.'<li>Air to Fire</li>';
							$vResult = $vResult.'<li>Fair trade:</li>';
							$vResult = $vResult.'<ul class=\'classFifthOrder\'>';
								$vResult = $vResult.'<li>Put one element out for someone to trade with you.</li>';
								$vResult = $vResult.'<li>Trade with a presented element.</li>';
							$vResult = $vResult.'</ul>';
						$vResult = $vResult.'</ul>';
					$vResult = $vResult.'</ul>';
					$vResult = $vResult.'<li>Turn in an objective.</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>Return the designated elements to their respective pools.</li>';
						$vResult = $vResult.'<li>Collect currency in the amount the highest element required, minus 1, times two. (n-1)*2</li>';
					$vResult = $vResult.'</ul>';
					$vResult = $vResult.'<li>Draw a new objective.</li>';
					$vResult = $vResult.'<li>Buy elements: this can be from \'the bank\' or other players.</li>';
					$vResult = $vResult.'<ul class=\'classThirdOrder\'>';
						$vResult = $vResult.'<li>When buying from other players, those players may set their own prices or refuse to sell.</li>';
					$vResult = $vResult.'</ul>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>End condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>Buy Out:  A player is out of objective cards, with at least 10 currency.</li>';
					$vResult = $vResult.'<li>Retire:  A player is out of objective cards, has completed 5 objectives and is out of elements.</li>';
					$vResult = $vResult.'<li>Shortage:  No elements can be collected.</li>';
					$vResult = $vResult.'<li>Monopoly:  A player has all of one element.</li>';
					$vResult = $vResult.'<li>Market Crash:  No currency is available.</li>';
				$vResult = $vResult.'</ul>';
				$vResult = $vResult.'<li>Win condition:</li>';
				$vResult = $vResult.'<ul class=\'classSecondOrder\'>';
					$vResult = $vResult.'<li>In the event of a tie, then the player that triggered the event wins.</li>';
				$vResult = $vResult.'</ul>';
			$vResult = $vResult.'</ol>';
        }
        else
        {
            $vResult = $vResult.$vDefault;
        }
        
        return $vResult;
    }
    
    function getVersions($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Index\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Division2/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Division2/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Division2/Index\'>Node JS</a><br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==2)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project2.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project2.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project2.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project2.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project2.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project2.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project2.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project2\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project2\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project2\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project2\'>Node JS</a><br>';
        }
        else if($vPage==3)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project3.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project3.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project3.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project3.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project3.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project3.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project3.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project3\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project3\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project3\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project3\'>Node JS</a><br>';
        }
        else if($vPage==6)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project6.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project6.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project6.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project6.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project6.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project6.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project6\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project6.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project6\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project6\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project6\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project6\'>Node JS</a><br>';
        }
        else if($vPage==7)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project7.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project7.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project7.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project7.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project7.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project7.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project7\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project7.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project7\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project7\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project7\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project7\'>Node JS</a><br>';
        }
        else if($vPage==8)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project8.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project8.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project8.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project8.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project8.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project8.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project8\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project8.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project8\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project8\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project8\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project8\'>Node JS</a><br>';
        }
        else if($vPage==9)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project9.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project9.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project9.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project9.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project9.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project9.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project9\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project9.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project9\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project9\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project9\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project9\'>Node JS</a><br>';
        }
        else if($vPage==10)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project10.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project10.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project10.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project10.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project10.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project10.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project10\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project10.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project10\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project10\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project10\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project10\'>Node JS</a><br>';
        }
        else if($vPage==11)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project11.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project11.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project11.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project11.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project11.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project11.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project11\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project11.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project11\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project11\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project11\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project11\'>Node JS</a><br>';
        }
        else if($vPage==12)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project12.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project12.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project12.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project12.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project12.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project12.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project12\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project12.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project12\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project12\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project12\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project12\'>Node JS</a><br>';
        }
        else if($vPage==13)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project13.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project13.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project13.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project13.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project13.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project13.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project13\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project13.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project13\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project13\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project13\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project13\'>Node JS</a><br>';
        }
        else if($vPage==14)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project14.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Project14.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Project14.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Project14.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Project14.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Project14.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/SpringMVC/Division2/Project14\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Project14.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Project14\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Project14\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Project14\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Project14\'>Node JS</a><br>';
        }
        else
        {
            $vResult = $vDefault;
        }
        
        return $vResult;
    }


?>