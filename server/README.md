# Node.js Backend Architecture Typescript Project
### A complete project to build a blogging platform like Medium, and FreeCodeCamp

# Project Highlights 
1. Node.js
2. Express.js
3. Typescript
4. Mongoose
5. Redis
6. Mongodb
7. Joi
8. Unit Tests & Integration Tests
9. Docker
10. JWT

# About The Project
This project is designed for a production ready environment. It can handle the scale and complexity of a very demanding application. This project is being used by companies like MindOrks, AfterAcademy, and CuriousJr. Apps/Websites having 10+ million usebase.

It is suitable for Web Apps, Mobile Apps, and other API services.

# Project Instructions
We will learn and build the backend application for a blogging platform. The main focus will be to create a maintainable and highly testable architecture.
<br>
Following are the features of this project:
* **This backend is written in Typescript**: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. I have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.
* **Separation of concern principle**: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.
* **Feature encapsulation**: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.
* **Centralised Error handling**: I have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.
* **Centralised Response handling**: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.
* **Mongodb is used through Mongoose**: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.
* **Redis Memcache**: I have used the redis server for caching the items which does not change frequently. It will boost the performance of our system.
* **Async execution**: I have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.
* **Docker compose has been configured**: I have created the Dockerfile to provide the easy deployability without any setup and configurations. 
* **Unit test is favored**: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.
* **A pure backend project**: I have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.

## 3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler


## How to build and run this project

* Install using Docker Compose [**Recommended Method**] 
    * Clone this repo.
    * Make a copy of **.env.example** file to **.env**.
    * Make a copy of **keys/private.pem.example** file to **keys/private.pem**.
    * Make a copy of **keys/public.pem.example** file to **keys/public.pem**.
    * Make a copy of **tests/.env.test.example** file to **tests/.env.test**.
    * Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
    * Execute `docker-compose up -d` in terminal from the repo directory.
    * You will be able to access the api from http://localhost:3000
    * *If having any issue* then make sure 3000 port is not occupied else provide a different port in **.env** file.
    * *If having any issue* then make sure 27017 port is not occupied else provide a different port in **.env** file.
 * Run The Tests
    * Install node.js and npm on your local machine.
    * From the root of the project executes in terminal `npm install`.
    * *Use the latest version of node on the local machine if the build fails*.
    * To run the tests execute `npm test`.
 * Install Without Docker [**2nd Method**]
    * Install MongoDB on your local.
    * Do steps 1 to 5 as listed for **Install using Docker Compose**.
    * Do steps 1 to 3 as listed for **Run The Tests**.
    * Create users in MongoDB and seed the data taking reference from the **addons/init-mongo.js**
    * Change the `DB_HOST` to `localhost` in **.env** and **tests/.env.test** files.
    * Execute `npm start` and You will be able to access the API from http://localhost:3000
    * To run the tests execute `npm test`.

 ## Project Directory Structure
 ```
├── .vscode
│   ├── settings.json
│   ├── tasks.json
│   └── launch.json
├── .templates
├── src
│   ├── server.ts
│   ├── app.ts
│   ├── config.ts
│   ├── auth
│   │   ├── apikey.ts
│   │   ├── authUtils.ts
│   │   ├── authentication.ts
│   │   ├── authorization.ts
│   │   └── schema.ts
│   ├── core
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   ├── JWT.ts
│   │   ├── Logger.ts
│   │   └── utils.ts
│   ├── cache
│   │   ├── index.ts
│   │   ├── keys.ts
│   │   ├── query.ts
│   │   └── repository
│   │       ├── BlogCache.ts
│   │       └── BlogsCache.ts
│   ├── database
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── ApiKey.ts
│   │   │   ├── Blog.ts
│   │   │   ├── Keystore.ts
│   │   │   ├── Role.ts
│   │   │   └── User.ts
│   │   └── repository
│   │       ├── ApiKeyRepo.ts
│   │       ├── BlogRepo.ts
│   │       ├── KeystoreRepo.ts
│   │       ├── RoleRepo.ts
│   │       └── UserRepo.ts
│   ├── helpers
│   │   ├── asyncHandler.ts
│   │   ├── permission.ts
│   │   ├── role.ts
│   │   ├── security.ts
│   │   ├── utils.ts
│   │   └── validator.ts
│   ├── routes
│   │   ├── access
│   │   │   ├── credential.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── schema.ts
│   │   │   ├── signup.ts
│   │   │   ├── token.ts
│   │   │   └── utils.ts
│   │   ├── blog
│   │   │   ├── editor.ts
│   │   │   ├── index.ts
│   │   │   ├── schema.ts
│   │   │   └── writer.ts
│   │   ├── blogs
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   ├── index.ts
│   │   └── profile
│   │       ├── schema.ts
│   │       └── user.ts
│   └── types
│       └── app-request.d.ts
├── tests
│   ├── auth
│   │   ├── apikey
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authUtils
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authentication
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   └── authorization
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── core
│   │   └── jwt
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── cache
│   │   └── mock.ts
│   ├── database
│   │   └── mock.ts
│   ├── routes
│   │   ├── access
│   │   │   ├── login
│   │   │   │   ├── integration.test.ts
│   │   │   │   ├── mock.ts
│   │   │   │   └── unit.test.ts
│   │   │   └── signup
│   │   │       ├── mock.ts
│   │   │       └── unit.test.ts
│   │   └── blog
│   │       ├── index
│   │       │   ├── mock.ts
│   │       │   └── unit.test.ts
│   │       └── writer
│   │           ├── mock.ts
│   │           └── unit.test.ts
│   ├── .env.test
│   └── setup.ts
├── addons
│   └── init-mongo.js
├── keys
│   ├── private.pem
│   └── public.pem
├── .env
├── .gitignore
├── .dockerignore
├── .eslintrc
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .travis.yml
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
├── jest.config.js
└── tsconfig.json
 ```
 
 ## Directory Traversal for Signup API call
 `/src → server.ts → app.ts → /routes/index.ts → /auth/apikey.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /routes/access/signup.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /database/repository/UserRepo.ts → /database/model/User.ts → /core/ApiResponses.ts`
 
 