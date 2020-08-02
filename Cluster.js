var img_list = ["butterfly.jpeg", "field.jpeg", "flower.jpeg", "fruit.jpeg"]; 
var clr_list = ["dimgrey", "black", "ghostwhite", "grey"];
var hgt = [75, 125, 125, 175];
var wid = [75, 125, 125, 175];
var xpos = [70, 200, 120, 215];
var ypos = [190, 20,100, 160];


class Cluster{

    constructor(html_elm){
        this.html_elm = html_elm;
    }

    addElements() {
        var host = this.html_elm;
        img_list.forEach(function(item, index) {
            //RANDOM SPEED
            var spd = parseInt((Math.random() * 15) + 5) / 10;
            
            //RANDOM LAYER/ZINDEX
            var z = parseInt(Math.random() * img_list.length) + 1; 
            
            var new_elm = new ClusterElement(host, "Images/" + img_list[index], clr_list[index], hgt[index], wid[index], xpos[index], ypos[index], z, spd);
            
            new_elm.flash(); //ADD LISTENER FOR FLASH
        });
    }
}
class ClusterElement{
    constructor(host, img, bkgd_clr, hgt, wid, x, y, zin, trns_len){

        //CREATE IMG
        var fill_img = document.createElement("img");
        fill_img.src = img;
        fill_img.style.width = "100%";
        fill_img.style.objectFit = "cover";
        fill_img.style.opacity = "100%";
        fill_img.style.transition = "opacity " + trns_len + "s";
        fill_img.style.transitionTimingFunction = "linear";

        //CREATE CONATINER FOR IMG
        var html_elm = document.createElement("div");
        html_elm.style.height = hgt;
        html_elm.style.width = wid;
        html_elm.style.backgroundColor = bkgd_clr;
        html_elm.style.overflow = "hidden";
        html_elm.style.zIndex = zin;
        html_elm.style.position = "absolute";

        //ADD TO PAGE
        html_elm.appendChild(fill_img);
        host.appendChild(html_elm);
        fill_img.style.height = window.getComputedStyle(html_elm).height;
        
 
        //POSITION HTML ELM IN HOST
        host.style.position = "relative";
        html_elm.style.top = y;
        html_elm.style.left = x;
        
        //STORE IMG ELEMENT
        this.img = fill_img;
    }

    //INITIATE TRASITION
    //INFLUENCE BACKAND FORTH
    flash(){
        var elm = this.img;
     elm.addEventListener("transitionend", function() {
            if(parseInt(elm.style.opacity) == 0) elm.style.opacity = "100%";
            else elm.style.opacity = "0%";
        });
        elm.style.opacity = "0%";
}
}

window.addEventListener("load", function() {
                        var c = document.getElementById("cluster_here");
    c = new Cluster(c);
    c.addElements();

});