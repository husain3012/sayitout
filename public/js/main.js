let originUrl = document.location.origin;

let username = $("#post-url-self").text();
$("#post-url-self").text(originUrl + "/post/" + username);
$("#post-url-self").attr("href", originUrl + "/post/" + username);
