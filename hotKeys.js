﻿/*
 * jQuery Hotkey Plugin
 * Copyright 2013, Realdanielbyrne
 * Licensed under the MIT 
 */

(function ($) {



    $.fn.hotKey = function (options, callback) {

        var $self = this; // preserve the calling context 
        
        var keys = {
            
            "backspace":8,"tab":9, "return":13, "pause":19,
            "capslock":20, "esc":27, "space":32, "pageup":33, "pagedown":34, "end":35, "home":36,
            "left":37, "up":38, "right":39, "down":40, "insert":45, "del":46,
            "num0":96, "num1":97, "num2":98, "num3":99, "num4":100, "num5":101, "num6":102, "num7":103,
            "num8":104, "num9":105, "num*":106, "num+":107, "num-":109, "num.":110, "num/":111,
            "f1":112, "f2":113, "f3":114, "f4":115, "f5":116, "f6":117,"f7":118,"f8":119,
            "f9":120, "f10":121, "f11":122,"f12":123, "numlock":144, "scroll":145, ";":186, "/":191,
            "\\":220, "'":222
        };

        var modifiers = { 'alt': 'alt', 'ctrl': 'ctrl', 'shift': 'shift' ,'cmd':'cmd'};


        for (var i = 65; i < 91; i++) {
            keys[String.fromCharCode(i).toLowerCase()] = i;
        }

        return this.each(function () {
            
            var cb, hotKeyCode = 0, modifier = "",
                settings = $.extend({
                // These are the defaults.
                key: "",
                modifier: ""
            }, options);

            // parameter checking
            if ((settings.key === "") ||
                (typeof settings.key !== "string"))
                return;

            settings.key = settings.key.toLowerCase();

            // check to make sure keymodifer is handled
            if ((settings.modifier !== "") && (typeof settings.modifier === "string")) {
                modifier = (modifiers[settings.modifier.toLowerCase()]) ? modifiers[settings.modifier.toLowerCase()] : 0;
                if (!modifier)
                    return;
            }

            // check for existance of callback function
            cb = callback;
            if (Object.prototype.toString.call(cb) != '[object Function]')
                return;
            

            // check to see if key is in captureable keys array
            hotKeyCode = (keys[settings.key]) ? keys[settings.key] : 0;
            if (!hotKeyCode)
                return;
            

            
            /* The event registration method */
            $self.keydown(function (event) {

                var keyCode = (event.which) ? event.which : event.keyCode;    // keycode attached to event

                // check for alt Key combinations
                if (((modifier == 'alt') && event.altKey) ||
                ((modifier == 'ctrl') && event.ctrlKey) ||
                ((modifier == 'shift') && event.shiftKey) ||
                ((modifier == 'cmd') && event.metaKey) ||
                (modifier === ""))
                {
                    checkAndExecute(this);
                }
                
               /*  This function handles checking the typed character against the registered hotkey
                *  and then then if there is a match calling the registered callback.            
                */
                function checkAndExecute(self) {
                    if (keyCode == hotKeyCode) {
                        cb.apply(self, arguments); // call callback
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    }
                }
            });
        });
    };


})(jQuery);
