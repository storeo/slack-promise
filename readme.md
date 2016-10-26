# slack-promise
Enhances the [slack](https://github.com/smallwins/slack) library with promises. 

### Install
```
npm i slack-promise
```
### API
Refer [slack](https://github.com/smallwins/slack) for detailed API description. All APIs supported by slack area also supported by slack-promise, only difference being that along with the support for callbacks, the APIs now return a promise too.

Eg. Starting an RTM session:
```
import slack from 'slack-promise'

let bot = slack.rtm.client()
let token = process.env.SLACK_TOKEN

bot.hello()
    .then(message => {
        console.log(`Got a message: ${message}`);
        bot.close();
    });

bot.listen({token})
```
