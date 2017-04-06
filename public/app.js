$(document).ready( () => {
  console.log('app.js connected');

  $('form').on('submit', () => {
    var item = $('form input');
    var todo = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: success,
      error: error
    });

    return false;

  });

  $('li').on('click', function() {
    var item = $(this).text();
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: success,
      error: error
    });
  });

});

function success(data){
  location.reload();
}

function error(err){
  console.log(err);
}
