
$(document).on('turbolinks:load', function(){
  var inputs  =[];
  $(document).on('change', 'input[type= "file"]',function(event) {
    var file = []
    file = $(this).prop('files');
    inputs.push($(this));
    $(".img_view").remove()
    function image_preview(file) {
      var reader = new FileReader();
      var img = $(`<div class= "img_view"><img></div>`);
      reader.onload = function(e) {
        img.find('img').attr({
          src: e.target.result
        })
        $(".main-cotents__post-images__drop-box__select-image").append(img);
      }
      reader.readAsDataURL(file);
    }
    for (i = 0; i < file.length; i++){
      image_preview(file[i])
    }
  });
});
