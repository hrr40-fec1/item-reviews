
# FEC Project Milestones

Please review, track and submit your deliverables using your cohort's deliverables tracker.

## Phase 0: build an app plan

*   Pick an app and the four item modules to build, 1 for each team member.
    *   Pick your team's app and experience
        *   Minimum required: item page
        *   Stretch: search results page, category browse pages
*   Define your API, pick a DB and design your Data Shape
    *   For each service:
        *   Pick your features (base + stretch)
        *   Define your API
        *   Choose a DB and develop a schema
    *   _Special requirements for media-centric widgets:_ If you are building a media-centric widget, you must transfer original media to and serve those media files from either S3 or Cloudfront. Media is defined as: photos or songs. For movies, it's ok to serve content from the original source such as YouTube or Vimeo.

## Phase 1: build your service

*   Generate "realistic" mock data (for 100 primary records) and load it into your DB
*   Your team may not use downloaded data or pre-existing data. Each team member must generate their own data.
*   Your team may must not copy the same data into each service's database. Each team member must generate data that is specific to what their service/widget requires and presents to the user.
*   The primary record represents an item. If your service/widget is responsible for related data, you will likely generate more than 100 records. For example, there is a 1:1 relationship between an item and its description, but there is a 1:n relationship between an item and it's reviews/photos/etc.
    *   The number of related records should vary between items; the goal is to create a realistic representation of an item page. For example, not every item will have 10 reviews or 10 photos. Some items will have zero reviews, some will have 20\. Create variations as appropriate.
*   If you are working on a media-centric widget: DO NOT SERVE YOUR MEDIA ASSETS FROM EXPRESS. Instead, transfer your media assets to S3 and/or Cloudfront. Be sure the URLs in your database correctly refer to the location of your assets.
*   Build a server that can serve an index.html file which then loads the app and renders it to the page (using react and webpack-dev [development] and webpack [production]).
    *   Each member of the team must run their service on a different port number
    *   The focus of this project is on Front-end deliverables. Your server and database design must be the minimum design necessary to deliver content to your React Component. If your server has more than 100 lines of code, you may be putting too much emphasis on your server.
*   Build an API that the React component will use to fetch data based on an item's ID and/or name.
    *   Your server must be able to serve up the correct content by an item's ID and by that item's name. Note: this requirement has considerations for both your API design and your url decisions.
*   Write tests to ensure your API works correctly and your component(s) render correctly
    *   Jest will help you measure code coverage of your tests.
*   **Required Tech**:
    *   Express
    *   Database (MongoDB or MySQL)
    *   Webpack (production)
        *   Webpack-dev (development)
    *   React using Styled Components or CSS Modules
        *   You must style your components use Style Components or CSS Modules
        *   Do not use any jQuery UI components: instead opt for using React Libraries for subordinate UI components
    *   Enzyme (for React) + Jest
    *   Travis or Circle CI
*   **Optional Tech**:
    *   CSS Preprocessor
    *   memcache and/or redis
    *   nginx

## Phase 2: Build your proxy server

*   Build a static version of the page
*   You will need to have each of your teammate's services running in your development environment
*   Integrate all four services onto one page by pulling individual components onto one page and render them into their respective DOM nodes, initially client side.
    *   You proxy server must be able to display item pages based on an item's ID or based on the item's name.
*   Serve all your JS bundles and CSS files from S3/cloudfront. This will require a you to develop a build process. Consider using either Grunt (preferred) or Gulp.
*   **Required Tech**:
    *   Express
    *   React
*   **Optional Tech**:
    *   Grunt or Gulp
    *   memcache and/or redis
    *   nginx

## Phase 3a: Deploy both servers

*   Deploy both of your servers (service + proxy server), connect your deployed proxy to your deployed service as well as your teammates' deployed services.
*   Your service should not use webpack-dev in production mode.
*   Be sure to sign up for a Free-Tier AWS account (you will need to provide a credit card). The free tier allows you to run upto 750 hours/month of a t2.micro instance which you will use for deploying your app. The hour limit is an aggregate limit, which means you can run two instances for 375hrs each. This is plenty to complete the basic requirements of a micro service and a proxy server. Docker Hub is free for open-source projects.
*   **Required Tech**:
    *   AWS Elastic Beanstalk, or
    *   Docker + EC2 (may require the use of Docker Hub)

## Phase 3b: Front-end Optimization

*   Run Google Page Speed against your deployed servers
    *   Implement 1-3 of the suggested optimizations
    *   Afterward, re-run Google Page Speed and note any performance improvements
*   If not already done so: serve all your JS bundles and CSS files from S3/cloudfront. This will require a you to develop a build process. Consider using either Grunt (preferred) or Gulp.
*   Cross-browser test your implementation to see how it performs on different browsers and screen sizes. Adjust your CSS to cover the main browsers: Chrome, FF, Safari, Edge for mobile (480) and Desktop (1280)

## Phase 4: Advanced Content

It is likely that you and/or your team may finish with the basic requirements early. This project contains tremendous opportunity for working with advanced Front-End concepts.

*   Turn your Proxy Server into an App Server
    *   A Proxy Server is a "dumb" server, meaning it does nothing except serve up content from another server.
    *   An App Server has some smarts to it. Some things you might decide to do:
        *   Create multiple page layouts and assign different items to different layouts. To do this, you will need to add a database and map item IDs to layouts.
        *   Allow your user to interact with a fully dynamic view for any given widget, even if the page is rendered on the server. This will require you to render the React component on top of the already presented HTML and the component must be smart enough to not reinitialize/re-render itself.
        *   Combine all your webpack bundles into one bundle for faster page rendering.
        *   Send all API (from the client) back to your app server instead of the individual services. The App Server will then proxy the request back to the appropriate service's API Server.
*   Build more than one page/experience or build additional modules/widgets for your selected experience.
    *   search results page
    *   category page (for browse)
*   Modify your widgets to support the creation of new records or editing of existing records (via the UI). You will need to create a POST or PUT route on your server too.
    *   The app you are cloning may not support the creation/editing. In this case use your own creative judgement on how your widget will support this feature.
*   Add Open-Graph tags. This will require the proxy server to have its own database that stores page metadata for a given content ID.
