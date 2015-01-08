var channelName = 'TechGuyWeb';

$(document).ready(function() {
  $.post(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      part: "contentDetails",
      forUsername: channelName,
      key: "AIzaSyDSmV8UbLjqmWKXwlmQegP-YsY9hEkBWes"
    },
    function (data){
      if(typeof data == "object" && data.post){
        console.log("Data exists");
      }
      $.each(data.items,function(i,item){console.log("Hello in");})
    }
  );
});