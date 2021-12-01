$(document).ready(function() {


    var categories = [
        ["од"],
        ["сүүдэр"],
        ["мөөг"],
        ["аалз"],
        ["ном"],
        ["чихэр"],
        ["бяслаг"],
        ["дээл"],
        ["тэнгэр"],
        ["тарвага"]
    ];


    var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
    var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
    console.log(randomWord);
    var randomWordArray = randomWord.split("");


    if ($.inArray("од", randomCategoryArray) > -1) {
        $(".category").text("Үдэш ургасан цэцэг, Өглөө босоход хагдарна. Тэр юу вэ?");
    } else if ($.inArray("сүүдэр", randomCategoryArray) > -1) {
        $(".category").text("Нартай өдөр хоёулаа, Наргүй өдөр хоёулаа, Сартай өдөр хоёулаа, Саргүй өдөр хоёулаа. Тэр юу вэ?");
    } else if ($.inArray("мөөг", randomCategoryArray) > -1) {
        $(".category").text("Шавар шаахайтай, Шаазан малгайтай. Тэр юу вэ?");
    } else if ($.inArray("аалз", randomCategoryArray) > -1) {
        $(".category").text("Амандаа аргамж чирч, Тоонондоо тор нэхнэ. Тэр юу вэ?");
    } else if ($.inArray("ном", randomCategoryArray) > -1) {
        $(".category").text("Хүн биш байтлаа хэлтэй, Хүүдий биш байтлаа оёдолтой. Тэр юу вэ?");
    } else if ($.inArray("чихэр", randomCategoryArray) > -1) {
        $(".category").text("Жимсэн хүү, Цаасан өлгийтэй. Тэр юу вэ?");
    } else if ($.inArray("бяслаг", randomCategoryArray) > -1) {
        $(".category").text("Өөхөн цагаан, Өөгүй дөрвөлжин. Тэр юу вэ?");
    } else if ($.inArray("дээл", randomCategoryArray) > -1) {
        $(".category").text("Гартай байж хөлгүй, Хүзүүтэй байж толгойгүй. Тэр юу вэ?");
    } else if ($.inArray("тэнгэр", randomCategoryArray) > -1) {
        $(".category").text("Хөх торгыг, Хөвж гүйцэхгүй. Тэр юу вэ?");
    } else {
        $(".category").text("Газар доор, Гантай шар тос. Тэр юу вэ?");
    }



	for(var i = 0; i < randomWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "#4ABDAC");
    }

	
    var wrongGuesses = 0;
    $("button").on("click", function(){
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
            }
        }

        
        var goodGuesses = [];
        $(".letter").each(function( index ) {
            if ( $(this).hasClass("winner") ) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("Хөөх мундаг юм аа. Баяр хүргэе!");
                    $(".category").append("<br><button enabled class='play-again'>Дахиад тоглох уу?</button>");
                }
            }
        });

        
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
        }

        
        if (wrongGuesses === 5) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Өө та хожигдчихлоошдээ. Зөв хариулт бол " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Дахиад тоглох уу?</button>");
        }

        
        $(".play-again").on("click", function(){
            location.reload();
        });

    });

});



// $(document).ready(function() {


//     var categories = [
//         ["од"],
//         ["сүүдэр"],
//         ["мөөг"],
//         ["аалз"],
//         ["бяслаг"],
//         ["дээл"],
//         ["тэнгэр"],
//         ["тарвага"]
//     ];


//     var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
//     var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
//     console.log(randomWord);
//     var randomWordArray = randomWord.split("");


//     if ($.inArray("од", randomCategoryArray) > -1) {
//         $(".category").text("Үдэш ургасан цэцэг, Өглөө босоход хагдарна. Тэр юу вэ?");
//     } else if ($.inArray("сүүдэр", randomCategoryArray) > -1) {
//         $(".category").text("Нартай өдөр хоёулаа, Наргүй өдөр хоёулаа, Сартай өдөр хоёулаа, Саргүй өдөр хоёулаа. Тэр юу вэ?");
//     } else if ($.inArray("мөөг", randomCategoryArray) > -1) {
//         $(".category").text("Шавар шаахайтай, Шаазан малгайтай. Тэр юу вэ?");
//     } else if ($.inArray("аалз", randomCategoryArray) > -1) {
//         $(".category").text("Амандаа аргамж чирч, Тоонондоо тор нэхнэ. Тэр юу вэ?");
//     } else if ($.inArray("бяслаг", randomCategoryArray) > -1) {
//         $(".category").text("Өөхөн цагаан, Өөгүй дөрвөлжин. Тэр юу вэ?");
//     } else if ($.inArray("дээл", randomCategoryArray) > -1) {
//         $(".category").text("Гартай байж хөлгүй, Хүзүүтэй байж толгойгүй. Тэр юу вэ?");
//     } else if ($.inArray("тэнгэр", randomCategoryArray) > -1) {
//         $(".category").text("Хөх торгыг, Хөвж гүйцэхгүй. Тэр юу вэ?");
//     } else {
//         $(".category").text("Газар доор, Гантай шар тос. Тэр юу вэ?");
//     }



//     for(var i = 0; i < randomWord.length; i++) {
//         $('#container').append('<div class="letter ' + i + '"></div>');
//         $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
//         $(".letter").css("color", "#4ABDAC");
//     }

    
//     var wrongGuesses = 0;
//     $("button").on("click", function(){
//         $(this).addClass("used");
//         $(this).prop("disabled", "true");
//         var matchFound = false;

        
//         var userGuess = $(this).text();
//         for (var i = 0; i < randomWord.length; i++) {
//             if (userGuess === randomWord.charAt(i)) {
//                 $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
//                 matchFound = true;
//             }
//         }

        
//         var goodGuesses = [];
//         $(".letter").each(function( index ) {
//             if ( $(this).hasClass("winner") ) {
//                 goodGuesses.push(index);
//                 if (goodGuesses.length === randomWordArray.length) {
//                     $("#container").hide();
//                     $("button").prop("disabled", "true");
//                     $(".category").text("Хөөх мундаг юм аа. Баяр хүргэе!");
//                     $(".category").append("<br><button enabled class='play-again'>Дахиад тоглох уу?</button>");
//                 }
//             }
//         });

        
//         if (matchFound === false) {
//             wrongGuesses += 1;
//             $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
//         }

        
//         if (wrongGuesses === 5) {
//             $("#container").hide();
//             $("button").prop("disabled", "true");
//             $(".category").text("Өө та хожигдчихлоошдээ. Зөв хариулт бол " + randomWord);
//             $(".category").append("<br><button enabled class='play-again'>Дахиад тоглох уу?</button>");
//         }

        
//         $(".play-again").on("click", function(){
//             location.reload();
//         });

//     });

// });