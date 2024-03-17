# React Router v6 Study

## Define a route

### - createBrowserRouter, RouterProvider

## Create Layout route - nested routes

### - children, Link, Outlet

## define a Vans route and fetch data from mirage.js

### - useState(), useEffect(), fetch(),

## Map the data from mirage.js and style Vans.jsx

### - create a Header component

## define a VansDetail route, Learn who to get parameter from URL and style the component

### - useParams()

## Add Host page

### - nested routes, layout route

## Relative paths & Index route

## Add Footer

## Style active link with NavLink

### - NavLink, learn how to mark the active link

## Add HostVans and HostVanDetail routes

### - nested route, relative paths

## Create host navbar

### need to how to import layout route

## Map the data of HostVan

## Building HostVanDetail

### - fetch()

## Relative Links

## Back to all vans

### understand relative prop in Link

## Nested Routes of HostVanDetail

## Navbar for HostVanDetail

## Pass a value through Outlet

### - useOutletContext

## SearchParams

### - useSearchParams()

## Links with searchParams()

### - difference between to and onClick

### - need more study for it

## Merge search params

### Hard coded parameters cause erasing and replacing the existing parameters

### - need to study more

## Back to all vans in VanDetail

## Pass the state to the next page and receive the state

### - state prop, useLocation()

### https://reactrouter.com/en/main/components/link#state

## 404 Error

### path="\*"

## update the fetch code

## loding indicators using useState()

## replace useEffect with loader()

### - loader()

## error handling

### - errorElement, useRouteError()

## Fake Login form

## replace Effect() with loader() - VanDetail, HostVans, HostVanDetail

## Protected route

## Pass message to Login pages

### - loader()

## Set up for auth

### redirect using useNavigate()

## Add Form and action

## Use data in action to log in

### save the data to localStorage

### send the logged use to /host page after they successfully login

## Move back to former page after log in

### - replace the current entry in the history stack with the upcoming entry in the history stack

### - understand what history stack is

### - learn how to use replace prop

## Represent state of navigation and POST form submision with useNavigation()

### replace useState() with useNavigation()

### navigation.state

### idle - There is no navigation pending.

### submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE

### loading - The loaders for the next routes are being called to render the next page

### normal navigation and Get form submission

### idle -> loading -> idle

### POST, PUT, PATCH, DELETE transition

### idle -> submitting -> loading -> idle

### https://reactrouter.com/en/main/hooks/use-navigation#navigationstate

## redirect to the former page after log-in

### how to get the path from url

### learn how to use query string

## defer getVans()

### learn defer, Await and Suspense

### I still don't understand why defer is needed

### defer

### - allow to defer values returned from loaders by passing promises instead of resolved values

### - it returns promise

### Await and resolve prop

### Await

### - allow to surround the code that we will be waiting for when the component first renders and it will conditionally render only after the data has finished loading

### - it will only render the children inside the render props after it has finished resolving the data

### resolve prop

### - to pass the promise for the data that we're trying to get to the resolved prop

### Suspense

### - allow to wrap suspended component in Suspense

## defer VanDetail, HostVans, HostVanDetail

## error handling

### remove manual error handling code and replace it with errorElement

### errorElement

## Firestore

## Firestore Setup

## getVans()

## getVan()

## getHostVans()
