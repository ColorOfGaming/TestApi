var channelName = 'TechGuyWeb';

$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: "contentDetails",
      forUsername: "qoyaqa",
      key: "AIzaSyDSmV8UbLjqmWKXwlmQegP-YsY9hEkBWes"
    },
    function (data){
        $.each(data.items, function(i,item){
          console.log(item);
      })
    } 
  );
});