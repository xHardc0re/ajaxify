(function () {
  function ajaxifyHttp() {
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (target.tagName === "A" && target.href.startsWith("http://")) {
        event.preventDefault();
        sendAjaxRequest(target.href, "GET");
      }
    });

    document.addEventListener("submit", function (event) {
      var target = event.target;
      if (target.tagName === "FORM" && target.action.startsWith("http://")) {
        event.preventDefault();
        var method = target.method || "GET";
        var data = getFormData(target);
        sendAjaxRequest(target.action, method, data);
      }
    });
  }

  function sendAjaxRequest(url, method, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Success:", xhr.responseText);
          // Do something with the response
        } else {
          console.log("Error:", xhr.statusText);
          // Handle the error
        }
      }
    };
    xhr.send(data);
  }

  function getFormData(form) {
    var formData = new FormData(form);
    var data = "";
    for (var [name, value] of formData) {
      data += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
    }
    return data.slice(0, -1);
  }

  window.ajaxifyHttp = ajaxifyHttp;
})();
