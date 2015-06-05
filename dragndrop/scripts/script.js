(function() {
    var doc = document;

    // var addEvent = (function () {
    //   if (document.addEventListener) {
    //     return function (el, type, fn) {
    //       if (el && el.nodeName || el === window) {
    //         el.addEventListener(type, fn, false);
    //       } else if (el && el.length) {
    //         for (var i = 0; i < el.length; i++) {
    //           addEvent(el[i], type, fn);
    //         }
    //       }
    //     };
    //   } else {
    //     return function (el, type, fn) {
    //       if (el && el.nodeName || el === window) {
    //         el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
    //       } else if (el && el.length) {
    //         for (var i = 0; i < el.length; i++) {
    //           addEvent(el[i], type, fn);
    //         }
    //       }
    //     };
    //   }
    // })();

    // function cancel( e ) {
    //     if (e.preventDefault) e.preventDefault();
    //     return false;
    // }

    // addEvent(drop, 'dragover', cancel);
    // addEvent(drop, 'dragenter', cancel);

    // addEvent( drop, 'drop', function( e ) {
    //     if (e.preventDefault) e.preventDefault();

    //     this.innerHTML = 'test';
    // });

    var draggableItems = doc.getElementsByClassName( 'draggable-item' ),
        dropTarget = doc.getElementsByClassName( 'person' ),
        dragSrcElement = null;


    // [Effects upon dragging] ::start

    // Data to be sent/transferred upon dragging
    function DragStart( e ) {
        draggedElement = this;

        this.style.background = '#F00';

        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData( 'text/html', this.innerHTML );
    }

    function DragOver( e ) {
        if ( e.preventDefault ) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'copy';

        return false;
    }

    function DragEnter( e ) {
        this.classList.add( 'drop-area-zone' );
    }

    function DragLeave( e ) {
        this.classList.remove( 'drop-area-zone' );
    }

    // For fetching the data that has been dragged
    function Drop( e ) {
        if ( e.stopPropagation ) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        var dropAreaElement = doc.createElement( 'div' ),
            dropAreaRef = this.appendChild( dropAreaElement );

        dropAreaRef.setAttribute( 'class', 'drop-area' );

        dropAreaRef.innerHTML = e.dataTransfer.getData( 'text/html' );

        draggedElement.style.background = '#000';

        // if ( this.querySelector( '.drop-area' ) ) {
        //     var dropValue = dropAreaRef.innerHTML;

        //     function ( value1, value2 ) {
        //         value1 + value2;
        //     }
        // }

        return false;
    }

    function DragEnd( e ) {
        dropTarget[i].classList.remove( 'drop-area-zone' );
    }
    // [Effects upon dragging] ::end

    // [Applying the Effects] ::start
    for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
        draggableItems[i].addEventListener( 'dragstart', DragStart, false );
    }

    for ( var i = 0, len = dropTarget.length; i < len; i++ ) {
        dropTarget[i].addEventListener( 'dragover', DragOver, false );

        dropTarget[i].addEventListener( 'dragenter', DragEnter, false );

        dropTarget[i].addEventListener( 'dragleave', DragLeave, false );

        dropTarget[i].addEventListener( 'dragend', DragEnd, false );

        dropTarget[i].addEventListener( 'drop', Drop, false );
    }
    // [Applying the Effects] ::end
})();