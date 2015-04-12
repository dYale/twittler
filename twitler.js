
      $(document).ready(function(){
        var counterNumber = function(num){
          $('.counter').text(num);
        }

        //removes text from input box
        $('.twilt').on('click', function(){
          $(this).text('');
        })
        
        //counter update function, 
         $('.twilt').keydown(function() {
          counterNumber(140 - $(this).val().length);
        })
         var twiltLength = $('.twilt').val().length;
        //submit new barks
         $('.btn').on('click', function(){
          var status = $('.twilt').val();
          if($('.twilt').val().length <= 140 && $('.twilt').val().length > 0){
          $('<li>').text(status).prependTo('.posts');
          $('.twilt').val("");
          counterNumber(140);
        } else if(('.twilt').val().length === 0) {
        } else {
          alert("Your message is too long!")
        }
          })
        
        var postLength = $(this).val().length;
        var $posts = $('.posts');
        $body.html('');
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('.new');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.prependTo('<li>');
          index -= 1;
        }
      });
