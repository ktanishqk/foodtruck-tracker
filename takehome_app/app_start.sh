#!/bin/bash


cd backend && python3.10 seed.py && python3.10 app.py
cd ..
cd frontend && npm start
