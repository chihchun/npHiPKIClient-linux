var hipkiclient = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("hipkiclient-strings");
  },

  onMenuItemCommand: function(e) {
    window.top.getBrowser().loadURI("http://moica.nat.gov.tw/html/index.htm");
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    hipkiclient.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { hipkiclient.onLoad(); }, false);
