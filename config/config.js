const express = require('express');
const path = require('path')
const app = express();
const http = require('http')
const firebase = require('firebase-admin')
const firestore = require('firebase-admin/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyC8p-8UeASrWJaSCcfIJl4U5HrRF4fZxjk",
    authDomain: "photostopers.firebaseapp.com",
    projectId: "photostopers",
    storageBucket: "photostopers.appspot.com",
    messagingSenderId: "68439398764",
    appId: "1:68439398764:web:3740d8f0a6c516190c3b49"
};

const { initializeApp, cert } = require('firebase-admin/app');

const serviceAccount = require('../firebase-key.json')

initializeApp({...firebaseConfig, credential: cert(serviceAccount)});

exports.args = {express, path, app, firebaseConfig, http, firebase, firestore};
