# Learning-React-Akshay-Saini


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (restarting the server)
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress files

# Two types of Export/Import

- Default Export/Import

    - export default Component
    - import Component from "path"

- Named Export/Import

    - export const Component;
    - import {Component} from "path"


# React Hooks

- Normal JS utility functions
    - useState() 
        - super powerful state variable in react
        - whenever there is a change in state react re-render the component
    - useEffect()

# Virtual DOM

- virtual DOM is representation of an actual DOM
- it is a object representation Ex: React.createElement => returns a object this is Virtual DOM

# Two approach to call Api

1. as soon as the page loads -> api call -> render
2. as soon as page loads -> render -> api -> re-render
    - recommended approach for better UX

# Shimmer UI
- we load the fake page until we load the actual api

# Tow types of routing in web app
- client side routing
-server side routing