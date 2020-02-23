## Instructions

The Canopy User Directory is a basic app set up to list and manage users, however there are a few features missing. Your job is to complete these features to make the app an optimal tool for managing users.
## Tasks:
1. Bulk delete users:
   
   Currently we have the ability to delete users individually, but we also want to be able to multi-select users and delete them in one click. Add a delete button option next to the 'Add User' option in the UI as well as a checkbox on each user row within the `UserListRow` component. Utilize the 'deleteUser' function within the `UsersPage` component to loop through and delete each selected user.
   
2. Adding an option to cancel from the user form:

    Currently when you're creating or editing a user within the UserForm, we have an option to 'save', but no option to 'cancel' and return back to the users page. Add a 'Cancel' button that doesn't save the changes on the form and instead returns to the view that lists all users.

3. Alphabetically sort users
    
    Now that we have an option to add and bulk delete users, let's add a third button 'Sort', which on click will sort the users alphabetically by last name.
    
## A few important things to note:

All of your work should be done within the /src/components/user folder. Here you’ll find the components that are missing key pieces that make this a fully functioning user management application.

At times you may want to refer to an object’s structure (which includes a user’s first name, last name, and id). You can find an array of users in the /src/api/mockUserApi.js file.

Finally, please note that this project does not use an API, therefore do not expect your data to persist (beyond the 3 hard coded users already provided). You can find the simulated API calls in the /src/api/mockUserApi.js file, although no task requires you to make changes to this file.

We expect this assignment to take about 2 hours and it requires a beginner’s level of experience with React and a touch of Redux. We’re excited to chat through how you approached the tasks next time we speak.
## Getting started

We’ve included a zip file for you to download, unzip, and open in your text editor of choice.

 

You will need to have npm installed in order to run the application.

Instructions for installing npm on Mac: https://treehouse.github.io/installation-guides/mac/node-mac.html

Instructions for installing npm on Windows: https://treehouse.github.io/installation-guides/windows/node-windows.html

 

Make sure that you’ve run npm install within the project directory to install any necessary packages.

Finally, run npm start to start the application.