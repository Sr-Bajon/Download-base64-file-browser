// window.pdf

// save pdf
var byteString = atob(window.pdf);

// Convert that text into a byte array.
var ab = new ArrayBuffer(byteString.length);
var ia = new Uint8Array(ab);
for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
}

// Blob for saving.
var blob = new Blob([ia], { type: "application/pdf" });

// Tell the browser to save as report.pdf.
saveAs(blob, "report.pdf");
