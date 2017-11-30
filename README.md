```md

![alt text](https://i.imgur.com/HLc2laL.png)
![alt text](https://i.imgur.com/Tf1jq6f.png)

Reference:
Link for FE repo:
https://github.com/jameskane1/capstone_client
Link for BE repo:
https://github.com/jameskane1/capstone_api

Link for FE deployed site:
https://jameskane1.github.io/capstone_client/
Link for BE deployed site:
https://jimmy-kane-capstone-2017.herokuapp.com'

Link to wireframes:
https://i.imgur.com/kHcrZMz.jpg
https://i.imgur.com/ZuqB7Xk.jpg



User Stories:
-The user will need to be able to creat 4 different widgets
-The user will need to be able to access each individual widget
-the user will need to be able to edit and delete selected widgets
-The user will need to be able to use the info from the widget to navigate to other sites
-the user will need to interact with a 3rd party api to recieve updated info

What is MyDashBoard?

My dashboard is a quick one stop place for you to catch up on what you're interested. There are four categories Celebrity, Sports, News, and Weather which a user can select from. Once selected the user can create a 'widget' for a item that intrests them for the category. For example you could make a news 'widget' for the boston globe. This app then directs you through creating that widget and then neatly displays it for the user.

The user continuously add to their dashboard until it has all relevent data for them, and will allow them to keep up to date with each of their items moving forward.

How This App Works:
I've used 4 different RESTful routes that allow the user to create, edit, delete, or find each of their widgets. This allows the user to be able to pinpoint the 'widget' of interest and interact with it properly.

These routes allow to create and edit/delete the widgets, but i have used Handlebars to take all of this information and display it in a neat fashion for the user. This allows the news paper like feel when the user logs into their dashboard.

I had also used a variaty of css, html, and boostrap techniques to give the page a friendlier feel.

Planning, Process and Problem-Solving Strategy:
When starting to create this app I was looking for a way that I could tap into third pary apis in orer to keep a user up to date with what is happening with all their items of interest.

This lead me to a dashboard feel that would house all the 'widgets' or items of interest for the user and allow them to check up on what they were interested in whenever they felt like.

After having the basic idea down I quickly decided that having 4 different tables would be the easiest way to keep the categories separate from one another. I would then use handlebars to display and load these categories each time there was an update to the dashboard.

The biggest problem that I ran into was with interacting with different 3rd parties. Some, like weather underground, were easy to use and had great documentation to help me along the way. Others were more difficult and vague which lead to me only adding one 3rd party api on the first go, however, there will be more to come shortly!

To overcome the initial difficulty of the third parties I read countless docs that helped show how to point correctly to each app and how to pull back the proper data. Big shout out to MDN webdocs that helped me along the way.


Technologies Used:
-HTML
-CSS
-jquery/DOM
-Ajax
  -GET
  -PATCH
  -POST
  -DELETE
-API
-JSON
-Bootstrap
-Handlebars
-weather underground API

Unsolved Problems

At this point I do not have any unsolved problems for my MVP

```
