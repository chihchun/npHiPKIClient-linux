hipkiclient.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ hipkiclient.showFirefoxContextMenu(e); }, false);
};

hipkiclient.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-hipkiclient").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { hipkiclient.onFirefoxLoad(); }, false);
