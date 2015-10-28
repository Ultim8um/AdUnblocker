# AdUnblocker
**CECS 478 Project**

### Computer Security Project Proposal:
Ad Blocker Circumvention

### Group Members
* Blake Chadwick (SID: 012000051)
* Eduardo Aceituno (SID: 012485198)

### Motivation
Many websites display ads to generate revenue for the web hosts.  Due to the annoyance of these ads, many people have decided to install Ad-Blockers to circumvent the ad placements.  If a site has no income from ads, it cannot operate for very long, and some sites have disabled access or limited services to those who have ads blocked.  Our motivation as a web host would be to push ads through these blockers to maintain that revenue stream without having to restrict access to the users. 


### Description
We need to analyze popular ad blockers to figure out their methods.  Once we have an understanding of their processes, we can work on developing a work around.  We then need to implement our solution into a cookie that is delivered upon visitation of our site.  If we can have the cookie displayed while ad blockers are active, we will have succeeded. 


### Implementation
Since our target is web-based, our program should be supported by all browsers on all platforms.  We will be using javascript for our entire stack, which will help with our universal implementation.  We will be using Node.js with Express.js to help reach our goals.  Any hardware that is capable of accessing the internet with a web browser with javascript capabilities should be supported. 


### Timeline
* Sept 23	- Research AdBlockers, cookies, etc.
* Oct 7		- Planning, requirements modeling
* Oct 28	- Experimentation, implementation
* Nov 4		- Testing / Debugging
* Nov 18	- Refinement
* (End)		- Final preparations, documentation, presentation composition

### Instructions
1. Create a directory on your local machine
2. Clone the AdUnblocker repository in your newly created folder using **Git Bash**
```git
git clone https://github.com/Ultim8um/AdUnblocker.git
```
3. Run following commands to setup and run project from **Node.js Command Prompt**
```npm
npm install // install dependencies
node app.js // start server
```