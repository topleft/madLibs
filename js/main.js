$(document).ready(function(){
  $("#btn-click").on('click', function(e) {
    e.preventDefault();
    var name = $("#name").val();
    $(".name").empty().html(name);

    var  noun = $("#noun").val();
    $(".noun").empty().html(noun);

    var  verb = $("#verb").val();
    $(".verb").empty().html(verb);

    var  noun2 = $("#noun2").val();
    $(".noun2").empty().html(noun2);

    $("#story").show();
    $("#btn-clear").show();
  });

  $("#btn-clear").on('click', function() {
    console.log("click");
    $("#my-form").trigger("reset");
    $("span").empty();
  });

});
