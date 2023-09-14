# Performance

This document aims to quantify the performance effect of loading the AirGrid SDK
would have on a publisher's website. We take this topic extremely seriously and
constantly test our SDK to ensure it is both light and performant. Our view is that
audience segmentation and advertising in general should not impact user experience
when browsing our partner's web properties.

## Size

As we all know size matters! Especially when loading 3p scripts into websites. Our
SDK is currently **7.9kb gzipped** (correct as of 14th Sept 2023). Since code is always
changing you can get an up to the minute size by loading the following url: 
[`https://cdn.edkt.io/sdk/edgekit.min.js`](https://cdn.edkt.io/sdk/edgekit.min.js) in your
browser and opening `devtools` to inspect the size of the transfer. You can do this by:

1. Clicking on the link above.
2. Right click on the page of JS code which loads.
3. In the drop down click **inspect**.
4. In the newly opened panel select the **network** tab.
5. You can now see the size of this resource, you may need to refresh the page.

_SDK load_:

![SDK size raw](../images/sdk-size-raw.png 'sd-size-raw')

::: info Caching
It is very important to note that the above is a **one time cost**. Our SDK is loaded
once per new user visit to your site. After that the browser caches this resource
as long as the user keeps returning to the site semi-regularly.
:::

_Cached SDK load, note the size is just 45 bytes_:

![SDK size cached](../images/sdk-size-cached.png 'sd-size-cached')

## Speed

Apart from the size of the SDK download, there is a negligible computational overhead for
the processing the SDK performs. It is important to note that the load our SDK produces is
orders of magnitude lower as compared to most adtech processes such as rendering video creative.

Here is a high level execution flow of the SDK:

1. Look to see if the user is in an audience, this is a `O(1)` operation, a quick key lookup 
from `localStorage`.
2. Pass any audiences the user has been assigned to over to Prebid for auctions.
3. Allow the page to load.
4. Only once the page is loaded does the SDK truly run its computation of audience segmentation,
in order to have audience values ready for this user for the next page load.

Ofcourse the best way to truly measure the impact of our SDK is to run some A/B testing, there
are a number of great free and open-source tools out there to help with site speed optimisation:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - the defacto industry tool developed by Chrome.
- [WebPageTest](https://www.webpagetest.org/) - the original oldie and still a goodie!
- [Sitespeed.io](https://www.sitespeed.io/) - a new entrant with a very comprehensive test suite.

### Sitespeed.io Testing

This section is designed to be a simple illustration of how simple it is to run your own testing VS relying
on a vendor (such as us) to tell you how amazing their code is 😊.

1. We make a small pre-script to either login or accept the consent modal.

```js
// acceptConsent.js
export default async function (context, commands) {
  await commands.navigate(
    'https://www.dailymail.co.uk/home/index.html'
  );

  try {
    // Click the consent notice accept banner.
    await commands.click.byLinkTextAndWait('Got it');
  } catch (e) {
    throw e;
  }
};
```

2. We execute `sitespeed` inside of a docker.

```bash
docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io:29.5.0 \
    --browser chrome \
    --cpu \
    --preScript acceptConsent.js \
    https://www.dailymail.co.uk/home/index.html
```

3. Navigate to the newly created `sitespeed-results` folder in your current directory and explore
all the lovely stats on your site speed performance!

![Site performance report](../images/sitespeed-generic-report.png 'sitespeed-generic-report')
