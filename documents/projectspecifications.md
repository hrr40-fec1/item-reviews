<div class="mdown-container">

<div>

# FEC Project Specifications

## Project Selection

*   Choose an existing (and popular) website/app. The basic requirements are to build an "item detail page" with at least four significant and functionally unique modules ("widgets") on the page (see examples below). You must be able to describe the app to another engineer in 1-2 sentences.
*   Note: You will only build enough of the selected website/app to be able to display the item page; i.e. you are not building a complete clone of that app.
*   Stick to sites with complex item pages with a variety of modular elements on the page. Your goal is to focus on the delivery of the user interface and the related user experience. Your best options are e-commerce or item/product-centric sites. Possible options include: Ebay, Amazon, Walmart, AirBnb, Etsy, YouTube, Yelp, Zillow, Netflix, Spotify, Soundcloud, Kickstarter, Zagat.
    *   An "Item detail page" is the minimum requirement. You may build other pages if time permits. Examples of an "item detail page":
        *   Amazon product page
        *   Ebay auction page
        *   Etsy product page
        *   YouTube video page
        *   Soundcloud song page
        *   etc
    *   Not recommended:
        *   Social apps such as Instagram, Facebook, Twitter, Pinterest -- they all have "item" style pages. It's possible to choose these apps, but it is not recommended since these item pages aren't central to the experience (for these apps, the "social feed" is the central experience).
        *   Item pages with significant widget coordination and state management. Widgets that perform a lot of inter-widget communication and state management creates team-member dependencies too, which will cause your team's rate of progress to slow down. Aim to be as independent as possible.
    *   **Off-limits**:
        *   Anything that is not a web app (includes container apps)
        *   Anything that doesn't have an "item page" as its central use case:
            *   Location/map based apps such as Lyft/Uber
            *   Chat/messaging apps such as Slack
            *   etc.
        *   Dating apps where the "item detail page" is another person.
        *   Media streaming widgets (video player/audio player/etc).
        *   Simple form widgets, such as login or payment forms, polls or votes.
        *   Recommendation engines. If your selected widget makes suggestions, you must not focus on the suggestion algorithm, rather on the delivery of the user interface and related experience. This means your widget will not display actual recommendations, rather, just a selection of random items.
        *   Ad-centric widgets. Most of these are not complex enough and those that are, usually rely on information on browsing history from other websites or the content of the current page, but the content of the page is dynamically rendered.

### Example Pages and their Modules ("widgets"):

*   Amazon Product Page
    *   Photo Gallery
    *   Price and delivery estimate
    *   Product descriptions
    *   Comparison grid
    *   Questions + Answers
    *   Customer Reviews
    *   Similar products
    *   Sponsored products
*   Ebay Auction Page
    *   Photo Gallery
    *   Buy it Now / Bid
    *   Auction status & history
    *   Seller information
    *   Item specifics
    *   Item detail
    *   Related products
    *   Sponsored products

## Team Requirements

Build an app that simulates a single page experience (the item detail page) in a service oriented style where each service is responsible for delivering the content+data for one module on the page. The modules will be linked together on a master layout, called a proxy server, and all modules must coordinate and work together to present content for a given item ID or item name. Each team member will build their own proxy server that consumes their module and all of their teammates' modules.

## Individual Requirements

Each service should:

*   Be responsible for managing presentation and state for one module
*   Look like the original site's module in terms of HTML+CSS presentation
*   Have its own database and webserver for delivering that module's content to the user
*   Contain realistic and representational data for a given Item ID or item name.
*   Be embeddable on a page next to other modules

## Verbalization

At two points during this project (midpoint and final), you will record a video of yourself speaking about the challenges and learnings you have had in the project, using the [C.A.R. framework ](http://thehiredguns.com/car-technique-secret-interviewing-weapon/). You may give a brief demo of your widget in the course of speaking about your challenges, but remember, _the focus of the video is not the demo itself_. Specifics about the video requirements are [available here](./video_recording.md).

Keep a journal of all the work you do: the tests you run, the results you observe, and the optimizations you make. Record both qualitative and quantitative notes, collecting as much quantitative data as possible (including screenshots of graphs produced by analytics). These notes will be useful to and important for your midpoint videos and final videos. Make the journal available for review and comment by your TM.

**For a full list of milestones, please refer to the [project milestones](./project_milestones.md)**

</div>

</div>