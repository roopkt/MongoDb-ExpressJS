# Welcome to Express JS MongoDB Sample App

## Start

`npm start`

## How to install MongoDb in Mac

Install MogoDb in Mac
Run below script
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Then run below 2 scripts

    brew update
    brew install mongodb

Run mogod in terminal to check it is installed
Next install mongoose

    npm i -S mongoose

Install RoboMongo 3T
https://robomongo.org/download

BEFORE USING MONGODB CREATE DIRECTORY
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

    mkdir -p /data/db

If permission denied:

    sudo mkdir -p /data/db

Now that you have directory created Next apply read and write access to that directory by running below script

    sudo chown -R `id -un` /data/db

Now run mongo db BY running below script

    mongod

Connect Db With RoboMongo 3T

## Install 

body-parser : send object through http post to mongo db
