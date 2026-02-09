# Ctrl+Shift+C — Copy URL

A Chrome extension that copies the current tab's URL to your clipboard with a keyboard shortcut.

## Features

- **Onboarding**: Choose your preferred shortcut on first install
- **Customizable shortcut**: Change it anytime from the popup
- **Visual feedback**: "URL copied!" toast notification on the page
- **Toggle on/off**: Disable the shortcut when you don't need it
- **Works everywhere**: Smart fallback for restricted pages (chrome://, etc.)

## Install Locally (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the `chrome-ctrl-shift-c` folder (the one containing `manifest.json`)
6. The onboarding page opens automatically — choose your shortcut and you're ready to go

### Verify it works

1. Complete the onboarding (choose a shortcut or use the default Ctrl+Shift+C)
2. Open any website (e.g., google.com)
3. Press your chosen shortcut
4. You should see a dark "URL copied!" toast in the bottom-right corner
5. Paste anywhere — the URL is in your clipboard

## Usage

| Action | How |
|---|---|
| Copy URL | Press your chosen shortcut on any page |
| Toggle on/off | Click the extension icon → flip the toggle |
| Change shortcut | Click the extension icon → "Change shortcut" → press your keys |
| Reset shortcut | Click the extension icon → "Reset to default" |
| Manual copy | Click the extension icon → "Copy Current URL" button |

## Notes

- **Restricted pages**: On `chrome://` pages, the extension can't show the toast notification but still copies the URL and shows a checkmark badge on the icon.

## Publish to Chrome Web Store

### Prerequisites

1. Register as a Chrome Web Store developer at [chrome.google.com/webstore/devconsole](https://chrome.google.com/webstore/devconsole) (one-time $5 fee)
2. Verify your email address

### Prepare the Package

1. Create a ZIP file of the extension files:
   ```bash
   zip -r ctrl-shift-c-copy-url.zip \
     manifest.json background.js content.js \
     offscreen.html offscreen.js \
     popup/ content/ icons/ shared/ onboarding/ \
     -x "*.DS_Store"
   ```
2. Do **not** include: `.git/`, `.idea/`, `store/`, `README.md`, `PRIVACY_POLICY.md`, `.gitignore`

### Submit

1. Go to the [Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Click **New Item** → upload the ZIP
3. Fill in the listing:
   - **Name**: `Ctrl+Shift+C — Copy URL`
   - **Description**: See `store/description.txt`
   - **Category**: Productivity
   - **Language**: English
   - **Icon**: The 128x128 icon is already in the package
4. Upload screenshots (see `store/screenshots.md` for guidance):
   - At least 1 screenshot required (1280x800 or 640x400)
5. **Privacy tab**:
   - Single purpose: "Copies the current tab URL to clipboard via keyboard shortcut"
   - Does not collect user data
   - No remote code
   - Host the privacy policy (e.g., link to `PRIVACY_POLICY.md` on GitHub)
6. **Permissions justification**: See `store/description.txt` for per-permission explanations
7. Click **Submit for review**

### Review Timeline

- First submission: typically 1-3 business days
- Updates: usually faster (hours to 1 day)

## License

MIT
