# Assignment 5 - React Custom Hooks

## What I made
A custom hook called useFetch that fetches data from an api and returns data, loading and error states.

## How to run
npm install
npm run dev

## Folder structure
- src/hooks/useFetch.js - the custom hook
- src/components/ - ProductCard, LoadingSpinner, ErrorDisplay
- src/App.jsx - main component

## Why I used useCallback
without it fetchData function was recreating on every render which was causing infinite loop in useEffect so I wrapped it in useCallback.

## API
https://api.escuelajs.co/api/v1/products