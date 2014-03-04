hoyKeys.js
=======

**Description :** jQuery plugin to quickly add hot keys to any browser page.


    .hotKey({key : keyString [,modifier : ['alt'|'ctrl'|'shift'] }], func);

    Returns : jQuery

    keyString : String representing the key to be registered.
    modifier : String representing one of 3 possible modifier keys.
    func : Callback function called when hotKey combination is pressed.


**Available Keys :**

        "backspace","tab", "return", "pause":,
        "capslock", "esc", "space":, "pageup", "pagedown", "end", "home",
        "left", "up", "right", "down", "insert", "del",
        "num0", "num1", "num2", "num3", "num4", "num5", "num6", "num7",
        "num8", "num9", "num*", "num+", "num-", "num.", "num/",
        "f1", "f2", "f3", "f4", "f5", "f6","f7","f8",
        "f9", "f10", "f11","f12", "numlock", "scroll", ";", "/",
        "\\", "'"

**Available Modifiers :** 

    1. 'ctrl'
    2. 'shift'
    3. 'alt'




Installation
-------------

Simply include jQuery 1.10+ and the hotKeys.js scripts tags to any page.


    <script type="text/javascript" src="includes/jscript/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="includes/jscript/hotKeys.js"></script>




Usage
-----
Attach a hotKey listener to any element.  If attached to the body element then every keypress on a page will be captured.

    $('#myBody').hotKey({ key: 'c', modifier: 'alt' }, doSomething);

**Example:**
Registers the 'shift + c' hot key combination and attaches it to the body tag.  When alt_+c is pressed, the function 'alertUser' is called. Also registers 'ctrl + b' to call a function which takes a parameter.



    <!doctype html>
    <html>
    <head>

        <title>Test Document</title>

        <script src="jquery-1.10.2.min.js"></script>
        <script src="hotKeys.js"></script>
        <script>
            $(function() {
                $('#myBody').hotKey({ key: 'c', modifier: 'shift' }, alertUser);
                $('#myBody').hotKey({ key: 'b', modifier: 'ctrl' }, function () {
                    alertUserWithName('Daniel');
                });
    
                function alertUser() {
                    alert('Hello HotKey user!');
                }
                   
                function alertUserWithName(p) {
                    alert('Hello ' + p.toString());
                }    
            });
        </script>  

    </head>
    <body id = "myBody">
       
    </body>
    </html>


