'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;

    /*takes the last child of the block and detach and determines if its a legal move*/
    $('[data-stack]').click(function() {
      if (!$block) {
        $block = $(this).children().last().detach();
      } else {
        if ($(this).children().length === 0 || parseInt($block.attr('data-block')) < parseInt($(this).children().last().attr('data-block'))) {
          $(this).append($block);
          $block = null;
        } else {
          alert('You can"t place that bloack there');
          }
        }

        if ($(this).attr('data-stack') === '3' && $(this).children().length ===4) {
          //console.log(this);
          $('#announce-game-won').innerHTML = "You won";

        }
    });




});
