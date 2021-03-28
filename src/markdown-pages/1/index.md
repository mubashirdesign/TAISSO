---
path: "/1"
title: "Setting up a deployment pipeline for your Shopify site"
type: "blog"
date: "2019-12-28"
excerpt: "Using Azure DevOps and ThemeKit CLI"
---

This guide assumes you have some basic knowledge on themekit to deploy changes to Shopify via your local environment.

The overall idea is to have the azure pipeline execute commands with the themekit CLI to deploy changes directly from your repository. This way you can negate pushing changes directly to the production environment and have it done through pull requests.

So the first step is to connect your Shopify repo on your desktop to your azure devops environment. You can do this by creating a new repo on azure devops, then cloning it on your local environment and drop in your shopify files there and commit.

![Repo](./repo.png)

Note that the remote repo will not contain the config files to prevent overriding schema changes, you will however need it in your local repo to connect to Shopify via themekit

Once the connection is established, add a .gitignore file and put in the below:

#### .gitignore

```git
config.yml
config/settings_data.json
config/settings_schema.json
```

The config file shouldn't be visible in the repo as it contains the api key that establishes the connection to the shopify cloud environment, leaving that exposed is a potential risk. We'll use pipeline variables to establish the connection in the next section.

To allow the pipeline to execute the themekit commands We'll need to setup the package.json so that it installs the themekit CLI via npm and has the build script.

Create the package.json file by running npm init or adding it manually. Drop in the code below:

#### package.json

```json
{
  "name": "xxxxxxxxx",
  "version": "1.0.0",
  "description": "Package to deploy our website via CD pipeline",
  "main": "index.js",
  "dependencies": {
    "shopify-themekit": "^0.2.0"
  },
  "scripts": {
    "build": "theme deploy"
  },
  "author": "",
  "license": "ISC"
}
```

To start creating the pipeline file, add a "azure-pipelines.yml" file to your repo.

Drop this code into the file as this is used for the initialization:

#### azure-pipelines.yml

```yml
trigger:
branches:
include: - "\*"

pool:
vmImage: "ubuntu-latest"
```

Now in terms of execution steps drop this in:

```yml
steps:
#Installs the themekit package from the package.json file

- task: Npm@1
  inputs:
  command: "ci"
  workingDir: "\$(system.defaultworkingdirectory)/"
```

The ci command will install from the package-lock.json file, the reason you want to do this is if you install from the package.json file it'll automatically update dependancies and if there are any broken dependancies it will fail. So to be safe you'll need to install from the package-lock.json file if your dependancies are working good.

The next two steps will determine what branch to deploy from to the specified environment.

```yml
#Runs the theme kit install command with the passed parameters IF the branch committed to is Master
#themekit deploy pass=XXX, store==XX, themeid=XXX

- task: CmdLine@2
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
  inputs:
  script: "npm run build -- --password=$(productionPassword) --store=$(productionStoreUrl) --themeid=\$(productionThemeId)"

#Runs the theme kit install command with the passed parameters IF the branch committed to is Test
#themekit deploy pass=XXX, store==XX, themeid=XXX

- task: CmdLine@2
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/test'))
  inputs:
  script: "npm run build -- --password=$(testPassword) --store=$(testStoreUrl) --themeid=\$(testThemeId)"
```

Based on the condition, it will check whether you've committed to the test or master branch and based on that run the script below. In the script itself you can see three variables:
####Environment Variables
| Prod | Test |
| ------ | ------ |
| prodPassword | testPassword |
| prodStoreUrl | testStoreUrl |
| prodThemeId | testThemeId |

These variables are set from azure pipeline, to get the values for password, storeurl and themeId refer to the themekit documentation https://shopify.github.io/themekit/

To create and set the variables, go onto the azure devops gui, click edit on the pipeline then click on variables.

Create all 6 variables with their respecitve values, when creating it, checkmark "Keep this value secret" as it will hide the variables from anyone else who accesses the pipeline.

Now that everything is setup, you can do a test commit to either the test/master branch. Then just watch the pipeline queue a job and execute the script commands!

Done.
