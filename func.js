function showOrHidePanel(element1) {
    var panel = document.getElementById(element1);
    var rightPanel = document.getElementById('right-panel');
    if (panel.style.display !== 'block') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}




