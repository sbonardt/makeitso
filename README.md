MAKEITSO
========

MAKEITSO - get to viable at warp speed

Startup your frontend/theme development 

Base or startup for getting to a minimum viable product at warp speed. 
MAKEITSO started out as 'flat' frontend project but now is incorporated
in a Bolt theme. You can view the flat frontend under: /makeitso/frontend

Clone the repo and view the three available HTML pages in your browser:

- index.html
- article.html
- listing.html

Or -like you should- use Bolt CMS, clone this repo in the Bolt themes folder
and enable it. ( WIP! : USING IT AS A BOLT THEME IS NOT READY YET!)

About the frontend in MAKEITSO:

1. MAKEITSO is a stripped down startup kit. Not a frontend framework. It has some basic styling to get you started. The styling is plain css, not applying classes to your HTML and be done with it. This is not Foundation off course...

2. The CSS is compiled with GULP and SASS. There is a screen.scss file in /makeitso/source. This references all 
required partials. You can see in the file it starts with _base.scss. The _base.scss file contains all your settings,
variables [vair-ee-uh-buh-l's], and mixins. After _normalize.scss is used. This is a copy of the version of normalize.css,
just renamed to .scss
All scss partials are in the _modules subfolder. Some choices have been made about dividing/spliiting up scss into several 
partials. _layout.scss should only contain layout/positioning for the scaffolding/setup of the page(s) at a high level. The
names of the other partials should give you insight into what's there to find. As a general rule, if it's styling for a block or 
other piece of content, put it in _theme.scss. If the combined amount of lines exceeds around 50, put it in it's own partial file. (e.g. _search.scss)

3. GULP - Stuff is done with Gulp! After you've cloned this repo do a 'npm install' in the /makeitso/source folder to get all required stuff; then run 'gulp' in your CMD window

4. CSS - Gulp compiles the CSS to screen.min.css in the 'css' folder. If for development you want a not-minified css file run gulp --dev (See the gulpfile.js itself) 

5. JAVASCRIPT - Gulp compiles the javascript files into one minified scripts.min.js. Custom.js is the main JS file for UI and interaction stuff. If you would like to add a js file (of a third party) you must specify it in the gulpfile in de jsFiles variable. It will then get compiled as part of the scripts.min.js file


Make it so...


---
 
	                  xxxXRRRMMMMMMMMMMMMMMMxxx,.
	              xXXRRRRRXXXVVXVVXXXXXXXRRRRRMMMRx,
	            xXRRXRVVVVVVVVVVVVVVVXXXXXRXXRRRMMMMMRx.
	          xXRXXXVVVVVVVVVVVVVVVVXXXXVXXXXXXRRRRRMMMMMxx.
	        xXRRXXVVVVVttVtVVVVVVVVVtVXVVVVXXXXXRRRRRRRMMMMMXx
	      xXXRXXVVVVVtVttttttVtttttttttVXXXVXXXRXXRRRRRRRMMMMMMXx
	     XRXRXVXXVVVVttVtttVttVttttttVVVVXXXXXXXXXRRRRRRRMMMMMMMMVx
	    XRXXRXVXXVVVVtVtttttVtttttittVVVXXVXVXXXRXRRRRRMRRMMMMMMMMMX,
	   XRRRMRXRXXXVVVXVVtttittttttttttVVVVXXVXXXXXXRRRRRMRMMMMMMMMMMM,
	   XXXRRRRRXXXXXXVVtttttttttttttttttVtVXVXXXXXXXRRRRRMMMMMMMMMMMMM,
	   XXXXRXRXRXXVXXVtVtVVttttttttttttVtttVXXXXXXXRRRRRMMMMMMMMMMMMMMMR
	   VVXXXVRVVXVVXVVVtttititiitttttttttttVVXXXXXXRRRRRMRMMMMMMMMMMMMMMV
	   VttVVVXRXVVXtVVVtttii|iiiiiiittttttttitXXXRRRRRRRRRRMMMMMMMMMMMMMM
	   tiRVVXRVXVVVVVit|ii||iii|||||iiiiiitiitXXXXXXXXRRRRRRMMMMMMMMMMMMM
	    +iVtXVttiiii|ii|+i+|||||i||||||||itiiitVXXVXXXRRRRRRRRMMMMMMRMMMX
	    `+itV|++|tttt|i|+||=+i|i|iiii|iiiiiiiitiVtti+++++|itttRRRRRMVXVit
	     +iXV+iVt+,tVit|+=i|||||iiiiitiiiiiiii|+||itttti+=++|+iVXVRV:,|t
	     +iXtiXRXXi+Vt|i||+|++itititttttttti|iiiiitVt:.:+++|+++iXRMMXXMR
	     :iRtiXtiV||iVVt||||++ttittttttttttttttXXVXXRXRXXXtittt|iXRMMXRM
	      :|t|iVtXV+=+Xtti+|++itiiititittttVttXXXXXXXRRRXVtVVtttttRRMMMM|
	        +iiiitttt||i+++||+++|iiiiiiiiitVVVXXRXXXRRRRMXVVVVttVVVXRMMMV
	         :itti|iVttt|+|++|++|||iiiiiiiittVVXRRRMMMMMMRVtitittiVXRRMMMV
	           `i|iitVtXt+=||++++|++++|||+++iiiVVXVRXRRRV+=|tttttttiRRRMMM|
	             i+++|+==++++++++++++++|||||||||itVVVViitt|+,,+,,=,+|itVX'
	              |+++++.,||+|++++=+++++++|+|||||iitt||i||ii||||||itXt|
	              t||+++,.=i+|+||+++++++++++++|i|ittiiii|iiitttttXVXRX|
	              :||+++++.+++++++++|++|++++++|||iii||+:,:.-+:+|iViVXV
	              iii||+++=.,+=,=,==++++++++++|||itttt|itiittXRXXXitV'
	             ;tttii||++,.,,,.,,,,,=++++++++++|iittti|iiiiVXXXXXXV
	            tVtttiii||++++=,,.  . ,,,=+++++++|itiiiiiii||||itttVt
	           tVVttiiiii||||++++==,. ..,.,+++=++iiiiiitttttVVXXRRXXV
	        ..ttVVttitttii||i|||||+|+=,.    .,,,,==+iittVVVXRRMXRRRV
	...'''ittitttttitVttttiiiiii|ii|++++=+=..... ,.,,||+itiVVXXVXV
	      ,|iitiiitttttttiiiii||ii||||||||+++++,.i|itVt+,,=,==.........
	        ,|itiiiVtVtiii||iiiiii|||||||++||||tt|VXXRX|  ....  ..     ' ' '.
	          ,,i|ii||i||+|i|i|iiiiiiii||||ittRVVXRXRMX+, .  ...   .         ,
	    .       .,+|++|||||ii|i|iiiitttVVttXVVXVXRRRRXt+. .....  . .       ,. .
	  . .          ,,++|||||||i|iiitVVVXXXXVXXVXXRRRV+=,.....  ....  ..       ..
	                  .,,++|||i|iittXXXXRMViRXXXXRVt+=, ..    ...... .        ..
	                   ,XX+.=+++iitVVXXXRXVtXXVRRV++=,..... .,, .              .
	            ....       +XX+|i,,||tXRRRXVXti|+++,,. .,,. . . .. .      . ....
	  . .          .      ..  .(C):JE:.....++,,..,...,.... ..             .. ...

