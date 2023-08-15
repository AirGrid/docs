# Chrome Privacy Sandbox

::: info Alpha

The following document and features are currently in alpha and available
for brave and early adopters 😃.

:::

## Introduction

The [Chrome Privacy Sandbox](https://privacysandbox.com/) is an exciting development in browser technology.
As the web moves towards a more private ads ecosystem, the browser as the "user agent"
is increasingly becoming the custodian of your data. The Sandbox is a set of experimental
APIs to allow for basic advertising use cases such as targeting and measurement but
done in such a way that individuals cannot be re-identified.

AirGrid is built based on the same principle, **your data is yours and should remain on
your device**. We are therefore excited to be early testers of this new technology and invite
you to join us to run your advertising in a privacy-focused and cookie-less manner!

**What the current alpha supports**:

- View based conversion reporting.
- Integration with AirGrid **feed** audiences for automated optimisation.

**Current limitations**:

- Display campaigns only.
- Only the Xandr DSP is supported.
- The attribution reporting is not designed to replace your current adserver based reports.

## Setup

The setup is a three step process:

1. Create an attribution pixel group in the [AirGrid platform](https://app.airgrid.io).
2. Add a pixel to the display creative.
3. Add a pixel to your landing and conversion pages.

For the alpha steps 1 & 2 can be handled by the team at MiQ/AirGrid. The webpage pixels will
need to be added by the advertiser, this guide assumes the use of
[Google Tag Manager](https://tagmanager.google.com/) but any similar tag management
solution can be used or even direct hardcoding onto the webpage.

## Google Tag Manager

To complete the conversion tracking integration via GTM, you will need to:

1. Create a **Custom HTML Tag**.
2. Create a **Trigger**.

### Create a Custom HTML Tag

[Official GTM docs](https://support.google.com/tagmanager/answer/6107167)

Custom HTML tags allow the addition of the privacy sandbox pixel to your webpages.
We require you to use a custom HTML tag and not an image tag, do to the fact there is
a special directive present in the HTML `attributionsrc` which is responsible for telling
the browser this is a special pixel which should be used for attribution measurement via
the Privacy Sandbox APIs.

Please follow the official GTM docs linked above to create two custom HTML tags, one for the landing
page and one for the conversion (purchase) page. It is optional to use both pixels and in this manner,
but it is highly recommended to allow for broader landing page optimisation and more granular
conversion optimisation. We will allow more flexibility in setups soon!

### Create a Trigger

[Official GTM docs](https://support.google.com/tagmanager/answer/7679316)

Create two triggers one per custom HTML tag created in the previous step. You will need
to add a filter per tag. Each filter is made up of a `Variable`, an `Operator` and a `Value`.
An example setup will look like:

- `Page URL does not contain /checkout/`: for the site wide pixel.
- `Page URL contains /checkout/`: for the conversion pixel.

Assign the correct tag to be fired for the two newly created triggers and we are done! Time for
a beer 🍺.
