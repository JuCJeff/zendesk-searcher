# Zendesk Searcher Web Application

![Alt text](/public/images/zendesk-searcher-banner.png?raw=true "Banner Image")

## Prerequisite
[Nodejs](https://nodejs.org/en/) needs to be installed.

## Usage Instructions
1. Start and compile backend server app in the `server` folder. Instructions are below in **Backend setup**
2. Start and compile frontend app in the `frontend-web` folder. Instructions are below in **Frontend setup** 
![Alt text](/public/images/blank-user-interface.png?raw=true "Landing Screen Image")
3. Open frontend user interface through http://localhost:8080/.
4. Select search mode from dropdown menu
![Alt text](/public/images/user-flow-step-1.png?raw=true "User Flow Step 1")
5. Select search term from dropdown menu
![Alt text](/public/images/user-flow-step-2.png?raw=true "User Flow Step 2")
6. Fill out search field in the input box (optionally leave blank)
![Alt text](/public/images/user-flow-step-3.png?raw=true "User Flow Step 3")
7. Click **Search** button to generate search result(s)
![Alt text](/public/images/user-flow-step-4.png?raw=true "User Flow Step 4")
8. Click **Clear** to clear results

## Notations
1. The search results are generated based on exact value matching.
2. The data is directly served through given json files in the backend rather than put in a database for easier setup.
3. The application assumes that user data will not contain nested objects.
4. The application assumes there could be empty data (string or array) as value for any attributes.
5. The application assumes there could NOT be null data as value for any attributes.

## Backend setup
```
cd server
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run tests through Jest
```
npm test
```

### Lints and fixes files through ESlint
```
npm run lint
```

## Run prodcution server once generated
```
npm run prod
```

## Frontend setup
```
cd frontend-web
npm install
```

### Compiles and hot-reloads for development
```
npm run serve (--fix)
```

### Compiles and minifies for production
```
npm run build (--fix)
```

