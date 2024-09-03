# Tinder Unblur

## Overview

**Tinder Unblur** is a simple userscript that allows you to unblur and view the blurred images of "fast match" teasers on Tinder. The script adds a button that, when clicked, replaces the blurred images with the original ones, enabling you to see who liked you.

## Installation

### Requirements

- **Browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, or any other compatible browser.
- **Tampermonkey**: A browser extension that allows you to run userscripts. It's available for [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/), and other browsers.

### Installation Steps

1. **Install Tampermonkey**: If you haven't already, install the Tampermonkey extension from the [official website](https://www.tampermonkey.net/).
   
2. **Install the script**:
   - Go to the GitHub repository: [Tinder Unblur Script](https://github.com/ManoloZocco/tinderunblur).
   - You have two options to install the script:
     1. **Directly from GitHub**:
        - Open the `tinderunblur.user.js` file on GitHub.
        - Click on the Tampermonkey icon in your browser and select "Create a new script...".
        - Copy and paste the content of the `tinderunblur.user.js` file into the new Tampermonkey script editor.
        - Save the script.
     2. **Download the file**:
        - Download the `tinderunblur.user.js` file from the repository.
        - Open the Tampermonkey dashboard by clicking on the Tampermonkey icon and selecting "Dashboard".
        - Click the "+" button to create a new script.
        - Open the downloaded `tinderunblur.user.js` file in a text editor, copy its contents, and paste them into the Tampermonkey editor.
        - Save the script.

## Usage

1. **Go to Tinder**: Open [https://tinder.com/app/likes-you](https://tinder.com/app/likes-you) in your browser.

2. **Unblur the images**: Once the page is fully loaded, you will see a button labeled "Unblur images!" at the top center of the window. Click this button to unblur the images.

3. **Enjoy the results**: The blurred images in your "fast match" teasers will now be replaced with the original, clear images.

## Notes

- **Privacy**: This script uses your Tinder authentication token to fetch the original images. The token is handled directly by your browser and is not transmitted to any third parties.
- **Compatibility**: The script is designed to work with the web version of Tinder. It may not function correctly if Tinder makes significant changes to its interface or API.

## Contributing

Contributions and improvements are welcome! Feel free to open a pull request or report issues on the GitHub repository.

## License

This project is licensed under the MIT License.

---

**Manolo Zocco**  
[GitHub](https://github.com/ManoloZocco)  
2024

---
