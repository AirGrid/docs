# Advertiser Documentation

To allow the AirGrid platform to continually optimise your audience models, you should share campaign performance information with our system. This is a simple two step process and requires no engineering effort. 

::: info Xandr Invest
The following instructions are for the Xandr DSP only, please get in touch if you use another platform.
:::

## Creative Pixel

The first step is to include the AirGrid creative pixel in all the creatives for the campaign you are running, seeing all the impressions helps us to optimise the campaign. This pixel can be added in Xandr at an **Advertiser** level or at the **Network** level.

- To add at the advertiser level, navigate to: `Advertiser -> Third Party Pixels` and click `New+`
- To add at the network level, navigate to: `Network -> Tools -> Third Party Pixels` and click `New+`
- Add a suitable `Name`, such as `AirGrid - Creative Pixel`
- Select to apply pixel to all advertiser creatives
- Select to serve on secure inventory
- Check the `Image URL` type
- Insert the following URL into the **Image** box:

```
http://api.edkt.io/pixel?auction_id=${AUCTION_ID}&adv_id=${ADV_ID}&io_id=${IO_ID}&li_id=${CPG_ID}&cp_id=${CP_ID}&url=${REFERER_URL_ENC}&tag_id=${TAG_ID}
```

- Insert the following URL into the **Secure** box:

```
https://api.edkt.io/pixel?auction_id=${AUCTION_ID}&adv_id=${ADV_ID}&io_id=${IO_ID}&li_id=${CPG_ID}&cp_id=${CP_ID}&url=${REFERER_URL_ENC}&tag_id=${TAG_ID}
```

- Under the **Exchanges** tab, we select `Render this pixel on Adx` and `Adx does not require vendor to be declared`
- Click **Save** in the bottom left corner.

😄 Cool that is step one done!

To learn more about creative macros, please refer to the Xandr documentation in [console](https://console.appnexus.com/docs/creative-macros). Your final setup should look like:

![3p-pixels-xandr](../images/3p-pixels-screen.png '3p-pixels-xandr')

::: info GDPR
The pixel does not collect any user level data, only Xandr campaign hierarchies, auction ID and the URL of the page on which the ad is served.
:::

## Automate Reports

The next (and final) steps is to schedule two **daily** reports from the Xandr UI:
- Analytics Report
- Attributed Conversion Report

The reports should be created at the same level as the creative pixel has been applied, for example if the pixel is running on a specific IO, the report filters should match that.

### Analytics Report

- Navigate to `Network -> Reporting` or `Advertiser -> Reporting`
- Select the **Type** to `Analytics Report` in the dropdown
- Select **Range** to `Yesterday`
- Select **Interval** to `Hourly`
- Select all the following **metrics**:
  - Imps
  - Clicks
  - Post View Conversions
  - Post Click Conversions
  - Viewable Imps
  - View-Measured Imps
  - Buyer Media Cost eCPM
- Select all the following **dimensions**:
  - Advertiser
  - Insertion Order
  - Line Item
  - Split
  - Campaign
  - Placement
- Under delivery, select:
  - **Export, send results via email** and add [reports@airgrid.io](mailto:reports@airgrid.io) as the recipient
  - **Add to scheduled reports** and add [reports@airgrid.io](mailto:reports@airgrid.io) as the recipient, set when to `Daily` and format as `CSV`
- Name the report, as: `{YOUR_AGENCY} - {YOUR_ADVERTISER} - {YOUR_CAMPAIGN} - Analytics Reports`, replacing all the values shown with `{}` with the correct names
- Click **Run Report**

Your final screen should look like this:
![Analytics Report](../images/analytics-report-screen.png 'Analytics Report')

### Conversions Report

- Navigate to `Network -> Reporting` or `Advertiser -> Reporting`
- Select the **Type** to `Attributed Conversions` in the dropdown
- Select **Range** to `Yesterday`
- Select **Interval** to `Hourly`
- Select all the following **metrics**:
  - Impression Time
  - Auction ID
  - Time of Conversion
  - External Data
- Select all the following **dimensions**:
  - Line Item
  - Split
  - Campaign
  - Creative
  - Impression Type
  - Conversion Pixel
  - Post Click/Post View Conversion
  - Post Click/Post View Revenue
- Under delivery, select:
  - **Export, send results via email** and add [reports@airgrid.io](mailto:reports@airgrid.io) as the recipient
  - **Add to scheduled reports** and add [reports@airgrid.io](mailto:reports@airgrid.io) as the recipient, set when to `Daily` and format as `CSV`
- Name the report, as: `{YOUR_AGENCY} - {YOUR_ADVERTISER} - {YOUR_CAMPAIGN} - Conversion Reports`, replacing all the values shown with `{}` with the correct names
- Click **Run Report**

Your final screen should look like this:
![Conversions Report](../images/conversions-report-screen.png 'Conversions Report')

That is it, all done! Time for a 🍺.

If you have any issues, please reach out to [support@airgrid.io](mailto:support@airgrid.io)
