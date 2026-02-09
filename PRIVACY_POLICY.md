# Privacy Policy — Ctrl+Shift+C — Copy URL

**Last updated:** February 2025

## Overview

"Ctrl+Shift+C — Copy URL" is a browser extension that copies the current tab's URL to your clipboard via a keyboard shortcut. Your privacy is important — this extension is designed to collect absolutely no data.

## Data Collection

This extension does **NOT** collect, transmit, store, or share any personal data, browsing data, or any other information.

## What the Extension Stores Locally

The extension saves two preferences on your device using Chrome's local storage API:
- **Enabled/disabled state** (a boolean value)
- **Custom keyboard shortcut** (the key combination you chose)

This data never leaves your device. It is not transmitted to any server, service, or third party.

## Network Requests

This extension makes **zero** network requests. It does not communicate with any external server at any time.

## Permissions Explained

- **activeTab**: Reads the URL of the current tab when you press the shortcut. No browsing history is accessed.
- **scripting**: Injects a brief "URL copied!" notification into the current page. No page content is read or modified.
- **storage**: Saves your toggle and shortcut preferences locally on your device.
- **offscreen**: Enables clipboard access on restricted browser pages (like chrome:// pages).
- **clipboardWrite**: Writes the URL to your clipboard. The clipboard is used only for the URL you explicitly copy.

## Third Parties

No data is shared with any third party. No analytics, no tracking, no ads.

## Changes

If this policy changes, the updated version will be published here with a new date.

## Contact

For questions about this privacy policy, open an issue at:
https://github.com/wagmiCTO/chrome-ctrl-shift-c/issues
