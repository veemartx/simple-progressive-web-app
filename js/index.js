// listen to online offline changes 
window.addEventListener('offline', (e) => {

    console.log('offline');

    $('.onlineMessage').hide('10');


    $('.offlineMessage').slideDown();



})

window.addEventListener('online', (e) => {

    console.log('online');

    $('.offlineMessage').hide('10');


    $('.onlineMessage').slideDown();

    setTimeout(function(){
        console.log('ala')
    }, 200)


})