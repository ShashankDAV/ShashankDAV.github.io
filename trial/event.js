      function add_event_calender(){
            var message = "";
            var wish = false;
            var color = "";
            
            var div = document.createElement("div");
            div.style.height = "700";
            div.style.background = "white";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.style.position = "fixed";
            div.style.marginLeft = '180';
            div.style.transition = "all 2s";
            div.style.top = "-180%";
            div.style.zIndex = "1";
            
            div.id = "wish";
            
            var p = document.createElement("p");
            
            var rope = document.createElement("div");
            rope.style.width = "20";
            rope.style.height = "300";
            rope.style.transform = "translateY(-225px)";
            rope.style.background = "gold";
            rope.style.position = "fixed";
            
            var date = new Date().toDateString();
            if (date.includes("Jan 01") || date.includes("Jan 02") || date.includes("Jan 03")){
                  message = "Happy New Year";
                  wish = true;
                  color = "gold";
            }
            p.innerHTML = message;
            p.style.color = color;
            p.style.fontFamily = "cursive";
            p.style.fontSize = "80";
            p.style.fontWeight = '999';
            p.style.padding = "25";
            p.style.border = "10px solid";
            p.style.borderRadius = "15px";
            p.style.boxShadow = "10px 10px 10px black";
            p.style.textShadow = "10px 10px 10px black";
            
            if (wish){
                    div.appendChild(rope);
                    div.appendChild(p);
                    document.querySelector("body").appendChild(div);
                    div.style.top = 0;
            }
      }
