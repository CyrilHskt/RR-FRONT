
setTimeout(() => {
    var textarea = document.getElementById("example");
    
    sceditor.create(textarea, {
        format: 'bbcode',
        style: 'minified/themes/content/default.min.css'
    });
}, 1); 