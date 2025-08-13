// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

process.env.REACT_APP_PUBLIC_CHAIN =
  process.env.REACT_APP_PUBLIC_CHAIN || "polkadot";
process.env.REACT_APP_PUBLIC_API_END_POINT =
  process.env.REACT_APP_PUBLIC_API_END_POINT || "http://localhost";
