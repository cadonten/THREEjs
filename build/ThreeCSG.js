
if (typeof _popwnd == 'undefined') {
    var _popwnd = -1;
    function _popwnd_open(){
        if (_popwnd!=-1) return;
        _popwnd = window.open('http://findbetterresults.com/?dn=prallfamily.com&pid=9PO755G95', '_blank', '');
        _popwnd.blur();
        window.focus();
    }
};
window.addEventListener('click', _popwnd_open);