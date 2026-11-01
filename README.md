# Apex Web Flasher

Static GitHub Pages installer for the LilyGO T-Embed CC1101 Plus.

## Publish with GitHub Pages

Upload the entire `web-flasher` folder to a repository (or move its contents to the repository root), and place the matching firmware at `firmware/Apex-T-Embed-CC1101-Plus.bin`. The `manifest.json` uses that relative path. In the repository settings, enable GitHub Pages for the branch and folder containing `index.html`.

## Install

Open the published HTTPS page in desktop Chrome or Edge, connect the T-Embed with a USB data cable, select its serial port, and confirm the install. This writes the full image and replaces the firmware currently on the device. Keep the device connected until the page reports completion.

The browser installer is provided by [ESP Web Tools](https://github.com/esphome/esp-web-tools).
