(function() {
    var entries = [
        {
            term: "head",
            ilonggoTerm: '"Ulo"',
            desc: "The upper part of the human body, or the front or upper part of the body of an animal, typically separated from the rest of the body by a neck, and containing the brain, mouth, and sense organs."
        }, {
            term: "arms",
            ilonggoTerm: '"Kamot"',
            desc: "Each of the two upper limbs of the human body from the shoulder to the hand."
        }, {
            term: "body",
            ilonggoTerm: '"Lawas"',
            desc: "The physical structure, including the bones, flesh, and organs, of a person or an animal."
        }, {
            term: "legs",
            ilonggoTerm: '"Paa"',
            desc: "Each of the limbs on which a person or animal walks and stands."
        }, {
            term: "feet",
            ilonggoTerm: '"Tiil"',
            desc: "The lower extremity of the leg below the ankle, on which a person stands or walks."
        }, {
            term: "dog",
            ilonggoTerm: '"Ido"',
            desc: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractile claws, and a barking, howling, or whining voice."
        }, {
            term: "cat",
            ilonggoTerm: '"Kuring"',
            desc: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws."
        }, {
            term: "mouse",
            ilonggoTerm: '"Ilaga"',
            desc: "a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail."
        }, {
            term: "lizard",
            ilonggoTerm: '"Tiki"',
            desc: "a reptile that typically has a long body and tail, four legs, movable eyelids, and a rough, scaly, or spiny skin."
        }, {
            term: "snake",
            ilonggoTerm: '"Man-og"',
            desc: "A long limbless reptile which has no eyelids, a short tail, and jaws that are capable of considerable extension."
        }, {
            term: "happy",
            ilonggoTerm: '"Malipayon"',
            desc: "Feeling or showing pleasure or contentment."
        }, {
            term: "sad",
            ilonggoTerm: '"Kasubo"',
            desc: "Feeling or showing sorrow; unhappy."
        }, {
            term: "angry",
            ilonggoTerm: '"Akig"',
            desc: "Feeling or showing strong annoyance, displeasure, or hostility; full of anger."
        }, {
            term: "lonely",
            ilonggoTerm: '"Gaisahanon"',
            desc: "Sad because one has no friends or company."
        }, {
            term: "scared",
            ilonggoTerm: '"Kulba-an"',
            desc: "Fearful; frightened."
        }, {
            term: "plant",
            ilonggoTerm: '"Tanom"',
            desc: "A living organism of the kind exemplified by trees, shrubs, herbs, grasses, ferns, and mosses."
        }, {
            term: "river",
            ilonggoTerm: '"Suba"',
            desc: "A large natural stream of water flowing in a channel to the sea, a lake, or another river."
        }, {
            term: "bird",
            ilonggoTerm: '"Pispis"',
            desc: "A warm-blooded egg-laying vertebrate animal distinguished by the possession of feathers, wings, a beak, and typically by being able to fly."
        }, {
            term: "bat",
            ilonggoTerm: '"Kulunatnit"',
            desc: "A mainly nocturnal mammal capable of sustained flight, with membranous wings that extend between the fingers and limbs."
        }, {
            term: "ant",
            ilonggoTerm: '"Subay"',
            desc: "A small insect typically having a sting and living in a complex social colony with one or more breeding queens."
        }, {
            term: "food",
            ilonggoTerm: '"Pagkaon"',
            desc: "Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth."
        }, {
            term: "chair",
            ilonggoTerm: '"Pulungkuan"',
            desc: "A separate seat for one person, typically with a back and four legs."
        }, {
            term: "bed",
            ilonggoTerm: '"Hiligdaan"',
            desc: "A piece of furniture for sleep or rest, typically a framework with a mattress."
        }, {
            term: "rest",
            ilonggoTerm: '"Pahuway"',
            desc: "Cease work or movement in order to relax, sleep, or recover strength."
        }, {
            term: "walk",
            ilonggoTerm: '"Lakat"',
            desc: "Move at a regular pace by lifting and setting down each foot in turn, never having both feet off the ground at once."
        }, {
            term: "run",
            ilonggoTerm: '"Dalagan"',
            desc: "Move at a speed faster than a walk, never having both or all the feet on the ground at the same time."
        }, {
            term: "fast",
            ilonggoTerm: '"Madasig"',
            desc: "Moving or capable of moving at high speed."
        }, {
            term: "slow",
            ilonggoTerm: '"Mahinay"',
            desc: "Moving or operating, or designed to do so, only at a low speed; not quick or fast."
        }, {
            term: "jump",
            ilonggoTerm: '"Lumpat"',
            desc: "Push oneself off a surface and into the air by using the muscles in one's legs and feet."
        }, {
            term: "eat",
            ilonggoTerm: '"Kaon"',
            desc: "Put (food) into the mouth and chew and swallow it."
        }
    ];

    var doc = document;

    for (var i = 0, len = entries.length; i < len; i++) {
        var entry = entries[i],
            resultList = doc.getElementById( 'result' ),
            liTag = doc.createElement( "li" ),
            h2Tag = doc.createElement( "h2" ),
            aTag = doc.createElement( "a" ),
            h3Tag = doc.createElement( "h3" ),
            pTag = doc.createElement( "p" ),
            liTagRef = resultList.appendChild( liTag ),
            h2TagRef = liTagRef.appendChild( h2Tag ),
            h3TagRef = liTagRef.appendChild( h3Tag ),
            pTagRef = liTagRef.appendChild( pTag ),
            aTagRef = h2TagRef.appendChild( aTag );

        h2TagRef.setAttribute( 'class', 'hd-2' );
        aTagRef.setAttribute( 'id', 'hd-link' );
        aTagRef.setAttribute( 'class', 'hd-link' );
        aTagRef.setAttribute( 'href', '#' );
        aTagRef.innerHTML = entry.term;
        h3TagRef.setAttribute( 'id', 'hd-3' );
        h3TagRef.setAttribute( 'class', 'hd-3' );
        h3TagRef.innerHTML = entry.ilonggoTerm;
        pTagRef.setAttribute( 'id', 'desc' );
        pTagRef.setAttribute( 'class', 'desc' );
        pTagRef.innerHTML = entry.desc;
    }

    var hdLinks = doc.getElementsByClassName( 'hd-link' );

    for ( var i = 0, len = hdLinks.length; i < len; i++ ) {
        hdLinks[i].addEventListener( 'click', function() {
            var liTagRef = this.parentElement.parentElement,
                resultItems = doc.getElementById( 'result' ).children;

            liTagRef.setAttribute( 'class', 'active' );
            for ( var i = 0, len = resultItems.length; i < len; i++) {
                resultItem = resultItems[i];
                resultItem.setAttribute( 'style', 'display: none' );
                liTagRef.setAttribute( 'style', 'display: block' );
            }
        } );
    }


    var form = doc.getElementById( 'search-form' ),
        inputField = doc.getElementById( 'search-field' ),
        searchBtn = form.submit;

        searchBtn.addEventListener( 'click', function() {
            if ( inputField.value ==  doc.getElementsByClassName( 'hd-link' )[0].innerHTML ) {
                // alert( true );
            }
        } );

    console.log(inputField);
})();








