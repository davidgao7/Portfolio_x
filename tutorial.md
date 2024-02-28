since it's a personal portfolio, I want to make it pretty, so I choose to follow a tutorial. 

<font color=red>but</font> remember you need to learn vanilla css first!

# Install Pacakges
```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

- `--legacy-peer-deps` is used to bypass the peer dependency check. 
- `@react-three/fiber` is a react renderer for three.js
- `@react-three/drei` is a collection of useful helpers and abstractions for react-three-fiber
- `maath` is a library for math functions, since there will be geometry envoled
- `react-tilt` is a parallax **hover** effect for react
- `react-vertical-timeline-component` is a vertical timeline for react, similar to linkedin's timeline
- `framer-motion` is a library for animations
- `react-router-dom` is a library for routing in react

# Get graphics
- `unzip` the public.zip to replace project public folder,
- `unzip` the src.zip to replace project src folder
- `unzip` the components.zip to replace project components folder

# create vite project
```bash
cd ~/Portfolio_x/
npm create vite@latest ./ -- --template react
```

# Manage wanted files
- install packages
    - tailwindcss: 
        - `npm install -D tailwindcss`
        - `npx tailwindcss init`
    - install older packages: `npm install --legacy-peer-deps`
        - `@react-three/fiber`, react based 3js libary
        - `@react-three/drei`
        - `maath` , math library
        - `react-tilt`, hovering animation
        - `react-vertical-timeline-component`
        - `react-vertical-timeline-component`
        - `@emailjs/browser`
        - `framer-motion`
        - `react-router-dom`

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

# create file structure
- delete app.css
- modify app.jsx vet deafult structure
- utils/motion.js framer-motion utils
- `constant/index.js` store all the constants

# start the project
```bash
npm run dev
```

- issue 1: [<font color=red>ERROR</font>] Could not resolve "three"
```bash
npm install three
```
