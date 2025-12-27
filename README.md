# Biostrength Kenya Limited – Web Platform

## Overview
This repository contains the source code for the Biostrength Kenya Limited web platform. The application is under active development and is intended to support authentication, user interaction, and future integration of laboratory training, compliance, and research-support services.

The platform is being built with simplicity, security, and scalability in mind.

---

## Project Status
**Active Development**

Core authentication features are implemented. Additional functionality will be added incrementally.

---

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- PHP (Session-based authentication)
- MySQL / MariaDB

### Development Tools
- XAMPP (Apache, PHP, MySQL)
- Git & GitHub

---

## Features

- User registration
- User login and session handling
- Flash alert messages
- Modal-based authentication interface
- Profile avatar with dropdown menu
- Basic access control using PHP sessions

---

## Project Structure

biostrength-kenya-limited/
├── index.php # Main entry point
├── auth_process.php # Authentication logic
├── config.php # Database configuration
├── styles.css # Stylesheets
├── script.js # Frontend scripts
├── images/ # Static assets
└── README.md # Project documentation


---

## Local Development Setup

### Prerequisites
- XAMPP or equivalent PHP stack
- PHP 8.x recommended
- MySQL / MariaDB
- Git

---

### Installation

1. Clone the repository:

git clone https://github.com/your-username/biostrength-kenya-limited.git


2. Move the project to your web server root:

C:\xampp\htdocs\biostrength-kenya-limited


3. Start Apache and MySQL via XAMPP Control Panel.

4. Configure the database in `config.php`:
```php
$conn = new mysqli("localhost", "root", "", "biostrength_db");

    Create the users table:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Access the application:

    http://localhost/biostrength-kenya-limited/

Security Notes

    Passwords are hashed using password_hash()

    Sessions manage authentication state

    SQL queries should be migrated to prepared statements before production

    Input validation and CSRF protection are planned

Planned Improvements

    Prepared statements

    Logout functionality

    Role-based access control

    Admin dashboard

    Training and compliance modules

    Audit logging

    Production deployment configuration

Contribution Guidelines

    Follow existing code style

    Test changes locally before committing

    Write clear commit messages

    Do not commit sensitive data

Pull requests and issues are welcome.
License

This project is proprietary and developed for Biostrength Kenya Limited.
Unauthorized redistribution or commercial use is not permitted.
Maintainers

Biostrength Kenya Limited
Internal Development Team
