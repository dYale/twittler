
      
      $(document).ready(function(){
        var counterNumber = function(num){
          $('.counter').text(num);
        }


        //removes text from input box
        $('.twilt').on('click', function(){
          $(this).text('');
        })
        
        //counter update function, including color changes
         $('.twilt').keydown(function() {
          counterNumber(140 - $(this).val().length);
          if(+$(this).val().length > 140){
            $('.counter').css("color","red");
          } else if(+$(this).val().length <= 140){
            $('.counter').css("color","#b3d9d9");
          }

        })

          //submit new barks
         $('.btn').on('click', function(){
          var status = $('.twilt').val();
          if($('.twilt').val().length <= 140 && $('.twilt').val().length > 0){
          $('<li>').text( 'mrGrumpyPants' + status).prependTo('.posts');
          $('.twilt').val("");
          counterNumber(140);
        } else if(('.twilt').val().length === 0) {
        } else {
          alert("Your message is too long!")
        }
          })
        }
      });
