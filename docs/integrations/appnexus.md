# AppNexus

::: info AppNexus | Xandr
AppNexus has rebranded to Xandr, however since in Prebid this naming change is not reflected we continue
to use AppNexus in these documents for clarity.
:::

## Overview

AirGrid integrates with the AppNexus SSP via [PreBid](http://prebid.org/) header bidding, allowing AirGrid audiences to be automatically created in AppNexus, and passed to the SSP in real time. This integration does not rely on cookies or 3P cookie matching, meaning 100% of audiences will available to activate via AppNexus.

## Data Flow

The AirGrid <> AppNexus integration facilitates the following data flow:
1. You create an audience in the AirGrid platform UI, for example `Holiday Intenders`.
2. The AirGrid platform would create a unique ID for your audience, for example `G7ajY1`.
3. We then automatically create the mapping of `"Holiday Intenders" == "G7ajY1"`, in the AppNexus SSP.
4. As users interact with your site we begin to build your audience, and assigned the audience ID.
5. Prebid is passed the audience ID into a specific field `bids.params.keywords.airgrid`.
6. The audience is now targetable via PMP deals in real time.

## Bidder Params

You will need to tweak the JavaScript in your page header to pass targeting key value pairs via the AppNexus [bidder params](http://prebid.org/dev-docs/bidders#appnexus) which Prebid exposes.

_This is a simple but complete example:_
```javascript
var agAudiences;

try {
  agAudiences = JSON.parse(localStorage.getItem('ag_audiences') || '[]')
    .slice(0, 100)
    .map(String);
} catch (e) {
  agAudiences = [];
}

var adUnits = [
  {
    code: '/19968336/header-bid-tag',
    mediaTypes: {
      banner: {
        sizes: [
          [300, 250],
          [300, 600],
        ]
      }
    },
    bids: [{
      bidder: 'appnexus',
      params: {
        placementId: 13144370,
        keywords: { 
          airgrid: agAudiences
        }
      }
    }]
  }
];
```