# Student Management System - REST API

A RESTful Web API built with ASP.NET Core and SQL Server for managing student records.

## Technologies Used
- .NET 10
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- C#

## Features
- Get all students
- Get student by ID
- Add new student
- Update student details
- Delete student

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/students | Get all students |
| GET | /api/students/{id} | Get student by ID |
| POST | /api/students | Add new student |
| PUT | /api/students/{id} | Update student |
| DELETE | /api/students/{id} | Delete student |

## How to Run
1. Clone the repository
2. Update connection string in `appsettings.json`
3. Run `dotnet run` in the StudentAPI folder
4. API will start on `http://localhost:5228`