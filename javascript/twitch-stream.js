$(document).ready(function(){
    var json = {}
    var data = $.ajax({
    url: "https://api.twitch.tv/helix/streams/?user_login=MrRiptideTV",
        dataType: "json",
    headers: {"Client-ID": "iyy7qllegre2lxg5v1nh359o4hvpec"},
        complete: function(data){
            json = $.parseJSON(data.responseText);
            if (json["data"] != "") {
                var body = document.getElementsByTagName("body")[0];

                var main_div = document.createElement("div");

                body.appendChild(main_div);
                main_div.style.width = "25%";
                main_div.style.height = "35%";
                main_div.style.minWidth = "350px";
                main_div.style.minHeight = "200px";
                main_div.style.backgroundColor = "#4b367c";
                main_div.style.padding = "5px";
                main_div.style.position = "fixed";
                main_div.style.bottom = 0;
                main_div.style.left = 0;
                main_div.style.opacity = 0.75;
                main_div.style.borderRadius = "5px";

                var top_div = document.createElement("div");
                top_div.style.width = "100%";
                top_div.style.height = "15%";

                var text_element = document.createElement("embed_title");
                var text = document.createTextNode("MrRiptide is LIVE!");
                text_element.appendChild(text);
                text_element.style.fontSize = "1.75em";
                text_element.style.float = "left";
                top_div.appendChild(text_element);

                var close_element = document.createElement("button");
                var close = document.createTextNode("×");
                close_element.className = "close";
                close_element.style.fontSize = "1.6em";
                close_element.style.padding = "2px 5px";
                close_element.style.color = "white";
                close_element.style.backgroundColor = "#362659"
                close_element.style.border = "none";
                close_element.style.borderRadius = "5px";
                close_element.appendChild(close);
                close_element.addEventListener("click", function(){
                        body.removeChild(main_div);
                        return false;
                    });
                close_element.style.float = "right";
                var css = '.close:hover { background-color: #30224f }';
                var style = document.createElement('style');

                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                document.getElementsByTagName('head')[0].appendChild(style);
                top_div.appendChild(close_element);
                main_div.appendChild(top_div);

                var embed = document.createElement("embed");
                embed.style.width = "100%";
                embed.style.height = "85%";
                embed.setAttribute("src", "https://player.twitch.tv/?channel=MrRiptideTV");
                main_div.appendChild(embed);
            }
        }
    });
});
