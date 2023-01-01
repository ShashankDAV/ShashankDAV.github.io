function toast(div , mes , link , text) {
      var co = localStorage.getItem("cookie");
      var g = 0;
      if (co=="accepted"){
           g = g++;
      }
      else{
           var ele = document.querySelector(div);
           ele.style.width = "100%";
           ele.style.height = "auto";
           ele.style.padding = "10px"
           ele.style.background = "lightgrey";
           ele.style.position = "fixed";
           ele.style.fontSize = "35";
           ele.style.bottom = "0px";
           var heading = document.createElement("p");
           heading.innerHTML = mes;
           heading.style.marginLeft = "25px";
           ele.appendChild(heading);
           var button = document.createElement("button");
           button.innerHTML = "Accept all cookies";
           button.style.fontSize = "35";
           button.style.padding = "10";
           button.style.marginLeft = "25px";
           button.setAttribute("onclick", "accept()");
           ele.appendChild(button);
      }
}
function accept() {
      let ele = document.querySelector(".cookie");
      ele.style.display = "none";
      localStorage.setItem("cookie","accepted");
      }
