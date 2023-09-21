# Privacy

::: warning Not intended for legal use

The following document is not a legal document, it is designed to give a
simple and easy to understand high level overview of the privacy considerations
of the AirGrid platform.

:::

## Design philosophy

The AirGrid platform is built around the idea that an **individual's personal
information should always remain personal**, which simply means any data which
can be tied to a single person should only ever be under the control of that person.

The platform achieves this by combining two technologies:

- [Edge computing](https://en.wikipedia.org/wiki/Edge_computing)
- [Federated learning](https://en.wikipedia.org/wiki/Federated_learning)

**Edge computing** allows us to store personal user information at the "edge" which
essentially mean locally on the user's device. So instead of storing events such as
ad clicks on the server in the cloud, we store that information locally in the browser
using a technology such as `localStorage` or `indexDb`.

We can now use this information stored on the device to learn a model of user behaviour,
by leveraging **federated learning** which involves training a machine learning model across
a distributed dataset. This means rather than collecting all the data into a single store and
allowing our model access to it, we send our model to the location of the data, which in our
case is the browser of each individual who has interacted with our technology.

This approach means we can learn a generalised model of user behaviour without the need to
collect and store any data tied to unique user IDs, cookie IDs, MAIDs etc.

_NOTE: A deep dive into the specific technologies is out of scope for this document._

## Data storage

We broadly split the data which is stored into two buckets; user level and non user level.
All user level information is stored in the browser, and non user level data is collected
on the server for fraud, analytics & reporting purposes.

**User level** information can be summarised as page view events, these events are encoded into
dense vectors and stored locally, they contain information such as:

- Context of the page.
- Imagery of the page.
- Structure of the page.
- User interactions on the page eg dwell, scroll & clicks.
- Browser based API outputs eg Chrome topics.

### Retention

The SDK limits data storage to a maximum of **90 days** or **300 distinct events**, 
which ever is greater. This means the oldest event a user would store is 90 days, unless they hit the 300 event 
limit. In most practical cases the browser will evict data from the cache much earlier. The browser 
has a mechanism designed to purge data which is not used / accessed frequently.

**Non user level** information can be summarised as aggregated metrics on platform usage. We collect
and store a large amount of variables, but none are tied to a unique user identifier:

- Time
- Device
- Location
- Domain
- URL

::: info IP Address

For any networked technology to function an IP address is received by the server, this is the address to
which any requests are made, and subsequently returned. We use the client IP address only for blocking 
of malicious actors and geo resolution.

**We do not use IP for any form of user identification.**

:::

### Retention

We store raw server logs for **365 days**, after which aggregates are created and archived.

## User consent

The AirGrid platform is **not** designed to circumvent any consent frameworks. We firmly believe
that internet users should be made aware of how technologies are using their information. We are 
a member of the [IAB](https://www.iabuk.com/) Europe's - [Transparency & Consent Framework](https://iabeurope.eu/transparency-consent-framework/) (TCF). We are listed under the vendor number `782`.

Whilst most server side technologies require receiving a "consent string" which encodes user 
consent choices made in a [Consent Management Platform](https://iabeurope.eu/tcf-for-cmps/) 
(CMP) deployed by the publisher, AirGrid does not rely on this string due to our presence in the browser. 
We are able to make a binary check - "do we have consent?" and act accordingly. This is a significant improvement over the usage of the
consent string, due to the fact that the amount of entropy inside a consent string is high enough
to be used as a user identifier itself.

When a user is shown a CMP pop-up on arrival to a publisher's site, two options are possible:

- **Consent is granted**: this will trigger for our code to run, storing information about the page
on which the user is on in their browser & executing segmentation / audience modelling logic.
- **Consent is not granted**: this will mean our code does not run, the only thing we do is check
if we have previously stored any information (due to having previously had consent), and if 
yes we clear this - deleting the only copy of the data.

If a user later decides to opt out, their information will be removed from their browser and this
means the have cleared the single source of this information. This is a huge improvement over the
current industry norms such as "soft deletes" or trying to ascertain how many server side systems
have stored, sold & propagated user information.


::: info Browser storage

If a user decides to clear their browser storage all AirGrid set data will be cleared.

:::

## Summary

- The AirGrid platform leverages on device technologies to store and model audience data.
- Any user tied information is stored on the device, and ONLY on the device.
- Aggregated information is collected on the server to power platform metrics.
- We are a member of the TCF and run our code only after gaining consent from the user.
- If consent is retracted, we purge all previously stored information from the device.
- We do not rely on the consent string, but a much simpler binary consent check.
- Clearing of browser storage will also clear our information.

## FAQs

#### In which geographies are AirGrid servers located?

We route traffic from users to servers located in EU or NA depenging on where the request originates
from. However all data is stored in the EU after the request has been processed.

#### Does AirGrid rely on legitimate interest?

No, we only ever process user information, or access the device once we have gained consent, in the
publisher's CMP.

#### How can a user opt-out?

Opt-out is handled by the publisher CMP, since we are not storing any cross site cookie or personal
identifiers we would not be able to support opt-out globally. There is no user ID to tie activity
of an individual across sites. We respect any global browser settings such as Do Not Track (DNT).
