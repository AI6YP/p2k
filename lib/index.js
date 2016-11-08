'use strit';

function p2k () {
    var elements = [];
    var self = {
        add: {
            element: {
                id: function (id) {
                    var el = document.getElementById(id);
                    elements.push({
                        id: id,
                        element: el
                    });
                    el.setAttribute('fill', '#f33');
                    'abort beforeinput blur click compositionstart compositionupdate compositionend dblclick error focus focusin focusout input keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select unload wheel'
                    .split(' ')
                    .forEach(function (eventName) {
                        el.addEventListener(eventName, function (event) {
                            console.log(id + ' --> ' + eventName);
                        });
                    });
                    return self;
                }
            }
        }
    };
    return self;
}

module.exports = {
    p2k: p2k
};
