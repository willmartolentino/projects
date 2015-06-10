(function() {
    var doc = document,
        draggableItems = doc.getElementsByClassName( 'draggable-item' ),
        dropTarget = doc.getElementsByClassName( 'drop-target' ),
        availableBalance = doc.getElementById( 'available-balance' ),
        availableBalanceValue = parseInt( availableBalance.innerHTML, 10 ),
        balanceContainer = doc.getElementById( 'balance-container' ),
        setData = balanceContainer.appendChild( doc.createElement( 'span' ) );

    // [ I: Effects upon dragging ] ::start

    // [ II: Data to be sent/transferred to the 'DROP Target ]'
    function iDragStart( e ) {
        var dt = e.dataTransfer,
            draggedElement = this;

        // this.style.cursor = 'grabbing';

        dt.effectAllowed = 'copy'; // Action for copying the dragged element's data
        dt.setData( 'text/plain', this.innerHTML ); // Setting the dragged element's data to be transferred to the 'DROP Target'
        dt.setData( 'text/html', this.innerHTML ); // Setting the dragged element's data to be transferred to the 'DROP Target'

        setData.style.display = 'inline'; // Default display of the appended span tag
        setData.innerHTML = ' - ' + draggedElement.innerHTML; // Fetched the dragged element value and transfer it to the span tag
    }


    // [ II: Necessary! Allowing the setData to be dropped to the 'DROP Target' ]
    function iDragOver( e ) {
        if ( e.preventDefault ) {
            e.preventDefault(); // Preventing the browser's default behavior
        }

        e.dataTransfer.dropEffect = 'copy'; // Action for copying the dragged element's data

        return false;
    }


    // [ II: Adding the 'drop-target-zone' class to the 'DROP Target' when mouseover ]
    function iDragEnter( e ) {
        this.classList.add( 'drop-target-zone' );
    }


    // [ II: Removing the 'drop-target-zone' class from the 'DROP Target' when mouseleave ]
    function iDragLeave( e ) {
        this.classList.remove( 'drop-target-zone' );
    }


    // [ II: Fetching the setData ]
    function iDrop( e ) {
        if ( e.stopPropagation || e.preventDefault ) {
            e.stopPropagation(); // Stops some browsers from redirecting.
            e.preventDefault(); // Preventing the browser's default behavior; especially in Firefox
        }

        // [How the 'DROP Target' and 'Output Box' react after the data has been dropped] ::start
        var fetchedData = e.dataTransfer.getData( 'text/plain' ), // 'Fetched Data'
            fetchedDataInt = parseInt( fetchedData, 10 ), // Parse 'Fetched Data' to become an integer
            dropBox = this.querySelector( '.drop-box' );

        if ( dropBox.innerHTML == '' ) {
            var outputBox = doc.getElementById( 'output' ),
                outputBoxChild = outputBox.querySelector( 'p' ),
                remainingBalance = parseInt( availableBalance.innerHTML, 10 ) - fetchedDataInt;

            dropBox.innerHTML = fetchedData;

            // [Available Balance] ::start
            availableBalance.innerHTML = remainingBalance;

            // Check if the available balance is equal or less than zero
            if ( availableBalance.innerHTML <= 0 ) {
                availableBalance.innerHTML = '0';
            }

            // Check if the available balance value is less than the draggable items value, if so, disable the draggable items that have the higher value
            for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
                if ( parseInt( availableBalance.innerHTML, 10 ) < parseInt( draggableItems[i].innerHTML ) ) {
                    draggableItems[i].style.opacity = '0.3';
                    draggableItems[i].style.cursor = 'default';
                    draggableItems[i].setAttribute( 'draggable', 'false' );
                }
            }
            // [Available Balance] ::end

            outputBoxChild.style.display = 'table-cell';
            outputBox.style.border = '1px solid #FFFF00';
        } else {
            var currentData = parseInt( dropBox.innerHTML, 10) + fetchedDataInt;

            dropBox.innerHTML = currentData;

            // [Available Balance] ::start
            var remainingBalance = availableBalance.innerHTML - fetchedDataInt;

            availableBalance.innerHTML = remainingBalance;
            // [Available Balance] ::end

            // Check if the available balance value is less than the draggable items value, if so, disable the draggable items that have the higher value
            for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
                if ( parseInt( availableBalance.innerHTML, 10 ) < parseInt( draggableItems[i].innerHTML ) ) {
                    draggableItems[i].style.opacity = '0.3';
                    draggableItems[i].style.cursor = 'default';
                    draggableItems[i].setAttribute( 'draggable', 'false' );
                }
            }
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

        return false;
    }


    // [ II: Finishing a Drag ]
    function iDragEnd( e ) {
        setData.style.display = 'none'; // Removes the setData
    }

    // [ I: Effects upon dragging ] ::start



    // [ I: Applying the Effects ] ::start

    // [II: For the draggable items] ::start
    for ( var i = 0, len = draggableItems.length; i < len; i++ ) {
        var draggableItemsValue = parseInt( draggableItems[i].innerHTML, 10 );

        // Check if the available balance value is less than the draggable items value, if so, disable the draggable items that have the higher value
        if ( availableBalanceValue < draggableItemsValue ) {
            draggableItems[i].style.opacity = '0.3';
            draggableItems[i].style.cursor = 'default';
            draggableItems[i].setAttribute( 'draggable', 'false' );
        } else {
            draggableItems[i].setAttribute( 'draggable', 'true' ); // Important! Treating the element as draggable
        }

        draggableItems[i].addEventListener( 'dragstart', iDragStart, false );

        draggableItems[i].addEventListener( 'dragend', iDragEnd, false );
    }
    // [II: For the draggable items] ::end

    // [II: For the 'DROP Target'] ::start
    for ( var i = 0, len = dropTarget.length; i < len; i++ ) {
        dropTarget[i].addEventListener( 'dragover', iDragOver, false );

        dropTarget[i].addEventListener( 'dragenter', iDragEnter, false );

        dropTarget[i].addEventListener( 'dragleave', iDragLeave, false );

        dropTarget[i].addEventListener( 'drop', iDrop, false );
    }
    // [II: For the 'DROP Target'] ::end

    // [ I: Applying the Effects ] ::end
})();




