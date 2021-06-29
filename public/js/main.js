function confirmDelete() {
  if (!confirm("You sure want to delete this message?")) {
    return false;
  } else {
    return true;
  }
}

if (Math.floor(Math.random() * 2)) {
 
  axios.get("https://www.reddit.com/r/pickuplines/top.json").then(response => {
    let pickuplines = response.data.data.children;
    let pickupline = pickuplines[Math.floor(Math.random() *pickuplines.length)]
    let title = pickupline.data.title;
    let selfText = pickupline.data.selftext;
$("#confession").val(title+",  "+selfText)

})
}else{
    axios.get("https://complimentr.com/api").then((response) => {
  
        $("#confession").val(response.data.compliment);
      });
}

// setting self post url

let originUrl = document.location.origin;

let username = $("#post-url-self").text();
let url = originUrl + "/post/" + username;
$("#post-url-self").text(url);
$("#post-url-self").attr("href", url);
$("#share-via-whatsapp").attr("href", "https://api.whatsapp.com/send?text=" + url);
$("#share-via-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + url);
