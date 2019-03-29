

var App = new function () {

    var _this = this;
    this.DIV = document.createElement("div");

    this.ICON = ["save", "edit", "delete", "add", "table", "close"];
    this.ICON_SUFFIX = ["", "--fill", "--round", "--sharp"];
//    this.ICON_SUFFIX = ["", "--fill", "--sharp"];

    this.render = function () {
        var container = document.getElementById("container");

        for (var i = 0; i < this.ICON.length; i++) {
            var icon = this.ICON[i];
            
            this.ICON_SUFFIX.forEach(function (suffix) {
                var par = _this.getDiv("flex");
                par.appendChild(_this.getDiv("flex-item", icon + suffix));
                
                var primary = _this.getDiv("flex-item");
                primary.appendChild(_this.getIconDiv(icon, suffix, "icon"));
                
                var secondary = _this.getDiv("flex-item");
                secondary.appendChild(_this.getIconDiv(icon, suffix, "icon--secondary"));
                
                par.appendChild(primary);
                par.appendChild(secondary);
                
                container.appendChild(par);
            }
            );

        }
    };

    this.getIconDiv = function (icon, suffix, iconCSS) {
        var iconDiv = this.getDiv(iconCSS, "");
        iconDiv.appendChild(this.getSVG(icon, suffix));
        return iconDiv;
    };

    this.getSVG = function (icon, suffix) {
        var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElem.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "/svg/defs.svg#icon-" + icon.toLowerCase() + suffix);
        svgElem.appendChild(useElem);
        return svgElem;
        
    };

    this.getDiv = function (css, html) {
        var div = this.DIV.cloneNode();
        css && div.classList.add(css);
        html && (div.innerHTML = html);
        return div;
    };


}


//
//<div class="flex">
//<div class="flex-item ">Save</div>
//<div class="flex-item ">
//	<div class="icon">
//		<svg role="img" title="save">
//            <use xlink:href="/svg/defs.svg#icon-save"></use></svg>
//	</div>
//</div>
//<div class="flex-item ">
//	<div class="icon icon--secondary">
//		<svg role="img" title="save">
//            <use xlink:href="/svg/defs.svg#icon-save"></use></svg>
//	</div>
//</div>
//</div>