# Frequently Asked Questions (FAQ)

::: info Publisher FAQ

The following section aims to address common non-technical questions, please
reach out if this document does not address your question!

:::

### Does AirGrid need to be added to my `ads.txt`?

**No**, AirGrid augments bid requests with data and uses existing platforms
(SSPs) for the bid request / response flow and therefore is not a new seller
which needs to be added to your `ads.txt` file.

### Does AirGrid need to be added to my Consent Management Platform (CMP)?

**Yes**, whilst our solution does not extract user data off device, we still
need permissions to access a individual's device and also for the algorithmic
decision making process (segmentation). Our IAB Transparency & Consent Framework
(TCF) ID is `101`.

### What is the AirGrid ID for Xandr Curate?

If you need want to report by AirGrid spend you can filter your Xandr reporting
by the seat ID: `12024`.

### How does your SDK affect the performance of my site?

Great question! We have a whole [perfomance document](./performance.md)
detailing this exact question, please check it out!
