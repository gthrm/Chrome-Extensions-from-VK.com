var ads = document.getElementById('ads_left');

ads.addEventListener("DOMNodeInserted", function() {
    ads.innerHTML = "<h3 id='ads' style='z-index: 9999; color: #99b1c6; text-align: center;'>Тут была их реклама</h3>";
    }
);