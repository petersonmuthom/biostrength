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



2. Move the project to your web server root:



3. Start Apache and MySQL using the XAMPP Control Panel.

4. Create a MySQL database (for example, `biostrength_db`) and configure the connection in `config.php`:

```sql
$conn = new mysqli("localhost", "root", "", "biostrength_db");

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
5. Create the required users table in your database:

```sql
   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
After setting up the database and confirming that the connection details are correct, ensure your local server is running.

You can then access the application in your browser at: http://localhost/biostrength-kenya-limited/


## Security Notes

User passwords are securely hashed using PHP’s built-in password_hash() function before being stored in the database.

Sessions are used to manage authentication state.

SQL queries currently use direct execution and should be migrated to prepared statements before production deployment.

Input validation and CSRF protection are planned improvements.

## Planned Improvements

Prepared statements for database queries

Logout functionality with proper session destruction

Role-based access control

Admin dashboard

Training and compliance modules

Audit logging

Production deployment configuration

## License

This project is proprietary and developed for Biostrength Kenya Limited.
Unauthorized redistribution or commercial use is not permitted without prior approval.

## Maintainers

Biostrength Kenya Limited.
Peterson Muthomi Softwares.

