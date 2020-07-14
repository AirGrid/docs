# Install Tag

Please install the following snippet in the `<head>` of your page, preferably as high in the page as possible. Our script loads asynchronously and does not slow down the load of your page.


::: warning Update Client ID
Make sure you replace both `'YOUR_CLIENT_ID'` & `'YOUR_API_KEY'` with values supplied by your account manager.
:::

### Installation code:

```html
<script>
(function() {
  var edktInitializor = window.edktInitializor = window.edktInitializor || {};
  if (!edktInitializor.invoked) {
    edktInitializor.invoked = true;
    edktInitializor.clientId = 'YOUR_CLIENT_ID';
    edktInitializor.apiKey = 'YOUR_API_KEY';
    edktInitializor.load = function(e) {
      var p = e ? e : 'sdk';
      var n = document.createElement('script');
      n.type = 'text/javascript';
      n.async = true;
      n.src = 'https://cdn.edkt.io/' + p + '/edgekit.min.js';
      var a = document.getElementsByTagName('script')[0];
      a.parentNode.insertBefore(n, a);
    };
    edktInitializor.load(edktInitializor.clientId);
  }
})();
</script>
```
