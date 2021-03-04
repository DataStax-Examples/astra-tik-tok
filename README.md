<!--- STARTEXCLUDE --->
# Astra Tik-Tok
*50 minutes, Advanced, [Start Building](https://github.com/DataStax-Examples/astra-tik-tok/blob/master/README.md#running-astra-tik-tok)*

A simple Tik-Tok clone running on AstraDB that leverages the Document API.
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/astra-tik-tok/master/screenshot.jpg)


## Objectives
* Work through a video tutorial to build a simple Tik-Tok clone
* Leverage Netlify and DataStax AstraDB
  
## How this works
We're using Create-React-App and the AstraDB Document API to create a simple Tik-Tok clone.  Follow along in this video tutorial: [https://youtu.be/IATOicvih5A](https://youtu.be/IATOicvih5A).

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/astra-tik-tok/blob/master/README.md#running-astra-tik-tok](https://github.com/DataStax-Examples/astra-tik-tok/blob/master/README.md#running-astra-tik-tok).

<!--- STARTEXCLUDE --->
## Running Astra Tik-Tok
Follow the instructions below to get started.

### Video Content:
- [https://youtu.be/IATOicvih5A](https://youtu.be/IATOicvih5A)
- (00:00) Introduction
- (03:05) Creating our Database on DataStax
- (06:52) Setting up our App
- (12:37) Routing Pages
- (18:02) Creating Components
- (28:32) Introduction to Data with Netlify and Stargate
- (30:10) Introduction to using the astrajs/collections
- (34:01) Posting data to our Database (creating dummy Tik Tok posts)
- (34:01) Adding authorization to access our Database
- (43:10) Getting data from our Database (getting all our Tik Tok posts)
- (50: 32) Viewing all our Data
- (51:56) Rendering components based on our Data
- (01:17:01) Editing our Data (following/unfollowing a user)
- (01:32:57) Adding new Data to our Database (creating a Tik Tok post)

### If you did like this video, please hit the Like and Subscribe button so I know to make more!
- Twitter: https://twitter.com/ania_kubow
- YouTube: https://youtube.com/aniakubow
- Instagram: https://instagram.com/aniakubow

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-tik-tok) if you don't 
already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

7. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

8. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/astra-tik-tok):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)


## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)

### Running on your local machine
1. Create a `.env` file and fill it with values from the `.env.sample` file.

2. Make sure the package dependencies are installed
```sh
# install dependencies
npm install
```

3. Then, start the app in dev mode. Changes in the `src` or `functions` directories will trigger reloads.
```sh
# start in dev mode
npm run dev
```
<!--- ENDEXCLUDE --->