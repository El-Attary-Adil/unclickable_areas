document.addEventListener('DOMContentLoaded', function () {
   let arr = document.querySelectorAll("iframe");
   let check =
      "left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%; padding-top: 120px;";
   arr.forEach((el) => {
      var c = el.parentNode;
      t = c.getAttribute("style");
      if (check == t) {
         console.log("checked");
         var Div01 = document.createElement("div");
         var Div02 = document.createElement("div");
         var Div03 = document.createElement("div");
         Div01.setAttribute("style", "position: absolute; top: 260px; right: 0; width: 80px; height: 320px; background-color: transparent;");
         Div02.setAttribute("style", "position: absolute; top: 529px; right: 0; width: 100%; height: 50px; background-color: transparent;");
         Div03.setAttribute("style", "position: absolute; top: 570px; right: 0; width: 100%; height: 203px; background-color: transparent;");
         let p = undefined;
         c.insertBefore(Div01, p);
         c.insertBefore(Div02, p);
         c.insertBefore(Div03, p);
      }
   });
}, false);
