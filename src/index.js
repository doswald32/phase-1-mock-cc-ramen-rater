document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('ramen-menu');
    fetch('http://localhost:3000/ramens')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        data.forEach(function(ramen) {
            let img = document.createElement('img');
            img.src = ramen.image;
            menu.appendChild(img);
            console.log(ramen);
            img.addEventListener('click', function() {
                let detailImg = document.querySelector('.detail-image');
                detailImg.src = ramen.image;
                let name = document.querySelector('.name');
                name.textContent = ramen.name;
                let rating = document.getElementById('rating-display');
                rating.textContent = ramen.rating;
                let comment = document.getElementById('comment-display');
                comment.textContent = ramen.comment;
                let restaurant = document.querySelector('.restaurant');
                restaurant.textContent = ramen.restaurant;
            });
        });
    });
});

let newRamen = document.getElementById('new-ramen');
newRamen.addEventListener('submit', function(e) {
    e.preventDefault();
    const menu = document.getElementById('ramen-menu');
    let img = document.createElement('img');
    let image = document.getElementById('new-image');
    img.src = image.value;
    menu.appendChild(img);
})

