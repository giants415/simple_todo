$(document).ready( () => {
  console.log('app.js connected');

  // $.ajax({
  //   method: 'GET',
  //   url: '/todo',
  //   success: (data) => {
  //     location.reload();
  //   }
  // });

  $('form').on('submit', () => {
    var item = $('form input');
    var todo = {item: item.val()};

    console.log('jquery');
    // event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: (data) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    });
    return false;
  });


});
