# Full-Stack Shoe Shop Project

Welcome to the Full-Stack Shoe Shop project! This project consists of both the backend and frontend components. The backend is built using Django Rest Framework (DRF) to provide APIs for managing shoe inventory, orders, and user authentication. The frontend is developed using JavaScript, HTML, and CSS to provide a user-friendly interface for interacting with the backend APIs.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

## Overview

This project is a full-stack web application that simulates a shoe store. It includes a Django Rest Framework backend for handling the business logic and providing APIs for creating and managing orders, viewing shoe inventory, and user registration/authentication. The frontend is built using JavaScript, HTML, and CSS to provide an interactive and visually appealing user interface.

## Technologies Used

- Backend:
  - Django Rest Framework (DRF) - Backend API development
  - Python - Backend scripting
- Frontend:
  - JavaScript - Frontend scripting
  - HTML - Frontend markup
  - CSS - Frontend styling

## Features

- Backend API endpoints for:
  - Retrieving a list of shoes
  - Sorting shoes by various criteria
  - Creating orders
  - Adding shoes to a cart
  - User registration and authentication
- Interactive frontend for:
  - Browsing and searching for shoes
  - Placing orders
  - Managing a shopping cart

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

### Backend Setup

1. Clone this repository:

   ```bash
   git clone [repository_url]
   
2. Navigate to backend directory:

   ```bash
   cd shoes_shop_api/
   
3. Create a virtual environment and activate it:

   ```bash
    virtualenv venv
    source venv/bin/activate

4. Install the backend dependencies:
    ```bash
   pip install -r requirements.txt
   
5. Create and fill file .env (Check example.env)

6. Apply database migrations
    ```bash
   python manage.py migrate
   
7. Start the backend development server:
    ```bash
   python3 manage.py runserver

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend

2. Start live server using extensions like "Live Server" in VS Code