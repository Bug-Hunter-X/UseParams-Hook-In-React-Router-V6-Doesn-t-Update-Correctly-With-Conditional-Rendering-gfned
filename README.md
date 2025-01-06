# useParams Hook Stale Data Bug in React Router v6

This repository demonstrates a subtle bug in React Router v6 where the `useParams` hook doesn't update correctly when a component is conditionally rendered based on a route parameter that only appears later.

## Problem

The `useParams` hook is designed to retrieve parameters from the URL. However, when a component containing this hook isn't initially rendered because the necessary route parameters are missing, and those parameters become available later (without a full URL change), `useParams` may fail to reflect the updated parameters.

## Solution

The recommended solution involves using the `useLocation` hook and extracting the parameters from `location.pathname`.  This method ensures that parameter changes are immediately reflected in the component's state, irrespective of whether the change comes from a URL update or not.