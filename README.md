# Zendesk Searcher Web Application

![Alt text](/public/images/zendesk-searcher-banner.png?raw=true "Banner Image")

## Prerequisite
Nodejs needs to be installed.

## Usage Instructions
1. Start and compile backend server app in the `server` folder. Instructions are below in **Backend setup**
2. Start and compile frontend app in the `frontend-web` folder. Instructions are below in **Frontend setup** 
![Alt text](/public/images/blank-user-interface.png?raw=true "Landing Screen Image")
3. Select search mode from dropdown menu
![Alt text](/public/images/user-flow-step-1.png?raw=true "User Flow Step 1")
4. Select search term from dropdown menu
![Alt text](/public/images/user-flow-step-2.png?raw=true "User Flow Step 2")
5. Fill out search field in the input box (optionally leave blank)
![Alt text](/public/images/user-flow-step-3.png?raw=true "User Flow Step 3")
6. Click **Search** button to generate search result(s)
![Alt text](/public/images/user-flow-step-4.png?raw=true "User Flow Step 4")
7. Click **Clear** to clear results

## Notations
1. The search results are generated based on exact value matching.
2. The data is directly served through given json files in the backend rather than put in a database for easier setup.

## Frontend setup
```
cd frontend-web
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Backend setup
```
cd backend
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Run tests through Jest
```
npm test
```
