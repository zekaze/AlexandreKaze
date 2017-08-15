/**
 * Created by Alexandre on 15-Aug-17.
 */

var $animation_elements = jQuery('.tx'),

    $window = jQuery(window);



$window.on('scroll',check_if_in_view);



function check_if_in_view() {

    var window_height = $window.height();

    var window_top_position = $window.scrollTop();

    var window_bottom_position = (window_top_position + window_height);



    $.each($animation_elements, function() {

        var $element = jQuery(this);

        var element_height = $element.outerHeight();

        var element_top_position = $element.offset().top;

        var element_bottom_position = (element_top_position + element_height);





        //check to see if this current container is within viewport

        if ((element_bottom_position >= window_top_position) &&

            (element_top_position <= window_bottom_position)) {

            $element.addClass('anime');

        }

    });

}

$(function () {
    $('.l1').textillate();
    $('.l4').textillate({initialDelay: 500});
})