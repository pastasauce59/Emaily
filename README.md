Emaily is a feedback collection application. A user of Emaily can send out mass email campaigns/surveys to a recipient list of email addresses and receive feedback based on recipients interactions with link in surveys.

This is a fullstack application created with a React frontend connected to a NodeJS and Express backend that also communicates data from a MongoDB database to the React frontend. This app has multiple features such as Google OAuth authentication for easy login and signup, makes use of Stripe API for handling credit cards and payment for email credits to send out surveys, sends out mass automated emails with help from SendGrid API, a dashboard showing a list of all sent out surveys, and tabulated feedback of user responses to surveys.

Technologies used to build this app are:
- ReactJS version 18
- React router version 6
- Redux and Redux Form for creating email templates and managing app state
- NodeJS version 16
- Express
- MongoDB with help from MongooseJS