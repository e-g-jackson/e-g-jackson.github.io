webpackJsonp([0],{AM5C:function(t,e){},Gbt7:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("NYxO");i.a.use(s.a);var n=new s.a.Store({state:{pastTitle:!0},mutations:{menu:function(t){t.pastTitle=!0},noMenu:function(t){t.pastTitle=!1}},getters:{titleCheck:function(t){return t.pastTitle}}}),o=a("7t+N"),r=a.n(o),l={name:"App",data:function(){return{pastTitle:n.state.pastTitle}},render:function(){var t=arguments[0];return!1===n.state.pastTitle?t("div",{attrs:{id:"app"}},[t("router-view")]):t("div",{attrs:{id:"app"},class:"container-fluid animated fadeIn pastTitle"},[t("span",{class:"row"},[t("div",{attrs:{id:"sidebar"},class:"col-xs-12 col-sm-12 col-md-2 col-lg-2 bigDiv"},[t("div",{attrs:{id:"logo"}},[t("img",{attrs:{id:"profilePic",src:"/static/imgs/icon.jpg"},class:"img-fluid rounded-circle"}),t("img",{class:"img-fluid",attrs:{src:"/static/imgs/EJ_Title4.png"}})]),t("ul",{attrs:{id:"navList"},class:"list-group animated slideInLeft"},[t("router-link",{attrs:{to:"/"}},[t("li",{class:"list-group-item menuItem"},["Home"])]),t("router-link",{attrs:{to:"/Profile"}},[t("li",{class:"list-group-item menuItem"},["About"])]),t("router-link",{attrs:{to:"/Portfolio"}},[t("li",{class:"list-group-item menuItem"},["Portfolio"])]),t("router-link",{attrs:{to:"/Contact"}},[t("li",{class:"list-group-item menuItem"},["Contact"])])])]),t("div",{attrs:{id:"content"},class:"col-10 bigDiv"},[t("router-view")])])])}};var c=a("VU/8")(l,null,!1,function(t){a("AM5C")},null,null).exports,d=a("/ocq"),u={name:"HelloWorld",data:function(){return{pastTitle:n.state.pastTitle}},mounted:function(){n.commit("noMenu")},methods:{delay:function(t){console.log(t),r()(".animated .fadeIn").removeClass("animated fadeIn sloDown"),r()("#titleCard").addClass("animated fadeOut"),setTimeout(function(){n.commit("menu"),console.log(n.state.pastTitle),window.location=t},1e3)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark text-white bigCard",attrs:{id:"titleCard"}},[a("span",{staticClass:"row"},[a("div",{staticClass:"text-center",attrs:{id:"title"}},[a("img",{staticClass:"animated fadeIn sloDown",attrs:{src:"/static/imgs/EJ_Title4.png"}}),t._v(" "),a("hr",{staticClass:"mx-5 animated fadeIn sloDown",staticStyle:{"border-color":"#ff6b6b"}}),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"mx-auto animated fadeIn sloDown",attrs:{id:"summary"}},[t._v("\n        My name is Erik Jackson and I'm a Web Developer and Designer based out of the Saint Paul, Minnesota.\n        I make websites and apps that solve problems with JavaScript, React and Vue.\n      ")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"animated fadeIn sloDown"},[a("button",{staticClass:"btn btn-lg btn-outline-secondary animated fadeIn mx-2",on:{click:function(e){return t.delay("#/profile")}}},[t._v("Profile\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-outline-secondary animated fadeIn mx-2",on:{click:function(e){return t.delay("#/portfolio")}}},[t._v("Portfolio\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-outline-secondary animated fadeIn mx-2",on:{click:function(e){return t.delay("#/contact")}}},[t._v("Contact\n          ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"animated fadeIn sloDown colorTransition"},[e("em",{},[this._v("Innovative Web Design Solutions")])])}]};var p=a("VU/8")(u,m,!1,function(t){a("Qviw")},"data-v-f2eac45a",null).exports,f={name:"Profile",mounted:function(){n.commit("menu")},updated:function(){n.commit("menu")},data:function(){return{msg:"This is the Profile Page!"}}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid text-white animated fadeIn",attrs:{id:"profile"}},[a("div",{staticClass:"p-3",attrs:{id:"profileBody"}},[a("img",{staticClass:"float-left animated pulse mr-5 rounded",attrs:{id:"profPic",src:"/static/imgs/profpic.jpg"}}),t._v(" "),a("p",{staticClass:"text-left mx-5"},[t._v("\n      Erik Jackson is a designer and full stack web developer from Saint Paul, Minnesota. \n      He is a graduate of the full stack web development program at University of Minnesota's \n      College of Continuing education, and is well-versed in both front and back end development.\n    ")]),t._v(" "),a("p",{staticClass:"text-left mx-5"},[t._v("\n      When not working on web development projects, Erik enjoys biking (weather permitting!), \n      painting, gaming, and playing either guitar or piano.\n    ")]),t._v(" "),a("br"),t._v(" "),a("h5",{staticClass:"text-left"},[a("strong",[t._v("\n        Programming Proficiencies\n      ")])]),t._v(" "),a("div",{staticClass:"row text-left"},[a("div",{staticClass:"col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 proficiencyList"},[a("ul",[a("li",[t._v("React")]),t._v(" "),a("li",[t._v("Vue")]),t._v(" "),a("li",[t._v("Javascript")]),t._v(" "),a("li",[t._v("jQuery")]),t._v(" "),a("li",[t._v("Node.JS")]),t._v(" "),a("li",[t._v("Express.JS")])])]),t._v(" "),a("div",{staticClass:"col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 proficiencyList"},[a("ul",[a("li",[t._v("OAuth")]),t._v(" "),a("li",[t._v("MySQL")]),t._v(" "),a("li",[t._v("Sequelize")]),t._v(" "),a("li",[t._v("MongoDB")]),t._v(" "),a("li",[t._v("Mongoose")]),t._v(" "),a("li",[t._v("Bootstrap")])])]),t._v(" "),a("div",{staticClass:"col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 proficiencyList"},[a("ul",[a("li",[t._v("Firebase")]),t._v(" "),a("li",[t._v("Handlebars")]),t._v(" "),a("li",[t._v("Adobe Creative Suite")]),t._v(" "),a("li",[t._v("AJAX")]),t._v(" "),a("li",[t._v("HTML")]),t._v(" "),a("li",[t._v("CSS")])])])])])])}]};var v=a("VU/8")(f,h,!1,function(t){a("dMuN")},"data-v-745d3fbc",null).exports,g=[{title:"The Wellness Tracker App",url:"https://wellness-tracker-app.herokuapp.com",repoUrl:"https://github.com/e-g-jackson/WellnessTracker",img:"/static/imgs/wellnesstracker.JPG",text:"This MERN stack App allows users to save and track data about their weight over time and food consumption. Also allows users to search for recipe data and save it for later through the food2fork API.",tech:["HTML","CSS","Javascript","jQuery","AJAX","React","Mongo DB","Mongoose","Express.JS","Node.JS","Animate.CSS"]},{title:"GGtrivia",url:"https://guarded-crag-98032.herokuapp.com/",repoUrl:"https://github.com/e-g-jackson/GG_Trivia",img:"/static/imgs/GGTrivia.JPG",text:"A Trivia game that uses Sequelize to store and retrieve data from a MySQL database. This data includes a question bank, a leaderboard, and a submitted questions table for user-submitted questions pending approval.",tech:["HTML","CSS","Javascript","jQuery","AJAX","Node.JS","Express.JS","MySQL","Animate.CSS"]},{title:"MongoScraper",url:"https://stormy-mesa-78779.herokuapp.com/",repoUrl:"https://github.com/e-g-jackson/HW-MongoScraper",img:"/static/imgs/MongoScraper.JPG",text:"This is a MERN stack app that scrapes New York Times Opinion Page using Cherio and Axios and stores data in with MongoDB and Mongoose. This app is a good tool for keeping up-to-date on current events, as well fostering discussion on the topics of the day!",tech:["HTML","CSS","Javascript","AJAX","jQuery","Node.JS","Cheerio"]},{title:"The Tranzpozer App",url:"https://tranzpozer.herokuapp.com/",repoUrl:"https://github.com/e-g-jackson/Tranzpozer",img:"/static/imgs/tranzpozer.JPG",text:"App will accept a key and scale from the user, then return a table with every note of that scale in the selected key. Additionally, the app will render a diagram of a guitar fret and plot the locations of each of the notes.",tech:["HTML","CSS","Javascript","React","jQuery","axios"]},{title:"The Clicky Memory Game",url:"https://theclickymemorygame.herokuapp.com/",repoUrl:"https://github.com/e-g-jackson/HW-ClickyGame",img:"/static/imgs/clickygame.JPG",text:"A Memory game powered by React! Try and click all 12 of the tiles without repeating yourself! Beware: the tiles will re-shuffle themselves after every guess!",tech:["HTML","CSS","Javascript","jQuery","Bootstrap","React"]},{title:"Batman RPG",url:"https://e-g-jackson.github.io/HW-unit-4-game/",repoUrl:"https://github.com/e-g-jackson/HW-unit-4-game",img:"/static/imgs/batmanrpg.JPG",text:"An RPG set in the DC universe! Pick your favorite hero (or villain!) and decide who rules the streets of Gotham city once and for all!",tech:["HTML","CSS","Javascript","jQuery","bootstrap"]},{title:"GifTastic",url:"https://e-g-jackson.github.io/HW-GifTastic/",repoUrl:"https://github.com/e-g-jackson/HW-GifTastic",img:"/static/imgs/giftastic.JPG",text:"This site references the Giphy API for gifs based on keyword searches activated by buttons. This app also allows for new buttons, which can be created using the search bar and button. If you've ever struggled to find just the right gif for any situation, this app is for you!",tech:["HTML","CSS","Javascript","bootstrap","AJAX"]},{title:"Word Guess Game",url:"https://e-g-jackson.github.io/HW-Word_Guess_Game/",repoUrl:"https://github.com/e-g-jackson/HW-Word_Guess_Game",img:"/static/imgs/wordguessgame.JPG",text:"A new twist on an old game: this Hangman-style letter guessing game has an Architecture theme! Find out how well you know the top architects of the 20th century.",tech:["HTML","CSS","Javascript"]},{title:"Trivia Game",url:"https://e-g-jackson.github.io/HW-Trivia-Game/",repoUrl:"https://github.com/e-g-jackson/HW-Trivia-Game",img:"/static/imgs/triviagame.JPG",text:"Trivia game set in the Game of Thrones universe! Can you match all of the sigils of the great houses to their owners? Just remember, there is a time-limit!",tech:["HTML","CSS","Javascript","Bootstrap"]}],_={name:"Portfolio",mounted:function(){n.commit("menu")},updated:function(){n.commit("menu")},data:function(){return{msg:"Portfolio",portfolioItems:g}},methods:{urlMaker:function(t,e){r()("#wholePortfolio").addClass("animated fadeOut");var a="/portfolio/"+t;setTimeout(function(){console.log("change!"),window.location.hash=a},1e3)}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left animated fadeIn",attrs:{id:"wholePortfolio"}},[a("div",{staticClass:"mx-3 p-4",attrs:{id:"portfolio"}},[t._m(0),t._v(" "),a("div",{staticClass:"row px-5"},[a("br"),t._v(" "),t._l(t.portfolioItems,function(e,i){return a("div",{key:i,staticClass:"col-xs-6 col-sm-4 animated fadeIn sloDown",attrs:{title:e.title}},[a("a",{on:{click:function(e){return t.urlMaker(i,e)}}},[a("div",{staticClass:"wrapper py-4"},[a("img",{staticClass:"portfolioImg rounded",attrs:{src:e.img}})])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p-3",staticStyle:{"font-size":"20px"}},[e("strong",[this._v("\n        Click on a project title to learn more!\n      ")])])}]};var k=a("VU/8")(_,b,!1,function(t){a("Gbt7")},"data-v-0b5e2bb2",null).exports,C={name:"Contact",data:function(){return{msg:"Contact Information"}},mounted:function(){n.commit("menu")},updated:function(){n.commit("menu")},render:function(t){return t("div",{attrs:{id:"app"},class:"container-fluid animated fadeIn"},[t("div",{attrs:{id:"contactContent"}},[t("div",{class:"row p-3"},[t("h3",{class:"p-3",style:"font-size: 20px;"},[t("strong",["Contact now!"])])]),t("div",{attrs:{id:"buttonDiv"},class:"row p-3"},[t("div",{class:"links mx-3"},[t("a",{attrs:{href:"https://www.linkedin.com/in/erik-jackson-84407360",target:"_blank"}},[t("button",{class:"li-link btn",attrs:{title:"Linked In"}},[t("img",{class:"li-btn ",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png"}})])])]),t("div",{class:"links mx-3"},[t("a",{attrs:{href:"https://github.com/e-g-jackson",target:"_blank"}},[t("button",{class:"li-link btn",attrs:{title:"Git Hub"}},[t("img",{class:"li-btn",attrs:{src:"static/imgs/GH-Mark.png"}})])])]),t("div",{class:"links mx-3"},[t("a",{attrs:{href:"mailto:jacks638@umn.edu"}},[t("button",{attrs:{id:"email",title:"Email"},class:"btn btn-lg"},[t("i",{class:"fas fa-envelope-square fa-3x"})])])])])])])}};var w=a("VU/8")(C,null,!1,function(t){a("P4P9")},"data-v-888470c6",null).exports,y={name:"Project",data:function(){return{listenerAdded:!1,currentIndex:this.$route.params.project,project:g[this.$route.params.project]}},mounted:function(){this.listenerChecker()},updated:function(){this.listenerAdded=!0},methods:{changer:function(){r()("#project").addClass("animated fadeOut");setTimeout(function(){r()("#project").removeClass("animated fadeOut"),window.location.hash="/portfolio"},1e3)},listenerChecker:function(){var t=this;!1===this.listenerAdded&&(this.listenerAdded=!0,window.addEventListener("keyup",function(e){t.listener(e.key)}))},listener:function(t){var e=window.location.hash.split("/"),a=parseInt(e[2]),i=this;if(r()("#project").removeClass("animated fadeIn"),r()("#project").addClass("animated fadeOut"),"ArrowRight"===t&&"portfolio"===e[1]){var s=g.length-1;a<s?a+=1:a=0,n()}else"ArrowLeft"===t&&"portfolio"===e[1]&&(0!==a?a-=1:a=g.length-1,n());function n(){var t=e[0]+"/"+e[1]+"/"+a;setTimeout(function(){r()("#project").removeClass("animated fadeOut"),r()("#project").addClass("animated fadeIn"),window.location.hash=t,i.$data.project=g[a]},1e3)}}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid animated fadeIn text-white mt-5",attrs:{id:"project"}},[a("div",{staticClass:"jumbotron-fluid"},[a("h1",[a("strong",[t._v("\n        "+t._s(this.project.title)+"\n      ")])]),t._v(" "),a("div",{staticClass:"text-center"},[a("i",{staticClass:"fas fa-arrow-alt-circle-left fa-3x float-left",on:{click:function(e){return t.listener("ArrowLeft")}}}),t._v(" "),a("em",[t._v("\n        Use left / right arrows to navigate\n      ")]),t._v(" "),a("i",{staticClass:"fas fa-arrow-alt-circle-right fa-3x float-right",on:{click:function(e){return t.listener("ArrowRight")}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center p-3"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary px-3 mb-3",on:{click:t.changer}},[t._v("\n        Go Back\n      ")])])]),t._v(" "),a("div",{attrs:{id:"content"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("img",{staticClass:"float-left img-fluid rounded",attrs:{src:this.project.img}})]),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-6"},[t._m(0),t._v(" "),a("p",{staticClass:"text-left"},[t._v("\n          "+t._s(this.project.text)+"\n        ")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"text-left"},[t._m(1),t._v(" "),a("ul",t._l(t.project.tech,function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])}),0)]),t._v(" "),a("br"),t._v(" "),a("div",[a("a",{attrs:{href:this.project.url,target:"_blank"}},[a("button",{staticClass:"btn btn-lg btn-outline-secondary"},[t._v("\n              Try it out!\n            ")])]),t._v(" "),a("a",{attrs:{href:this.project.repoUrl,target:"_blank"}},[a("button",{staticClass:"btn btn-lg btn-outline-secondary"},[t._v("\n              GitHub\n            ")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"text-left"},[e("strong",[this._v("\n            Project Summary:\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("strong",[this._v("\n              Technologies/Libraries used:\n            ")])])}]};var T=a("VU/8")(y,x,!1,function(t){a("dmOC")},"data-v-3149ee26",null).exports;i.a.use(d.a);var j=new d.a({routes:[{path:"/",name:"HelloWorld",component:p},{path:"/profile",name:"Profile",component:v},{path:"/portfolio",name:"Portfolio",component:k},{path:"/portfolio/:project",name:"Project",component:T,params:!0},{path:"/contact",name:"Contact",component:w}]});i.a.config.productionTip=!1,new i.a({el:"#app",data:{},router:j,components:{App:c},template:"<App/>"})},P4P9:function(t,e){},Qviw:function(t,e){},dMuN:function(t,e){},dmOC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2180e4e5d542cd071c28.js.map