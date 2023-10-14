/*Lines 3 to 9 will ensure that the articles, stored in localStorage - enabled by file: 'applicationCapstone.js,'
are stored into variable 'retrievalOfItems' for the purpose of being displayed on the webpage. See line 7*/
$(function (){

    let retrievalOfItems = JSON.parse(localStorage.getItem('saveForLaterFolder'));
    
    $('#savedListItemsUnordered').append(retrievalOfItems).slideUp(1000).slideDown(1000);

    //The below lines of code, 10 to 14, are to ensure that the menu button illustrates is dynamacy of the 
    $('.hamburger_btn').click(function(){

        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    //The below line is to hide the bookmark icons specifically on the saveForLaterWebpage only.
    $('.bookmark').hide();

});