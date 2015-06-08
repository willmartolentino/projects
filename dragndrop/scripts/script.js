(function() {
    var doc = document,
        draggableItems = doc.getElementsByClassName( 'draggable-item' ),
        dropTarget = doc.getElementsByClassName( 'drop-target' );


    // [ I: Effects upon dragging ] ::start

    // [ II: Data to be sent/transferred to the 'DROP Target ]'
    function DragStart( e ) {
        draggedElement = this;

        // this.style.background = '#CC0000';

        e.dataTransfer.effectAllowed = 'copy'; // Action for copying the dragged element's data
        e.dataTransfer.setData( 'text/html', this.innerHTML ); // Setting the dragged element's data to be transferred to the 'DROP Target'
    }


    // [ II: Necessary! Allowing the dragged Data to be dropped to the 'DROP Target' ]
    function DragOver( e ) {
        if ( e.preventDefault ) {
            e.preventDefault(); // Preventing the browser's default behavior
        }

        e.dataTransfer.dropEffect = 'copy'; // Action for copying the dragged element's data

        // draggedElement.style.background = '#471415'; // Resets the background-color of the dragged element

        return false;
    }


    // [ II: Adding the 'drop-target-zone' class to the 'DROP Target' ]
    function DragEnter( e ) {
        this.classList.add( 'drop-target-zone' );
    }


    // [ II: Removing the 'drop-target-zone' class from the 'DROP Target' ]
    function DragLeave( e ) {
        this.classList.remove( 'drop-target-zone' );
    }


    // [ II: Fetching the Data that has been dragged ]
    function Drop( e ) {
        if ( e.stopPropagation ) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        // [How the 'DROP Target' and 'Output Box' react after the data has been dropped] ::start
        var fetchedData = e.dataTransfer.getData( 'text/html' ),
            dropBox = this.querySelector( '.drop-box' ),
            fetchedDataInt = parseInt( fetchedData, 10 );

        if ( dropBox.innerHTML != '' ) {

            var currentData = parseInt( dropBox.innerHTML, 10) + fetchedDataInt;

            dropBox.innerHTML = currentData;

            // [Available Balance] ::start
            var availableBalance = doc.getElementById( 'available-balance' ),
                remainingBalance = null;

            remainingBalance = availableBalance.innerHTML - fetchedDataInt;

            availableBalance.innerHTML = remainingBalance;

            if ( availableBalance.innerHTML <= 0 ) {
                availableBalance.innerHTML = '0';
            }
            // [Available Balance] ::end

        } else {
            dropBox.innerHTML = fetchedData;

            var outputBox = doc.getElementById( 'output' ),
                outputBoxChild = outputBox.querySelector( 'p' );

            outputBoxChild.style.display = 'table-cell';
            outputBox.style.border = '1px solid #FFFF00';

            // [Available Balance] ::start
            var availableBalance = doc.getElementById( 'available-balance' ),
                remainingBalance = null;

            remainingBalance = availableBalance.innerHTML - fetchedDataInt;

            availableBalance.innerHTML = remainingBalance;
            // [Available Balance] ::end
        }
        // [How the 'DROP Target' and 'Output Box' react after the data has been dropped] ::end

        // [Output Box] ::start
        var outputAmount = doc.getElementById( 'amount' ),
            outputName = doc.getElementById( 'person' ),
            dropTargetName = this.querySelector( '.drop-name' ).innerHTML;

        outputAmount.innerHTML = fetchedData;
        outputName.innerHTML = dropTargetName;
        // [Output Box] ::end

        this.classList.remove( 'drop-target-zone' );

        // draggedElement.style.background = '#471415'; // Resets the background-color of the dragged element

        return false;
    }
    // [ I: Effects upon dragging ] ::start



    // [ I: Applying the Effects ] ::start
    for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
        draggableItems[i].setAttribute( 'draggable', 'true' ); // Important! Treating the element as draggable

        draggableItems[i].addEventListener( 'dragstart', DragStart, false );
    }

    for ( var i = 0, len = dropTarget.length; i < len; i++ ) {
        dropTarget[i].addEventListener( 'dragover', DragOver, false );

        dropTarget[i].addEventListener( 'dragenter', DragEnter, false );

        dropTarget[i].addEventListener( 'dragleave', DragLeave, false );

        dropTarget[i].addEventListener( 'drop', Drop, false );
    }
    // [ I: Applying the Effects ] ::end
})();




