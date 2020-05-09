const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
str = "<div class=\"item\">\n" +
    "    <h4>Title</h4>\n" +
    "    <div class=\"inner-box justify\">\n" +
    "        <h3>Author</h3>\n" +
    "        <h2>lifetime</h2>\n" +
    "    </div>\n" +
    "    <div class=\"inner-box\">\n" +
    "        <h3>Popular Photos</h3>\n" +
    "        <img src=\"human1.jpg\" class=\"photo\" alt=\"human1\">\n" +
    "        <img src=\"human2.jpg\" class=\"photo\" alt=\"human2\">\n" +
    "        <img src=\"human3.jpg\" class=\"photo\" alt=\"human3\">\n" +
    "        <button>Visit</button>\n" +
    "    </div>\n" +
    "</div>";
// document.write(str);
for (let work of works){
    console.log(work);
    let itemDiv = document.createElement('div');
    itemDiv.className="item";
    let title = document.createElement('h4');
    title.innerHTML = work.tips;
    let box1 = document.createElement('div');
    box1.className = "inner-box justify";
    let authorName = document.createElement('h3');
    authorName.innerHTML=work.author+"&nbsp&nbsp&nbsp";
    authorName.style.display = "inline";
    let lifetime = document.createElement('h2');
    lifetime.innerHTML = "lifetime: " + work.lifetime;
    lifetime.style.display = "inline";
    box1.appendChild(authorName);
    box1.appendChild(lifetime);
    let box2 = document.createElement('div');
    box2.className = "inner-box";
    let photoTitle = document.createElement('h3');
    photoTitle.innerHTML = "Popular Photos";
    box2.appendChild(photoTitle);
    for (let img of work.photos) {
        let imageElement = document.createElement('img');
        imageElement.alt = 'img';
        imageElement.src = img;
        imageElement.className = "photo";
        box2.appendChild(imageElement);
    }
    itemDiv.appendChild(title);
    itemDiv.appendChild(box1);
    itemDiv.appendChild(box2);
    let button = document.createElement('button');
    button.innerHTML = 'visit';
    itemDiv.appendChild(button);
    document.body.appendChild(itemDiv);

}