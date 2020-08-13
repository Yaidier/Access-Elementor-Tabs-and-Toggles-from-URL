<script>

jQuery(window).load(function(){
   
    
    var url = jQuery(location).attr('href');
    var id = url.substring(url.lastIndexOf('/') + 1);
    
    var tab = id.substring(1, id.indexOf('.'));

    var toggle = id.substring(id.indexOf('.') + 1, id.lastIndexOf(''));
    
    var text = tab.replace(/\-/g, ' ');
    
    var text_toggle = toggle.replace(/\-/g, ' ');
    
    var tab_element = jQuery('a').filter(function() {
        return jQuery(this).text() === text;
    });
    
    var toggle_element = jQuery('a').filter(function() {
        return jQuery(this).text() === text_toggle;
    });
    

    tab_id = tab_element[0].firstChild.parentElement.parentElement.id;
    
    toggle_id = toggle_element[0].firstChild.parentElement.parentElement.id;


    jQuery('#' + tab_id)[0].click();
    
    jQuery('#' + toggle_id)[0].click();

});

</script>