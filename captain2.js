var _ = require('underscore');

function solve(arr) {
    Array.prototype.occurs = function(arg){
        var counter = 0;
        for(var i = 0; i< this.length; i++){
            if(this[i] == arg)
                counter++;
        }
        return counter;
    };
    Array.prototype.contains = function(arg){
        for(var i = 0; i < this.length; i++)
            if(this[i] == arg)
                return true;
        return false;
    };

    var regex = /[A-Za-z]+/g;
    var words = arr[0].match(regex);
    words = words.map(function(s) {
        return s.toLowerCase();
    });
    var uniqueWords = words.sort();
    uniqueWords = _.uniq(uniqueWords, true);

    var repeatedWords = [];
    for(var i = 0; i < uniqueWords.length; i++) {
        var count = words.occurs(uniqueWords[i]);
        if (count >= 3) {
            repeatedWords.push(uniqueWords[i]);
        }
    }

    //var regexSentence = /[A-Za-z\s\:\'\"0-9]+/g;
    var regexSentence = /[A-Z][a-zA-Z\s\w\:\'\"\,]+[\?\!\.]/g;
    var sentencesWithEnd = arr[1].match(regexSentence);
    var sentences = sentencesWithEnd.map(function(e) {
       return e.substring(0, e.length-1);
    });
    sentences = sentences.map(function(e) {
        return e.trim();
    });
    var wordsInSentences = sentences.map(function(s) {
        return s.split(' ');
    });

    //console.log(sentences);
    //console.log(wordsInSentences);

    var matchSentences = [];
    for(var j = 0; j < wordsInSentences.length; j++) {
        var contained = 0;
        for(var k = 0; k < repeatedWords.length; k++) {
            if(wordsInSentences[j].contains(repeatedWords[k])) contained += 1;
                }
        if(contained >= 2) matchSentences.push(sentencesWithEnd[j]);
    }

    if(matchSentences.length > 0) {
        matchSentences.forEach(function (e) {
            console.log(e);
        });
    } else {
        console.log('No sentences');
    }
}

//var arr = ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."];


//var arr =
//["Why, why is he so crazy, so so crazy? Why?",
//    "There are no words that you should be matching. You should be careful."];

//var arr =
//["JavaScript is a nice programming language. Some say it is shitty others are like: This is the best I have ever seen! You can do everything you want with it.",
//    "JS is the best! This's a mock test to see if you made it."];

var arr = ['Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?',
    'Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum.'];

//var arr = ["Using motion triggered cameras located in the Yanachaga National Park in Peru, scientists found significant changes in animal behavior more than three weeks before a magnitude 7 earthquake struck the region in 2011. On a typical day the cameras recorded 5 to 15 animal sightings, but within the 23 day period in the run up to the earthquake, they recorded five or fewer sightings. For the five to seven days immediately before the earthquake, no animal movements were recorded at all an unusual phenomenon in a mountainous rainforest region normally teeming with wildlife.",
//    "While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment. Humans are generalists, we are not specialized ecologically, she said. We don't live in contact with the soil or the ground. We've insulated ourselves into concrete buildings in cities. While there have been reports of people displaying medical symptoms ahead of earthquakes, I think the effect would be negligible. However, I'm prepared to keep an open mind on that subject."]

solve(arr);

