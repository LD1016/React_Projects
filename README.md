I: Props.children
is intent to show other component (or blank JSX) inside a component
<AppovalCard><CommentDetail/></ApprovalCard>
...{props.children}...

II: Event Handler in react, find what element that we want to watch for some event
then we add the a prop to it (onClick, onChange, onSubmit)

1. User clicks on something --> onClick
2. User changes text in an input --> onChange
3. User submits a form --> onSubmit

III: Control vs Uncontrol

1. Control is react world everything should store in state
2. Uncontrol is react out to the DOM to get value

IV: State

1. Only usable with class components
2. You will confuse props with state :(
3. 'State' is a JS object that contains data relevant to a component
4. Updating 'state' on a component causes the component to (almost) instantly rerender
5. State must be initialized when a component is created
6. State can ONLY be updated using the function 'setState'

V: When use props inside a class we have to use this.props.

VI: App Lifecycle Walkthrough

1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called
4. State object is created and assigned to the 'this.state' property
5. We call geolocaton service
6. React calls the components render method
7. App returns JSX, get rendered to page as HTML
   ....
8. We get result of geolocation!
9. We update our state object with a call to 'this.setState'
10. React sees that we updated the state of a component
11. React calls our 'render' method a second time
12. Render method returns some (updated) JSX
13. React takes that JSX and updates content on the screen

VII: Component Lifecycle

1. Constructor
   . Good place to do one time setup
2. Render
   . Avoid doing anything besides returning JSX (ex: api request)
   Content visible on screen
3. ComponentDidMount -- get call right after the content visible on screen
   . Good place to do data-loading!
   Sit and wait for updates...
4. ComponentDidUpdate -- get call after any setState get call and re-render (can be call many times)
   . Good place to do more data-loading when state/props change
   (ex: making network request any time user click a button or enter text into input, or any new props from a parent component)
   Sit and wait until this component is no longer shown
5. ComponentWillUnmount
   . Good place to cleanup (especially for non-React stuff)

Note: other lifecyle method (rarely used)

1. shouldComponentUpdate
2. getDerivedSateFromProps
3. getSnapShotBeforeUpdate

VIII: Specifying Default Props

Spinner.defaultProps = {
message: 'Loading...'
}

IX: Hooks : are a ways to write reusable code, instead of more classic techniques like inheritance

1. useState --> function that lets you use state in a functional component
2. useEffect --> Function that lets you use something like lifecycle methods
   in a functional component
3. useRef --> Function that lets you create a 'ref' in a function component

X: Primitive Hooks

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

XI:

const [activeIndex, setActiveIndex] = useState(null);
activeIndex: piece of state
setActiveIndex: fn to change this piece of state --> setActiveIndex(3) --> will re-render
null: initial value for this piece of state

XII: The 'useEffect Hook'

- Allows function components to use something like lifecyle methods
- We configure the hook to run some code automatically in on of three scenarios

1. When the component is rendered for the first time only
2. When the component is rendered for the first time and whenever it rerenders
3. When the component is rendered for the first time and (whenever it rerenders
   and some piece of data has changed)

- Case 1: [] --> Run at intial render
  useEffect(() => {

}, [])

- Case 2: ...nothing... --> Run at inital render + Run after every rerender
  useEffect(() => {

  })

- Case 3: [data] --> Run at initial render + Run after every rerender if data has changed since last render
  useEffect(() => {

  }, [data1, data2])

XIII: cleanup in useEffect is a return function which will call right before everything in useEffect get call again (Widgets --> Dropdown (section 12 - video 186))

XIV: useRef is in the widgets --> Dropdown (section 12 - video 186)

XV: (section 14 - video 212) when we have inline function: (video) => {setSelectedVideo(video)}
Can change to just this: setSelectedVideo

XVI: Custom Hooks

1. Best way to create reusable code in a React project (besides components)
2. Created by extracting hook-related code out of a function component
3. Custom hooks always make use of at least one primitive hook internally
4. Each custom hook should have one purpose
5. Kind of an art form!
6. Data-fetching is a great thing to try to make reusable

XVII: Process For Creating Reusable Hooks

1. Identify each line of code related to some single purpose
2. Identify the inputs to that code
3. Identify the outputs to that code
4. Extract all of the code into a separate function, receiving the inputs as arguments,
   and returning the outputs

XVIII: Redux Cycle
To change state of our app, we call an...

1. Action Creator
   Produces an...
2. Action
   Gets fed to...
3. Dispatch
   Forwards the action to...
4. Reducers
   Creates new...
5. State
   Wait until we need to update state again

XIX: How React-Redux Works (section 17 - video 236)
(store: reducers) Provider -> App -> Connect (communicates with the 'Provider': Tell me about changes to the list of songs) -> SongList

XX: action creator always return a type, the payload can be optional
export const selectSong = song => {
return {
type: 'SONG_SELECTED',
payload: song
}
}

XXI: Named vs Default Export
Named: export functionName -> import {functionName} from 'index.js'
Default export: export default functionName -> import functionName from 'index.js'

XXII: Anytime we change the state in redux store the mapStateToProps get rerun to return new state object (section 17 - videos 244)

XXIII: redux-thunk: Middleware to help us make requests in a redux application

XXIV: Tricking redux with a dummy Reducers
import {combineReducers} from 'redux';

export default combineReducers({
replaceMe: () => 'hi there'
})

XXV: General Data Loading With Redux

1. Component gets rendered onto the screen
2. Component's 'componentDidMount' lifecycle method gets called
3. We call action creator from 'componentDidMount'
   Components are generally responsible for fetching data they need by calling an action creator
4. Action creator runs code to make an API request
5. API responds with data
6. Action creator returns an 'action' with the fetched data on the 'payload' property
   Action creators are responsible for making API requests: this is where Redux-Thunk comes into play
7. Some reducer see the action, returns the data off the 'payload'
8. Because we generated some new state object, redux/react-redux cause our React app to be rerendered
   We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps

XXVI: Action must be a plain object with a type property and option of payload. Use custom middleware (redux-thunk) for async actions(section 18 - videos 256)

XXVII: When we make a call to get data from an external API we cannot fetch the data instantly instead we get a promise object that is going to give us access to our data when we eventually get it at some point in the future.

XXVIII: Middleware in Redux

1. Function that gets called with every action we dispatch
2. Has the ability to STOP, MODIFY, (console.log) or otherwise mess around with actions
3. Tons of open source middleware exist
4. Most popular use of middleware is for dealing with async actions
5. We are going to use a middleware called 'Redux-Thunk' to solve our async issues

XXIX: Normal Rules

1. Action Creators must return action objects
2. Actions must have a type property
3. Actions can optionally have a 'payload'
   Rules with Redux Thunk
4. Action Creators can return action objects
   OR Action creators can return function!
5. If an action object gets returned, it must have a type
6. If an action object gets returned, it can optionally hava a 'payload'

XXX: Flow of Action Creator with Redux Thunk (Section 18 - videos 259) (MUST WATCH)

Action Creator --> "Action" either an object or function --> dispatch --> Redux Thunk
"Action"

1. if is a function --> Great! I'm going to call you with the 'dispatch' and 'getState' functions. Go ahead and 'dispatch' action at your leisure
2. if not a function then dispatch to reducers
   --> Function invoked with 'dispatch' --> We wait for our request to finish --> Request complete, dispatch action manually --> New Action go back to the Redux Thunk loop

XXXI: Rules of Reducers (section 19 )

1. Must return any value besides 'undefined'
2. Produces 'state', or data to be used inside of your app using only previous state and the action (reducers are pure)
3. Must not return reach 'out of itself' to decide what value to return (API request BAD!!!)
4. Must not mutate its input 'state' argument (new 'state' will rerender everything)

XXXII: redux code: github.com/reduxjs/redux/

XXXIII: BAD vs GOOD

1. Removing an element from an array
   Bad: state.pop() --> Good: state.filter(element => element !== 'hi')
2. Adding an element to an array
   Bad: state.push('hi') --> Good: [...state, 'hi']
3. Replacing an element in an array
   Bad: state[0] = 'hi' --> Good: state.map(el => el === 'hi' ? 'bye' : el)
4. Updating a property in an object
   Bad: state.name = 'Sam' --> Good: {..state, name: 'Sam'}
5. Adding a property to an object
   Bad: state.age = 30 --> Good: {...state, age: 30}
6. Removing a property from an object
   Bad: delete state.name --> Good: {...state, age: undefined} or \_.omit(state, 'age')

XXXIV: ownProps is the props that pass to component before go to class or function
const mapStateToProps = (state, ownProps) => {
user: state.usersReducer.find((user) => user.id === ownProps.userId),
}

XXXV: fetchPostsAndUsers()

1. Call 'fetchPosts'
2. Get list of posts
3. Find all unique userId's from list of posts
4. Iterate over unique userId's
5. Call 'fetchUser' with each userId

XXXVI: NOTE: whenever we call an action creator inside an action creator we need to manually dispatch the result of the inside action creator. (section 19 - videos 283).
We need also put the await in front of the inside aciton creator if using any api call
ex: await dispatch(fetchPosts());

XXXVII: React Router

1. react-router : Core navigation lib - we don't install this manually
2. react-router-dom: Navigation for dom-based apps (we want this!)
3. react-router-native: Navigation for react-native apps
4. react-router-redux: Bindings between Redux and React Router (not necessary)

XXXVIII: exact === exact={true}

XXXIX: Bad Navigation

1. You add an <a/> tag to your application with href='/pagetwo' and click it
2. Your browser makes a request to localhost:3000/pagetwo
3. Development server responds with index.html file
4. Browser receives index.html file, dumps old HTML file it was showing (including all of your React/Redux state data!)
5. index.html file lists our JS files in script tags - browser downloads and executes these scripts
6. Our app starts up

XL: What We Want

1. User wants to navigate to another page in our app
2. User clicks a 'Link' tag
3. React Router prevents the browser from navigating to the new page and fetching new index.html file!
4. 'History' sees updated URL, takes URL and sends it to BrowserRouter
5. BrowserRouter communicates the URL to Route components
6. Route components rerender to show new set of components

XIL: Email/Password Authentication

1. We store a record in a database with the user's email and password
2. When the user tries to login, we compare email/pw with whats stored in DB
3. A user is 'logged in' when they enter the correct email/pw

XIIL: OAuth Authentication

1. User authenticates with outside service provider (Google, Linkedin, Facebook)
2. User authozies our app to access their information
3. Outside provider tells us about the user
4. We are trusting the outside provider to correctly handle identification of a user
5. OAuth can be used for (1) user identification in our app and (2) our app making actions on behalf of user

XIIIL: OAuth for Servers

1. Results in a 'token' that a server can use to make requests on behaft of the user
2. Usually used when we have an app that needs to access user data when they are not logged in
3. Difficult to setup because we need to store a lot of info about the user

XIVL: OAuth for JS Browser Apps

1. Results in a 'token' that a browser app can use to make requests on behalf of the user
2. Usually used when we have an app that only needs to access user data while they are logged in
3. Very easy to set up thanks to Google's JS lib to automate flow

XVL: Flow of OAuth process

1. User clicks 'Login with Google' button
2. We use google's JS lib to initiate OAuth process
3. Google's JS lib makes auth request to Google
4. Google displays confirmation screen to user in popup window
5. User accepts
6. Popup window closes
7. Google's JS lib invokes a callback in our React/Redux app
8. Callback provided with 'authorization' token and profile info for user

XVIL: Steps for Setting Up OAuth

1. Create a new project at console.developers.google.com/
2. Set up an OAuth confirmation screen
3. Generate an OAuth Client ID
4. Install Google's API library (script inside index.html), initialize it with the OAuth Client ID
5. Make sure the lib gets called any time the user clicks on the 'Login with Google' button
   (developers.google.com/api-client-library/javascript/reference/referencedocs)

XVIIL: Auth Component (must watch section 21 - videos 309)

1. Get a reference to the 'auth' object after it is initialized
2. Figure out the user is currently signed in
3. Print their authentication status on the screen

XVIIIL: Auth listener callback
https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinlistenlistener

GoogleAuth.isSignedIn.listen(listener)

listener: A function that takes a boolean value. listen() passes true to this function when the user signs in, and false when the user signs out.

this.onAuthChange is the "listener" that is passed true or false by the listen() method.

XIXL: Redux DEV Tools
https://github.com/zalmoxisus/redux-devtools-extension

XXL: localhost:3000?debug_session=<some_string>
Saves all data in Redux Store between refreshes of the page

XXIL: Redux form documentation: redux-form.com

XXIIL: Authentication Process

1. Client: Username & Password
2. Server: Looks at username and password
3. Server: Credentials are good, you are auth'd. Here is an identifying piece of information, include it on all future requests.
4. Client: Client can make authenticated requests.
5. Client: I need a protected resource. Here is my identifying piece of info
6. Server: I see your identifying piece of info that authenticates you. Here is your protected resource.
7. Client: I need a protected resource. Here is my cookie OR token --> Server: I see your identifying piece of info that authenticates you. Here is your protected resource.
8. Client: I need a protected resource. Here is my cookie OR token --> Server: I see your identifying piece of info that authenticates you. Here is your protected resource.

XXIIIL: Cookies vs Tokens

1. Cookies
   . Automatically included on all requests (Headers)
   . Unique to each domain (amazon.com <> google.com)
   . Cannot be sent to different domains

2. Token
   . Have to manually wire up
   . Can be sent to any domain

XXIVL: Saving a password and comparing a password (sign in) (bcrypt)

1. Saving a password:
   Salt + Plain Password = Salt + Hashed Password

2. Comparing a password (sign in)
   getting out the Salt from above
   Salt + Submitted Password = Hashed Password
   (compare the two Hashed Password)

XXVL: JWT Overview (jwt-simple)

1. (Encryted) When signing up or signing in, give a token in exchange for an id
   User ID + Our Secret String = JSON Web Token
2. (Decrypted) In the future, when a user makes an authenticated request they should include their JWT
   JSON Web Token + Our Secret String = User ID

XXVIL:

1. Incoming request -->
2. Passport -->
   a. Passport Strategy #1: verify user with a JWT
   b. Passport Strategy #2: verify user with a username and password
3. Route Handler

XXVIIL: Auth Flows

1. Signing up --> Verify Email is not in user --> Token
2. Signing In --> Verify Email/Password --> Token
3. Auth'd Request --> Verify Token --> Resource Access

XXVIII: Application State
{
auth: {
authenticated: BOOLEAN, --> Change whenever a user signs in, signs out, or signs up
error: STRING --> change whenever an error related to auth occurs
}
}

XXIXL: What happen on client side when user submits Email/Password
User Submits Email/Password
-->
Action Creator
-->
Submit Email/Password to Server
-->
Is correct info?

1. No --> Show an error message
2. Yes --> Sever return a JWT token --> Redirect user to feature, update state, save token

XXXL: Jwt signin flow

1. User POST's email and password -->
2. Server returns a JWT -->
3. Save JWT to localStorage (unique to domain (google.com <> amazon.com)) -->
   a. When user makes a request that needs to be authenticated, attach the JWT
   b. When user revisits our app, JWT is still available - no need to login again

XXXIL: Auth validation flow

1. User enters an email, password, and password confirmation -->
2. Check on the client - Do the password and password confirm match
   a. No --> Show an error to the user
   b. Yes -->
3. Try to create an account on the API server -->
4. Request successful?
   a. Yes: Save token, redirect user, change auth state to true
   b. No: Display error to user

XXXIIL: Higher Order Component
Component + Higher Order Component = Component
a. "Enhanced" or "Composed" Component
b. Additional functionality or data

example:
ResourceList Component + require_auth HOC = Composed Component that will check authentication status before rendering

XXXIIIL: Authentication Higher Order Component
User tries to visit protected resources route --> Is the suer logged in?
a. Yes --> Allow the user access
b. No --> Redirect the user back to home route

XXX: How to use HOC
import Authentication // This is my HOC
import Resources // This is the component I want to wrap

const ComposedComponent = Authentication(Resources);

// In some render method...
<ComposedComponent/>

XXX: Testing with Jest and Enzyme

1. Test what to expect the component to render
2. Test all different states of this component (branches).
   Shallow render the component with different set of props and make the appropriate assertions.
3. Test actions.
   Ex: if you expect something to happen when you click or hover over a button test that
4. Test the props passed to a sub component. If you are rendering a custom Button component and you pass a color prop with a value of red you should test that. This will also give you confidence that your component meet the design requirements.

XXX: Test Driven Development (TDD)

1. Add a test
2. Run all tests and see if the new test fails
3. Write the code (Doesn’t have to be perfect, just enough to make test pass)
4. Run test (Make sure it’s green)
5. Refactor code (To make code more perfect)

XXX: CI/CD Workflow
Local Machine

1. Make change to code for tickets service
2. Commit code to a git branch (any besides master!)
3. Push branch to github
   Github
4. Github receives updated branch
5. You manually create a pull request to merge branch into master
6. Github automatically runs tests for project
7. After tests pass, you merge the pull request into master branch
8. Because master branch has changed, github builds and deploys

XXX: GitHub Action

1. Action: -->
   a. Code Pushed
   b. Pull Request Created
   c. Pull Request Closed
   d. Repository is Forked
2. Event -->
3. Run a Github Action

XXX: Wrong way for Data and Schema Migrations

1. Add column loc
2. Copy lat/lng to loc
3. Drop columns lat/lng

XXX: Right Way for Data and Schema Migrations

1. Add column loc
2. Deploy new version of API that will write values to both lat/lng and loc
3. Copy lat/lng to loc
4. Update code to only write to loc column
5. Drop columns lat/lng

XXX: Mounting lifecycle

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

XXX: Updating lifecycle

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

XXX: Unmounting lifecycle

1. componentWillUnmount()

XXX: Error Handling lifecycle

1. static getDerivedStateFromError()
2. componentDidCatch()
