var oldRequest = null;

$(function () {
  $('#typeahead').on('input', function(e) {
    getMovie($(this).val());
  });
});

function getMovie(input) {
  if (oldRequest) {
    oldRequest.abort();
  }

  oldRequest = $.ajax('http://imdbapi.org/?q=' + input).done(showMovie);
}

function showMovie(data) {
  data = $.parseJSON(data);

  var results = $('#typeahead_results');
  results.empty();
  results.append(
    $('<img />').attr('src', data[0]['poster'])
  );
}
