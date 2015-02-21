(function() {
    var entry = [
        {
            term: "head",
            ilonggoTerm: "Ulo",
            desc: "The upper part of the human body, or the front or upper part of the body of an animal, typically separated from the rest of the body by a neck, and containing the brain, mouth, and sense organs."
        }, {
            term: "arms",
            ilonggoTerm: "Kamot",
            desc: "Each of the two upper limbs of the human body from the shoulder to the hand."
        }, {
            term: "body",
            ilonggoTerm: "Lawas",
            desc: "The physical structure, including the bones, flesh, and organs, of a person or an animal."
        }, {
            term: "legs",
            ilonggoTerm: "Paa",
            desc: "Each of the limbs on which a person or animal walks and stands."
        }, {
            term: "feet",
            ilonggoTerm: "Tiil",
            desc: "The lower extremity of the leg below the ankle, on which a person stands or walks."
        }
    ];


    // console.log(entry[0].term);
    // console.log(entry[0].ilonggoTerm);
    // console.log(entry[0].desc);
    // console.log(entry);

    var doc = document,
        liTag = doc.createElement( "li" ),
        h2Tag = doc.createElement( "h2" ),
        h3Tag = doc.createElement( "h3" ),
        pTag = doc.createElement( "p" ),
        ancTag = doc.createElement( "a" );

    var resultList = document.getElementById( 'results' ),
        // resultItem = '<li><h2 class="term"></h2><h3 class="iTerm"><h3><p class="desc"></p></li>',
        liTagRef = resultList.children,
        // ancTagRef = resultList.children,
        entryTerm = entry[0].term;
        entryIlonggoTerm = entry[0].ilonggoTerm;
        entryDesc = entry[0].desc;

    // console.log(resultItem);

    var ancTagRef = resultList.appendChild(liTag).appendChild(h2Tag).appendChild(ancTag),
        h3TagRef = liTagRef[0].appendChild(h3Tag),
        pTagRef = liTagRef[0].appendChild(pTag);

    // console.log( ancTagRef );
    // console.log( h3TagRef );
    // console.log( pTagRef );

    // console.log( ancTagRef );
    // console.log( ancTagRef.innerHTML = entryTerm + '<span> in Ilonggo is </span>' );
    ancTagRef.innerHTML = entryTerm;
    ancTagRef.setAttribute( 'href', '#' );
    h3TagRef.innerHTML = '"' + entryIlonggoTerm + '"';
    pTagRef.innerHTML = entryDesc;
})();








