Rails.application.routes.draw do
  get 'section254/Index'

  get 'section253/Index'

  get 'section252/Index'

  get 'section251/Index'

  get 'section25/Index'

  get 'section24/Index'

  get 'section21/Index'

	get 'Index', to: 'main#Index'
	get 'AboutUs', to: 'main#AboutUs'
    get 'Media', to: 'main#Media'
    get 'Minecraft', to: 'main#Minecraft'
	
	get '/Division1/Index', to: 'division1#Index'
	
	get '/Division1/Section1/Index', to: 'section11#Index'
	get '/Division1/Section1/Project1', to: 'section11#Project1'
	get '/Division1/Section1/Project2', to: 'section11#Project2'
	get '/Division1/Section1/Project3', to: 'section11#Project3'
	get '/Division1/Section1/Project4', to: 'section11#Project4'
	get '/Division1/Section1/Project5', to: 'section11#Project5'
        
	get '/Division2/Index', to: 'division2#Index'
	get '/Division2/Project2', to: 'division2#Project2'
	get '/Division2/Project3', to: 'division2#Project3'
	get '/Division2/Project6', to: 'division2#Project6'
	get '/Division2/Project7', to: 'division2#Project7'
	get '/Division2/Project8', to: 'division2#Project8'
	get '/Division2/Project9', to: 'division2#Project9'
	get '/Division2/Project10', to: 'division2#Project10'
	get '/Division2/Project11', to: 'division2#Project11'
	get '/Division2/Project12', to: 'division2#Project12'
	get '/Division2/Project13', to: 'division2#Project13'
	get '/Division2/Project14', to: 'division2#Project14'
	
	get '/Division2/Section1/Index', to: 'section21#Index'
	get '/Division2/Section1/Project1', to: 'section21#Project1'
	get '/Division2/Section1/Project2', to: 'section21#Project2'
	get '/Division2/Section1/Project3', to: 'section21#Project3'
	
	get '/Division2/Section4/Index', to: 'section24#Index'
	get '/Division2/Section4/Project1', to: 'section24#Project1'
	get '/Division2/Section4/Project2', to: 'section24#Project2'
	
	get '/Division2/Section5/Index', to: 'section25#Index'
	
	get '/Division2/Section5/Section1/Index', to: 'section251#Index'
	get '/Division2/Section5/Section1/Project1', to: 'section251#Project1'
	get '/Division2/Section5/Section1/Project2', to: 'section251#Project2'
	get '/Division2/Section5/Section1/Project3', to: 'section251#Project3'
	get '/Division2/Section5/Section1/Project4', to: 'section251#Project4'
	get '/Division2/Section5/Section1/Project5', to: 'section251#Project5'
	get '/Division2/Section5/Section1/Project6', to: 'section251#Project6'
	
	get '/Division2/Section5/Section2/Index', to: 'section252#Index'
	get '/Division2/Section5/Section2/Project1', to: 'section252#Project1'
	get '/Division2/Section5/Section2/Project2', to: 'section252#Project2'
	
	get '/Division2/Section5/Section3/Index', to: 'section253#Index'
	get '/Division2/Section5/Section3/Project1', to: 'section253#Project1'
	
	get '/Division2/Section5/Section4/Index', to: 'section254#Index'
	get '/Division2/Section5/Section4/Project1', to: 'section254#Project1'
      
	get 'Division3/Index', to: 'division3#Index'
	get 'Division3/Project1', to: 'division3#Project1'
	get 'Division3/Project2', to: 'division3#Project2'
	get 'Division3/Project3', to: 'division3#Project3'
	get 'Division3/Project4', to: 'division3#Project4'
	get 'Division3/Project5', to: 'division3#Project5'
			
	root 'main#Index'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
