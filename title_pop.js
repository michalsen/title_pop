(function ($) {

  $(function(){
    
    $( "#title-pop-form a" ).click(function() {
        console.log(this.name);
        //$.get('admin/title_pop/delete/'+this.name);
     });

  });

}(jQuery));