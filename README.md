# My Portfolio
![React.js](https://img.shields.io/badge/react.js-blue)
![CSS](https://img.shields.io/badge/css-green)
![HTML](https://img.shields.io/badge/html-yellow)

This is my simple portfolio built using React.js.

## Features
- Responsive design
- Single-page layout
- Light and dark modes

## Preview
Check out the live preview [here](https://sjiayi-portfolio.vercel.app/).

## Technologies used
- [React](https://react.dev/)
- [Font Awesome](https://fontawesome.com/)
- [Animate On Scroll](https://michalsnik.github.io/aos/)
- Fonts from https://fonts.google.com/
- Icons from https://iconify.design/, avatar from https://www.freepik.com/

## Usage
To work on it locally:
1. Git clone the repository:
    ```
    git clone https://github.com/sjiayi-work/portfolio.git
    ```
2. Go to the project directory and install dependencies:
    ```
    npm install
    ```
3. To preview only:
    ```
    npm run build
    npm run preview
    ```
4. To startup for development:
    ```
    npm run dev
    ```
    
To startup in Docker:
1. Build image locally:
    ```
    docker build --build-arg NODE_VERSION=$(cat .nvmrc) -t <image_name> .
    ```
2. Edit the image name in `docker-compose.yml`.
3. Startup the image:
    ```
    docker compose
    ```