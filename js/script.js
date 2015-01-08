var channelName = 'TechGuyWeb';

$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: "contentDetails",
      forUsername: channelName,
      key: 'AIzaSyBra4wZMz0gsWgsQZumMgv9Y4juFQVhHhs'
    },
    function (data){
        $.each(data.items, function(i,item){
          console.log(item);
      })
    }
  );
}