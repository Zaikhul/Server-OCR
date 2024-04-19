import express, { Express, Request, Response, Application } from "express";

function Apps() {
  const App: Application = express();

  return App;
}
export default Apps;
