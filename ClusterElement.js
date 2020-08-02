class ClusterElement{
    constructor(host, img_src, bkgd_clr, hgt, wid, trns_len, zin, x, y){
        
        //CREATE IMG
        var fill_img = document.createElement("img");
        fill_img.src = img_src;
        fill_img.style.height = "100%";
        fill_img.style.opacity = "100%";
        
        //CREATE CONATINER FOR IMG
        var html_elm = document.createElement("div");
        html_elm.style.height = hgt;
        html_elm.style.width = wid;
        html_elm.style.backgroundColor = bkgd_clr;
        html_elm.style.overflow = "hidden";
        html_elm.style.zIndex = zin;
        
        //ADD TO PAGE
        html_elm.appendChild(fill_img);
        host.appendChild(html_elm);
        html_elm.style.top = y;
        html_elm.style.left = x;
        
        flash(fill_img, trns_len);
    }
    
     
    constructor(img_src, bkgd_clr, hgt, wid, xpos, ypos){
        
    }
    
    flash(elm, trns_len){
        window.addEventListener("load", function() { elm.style.opacity = "0%";
        });
        
        elm.addEventListener("transitionend", 
                                       function() {
            if(parseInt(elm.style.opacity) == 0) {
                elm.style.opacity = "100%";
            }
            else {
                elm.style.opacity = "0%";
            }
        });
        
    }
}