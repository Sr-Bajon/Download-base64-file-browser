function downloadB64(name, base64String) {
  var byteString = atob(base64String);

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  var blob = new Blob([ia]);

  saveAs(blob, name);

}

downloadB64('prueba.png', window.png);
downloadB64('prueba.pdf', window.pdf);


