const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];


window.onload=function () {
    let item = new Array(4);
    let e=document.getElementsByClassName("flex-container");
    for(let i=0;i<4;i++) {
        item[i] = document.createElement("div");
        item[i].className="item";

        let header=document.createElement("h2");
        header.innerHTML=countries[i].name;

        let sideheader=document.createElement("h3");
        sideheader.innerHTML=countries[i].continent;

        let cities=document.createElement("div");
        cities.className="inner-box";

        let smallHeader=document.createElement("h3")
        smallHeader.innerHTML="Cities"
        let ul=document.createElement("ul");
        for(let counter=0;counter<countries[i].cities.length;counter++){
            let li=document.createElement("li")
            li.innerHTML=countries[i].cities[counter];
            ul.appendChild(li);
        }
        cities.appendChild(smallHeader);
        cities.appendChild(ul);

        let pictures=document.createElement("div")
        pictures.className="inner-box";
        let smallheader2=document.createElement("h3")
        pictures.appendChild(smallheader2)
        for (let counter=0; counter<countries[i].photos.length; counter++){
            let pic=document.createElement("img")
            pic.className="photo";
            pic.src="images/"+countries[i].photos[counter];
            pictures.appendChild(pic)
        }

        let button=document.createElement("button")
        button.innerHTML="Visit";

        item[i].appendChild(header);
        item[i].appendChild(sideheader);
        item[i].appendChild(cities);
        item[i].appendChild(pictures);
        item[i].appendChild(button);

        e[0].appendChild(item[i]);
    }
}

