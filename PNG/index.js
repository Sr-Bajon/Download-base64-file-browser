var byteString = atob(window.png);

// Convert that text into a byte array.
var ab = new ArrayBuffer(byteString.length);
var ia = new Uint8Array(ab);
for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
}

var blob = new Blob([ia]);

saveAs(blob, "report.png");
