### Gateway Service

This is our backend application in the `backends/Gateway` folder. This app uses [apollo server](https://www.apollographql.com/docs/apollo-server/) and is the [apollo gateway](https://www.apollographql.com/docs/federation/gateway/) for our apollo federation.

> Note: If you make changes to the User or Post service be sure to restart this service. We don't have auto reload for our gateway at the moment :) Also, make sure to start the User/Post service before starting this app :)

You can start this app by navigating to `backends/Gateway` then `yarn install` and `yarn start`
