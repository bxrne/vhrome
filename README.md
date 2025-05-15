
<center>
    <img src="./icons/icon128.png" alt="vhrome icon" width="128">
</center>


Vim-style keyboard navigation for Google Chrome. This extension allows you to use Vim-like keys to navigate web pages.

Inspired by [Vimium](https://github.com/philc/vimium).

## Features

- **h**: Scroll left
- **j**: Scroll down
- **k**: Scroll up
- **l**: Scroll right
- **?** or **:help**: Show the help popup
- **Esc**: Close the help popup

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bxrne/vhrome.git
    cd vhrome
    ```

2.  **Load the extension in Chrome/Chromium:**
    *   Open Chrome and navigate to `chrome://extensions`.
    *   Enable "Developer mode" using the toggle in the top right corner.
    *   Click on "Load unpacked".
    *   Select the `vhrome` directory (the one you cloned).

## Usage

Once installed, the extension is active on all web pages. Simply use the defined keybindings to navigate. Press `?` to see the help popup with available commands.

## Project Structure

-   `manifest.json`: The core configuration file for the Chrome extension.
-   `src/main.js`: Contains the main logic for capturing key presses and performing scroll actions.
-   `resources/`: Directory for assets used by the help popup.
    -   `help.html`: The HTML structure for the help popup.
    -   `help.css`: Styles for the help popup.
    -   `help.js`: JavaScript for help popup functionality (e.g., closing with Esc).
-   `icons/`: Contains the extension icons (e.g., `icon128.png`).
-   `.github/workflows/`: Contains GitHub Actions workflows for CI.
    -   `lint.yml`: Lints JavaScript and validates `manifest.json`.
    -   `package.yml`: Creates a distributable `.zip` file of the extension.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
