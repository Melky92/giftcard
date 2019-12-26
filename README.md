
## Text configurations

The [config file](https://github.com/melky92/GiftCard/tree/master/src/config.json) can be configured to display different messages when the envelope is open and closed, and it also handles the amount shown.

You can set "selected":"local" and simply set the local->amount to a fixed value.

Or if you don't want to republish every time you change the amount, you can set "selected":"remote", and configure an url for the [amount handler](https://github.com/melky92/GiftCard/tree/master/src/lib/getAmount.js) to fetch.
I used [jsonstore.io](https://www.jsonstore.io/) for this, just get your id on the site, and then use the following curl command to set a value (or to update it):
```
curl -XPOST -H "Content-type: application/json" -d '{"amount":"30.00"}' https://www.jsonstore.io/[id]
```
Then you can set the url parameter to:
```
https://www.jsonstore.io/[id]/amount
```

## Envelopes Images

You can replace or edit the files in the [images folder](https://github.com/melky92/GiftCard/tree/master/src/img/), as long as the dimensions are 300x190px. 
Other dimensions might work properly, but I haven't tested.
I used [online paint](https://jspaint.app) to make the current simple images.

## Background Decoration

This project uses [react-particles-js](https://www.npmjs.com/package/react-particles-js) for the background.
The christmas configuration can be edited [here](https://github.com/melky92/GiftCard/tree/master/src/BackgroundDecoration.js)

## Publishing

I used [surge](https://surge.sh/help/getting-started-with-surge) to publish this temporarily, after installing surge, you can run
```
yarn run build
cd build
surge
```
and follow the instructions there.

## Local testing

Use this command to run it locally:
```
yarn start
```
