# Bucket List

Bucket List is an app that allows users to log all the things they've been wanting to do but haven't gotten around to doing. Once a user creates an account- by signing up with a username and password- the user can sign in and view all of the items in their bucket list. The items are displayed with a title and a description, created by the user. By clicking on the update or delete buttons under each item, the user is able to execute both of those functions. The user can also change their password and sign out. Only the user can view and edit their own items in the bucket list.

 Beyond the functions of creating, viewing and editing items, the overall goal of our app is to inspire users to accomplish the items on their bucket list. It is TeamBestTeam's hope that the users will feel accountable for their goals, and excited about accomplishing them when taking action to write them down and view them on a clear app display.

 Bucketlist app has a mongo database, an Express API framework backend and a javascript/HTML/CSS frontend. On the backend, a one-to-many relationship exists between a user and items - one user has many items. The RESTful routes, for handling GET, POST, PATCH and delete are used to communicate with the front end and execute user actions such as signing in/up, changing password, adding, deleting, updating and showing items.

## Related Links
- [Backend API Repo](http://github.com/teamBestTeam/bucket-list-backend)
- [Deployed API](https://serene-eyrie-46099.herokuapp.com/)
- [Deployed Client](http://teamBestTeam.github.io/bucket-list-frontend)
- [Frontend Client Repo](http://github.com/teamBestTeam/bucket-list-frontend)

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Replace all instances of `bucket-list` with the name of your project.
1.  Move into the new project and `git init`
1.  Add all of the files in your project with the command `git add -A`
  -   *Note:* THIS IS THE ONLY TIME YOU SHOULD RUN THIS COMMAND
1.  Commit all of your files with the command `git commit`
  -   Your commit title should read `Initial commit`
1.  Install dependencies with `npm install`.

##  Technologies
-  JavaScript
-  jQuery
-  Ajax
-  Handlebars
-  Bootstrap
-  HTML5
-  CSS
-  Sass

## User Stories
- As a user, I want to be able to sign in.
- As a user, I want a notification of the success or failure of that sign in.
- As a user, I want to be able to sign up.
- As a user, I want a notification of the success or failure of that singing up.
- As a user, I want to be able to create list items upon signing in.
- As a user, I want to be able to edit any list item I have created.
- As a user, I want to be able to delete any item that I have created.
- As a user, I want to be able to show one item.
- As a user, I want to be able to show all items.
- As a user, I want to be able to sign out.
- As a user, I want notification of the success of signing out.
- As a user, I want the flow between features to be clear.
- AS a user, I want to be able to CRUD my own items.
- As a user, I don't want another user to be able to CRUD my items.
- As a user, I want to be able to change my password.
- As a user, I want to be notified of the success of changing my password.

##  Wire-frame
[Version1.0](https://projects.invisionapp.com/freehand/document/kEpt2BiMI)


## Unsolved Problems
One piece of core list functionality that our team would like to further implement is the ability for a user to check off what they've done. Though there is something inspiring about viewing your hopes and dreams, it's underwhelming if you can't show that you've accomplished them.

Beyond that, our team would like to connect our lists and items with a third party API for the challenge involved. There are a few different directions that we could go. To make the application feel more 'official', we could connect to a mail-based API to send login credentials about signing up or changing a password. Or we could enhance user experience by allowing users to tweet their goals, or perhaps use seeded images, or even make our application specific to Pokemon Go and involve requests to that API to record successfully catching 'em all.

## Planning and Strategy
Our goals for this project were to meet the Minimal Viable Product (illustrated in the wire frames and entity relationship diagrams) while demonstrating clear, cohesive commits and working together as collaboratively and kindly as possible.

To do this, we created a culture code that was observed throughout the five day project.

```
1. Recognize and leverage each other's strengths to create a better product
2. Communicate directly
3. Communicate about availability through slack
4. Be respectful.
5. Don't take things personally.
6. If you're in a bad mood: try to minimize damage by separating yourself, and asking for help if you need it.
7. Each morning, a standup where next steps for the day are discussed, and then roles are taken up by members.
8. Each evening, a retro where we discuss the original plan, where we stand now, and next steps for the next day.
9. No merge without group consensus and review.
10. Before we move to the next step or feature, review for possible issues, report them to the issue queue, and move forward.
11.  No changes to database structure without group consensus.
12. After we reach our Minimal Viable Product: only User Experience changes.
```

In particular, we adhered closely to a daily practice of stand-up (addressing what we've accomplished, what we're working on, and what might be blocking us) and retro (what we've done and what we will aim to do the next day). No pull or merge request was made without unanimous consent by the group; and as we tri-programmed together for almost the entire duration of the project, almost every commit was approved by the whole group prior to a pull request.


## Gratitudes
1. Shaun White advised on the best way to display cards through a handle bars template, and his own personal stylings inspired our own.
2. --curlPower was, collectively, a lovely rival team.
3. Many thanks to Adam for repeatedly reserving rooms for us -- even re-reserving if we forgot to accept the reservation, in our caffeine deprived states.
4. Even greater thanks to the GA staff who were forgiving of our squatting or talking animatedly in their communal spaces.

## Catchphrases

```
"Git init, GITTING IT, GITTING IT!"
```

```
*whispers*
"sssserene eyrieeeee"
```
