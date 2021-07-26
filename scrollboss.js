/*
Name: ScrollBoss
Developed by: Rohit Chouhan
Link: https://github.com/rohit-chouhan/scrollboss
*/
var scrollboss = {
    getcl: function(value) {
        var mycolor = '';
        if (value == 'primary') {
            mycolor = "#0275d8";
        } else if (value == 'success') {
            mycolor = "#5cb85c";
        } else if (value == 'info') {
            mycolor = "#5bc0de";
        } else if (value == 'warning') {
            mycolor = "#f0ad4e";
        } else if (value == 'danger') {
            mycolor = "#d9534f";
        } else if (value == 'dark') {
            mycolor = "#292b2c";
        } else if (value == 'light') {
            mycolor = "#f7f7f7";
        } else {
            mycolor = value;
        }
        return mycolor
    },
    apply: function(value) {
        cl = this.getcl(value.color)
        width = value.width;
        radius = value.radius;
        shadow = value.shadow;
        clbg = value.background;

        if (value.background == 'primary') {
            clbg = "#0275d8";
        } else if (value.background == 'success') {
            clbg = "#5cb85c";
        } else if (value.background == 'info') {
            clbg = "#5bc0de";
        } else if (value.background == 'warning') {
            clbg = "#f0ad4e";
        } else if (value.background == 'danger') {
            clbg = "#d9534f";
        } else if (value.background == 'dark') {
            clbg = "#292b2c";
        } else if (value.background == 'light') {
            clbg = "#f7f7f7";
        } else {
            clbg = value.background;
        }

        if (width == '') {
            width = 10;
        }

        if (radius == '') {
            radius = 10;
        }
        if (shadow == '') {
            shadow = 0;
        }
        //---------------------------------
        var final = `<style>
            ::-webkit-scrollbar {
            width: ` + width + `px;
            }
            ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 ` + shadow + `px grey; 
            border-radius: ` + radius + `px;
            background: ` + clbg + `; 
            }
            ::-webkit-scrollbar-thumb {
            background: ` + cl + `; 
            border-radius: ` + radius + `px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: ` + cl.concat("b0") + `; 
            }
            </style>`;
        //---------------------------------------
        document.head.insertAdjacentHTML("beforeend", final)
    }
}
