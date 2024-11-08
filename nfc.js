let cancelSignal = null;

export function cancelListenNfc() {
  if (cancelSignal) {
    cancelSignal.abort();
  }
}

export async function beginListenNfc(callbackPositive) {
  const nfcDebug = document.querySelector("#nfc-debug");


  if (!('NDEFReader' in window)) {
    nfcDebug.innerText = "Twoje urządzenie nie obsługuje NFC. Wpisz swój numer telefonu na klawiaturze obok apteczki.";
    return;
  } 

  const ndef = new NDEFReader();
  cancelSignal = await ndef.scan().then(() => {
    ndef.onreadingerror = () => {
      nfcDebug.innerText = "Hmm, nie udało się odczytać tagu NFC.";
    };
    ndef.onreading = event => {
      try{
       ndef.write("74939205$Wiktor$Bien");
      nfcDebug.innerText = "Sukces!";
      callbackPositive();
      }
      catch(e){
        nfcDebug.innerText = "Wysąpił błąd przy zapisie";
      }
    };
  }).catch(error => {
    nfcDebug.innerText = `Wystąpił błąd, prawdopodobnie Twoje urządzenie nie obsługuje NFC: ${error}.`;
  });
}