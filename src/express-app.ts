import express, { application } from "express";
import cors from 'cors';
import logger from 'morgan'

export const expressApp = async(app:express.Application) =>{
    app.use(express.json())
}