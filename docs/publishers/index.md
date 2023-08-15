# Publisher Documentation

The integration can be accomplished by two methods:

- [Real Time Data](https://docs.prebid.org/dev-docs/modules/#real-time-data-providers)
  (RTD) Module in Prebid (recommended).
- On page tag, and configuration (legacy).

::: info SSP Support

We currently support Prebid & Index Wrapper as header bidders. If you have
additional requirements please get in touch:
[support@airgrid.io](mailto:support@airgrid.io)

:::

## RTD Integration

This integration method requires only the addition of a few configuration flags
into your Prebid build. It is automatically updated, performant and simple.

```
gulp build --modules=rtdModule,airgridRtdProvider,appnexusBidAdapter
```

Full instructions are maintained on
[docs.prebid.org](https://docs.prebid.org/dev-docs/modules/airgridRtdProvider.html).

If you are using a managed Prebid installation such as
[Magnite Demand Manager](https://www.magnite.com/blog/why-prebid-makes-the-header-more-relevant-than-ever/),
the integration requires just an email to your account manager. 😃

## Tag Integration

The integration is a two step process:

1. [Install the `script` loader into the head of your site.](#install-tag)
2. [Pass audiences to the Header Bidder.](#header-bidder-integration)

### Install Tag

Please install the following snippet in the `<head>` of your page, preferably as
high in the page as possible. Our script loads asynchronously and does not slow
down the load of your page.

::: warning

Update Account specific IDs Make sure you replace both `'YOUR_ACCOUNT_ID'`,
`'YOUR_PUBLISHER_ID'` & `'YOUR_API_KEY'` with values supplied by your account
manager.

:::

### Installation code:

```html
<script>
  (function() {
    var edktInitializor = (window.edktInitializor =
      window.edktInitializor || {});
    if (!edktInitializor.invoked) {
      edktInitializor.invoked = true;
      edktInitializor.accountId = 'YOUR_ACCOUNT_ID';
      edktInitializor.publisherId = 'YOUR_PUBLISHER_ID';
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

### Header Bidder Integration

::: info

AppNexus | Xandr AppNexus has rebranded to Xandr, however since in Prebid this
naming change is not reflected we continue to use AppNexus in these documents
for clarity.

:::

#### Overview

AirGrid integrates with the AppNexus SSP via [PreBid](http://prebid.org/) or
[Index Wrapper](https://kb.indexexchange.com/ix_library_partners_home.htm)
header bidding, allowing AirGrid audiences to be passed to the SSP in real time.
This integration does not rely on cookies or 3P cookie matching, meaning 100% of
audiences will available to activate via AppNexus.

#### Data Flow

The AirGrid <> AppNexus integration facilitates the following data flow:

1. You create an audience in the AirGrid platform UI, for example
   `Holiday Intenders`.
2. The AirGrid platform would create a unique ID for your audience, for example
   `G7ajY1`.
3. We then automatically create a mapping of `"Holiday Intenders" == "G7ajY1"`,
   in AppNexus.
4. As users interact with your site we begin to build your audience, and assign
   the audience ID.
5. The header bidder is passed the audience ID into a specific field.
6. The audience is now targetable via PMP deals in real time.

We currently support the following methods for publisher demand generation:

- [Prebid](#prebid-integration)
- [Index Wrapper](#index-wrapper-integration)
- [Magnite Demand Manager](#magnite-demand-manager-integration)

#### Prebid Integration

You will need to tweak the JavaScript in your page header to pass targeting key
value pairs via the AppNexus
[bidder params](http://prebid.org/dev-docs/bidders#appnexus) which Prebid
exposes.

_This is a simple but complete example:_

```javascript
var edktAudiences;

// Here we fetch audiences which the user has been placed in.
try {
  edktAudiences = JSON.parse(
    localStorage.getItem('edkt_matched_audience_ids') || '[]'
  )
    .slice(0, 100)
    .map(String);
} catch (e) {
  edktAudiences = [];
}

// This code is already present on your page.
// We are adding just a single key to the `keywords` object.
var adUnits = [
  {
    code: '/19968336/header-bid-tag',
    mediaTypes: {
      banner: {
        sizes: [
          [300, 250],
          [300, 600],
        ],
      },
    },
    bids: [
      {
        bidder: 'appnexus',
        params: {
          placementId: 13144370,
          keywords: {
            perid: edktAudiences,
          },
        },
      },
    ],
  },
];
```

#### Index Wrapper Integration

You will need to tweak the JavaScript in your page header to pass targeting key
value pairs via the first party data API to the IX Wrapper library.

```javascript
var edktAudiences;

// Here we fetch audiences which the user has been placed in.
try {
  edktAudiences = JSON.parse(
    localStorage.getItem('edkt_matched_audience_ids') || '[]'
  )
    .slice(0, 100)
    .map(String);
} catch (e) {
  edktAudiences = [];
}

// Now we can pass the audience to the IX Wrapper Library.
window.headertag.cmd.push(function() {
  window.headertag.setSiteKeyValueData({
    perid: edktAudiences,
  });
});
```

#### Magnite Demand Manager Integration

You will need to tweak the JavaScript in your page header to pass targeting key
value pairs via the `data` property on the call to `pbjs.rp.requestBids()`.

```javascript
var edktAudiences;

// Here we fetch audiences which the user has been placed in.
try {
  edktAudiences = JSON.parse(
    localStorage.getItem('edkt_matched_audience_ids') || '[]'
  )
    .slice(0, 100)
    .map(String);
} catch (e) {
  edktAudiences = [];
}

// We ensure prebid is available
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

// Push to the Prebid queue a request for bids.
pbjs.que.push(function() {
  pbjs.rp.requestBids({
    // We omit the various properties passed in here
    // such as `callback`, `gptSlotObjects`...
    data: {
      airgrid: {
        perid: edktAudiences,
      },
    },
  });
});
```

#### That is it, all done! Time for a 🍺.

If you have any issues, please reach out to
[support@airgrid.io](mailto:support@airgrid.io)