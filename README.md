## From the instructions:

_Write an application that uses Twitter’s API to find the top 5 most famous people to tweet about “PlayXFL”
 or “XFL”. The application should be runnable by us._

## Methodology

* Definition of "famous people tweeting _about_ PlayXFL or XFL". I restricted my search to verified accounts (to try to gauge "fame" versus simply "large number of followers"), and then sorted by number of followers from **there**. I excluded the XFL accounts themselves, to gauge people tweeting **about** XFL vs. **from** XFL.
* "The application should be runnable by us". Initially, I wrote the code as seen in `client/main.js`, using `async/await` and the Fetch API and vanilla Javascript. However, this would only run in modern browsers. Trying not to assume the user has a modern browser (while taking advantage of modern Javascript), and using Babelify on the backend to create a bundle for older browsers, selectively loading the bundle based on elementary feature detection. Also relying on basic CSS.
* Security: For the purposes of this challenge, the `.env` file containing the Twitter API token has been committed to version control. In a production environment, however, this would almost certainly not be the case.

## Running
```
git clone
npm install
npm run build
npm start
```
This should create a server running at http://localhost:3001.
