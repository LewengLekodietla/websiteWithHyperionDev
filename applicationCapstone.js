$(function (){

    //Create an empty array to allow all clicked bookmarks to be saved in the below array variable
    let bookmarkArray = [];

    //The below code, line 7 to 11, ensures that the menu button displays the icons and has effects applied (each time it is clicked on)
    $('.hamburger_btn').click(function(){

        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    /*The below line listens to any bookmark button pressed*/
    $(".bookmark").click(function() {
    
    $(this).hide(500).show(1000);

    /*The line below stores the specific bookmark button's parent element, grabs all children of the specific
    parent and stores in the declared variable 'bookmarkArray'*/
    let itemToBeBookmarked = $(this).parent().html();
    
    //Store an element at-a-time (grabbed by code in line 11), for use later, in the Array 'bookmarkArray'    
    bookmarkArray.push(itemToBeBookmarked);
    
    //Store the array 'bookmarkArray' in localStorage - to enable retrieval for the 'save for later' webpage
    localStorage.setItem("saveForLaterFolder", JSON.stringify(bookmarkArray));

    //I have created the code in line 22 to enable the alert of how many items are saved, each time an article is boookmarked
    let displayableOnWebPage = JSON.parse(localStorage.getItem('saveForLaterFolder'));

    //Notify user of current items in the save for later folder
    alert("There are " + displayableOnWebPage.length + " items currently bookmarked in your folder.");

    });

    /*Line 38 to 42 will ensure that the comment typed in the text area will be added into the comment box each time the button 'comment' is added, a line break
    is also added to ensure that the comments are separated and distinguishable to the user. Inspired by research on Youtube: https://www.youtube.com/watch?v=vsycEiO6Itc&t=318s*/
    $('#comment').click(function(){

        let commentText = $('#input').val();
        $('.box').append(commentText + '<br>');

        //Line 44 refreshes the text input area after each input confirmation
        $('#input').val('');

        //line 47 ensures that the text area is displayed with content after each input confirmation
        $('.box-container').slideDown();
    });

    //Line 51 to 55 is a function to cancel any comments typed already
    $('#cancel').click(function(){

        //Line 53 refreshes the text input area after each cancellation confirmation
        $('#input').val('');
    });

    //Line 58 to 62 is a function to delete any comment already stored in the box
    $('#delete').click(function(){

        //Line 61 deletes the stored content, followed by line 62 which closes the text area after all content is deleted
        $('.box').text('');
        $('.box-container').slideUp();
    });

    $('.like').click(function(){

        $(this).toggleClass('heart');
    })
});

