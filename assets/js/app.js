var mainDiv = $('#mainDiv');
var portfolioItems = [
    {'title': 'Our House!',
    'url': 'https://e-g-jackson.github.io/Our_House/',
    'repoUrl': 'https://github.com/e-g-jackson/Our_House',
    'img':'assets/imgs/ourhouse.JPG',
    'text':'References the Google Civic API for information on local representatives. Also references the Google Geocoder API and Google Maps API to render the location of representatives\' offices.',
    },{'title': 'GGtrivia',
    'url': 'https://guarded-crag-98032.herokuapp.com/',
    'repoUrl': 'https://github.com/e-g-jackson/GG_Trivia',
    'img': 'assets/imgs/GGTrivia.JPG',
    'text': 'A Trivia game that uses Sequelize to store and retrieve data from a database. This data includes a question bank, a leaderboard, and a submitted questions table for user-submitted questions pending approval.'
    },{'title': 'MongoScraper',
    'url': 'https://stormy-mesa-78779.herokuapp.com/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-MongoScraper',
    'img': 'assets/imgs/MongoScraper.JPG',
    'text': 'Scrapes NYTimes using Cherio and Axios and stores data in with MongoDB and Mongoose.'
    },{'title': 'The Clicky Memory Game' ,
    'url': 'https://theclickymemorygame.herokuapp.com/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-ClickyGame',
    'img':'assets/imgs/clickygame.JPG',
    'text':'A Memory game powered by React! Try and click all 12 of the tiles without repeating yourself!',
    },{'title': 'Batman RPG' ,
    'url': 'https://e-g-jackson.github.io/HW-unit-4-game/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-unit-4-game',
    'img':'assets/imgs/batmanrpg.JPG',
    'text':'An RPG set in the DC universe! Pick your favorite hero (or villain!) and decide who rules the streets of Gotham city once and for all!',
    },
    {'title': 'GifTastic',
    'url':'https://e-g-jackson.github.io/HW-GifTastic/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-GifTastic',
    'img':'assets/imgs/giftastic.JPG',
    'text':'This site references the Giphy API for gifs based on keyword searches activated by buttons. New buttons can be created using the search bar and button.',
    },{'title': 'Word Guess Game',
    'url': 'https://e-g-jackson.github.io/HW-Word_Guess_Game/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-Word_Guess_Game',
    'img': 'assets/imgs/wordguessgame.JPG',
    'text':'Hangman-style letter guessing game with an Architecture theme! How well do you know the top architects of the 20th century? Find out here!',
    },{'title': 'Trivia Game',
    'url': 'https://e-g-jackson.github.io/HW-Trivia-Game/',
    'repoUrl': 'https://github.com/e-g-jackson/HW-Trivia-Game',
    'img': 'assets/imgs/triviagame.JPG',
    'text':'Trivia game set in the Game of Thrones universe! Find out how well you can match the sigils of the great houses to their owners! Be careful, there is a time-limit!',
    }
];

var display = {
    profile: function(){
        var profHeader = $('<h2>About me:</h2> <hr>')
        var img = $('<img id = "profPic" src = "assets/imgs/profpic.jpg">');
        var imgDiv = $('<div id = "imgDiv"></div>');
        var text = 'Erik Jackson is a future web developer based out of Saint Paul, Minnesota. Most of his time is spent working as a manager in a restaurant, but would like to move on to something else someday soon. In his spare time he likes playing guitar, riding bikes and listening to music; one day, he will actually have time to do these things.<br><br>';
        text += 'Recently, Erik enrolled in the UMN Code Bootcamp for Web Development! Although he has previously dabbled in coding with Python and HTML, he still has a lot to learn! He is currently learning to program in CSS, and Javascript with more to come soon!<br><br>';
        text += 'Eventually, Erik would like to use these skills to develop web pages and applications and maybe even get paid for it!';
        var linkedIn = $('<a href = \'https://www.linkedin.com/in/erik-jackson-84407360\'><button class = \'li-link btn btn-primary\'><img class = \'li-btn img-fluid\'src = \'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png\'> </button></a>');
        var gitHub = $('<a href = \'https://github.com/e-g-jackson\'><button class = \'li-link btn btn-primary\'><img class = \'li-btn img-fluid\' src = assets/imgs/GH-Mark.png></button></a>');
        
        // var linkedIn = $('<div class = \'col-2\'></div><a href = \'https://www.linkedin.com/in/erik-jackson-84407360\'><button class = \'col-3 btn btn-primary\'><img class = \'li-btn\'src = \'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png\'> </button></a>');
        // var gitHub = $('<a href = \'https://github.com/e-g-jackson\'><button class = \'col-3 btn btn-primary\'><img class = \'li-btn\' src = assets/imgs/GH-Mark.png></button></a><div class = \'col-2\'></div>');
        var container = $('<div class = \'container\'></div>')
        $(mainDiv).append(profHeader);
        $(mainDiv).append(imgDiv);
        $(imgDiv).append(img);
        $(container).append(linkedIn);
        $(container).append(gitHub);
        $(imgDiv).append(container);
        $(mainDiv).append(text);
    },
    portfolio: function(){
        var portHeader = $('<h2>Portfolio:</h2> <hr>')
        $(mainDiv).append(portHeader);
        for( var i = 0; i < portfolioItems.length; i++){
            console.log((i + 1) + ' projects')
            var port = portfolioItems[i];
            var card = $('<div class = \'card\'></div>');
            var top = $('<div class = \'card card-top mb-0\'></div>');
            var bottom = $('<div id = \'text' + i + '\'class = \'portContent card-body clearfix\'></div>');
            var title = $('<button class = \'titleBtn btn btn-custom animated pulse\' iVal = ' + i + ' vis = 0 >' + port.title + '</button>');
    
            $(card).appendTo(mainDiv);
            $(top).appendTo(card);
            $(bottom).appendTo(card);
            $(title).appendTo(top);
            $(title).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass('animated pulse');
            });
        }
    },
    contact: function(){
        $(mainDiv).html('<h2 class = \'header fadeIn\'><strong>Contact</strong></h2>');
        var nameLabel = $('<br><label for = \'name\'><b>Name:</b></label><br>')
        var nameInput = $('<input id = \'name\' placeholder = \'Name\'><br><br>');
        
        var emailLabel = $('<label for = \'email\'><b>Email:</b></label><br>')
        var emailInput = $('<input id = \'email\' placeholder = \'email@website.com\'><br><br>');
        
        var commentLabel = $('<label for = \'comment\'><b>Comment:</b></label><br>')
        var commentInput = $('<input id = \'comment\' placeholder = \'Comment\' style = \'width: 80%;\'><br><br>');
    
        var submitButton = $('<button id = \'submit\'>')
        
        $(nameLabel).appendTo(mainDiv);
        $(nameInput).appendTo(mainDiv);
        $(emailLabel).appendTo(mainDiv);
        $(emailInput).appendTo(mainDiv);
        $(commentLabel).appendTo(mainDiv);
        $(commentInput).appendTo(mainDiv);
        $(submitButton).text('submit');
        $(submitButton).attr('class', 'btn btn-lg btn-custom');
        $(submitButton).appendTo(mainDiv);
    }
};
$(document).ready(function(){
    display.profile();
});

$(document).on('click', '#homeBtn', function(){
    mainDiv.empty();
    display.profile();
});
$(document).on('click', '#portfolioBtn', function(){
    mainDiv.empty();
    display.portfolio();
});
$(document).on('click', '#contactBtn', function(){
    mainDiv.empty();
    display.contact();
});

$(document).on('click', '#submit', function(){
    alert('that function not supported yet! :\'\(')
});

$(document).on('click', '.titleBtn', function(){
    var iVal = $(this).attr('iVal');
    var vis = $(this).attr('vis');
    var textBox = document.getElementById('text' + iVal);
    if (vis == 1){
        $(this).attr('vis', 0);
        $(textBox).addClass('animated fadeOutDown');
        $(textBox).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(textBox).removeClass('animated fadeOutDown');
        });
        
        setTimeout(function(){
            $(textBox).empty();
        }, 1000);
    }
    else if (vis == 0){
        var text = $('<div id = "text' + iVal + '" class = \'portInfo\'></div>');
        var description = $('<p>' + portfolioItems[iVal].text + '</p>');
        var url = $('<p>URL: <a href = \'' + portfolioItems[iVal].url + '\'>' + portfolioItems[iVal].url + '</a></p>');
        var rUrl = $('<p>Repo: <a href = \'' + portfolioItems[iVal].repoUrl + '\'>' + portfolioItems[iVal].repoUrl +'</p>');
        var img = $('<img id = "img' + iVal + '"class = \'portImg\' src = ' + portfolioItems[iVal].img + '>');

        $(this).attr('vis', 1); 
        $(img).appendTo(text);
        $(img).addClass('animated fadeInUp');
        $(description).appendTo(text);
        $(url).appendTo(text);
        $(rUrl).appendTo(text);
        $(text).appendTo(textBox);
        $(text).addClass('animated fadeInUp')

        $(img).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(img).removeClass('animated fadeInUp');
        });

        $(text).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(text).removeClass('animated fadeInUp');
        });
    }
});
