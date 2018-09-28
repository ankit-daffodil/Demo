# Project Title
  
	test
	
## Instructions for run Project

Open terminal and go to project folder and Run below command for install modules (please ensure the postgres and node js install on your system)

```
npm install
```

Add config.json file in config folder. 
Change postgresql port and password in config.json file.   
Replace XXXXXXXXXXXXXXXXXXXXXXXXXX with your sendgrid api key in config/constants.js file.

Server will run on 3000 port 

For change port run below command

```
export PORT=<port-number>
```

Run below command for run project

```
npm start
```



## Instructions for run test cases 

Open terminal and go to project folder and Run below command for install modules (please ensure the postgres and node js install on your system)

```
npm install
```
Run below command for run the test server (This server will use test database)

```
npm run test-server
```
Run below command for run test cases 

```
npm test
```
