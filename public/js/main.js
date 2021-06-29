let originUrl = document.location.origin;

let username = $("#post-url-self").text();
let url = originUrl + "/post/" + username;
$("#post-url-self").text(url);
$("#post-url-self").attr("href", url);
$("#share-via-whatsapp").attr("href","https://api.whatsapp.com/send?text=" + url )
$("#share-via-facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u=" + url )
