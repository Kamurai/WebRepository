var vHTTP = require('http');
var vFS = require('fs');

//var vUniversal = require('./Universal');

//create a server object:
vHTTP.createServer
(
    function (vRequest, vResponse) 
    {
        vResponse.writeHead(200, {'Content-Type': 'text/html'});
        
        if(vRequest.url == '/' || vRequest.url == '/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Layout');
            var vCustom = require('./Custom');
        
            var vPage  = 0;
            var vLevel = 0;
            var vDivision = 0;
			
			vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/AboutUs')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Layout');
            var vCustom = require('./Custom');
        
            var vPage  = 1;
            var vLevel = 0;
            var vDivision = 0;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Media')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Layout');
            var vCustom = require('./Custom');
        
            var vPage  = 2;
            var vLevel = 0;
            var vDivision = 0;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Minecraft')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Layout');
            var vCustom = require('./Custom');
        
            var vPage  = 3;
            var vLevel = 0;
            var vDivision = 0;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }        
        else if(vRequest.url == '/Division1/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Layout');
            var vCustom = require('./Division1/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Project3')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 3;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Project4')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 4;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division1/Section1/Project5')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division1/Section1/Layout');
            var vCustom = require('./Division1/Section1/Custom');
        
            var vPage  = 5;
            var vLevel = 2;
            var vDivision = 1;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 2;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project3')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 3;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project76')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 6;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project7')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 7;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project8')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 8;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project9')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 9;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project10')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 10;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project11')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 11;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project12')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 12;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project13')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 13;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Project14')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Layout');
            var vCustom = require('./Division2/Custom');
        
            var vPage  = 14;
            var vLevel = 1;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section1/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section1/Layout');
            var vCustom = require('./Division2/Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section1/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section1/Layout');
            var vCustom = require('./Division2/Section1/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section1/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section1/Layout');
            var vCustom = require('./Division2/Section1/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section1/Project3')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section1/Layout');
            var vCustom = require('./Division2/Section1/Custom');
        
            var vPage  = 3;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section4/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section4/Layout');
            var vCustom = require('./Division2/Section4/Custom');
        
            var vPage  = 4;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section4/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section4/Layout');
            var vCustom = require('./Division2/Section4/Custom');
        
            var vPage  = 1;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section4/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section4/Layout');
            var vCustom = require('./Division2/Section4/Custom');
        
            var vPage  = 2;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( vLayout.WriteWebPage(vPage, vLevel, vSection, vCSS) );
        }
        else if(vRequest.url == '/Division2/Section5/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Layout');
            var vCustom = require('./Division2/Section5/Custom');
        
            var vPage  = 0;
            var vLevel = 2;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 2;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project3')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 3;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project4')
        {
			var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 4;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project5')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 5;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section1/Project6')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section1/Layout');
            var vCustom = require('./Division2/Section5/Section1/Custom');
        
            var vPage  = 6;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section2/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section2/Layout');
            var vCustom = require('./Division2/Section5/Section2/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section2/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section2/Layout');
            var vCustom = require('./Division2/Section5/Section2/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section2/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section2/Layout');
            var vCustom = require('./Division2/Section5/Section2/Custom');
        
            var vPage  = 2;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section3/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section3/Layout');
            var vCustom = require('./Division2/Section5/Section3/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section3/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section3/Layout');
            var vCustom = require('./Division2/Section5/Section3/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section4/Index')
        {
            var vLayout = require('./Division2/Section5/Section4/Layout');
            var vCustom = require('./Division2/Section5/Section4/Custom');
        
            var vPage  = 0;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division2/Section5/Section4/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division2/Section5/Section4/Layout');
            var vCustom = require('./Division2/Section5/Section4/Custom');
        
            var vPage  = 1;
            var vLevel = 3;
            var vDivision = 2;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Index')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 0;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Project1')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 1;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Project2')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 2;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Project3')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 3;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Project4')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 4;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Division3/Project5')
        {
            var vUniversal = require('./Universal');
            var vLayout = require('./Division3/Layout');
            var vCustom = require('./Division3/Custom');
        
            var vPage  = 5;
            var vLevel = 1;
            var vDivision = 3;
            vResponse.write( "<HTML>" );
				vResponse.write( vUniversal.getHead(vLevel, vDivision) );
				vResponse.write( vLayout.getBody(vPage, vLevel);
			vResponse.write( "</HTML>" );
        }
        else if(vRequest.url == '/Pictures/favicon.ico')
        {
            vFS.readFile('Pictures/favicon.ico', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'image/html'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        else if(vRequest.url == '/Pictures/logoHTKB.jpg')
        {
            vFS.readFile('Pictures/logoHTKB.jpg', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'image/html'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        else if(vRequest.url == '/Styles/Main.css')
        {
            vFS.readFile('Styles/Main.css', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'text/css'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        else if(vRequest.url == '/Styles/Division1.css')
        {
            vFS.readFile('Styles/Division1.css', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'text/css'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        else if(vRequest.url == '/Styles/Division2.css')
        {
            vFS.readFile('Styles/Division2.css', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'text/css'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        else if(vRequest.url == '/Styles/Division3.css')
        {
            vFS.readFile('Styles/Division3.css', 
                function(err, data) 
                {
                    vResponse.writeHead(200, {'Content-Type': 'text/css'});
                    vResponse.write(data);
                    vResponse.end();
                });
        }
        
        
        /*
        fs.readFile('Index.html', 
        function(err, data) 
        {
            vResponse.writeHead(200, {'Content-Type': 'text/html'});
            
            
            vResponse.write(data);
            vResponse.end();
        });
        */
    }
).listen(84); //the server object listens on port 84