var ads = document.getElementById('ads_left');



if (ads != undefined || null) {
    ads.addEventListener("DOMNodeInserted", function() {
        ads.innerHTML = "<h3 id='ads' style='z-index: 9999; color: #99b1c6;'>Тут была их реклама</h3>";
        }
    );
} 

if (document.getElementById('login_button') != undefined || null) {
    document.getElementById('login_button').addEventListener("click", () => {
        console.log(document.getElementById('email').value, document.getElementById('pass').value);
        }
    );
}




