import express from 'express';
import path from "path";
import http from "http";
import { initializeApp, cert } from 'firebase-admin/app'
import {getStorage} from "firebase-admin/storage";
import serviceAccount from '../firebase-key.json' assert {type: "json"}

const app = express();
const storage = getStorage
const firebaseConfig = {
    apiKey: "AIzaSyC8p-8UeASrWJaSCcfIJl4U5HrRF4fZxjk",
    authDomain: "photostopers.firebaseapp.com",
    projectId: "photostopers",
    storageBucket: "photostopers.appspot.com",
    messagingSenderId: "68439398764",
    appId: "1:68439398764:web:3740d8f0a6c516190c3b49"
};



initializeApp({...firebaseConfig, credential: cert(serviceAccount)});

export default {express, path, app, firebaseConfig, http, storage}