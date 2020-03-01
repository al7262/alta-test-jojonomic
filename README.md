This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description
###### React and NPM Modules
This project is made using react-js and several npm modules such as:
 - axios
 - react
 - react-router-dom
 - react-bootstrap
 - unistore
 - sweetalert2

###### External API
This project used external api from: 
https://www.football-data.org/

###### Features
The features that is available in this project is:
 - searching team based on area in region
 - looking team details
 - looking member details in the team

###### Extra Works
There are several things that was made in order to improve user experience while using the application, such as:
 - Using Modal to show details so no page wasted
 - Simple and straightforward homepage

###### Deployment
The deployment was using netlify.com, so it will be automatically updated everytime the commit was pushed into **release** branch

###### Setup Instruction
To run the project please do this first:
 - Install all the modules from NPM
 - make sure the api key for external api already correct (or just used the api key in the *MainStore.js*)
   - register to the website stated in external api to get the api key
   - api key will be sent to your email after register
   - update the *apiKey* state in *MainStore.js*

## Application Guide
###### Home Page
 - Header on the top can be used to navigate to another page
 - Searching can be done by choosing region available in the homepage
 - After choosing region, the area that is in that region can be choosen
   - If the region doesn't have any area under the region then it will shown the region's name
   - The region shown is based on the region that is have 'world' as it's parent area in the data from api
   - The region might not be the same with the real region on the map
 - When area have been choosen, then the button can be clicked to search the team in that area
 - The click on button will redirect to the area page

###### Area Page
 - Header on the top can be used to navigate to another page
 - When the area page accessed through header, then user have to search for area first to get the list of the team
 - If page was the result of being directed from searching in homepage then it will immediatly show the list of the team
 - Searching can be done by choosing region and area available on the top
 - After choosing region, the area that is in that region can be choosen
   - If the region doesn't have any area under the region then it will shown the region's name
   - The region shown is based on the region that is have 'world' as it's parent area in the data from api
   - The region might not be the same with the real region on the map
 - When area have been choosen, then the button can be clicked to search the team in that area

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
