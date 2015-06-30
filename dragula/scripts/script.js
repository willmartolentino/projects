(function() {
    var doc = document,
        canvas = doc.getElementById( 'canvas' );

    // Just to check if the <canvas> tag is supported on the user's browser
    if ( canvas.getContext ) {
        var ctx = canvas.getContext( '2d' );

        ctx.fillStyle = 'rgba(200, 0, 0,)';
        ctx.fillRect( 10, 10, 55, 50 )
    } else {
        alert( '<canvas> tag is not supported on your browser' );
    }
})();