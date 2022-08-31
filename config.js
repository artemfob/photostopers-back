const express = require('express');
const path = require('path')
const app = express();
const firebase = require('firebase')
const http = require('http')
const firebaseConfig = {
    apiKey: "AIzaSyC8p-8UeASrWJaSCcfIJl4U5HrRF4fZxjk",
    authDomain: "photostopers.firebaseapp.com",
    projectId: "photostopers",
    storageBucket: "photostopers.appspot.com",
    messagingSenderId: "68439398764",
    appId: "1:68439398764:web:3740d8f0a6c516190c3b49"
};
module.exports = {express, path, app, firebase, firebaseConfig};