var userSearch="";
var searchBeginDate="";
var searchEndDate="";
var recordTotal=3;


$("#search-term").keyup(function(){
    userSearch = this.value;
    console.log(this.value);
});

$("#start-year").keyup(function(){
    searchBeginDate = this.value;
    console.log(searchBeginDate);
});

$("#end-year").keyup(function(){
    searchEndDate = this.value;
    console.log(searchEndDate);
});

$("#no-records").keyup(function(){
    console.log("this button doesn't work");
});


$("#search-btn").click(function(){
    console.log("search clicked");
    // var userSearch
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch +"?begin_date=" + searchBeginDate + "?end_date=" + searchEndDate + "&api-key=c4c014934b1b40228ced8b92f50576ce";
    // i=0;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        for (i=0; i<recordTotal; i++){
            var blah = ("<div class='border m-3'><p class = 'font-weight-bold'>" + response.response.docs[i].headline.main + "</p><p>" + response.response.docs[0].byline.original + "</p><p>" + response.response.docs[i].pub_date + "</p><p>" + response.response.docs[i].web_url + "</p></div>");
            $("#top-articles").append(blah);      
        };
    });
});

     




   