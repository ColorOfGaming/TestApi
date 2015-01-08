var channelName = 'TechGuyWeb';

$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: "contentDetails",
      forUsername: "qoyaqa",
      key: 'AIzaSyBrQ3kxIFYp1iA4N5wWQ-j96dbHQMrunnc'
    },
    function (data){
        $.each(data.items, function(i,item){
          console.log(item);
      })
    } 
  );
});