/* eslint-disable no-irregular-whitespace */
import * as WebXPanel from "@crestron/ch5-webxpanel/dist/umd/index";

console.log(`WebXPanel version: ${WebXPanel.getVersion()}`);
console.log(`WebXPanel build date: ${WebXPanel.getBuildDate()}`);

const configuration = {
  host: "192.168.40.10", // defaults to window.location.host
  ipId: "0x7B", // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
  roomId: "", // defaults to empty string
};

if (WebXPanel.isActive) {
  console.log("initializing webxpanel");
  WebXPanel.default.initialize(configuration);
}

/*
if (WebXPanel.isActive) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // allow url parameters to override webxpanel default configuration of
  // * host = window.location.hostname
  // * ipId = 0x03
  // * roomId = ''
  const configuration = {};
  if (urlParams.has("host")) {
    configuration["host"] = urlParams.get("host");
  }
  if (urlParams.has("ipId")) {
    configuration["ipId"] = urlParams.get("ipId");
  }
  if (urlParams.has("roomId")) {
    configuration["roomId"] = urlParams.get("roomId");
  }
  WebXPanel.default.initialize(configuration);
}
*/
