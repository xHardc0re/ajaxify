# AJAXify HTTP Actions Plugin

The AJAXify HTTP Actions plugin is a JavaScript utility that transforms HTTP actions (clicking on links or submitting forms) to AJAX requests. This plugin allows you to make asynchronous requests to server endpoints without the need for page reloads.

## Usage

1. Include the `ajaxify-http.js` file in your project.

2. Add the following script tag to your HTML file to initialize the plugin:

   ```html
   <script>
     document.addEventListener("DOMContentLoaded", function () {
       ajaxifyHttp();
     });
   </script>
   ```

3. That's it! All HTTP actions will now be intercepted and transformed to AJAX requests.

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>AJAXify HTTP Actions Example</title>
    <script src="ajaxify-http.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        ajaxifyHttp();
      });
    </script>
  </head>
  <body>
    <h1>AJAXify HTTP Actions Example</h1>

    <a href="http://jsonplaceholder.typicode.com/posts/1">Load Post 1</a>
  </body>
</html>
```

In the above example, the plugin is included in the HTML file, and the `ajaxifyHttp` function is called on page load. Clicking on the "Load Post 1" link or submitting the form will trigger AJAX requests, and the response will be displayed in the console.

Note: Make sure to replace the example API endpoints with your own endpoints or use appropriate endpoints for testing purposes.

## Browser Support

The AJAXify HTTP Actions plugin relies on the `XMLHttpRequest` object, which is supported in most modern browsers. Please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Browser_compatibility) for the compatibility details.

## License

This project is licensed under the [MIT License](LICENSE).
