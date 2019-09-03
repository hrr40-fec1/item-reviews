<div class="mdown-container"><div><h1 id="code-review-checklist">Code review checklist</h1>

<p>To get a sense for what we're talking about, let's just jump right into a code review checklist. You can skim this every time you perform a review.</p>

<h3 id="phase-1-the-light-pass">Phase 1: The light pass</h3>

<p>In this first pass of a code diff, look for the following:</p>

<ul>
<li>Typos</li>
<li>Poor names for variables, functions, classes, etc</li>
<li>Overly-large functions or classes</li>
<li>At least one test. Tests are mandatory -- send back the PR if it doesn't come with tests.</li>
<li>The tests pass.</li>
<li>Cruft: commented-out code that should be deleted.</li>
<li>Violations of our styleguide that linters didn’t catch yet.</li>
</ul>

<h3 id="phase-2-the-deep-contextual-pass">Phase 2: The deep, contextual pass</h3>

<ul>
<li>If after taking the time to read whatever the PR links to, the reviewer can't actually understand what the code is doing, send it back for clarification.</li>
<li>Feature spec omissions. “Shouldn’t this component also do X?”</li>
<li>Adequate test coverage for changed lines or critical code paths.</li>
<li>Tests assert valuable behaviors.</li>
<li>There are negative tests, not just happy-path tests.</li>
<li>Tests assert the interfaces of the components involved (their API's) -- NOT  reaching into the internals to test implementation details.</li>
<li>Propose alternative implementations or refactoring that will increase readability, maintainability, extensibility

<ul>
<li>Proposals for making functions do only one thing.</li>
<li>Proposals for removing side effects from functions.</li>
<li>Proposals for factoring out helper functions or otherwise modularizing to make crisper "Lego blocks" to build the solution with.</li>
</ul></li>
<li>Unhandled edge-cases based on assumptions that a component has about its data</li>
<li>Ways to reduce the number of things that a single component, especially a function, is doing.</li>
</ul>

<h2 id="the-importance-of-code-reviews">The importance of code reviews</h2>

<p>If you don't make time to review each other's code, you are (a) setting the stage for a poorly-constructed system, (b) not preparing yourself to work in industry.</p>

<p>Every good development team allocates substantial time for code review, just as they allocate time to write tests.</p>

<p>Not doing these things is just sloppy and unprofessional, and asking for a steaming pile of crapola. Don't be that kind of developer. Aim to be a thoughtful, collaborative <em>engineer</em>... not a shrieking simian flinging poo through the cage bars because of perceived deadline pressure :p</p>

<h3 id="enlightened-self-interest-reason-1">Enlightened self-interest reason #1</h3>

<p>You are preparing yourself to be a productive member of the team you are going to join some weeks from now.  Don't shortchange your own learning experience by cutting this corner.</p>

<h2 id="do-your-code-reviews-in-writing">Do your code reviews in writing</h2>

<p>Please do not live-pair on code reviews -- do them async, in writing.</p>

<p>Of course, occasional pairing on development itself is fine, but don't do the reviews as in-person walk-throughs. It means an important part of your overall team contribution goes invisibly into the ether.</p>

<h3 id="enlightened-self-interest-reason-2">Enlightened self-interest reason #2</h3>

<p>The groundwork of your careful analysis in a good code review makes it easier for Tech Mentors and other HR staff to jump in with extra guidance. That guidance can be very useful to all parties.</p>

<p>This presupposes that you are doing your code reviews in writing.</p>

<h3 id="enlightened-self-interest-reason-3">Enlightened self-interest reason #3</h3>

<p>By doing your review work in writing, it is possible for potential employers to examine your code reviews among your work artifacts, and see clear evidence of well-rounded contributions to a development team.</p>

<p>Thoughtful code reviews are a compelling artifact. Writing your own code is obviously very important too, but don't downplay the value of the rest of the work artifacts.</p>

<h2 id="good-code-reviews-take-time">Good code reviews take time</h2>

<h3>What does it mean to "read code"?</h3>

<p>To really read code, you need to understand a lot of things beyond what is simply syntactically happening in each line of code.</p>

<h4 id="backstory--context-to-this-pull-request">Backstory / context to this pull request</h4>

<p>What is the problem domain in this area of the codebase? What user-facing problems are we solving here?  What is the exact feature specification that we are building against, including both textual and graphical aids (e.g., wireframes)?</p>

<h4 id="components-and-flow">Components and flow</h4>

<ul>
<li>What is the <em>user-facing</em> flow of this work?</li>
<li>What is the <em>under-the-hood</em> system flow of this work?

<ul>
<li>Which files are involved?</li>
<li>Which components are involved?</li>
<li>How do they tie together?</li>
<li>What are the contracts between them?</li>
</ul></li>
<li>What is the entry point for understanding this pull request? Where do I even start reading?</li>
</ul>

<h4 id="visualizing-running-state">Visualizing running state</h4>

<p>The written code is just a static recipe. Naturally, the system only comes alive and starts performing useful work after the code starts executing.</p>

<p>The relevant code is hardly ever only running in a single process. For a web app, there'll be the browser process on the client machine, and at least one server process on a server machine.  There are likely to be other processes involved as well -- a database process on some machine, either the server machine or a dedicated database machine. There are often other services, including 3rd-party stuff, in the mix as well.</p>

<p>Messages are flowing throughout all these processes in a dynamic dance. Can the code reader keep sufficient track of what's going to happen when the code in this pull request executes?</p>

<p>As the code executes, what is the initial state? The desired output state? What transforms the system from the former to the latter? What are the intermediate states, as processing occurs?</p>

<p>Sufficient visualization of the above is NON-TRIVIAL but CRITICAL.</p>

<h4>You can't skimp and still do a real review</h4>

<p>Which of the above aspects do you think you can hand-wave?</p>

<p>If the code reader can't understand the above, the resulting code review probably isn't going to really help anybody.</p>

<h4 id="avoid-low-value-syntax-only-code-reviews">Avoid low-value syntax-only code reviews</h4>

<p>The lowest-value code reviews are no-op rubber-stamps. Close behind are syntax-only code reviews, where the code reviews acts as a human linter.</p>

<p>The whole team should set up linting, no exceptions.</p>

<p>E.g., for Sublime Text:</p>

<ul>
<li>SublimeLinter</li>
<li>SublimeLinter-eslint</li>
</ul>

<h2 id="some-logical-follow-on-observations-about-pull-requests">Some logical follow-on observations about pull requests</h2>

<h3>PR's need to be small</h3>

<p>You can see why keeping changes small is important. Beyond a couple hundred lines, PR's rapidly become monsters that take multiple hours to understand.</p>

<h3>PR's need to provide context about themselves</h3>

<p>A PR that just has a title is usually not enough context.</p>

<p>For example, without a link to a user story or <em>something</em> explaining the feature context for your change, how is your reviewer going to know what you're even trying to accomplish?</p>

<h3 id="example">Example</h3>

<p>Below is an example of a code review in which one of our technical mentors (Erik) was making updates to the shortly express sprint to remove express sessions from the scaffold repo. Here is the interaction he had with Fred:</p>

<p><img src="https://s3-us-west-2.amazonaws.com/forge-production.galvanize.com/releases/3168/Front%20End%20Capstone/images/qL8ehJD.png" alt=""></p>

<p>You will notice that the first Pull Request comes with a very deliberate list of changes as well as poses a question for a reviewer.</p>

<p><img src="https://s3-us-west-2.amazonaws.com/forge-production.galvanize.com/releases/3168/Front%20End%20Capstone/images/PHcyeFn.png" alt=""></p>

<p>The Reviewer (Fred) answers the Revewiee's (Erik) questions, adds inline comments for specific errors, as well as gives overarching suggestions for improvements. The Reviewee replies with his justification for why he has made the decision to not make the proposed refactor.</p>

<p><img src="https://s3-us-west-2.amazonaws.com/forge-production.galvanize.com/releases/3168/Front%20End%20Capstone/images/b1XslL4.png" alt=""></p>

<p>Erik follows up with the updates with most of the review suggestions and converted everything to ES6 syntax. Fred follows up with two more changes in terms of general cleanup of code by migrating parts of the auth to the middleware module and adding an index.js for cleaner model exporting.</p>

<p><img src="https://s3-us-west-2.amazonaws.com/forge-production.galvanize.com/releases/3168/Front%20End%20Capstone/images/hdn81aL.png" alt=""></p>

<p>Last inline comment by Fred giving suggestion to rename function to be more semantically accurate. And then this PR is ready to be merged.</p>
</div></div>