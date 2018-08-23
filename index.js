const client = require("discord-rich-presence")("482150417455775755");
const winprocess = require("winprocess");
var old_time = new Date();
function update () {
    let windowTitle = winprocess.getActiveWindowName();
    var pid = winprocess.getProcessId("photoshop.exe");
    if(windowTitle === "Adobe Photoshop CC 2018") {
        windowTitle = "IDLE";
    }
    else if(windowTitle.includes(".psd")) {
        windowTitle_new = windowTitle.split("@");
        windowTitle = windowTitle_new[0];
    }
    else if(pid == -1) {
        process.exit();
    }
    else {
        return windowTitle;
    }
    var new_time = old_time;
    client.updatePresence({
        details: 'CC 2018',
        state: `Editing : ${windowTitle}`,
        startTimestamp : new_time,
        largeImageKey: 'photoshop_large',
        smallImageKey : 'photoshop_small',
        largeImageText: 'Adobe Photoshop',
        smallImageText: 'Editing',
        instance: false,
      });
}
    console.log("Photoshop RichPresnce is ready ✓")
    setInterval(() => {
        update();
    },15000);
