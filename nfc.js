export async function beginListenNfc() {
  const nfcDebug = document.querySelector("#nfcDebug");

  if (!('NDEFReader' in window)) {
    nfcDebug.innerText = "NFC not available.";
    return;
  } 

  const ndef = new NDEFReader();
  await ndef.scan().then(() => {
    nfcDebug.innerText = "Scan started successfully.";
    ndef.onreadingerror = () => {
      nfcDebug.innerText = "Cannot read data from the NFC tag. Try another one?";
    };
    ndef.onreading = event => {
      nfcDebug.innerText = "NDEF message read.";
    };
  }).catch(error => {
    nfcDebug.innerText = `Error! Scan failed to start: ${error}.`;
  });
}