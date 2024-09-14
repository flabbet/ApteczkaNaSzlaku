async function writeTag() {
    let debugInfo = document.getElementById("debugInfo");
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      
      debugInfo.innerText = "Writing...";
      ndef.write({
        records: [{ recordType: "url", data: "https://w3c.github.io/web-nfc/" }]
      }).then(() => {
        debugInfo.innerText = "Message written.";
      }).catch(error => {
        debugInfo.innerText = "Write error: " + error;
      });

    } else {
      debugInfo.innerText = "Web NFC is not supported.";
    }
  }

  
  setTimeout(writeTag, 1000);
  writeTag();