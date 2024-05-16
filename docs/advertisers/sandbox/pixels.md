# PSB - Pixels

This document outlines the signals collected by the PSB pixels.

::: info Beta

The beta period, lasting until the cookie deprecation date by Chrome, (currently
set to early 2025) will collect both PSB signals and traditional 3p cookie based
signals for the purpose of analysing the impact of the switch.

:::

## Creative (Impression) Pixel

The following table lists all signals collected by the pixel inserted into the
campaign creative.

| Dimension           | Beta Only | Usage                                                                                                                                  |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Request ID          | No        | A unique identifier for each request the server receives, i.e each pixel fire.                                                         |
| Timestamp           | No        | A timestamp of the time at which the pixel fired.                                                                                      |
| Referral URL        | No        | The URL of the page where a person clicked a link to arrive on the current page.                                                       |
| User agent          | No        | Understanding device, browser and OS technographics.                                                                                   |
| IP address          | No        | Used only for mapping to geo location information, it is **not** used for targeting.                                                   |
| DSP creative macros | No        | Campaign hierarchy and seller dimensions offered by DSPs, see below for a link to the full list.                                       |
| ARA support headers | No        | Special headers sent by the browser to signify if the browser supports ARA reporting.                                                  |
| Source event ID     | No        | A 64bit `int` stored as a string used to identify the impression, sent by the browser in the conversion report.                        |
| User ID (3p cookie) | **Yes**   | Collected during the beta only, whilst 3p cookies are available and is used only for comparison of ARA to 3p cookie based measurement. |

Creative macros:

- [DV360](https://support.google.com/displayvideo/answer/2789508?hl=en)
  (supported)
- [Xandr](https://learn.microsoft.com/en-us/xandr/bidders/xandr-macros#creative-macros)
  (supported)
- TTD (coming soon)
- Yahoo (coming soon)

## Advertiser (Conversion) Pixel

The following table lists all signals collected by the pixel added to the
advertiser website.

| Dimension           | Beta Only | Usage                                                                                                                                  |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Request ID          | No        | A unique identifier for each request the server receives, i.e each pixel fire.                                                         |
| Timestamp           | No        | A timestamp of the time at which the pixel fired.                                                                                      |
| Referral URL        | No        | The URL of the page where a person clicked a link to arrive on the current page.                                                       |
| User agent          | No        | Understanding device, browser and OS technographics.                                                                                   |
| IP address          | No        | Used only for mapping to geo location information, it is **not** used for targeting.                                                   |
| ARA support headers | No        | Special headers sent by the browser to signify if the browser supports ARA reporting.                                                  |
| Trigger Data        | No        | A 3 bit value, (0 or 1) which is returned in the conversion report sent by the browser.                                                |
| User ID (3p cookie) | **Yes**   | Collected during the beta only, whilst 3p cookies are available and is used only for comparison of ARA to 3p cookie based measurement. |
