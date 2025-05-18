# Poems and Sonnets Retrieval

This project is a simple web application that retrieves and displays random poems using the [PoetryDB API](https://poetrydb.org/). Users can view a summary of each poem and click to see the full text in a modal popup.

## Features

- Fetches 3 random poems from the PoetryDB API.
- Displays poem title, author, and a short preview.
- Allows users to view the full poem in a Bootstrap modal.

## Getting Started

1. **Clone or download this repository.**
2. **Open `index.html` in your web browser.**
   - No build steps or server required; works as a static site.

## Project Structure

- `index.html` – Main HTML file, includes Bootstrap and modal for poem details.
- `script.js` – Handles fetching poems and updating the DOM.
- `.vscode/launch.json` – VS Code launch configuration for debugging.

## Dependencies

- [Bootstrap 4.5.2](https://getbootstrap.com/)
- [jQuery 3.5.1](https://jquery.com/)

## Usage

Open `index.html` in your browser. The page will automatically fetch and display three random poems. Click "View Full Poem" to see the entire poem in a modal.
