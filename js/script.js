var channelName = 'TechGuyWeb';

$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      part: "contentDetails",
      forUsername: channelName,
      key: "AIzaSyDSmV8UbLjqmWKXwlmQegP-YsY9hEkBWes"
    },
    function (data){
      console.log("hello world");
      //$.each(data.items,function(i,item){console.log(item);})
    }
  );
});