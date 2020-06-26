$(() => {
  $(".drop-zone").on("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  $("#drop-zone-1").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-1").text(file.name);
      }
    } else {
      $("#file-name-1").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-2").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-2").text(file.name);
      }
    } else {
      $("#file-name-2").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-3").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-3").text(file.name);
      }
    } else {
      $("#file-name-3").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-4").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-4").text(file.name);
      }
    } else {
      $("#file-name-4").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-5").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-5").text(file.name);
      }
    } else {
      $("#file-name-5").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-6").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-6").text(file.name);
      }
    } else {
      $("#file-name-6").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-7").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-7").text(file.name);
      }
    } else {
      $("#file-name-7").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  $("#drop-zone-8").on("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.originalEvent.dataTransfer.items) {
      if (e.originalEvent.dataTransfer.items[0].kind === "file") {
        var file = e.originalEvent.dataTransfer.items[0].getAsFile();
        $("#file-name-8").text(file.name);
      }
    } else {
      $("#file-name-8").text(e.originalEvent.dataTransfer.files[0].name);
    }
  });
  
});
