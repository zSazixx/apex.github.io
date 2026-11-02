# Apex Web Flasher

Static installer page for the custom Apex firmware on the LilyGO T-Embed CC1101 Plus. The firmware image in `firmware/Apex-T-Embed-CC1101-Plus.bin` was built from the Apex repository for this page (site manifest version 1.3.0).

## Publish with GitHub Pages

Upload the entire `web-flasher` folder to a repository (or move its contents to the repository root). Keep the firmware in `firmware/Apex-T-Embed-CC1101-Plus.bin`; `manifest.json` points to it with a relative path. In repository settings, enable GitHub Pages for the branch and folder containing `index.html`.

## Install

Open the published HTTPS page in desktop Chrome or Edge, connect the T-Embed with a USB data cable, select its serial port, and confirm the install. This writes the full image and replaces the firmware currently on the device. Keep the device connected until the page reports completion.

The browser installer is provided by [ESP Web Tools](https://github.com/esphome/esp-web-tools).

