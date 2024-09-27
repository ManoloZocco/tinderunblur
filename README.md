---

# Tinder Unblur

## Overview

**Tinder Unblur** is an advanced userscript that automatically unlocks and displays the blurred images of "fast match" teasers on Tinder. The script seamlessly replaces blurred images with the original ones upon page load, enabling you to see who has liked you without any additional actions. Additionally, it provides an interactive button for manually unblurring images if needed.

### **What's New in Version 1.1:**
- **Automatic Unblurring:** Images are now automatically unblurred upon page load, offering a seamless experience without the need for manual intervention.
- **Enhanced Error Handling:** Improved robustness with additional checks to handle potential errors during the image unblurring process.
- **Support for Dynamic Content Loading:** Utilizes `MutationObserver` to detect and automatically unblur new images loaded dynamically without requiring further user intervention.
- **Improved Visual Feedback:** The button now provides clearer visual feedback when clicked, enhancing the user experience.
- **Performance Optimizations:** Implemented optimizations to reduce excessive calls and improve the overall performance of the script.
- **Enhanced User Interface:** Refined button styling for better integration with Tinder's design and increased accessibility.

## Installation

### Requirements

- **Browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, or any other compatible browser.
- **Tampermonkey**: A browser extension that allows you to run userscripts. It's available for [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/), and other browsers.

### Installation Steps

1. **Install Tampermonkey**:
   - If you haven't already, install the Tampermonkey extension from the [official website](https://www.tampermonkey.net/).

2. **Install the Script**:
   - **Option 1: Install via GreasyFork**:
     - Visit the script's page on GreasyFork: [Tinder Unblur on GreasyFork](https://greasyfork.org/en/scripts/506650-tinder-unblur).
     - Click the **"Install"** button to add the script directly to Tampermonkey.
   
   - **Option 2: Directly from GitHub**:
     - Go to the GitHub repository: [Tinder Unblur Script](https://github.com/ManoloZocco/tinderunblur).
     - Open the `tinderunblur.user.js` file on GitHub.
     - Click on the Tampermonkey icon in your browser and select **"Create a new script..."**.
     - Copy and paste the content of the `tinderunblur.user.js` file into the new Tampermonkey script editor.
     - Save the script.
   
   - **Option 3: Download the File**:
     - Download the `tinderunblur.user.js` file from the repository.
     - Open the Tampermonkey dashboard by clicking on the Tampermonkey icon and selecting **"Dashboard"**.
     - Click the **"+"** button to create a new script.
     - Open the downloaded `tinderunblur.user.js` file in a text editor, copy its contents, and paste them into the Tampermonkey editor.
     - Save the script.

## Usage

1. **Go to Tinder**: Open [https://tinder.com/app/likes-you](https://tinder.com/app/likes-you) in your browser.

2. **Automatic Unblur**:
   - Once the page is fully loaded, the script will automatically unblur the images in your "fast match" teasers without any additional actions required.

3. **Manual Unblur (Optional)**:
   - If you prefer or if new images are loaded dynamically, you can manually trigger the unblurring process by clicking the **"Unblur Images!"** button located at the top center of the window. The button provides visual feedback when clicked, indicating that the images have been unblurred.

4. **Enjoy the Results**:
   - The blurred images in your "fast match" teasers will be replaced with the original, clear images, allowing you to see who has liked you seamlessly.

## Notes

- **Privacy**:
  - This script uses your Tinder authentication token to fetch the original images. The token is handled directly by your browser and **is not** transmitted to any third parties.

- **Compatibility**:
  - The script is designed to work with the web version of Tinder. It may not function correctly if Tinder makes significant changes to its interface or API.
  - Ensure you are using the latest version of the script to maintain compatibility with any updates from Tinder.

- **Security**:
  - Use this script responsibly and in compliance with Tinder's **Terms of Service**. Utilizing scripts to manipulate site behavior may violate these terms and could result in account restrictions.

## Changelog

### [1.1] - 2024-04-27
**Improvements and Fixes:**

1. **Automatic Unblurring:**
   - Implemented automatic unblurring of images upon page load, eliminating the need to click the button.

2. **Syntax Corrections:**
   - Utilized **backticks** (`` ` ``) for template strings to ensure proper construction of image URLs.
   - Added quotes around CSS `backgroundImage` property values to prevent syntax errors.

3. **Error Handling:**
   - **Authentication Token Verification:** Checks for the presence of the authentication token before making API requests. Logs an error message if the token is missing.
   - **HTTP Response Validation:** Verifies the status of HTTP responses and handles errors for unsuccessful requests.
   - **Data Validation:** Ensures that the data received from the API is valid and correctly formatted.
   - **Try-Catch Blocks:** Implemented `try-catch` blocks to capture and log any errors during the execution of the `unblur` function.

4. **DOM Selection Optimization:**
   - Verified and optimized the CSS selector `.Expand.enterAnimationContainer > div:nth-child(1)` to ensure accurate targeting of teaser elements within Tinder's DOM.

5. **Dynamic Content Loading Support:**
   - **Implemented `MutationObserver`:** Added an observer to detect the addition of new nodes to the DOM and automatically apply the `unblur` function to dynamically loaded teaser elements.

6. **UI/UX Enhancements:**
   - **Visual Feedback:** When the button is clicked, its text temporarily changes to "Unlocked!" to provide user feedback.
   - **Improved Transition Effects:** Added smoother transition effects for the button's `hover` and `active` states.
   - **Button Positioning and Styling:** Enhanced the button's positioning and styling for better integration with Tinder's layout and to prevent interference with other page elements.

7. **Security Enhancements:**
   - **Token Management:** Improved the secure handling of the authentication token to minimize the risk of accidental exposure.

8. **Additional Optimizations:**
   - **Debounce Mechanism for `unblur` Function:** Implemented a debounce mechanism to prevent excessive calls to the `unblur` function during rapid teaser loading.
   - **Caching Unblurred Images:** Considered adding caching for already unblurred images to enhance the script's performance.

9. **Other Improvements:**
   - **Execution Timing:** Added a 3-second delay before executing the `unblur` function to ensure all DOM elements are fully loaded.
   - **Button Accessibility:** Enhanced the button's accessibility by increasing color contrast and size for easier user interaction.
   - **Automatic Unblurring:** Enabled automatic unblurring of images upon page load, providing a seamless user experience without the need for manual intervention.

### [1.0] - 2024-04-20
**Initial Release:**

- **Core Functionality:**
  - Unblurred "fast match" teaser images on Tinder by making API requests to Tinder's endpoints.
  - Replaced blurred images with clear, original images using the original image URLs.

- **User Interface:**
  - Created a floating button to manually trigger the image unblurring function.
  - Styled the button to match Tinder's theme, including colors, rounded borders, shadows, and hover effects.

- **Automated Execution:**
  - Automatically executed the `unblur` function upon the full loading of the page.

---

## Contributing

Contributions and improvements are welcome! Feel free to open a pull request or report issues on the [GitHub repository](https://github.com/ManoloZocco/tinderunblur).

## License

This project is licensed under the **MIT License**.

---

**Manolo Zocco**  
[GitHub](https://github.com/ManoloZocco)  
2024

---
