var channelName = 'mll254';

$(document).ready(function() {
     $.get(
          "https://www.googleapis.com/youtube/v3/channels",{
               part: "contentDetails",
               forUsername: channelName,
               key: 'AIzaSyDZjnohKcV1yQhaTkp7Ss5c1zf4RtmMjS0'},
               function (data){
                    $.each(data.items, function(i, item){
                         console.log(item);
                         pid = item.contentDetails.relatedPlaylists.uploads;
                         getVids(pid);
                    })
               }
     );

function getVids(pid){

output = '<li>'+'<iframe width="560" height="315" src="//www.youtube.com/embed/sbQQKI1Fwo4?rel=0" frameborder="0" allowfullscreen></iframe>'+'<li>';
$('#results').append(output);

$.get(
"https://www.googleapis.com/youtube/v3/playlistItems",{
           part: 'snippet',
           maxResults: 10,
           playlistId: pid,
           key: 'AIzaSyDZjnohKcV1yQhaTkp7Ss5c1zf4RtmMjS0'},
           function(data){
                var output;
                $.each(data.items, function(i, item){
                     console.log(item);
                     videTitle = item.snippet.title;
                     
                     output = '<li>'+'<iframe width="560" height="315" src="//www.youtube.com/embed/sbQQKI1Fwo4?rel=0" frameborder="0" allowfullscreen></iframe>'+'<li>';
                     
                     //Append to results listStyleType
                     $('#results').append(output);
                })
           }
);
           
        }
});
      
       
