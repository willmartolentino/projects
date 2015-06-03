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
        dropTarget = doc.getElementsByClassName( 'person' );


    // [Effects upon dragging] ::start
    function handleDragStart( e ) {
        this.style.background = '#F00';

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData( 'text/html', this.innerHTML );
    }

    function handleDragOver( e ) {
        if ( e.preventDefault ) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter( e ) {
        this.classList.add( 'drop-area-zone' );

        // console.log( this );
    }

    function handleDragLeave( e ) {
        this.classList.remove( 'drop-area-zone' );
    }

    function handleDrop( e ) {
        if ( e.stopPropagation ) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        var dropAreaElement = doc.createElement( 'div' ),
            dropAreaRef = this.appendChild( dropAreaElement );

        dropAreaRef.setAttribute( 'class', 'drop-area' );

        dropAreaRef.innerHTML = e.dataTransfer.getData( 'text/html' );

        // function hasSomeParentTheClass(element, classname) {
        //     if (element.className.split(' ').indexOf(classname)>=0) return true;
        //     return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
        // }

        // if ( this.hasSomeParentTheClass(  ) ) return;

        return false;
    }

    function handleDragEnd( e ) {
        draggableItems[i].classList.remove( 'drop-area-zone' );
    }
    // [Effects upon dragging] ::end

    // [Applying the Effects] ::start
    for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
        draggableItems[i].addEventListener( 'dragstart', handleDragStart, false );
    }

    for ( var i = 0, len = dropTarget.length; i < len; i++ ) {
        dropTarget[i].addEventListener( 'dragover', handleDragOver, false );

        dropTarget[i].addEventListener( 'dragenter', handleDragEnter, false );

        dropTarget[i].addEventListener( 'dragleave', handleDragLeave, false );

        dropTarget[i].addEventListener( 'dragend', handleDragEnd, false );

        dropTarget[i].addEventListener( 'drop', handleDrop, false );
    }
    // [Applying the Effects] ::end
})();