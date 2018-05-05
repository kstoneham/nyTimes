$("#search-btn").click(function(){
    console.log("you clicked a button");
});

    var userSearch = "";
    var searchBeginDate = "1997";
    var searchEndDate = "2012";
    
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch +"?begin_date="+ searchBeginDate +"?end_date=" + searchEndDate+ "&page=2&sort=oldest&api-key=c4c014934b1b40228ced8b92f50576ce"; 
    
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            console.log(response);
            console.log(response.response.docs[0]);
            
            
    }); 