# Pet Gallery: Django REST Framework + React Integration

This project demonstrates a full-stack application integrating Django REST Framework (DRF) as the backend API with React as the frontend client. The app manages profiles for cats and dogs, allowing users to view lists of pets via a simple web interface.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Backend Setup (Django REST Framework)](#backend-setup-django-rest-framework)
- [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

The application consists of:

- **Backend**: Django with DRF providing RESTful APIs for managing cat and dog profiles.
- **Frontend**: React application that fetches and displays pet data from the backend.
- **Database**: SQLite for development (easily configurable for production).
- **Features**: View all pets, filter by cats or dogs, display pet images, names, and ages.

## Prerequisites

Before starting, ensure you have the following installed:

- Python 3.8+
- Node.js 14+
- npm or yarn
- Git
- Virtualenv (recommended for Python)

## Backend Setup (Django REST Framework)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd frontend/myProject
```

### 2. Create and Activate Virtual Environment

```bash
python -m venv myEnv
myEnv\Scripts\activate  # On Windows
# source myEnv/bin/activate  # On macOS/Linux
```

### 3. Install Dependencies

```bash
pip install django djangorestframework django-cors-headers pillow
```

### 4. Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser (Optional, for Admin Access)

```bash
python manage.py createsuperuser
```

### 6. Run the Django Server

```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000/`.

### 7. Access Admin Panel (Optional)

Visit `http://127.0.0.1:8000/admin/` to manage data via Django Admin.

## Frontend Setup (React)

### 1. Navigate to Frontend Directory

```bash
cd ../  # Back to frontend root
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/` (default Vite port).

## Running the Application

### Full Stack Setup

1. Start the Django backend:

   ```bash
   cd myProject
   myEnv\Scripts\activate
   python manage.py runserver
   ```

2. In a new terminal, start the React frontend:

   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/` to view the application.

### Adding Sample Data

- Use Django Admin (`http://127.0.0.1:8000/admin/`) to add cat and dog profiles.
- Or use the API endpoints directly (see below).

## API Endpoints

The Django REST Framework provides the following endpoints:

- `GET /api/cats/` - List all cat profiles
- `POST /api/cats/` - Create a new cat profile
- `GET /api/cats/{id}/` - Retrieve a specific cat profile
- `PUT /api/cats/{id}/` - Update a specific cat profile
- `DELETE /api/cats/{id}/` - Delete a specific cat profile

- `GET /api/dogs/` - List all dog profiles
- `POST /api/dogs/` - Create a new dog profile
- `GET /api/dogs/{id}/` - Retrieve a specific dog profile
- `PUT /api/dogs/{id}/` - Update a specific dog profile
- `DELETE /api/dogs/{id}/` - Delete a specific dog profile

All endpoints return JSON data. Images are served via Django's media files.

## Project Structure

```
frontend/
├── myProject/                    # Django Backend
│   ├── myApp/                    # Main Django App
│   │   ├── models.py             # CatProfile, DogProfile models
│   │   ├── serializers.py        # DRF serializers
│   │   ├── views.py              # ViewSets for API
│   │   ├── urls.py               # URL routing
│   │   └── migrations/           # Database migrations
│   ├── myProject/                # Django Project Settings
│   │   ├── settings.py           # Project configuration
│   │   ├── urls.py               # Main URL configuration
│   │   └── wsgi.py               # WSGI configuration
│   ├── profiles/                 # Media files (uploaded images)
│   ├── manage.py                 # Django management script
│   └── db.sqlite3                # SQLite database
├── src/                          # React Frontend
│   ├── api.js                    # Axios configuration
│   ├── App.jsx                   # Main React component
│   ├── main.jsx                  # React entry point
│   ├── components/               # React components
│   │   ├── About.jsx             # Pet card component
│   │   ├── catLists.jsx          # Cat list component
│   │   ├── dogLists.jsx          # Dog list component
│   │   └── Navbar.jsx            # Navigation component
│   └── assets/                   # Static assets
├── package.json                  # Node dependencies
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## Technologies Used

### Backend

- **Django**: Web framework
- **Django REST Framework**: API toolkit
- **Django CORS Headers**: Cross-origin resource sharing
- **SQLite**: Database (development)
- **Pillow**: Image handling

### Frontend

- **React**: UI library
- **Vite**: Build tool and dev server
- **Axios**: HTTP client for API calls
- **ESLint**: Code linting

## Development Workflow

### Backend Development

1. Make changes to models, views, or serializers in `myProject/myApp/`.
2. Create migrations if models change: `python manage.py makemigrations`
3. Apply migrations: `python manage.py migrate`
4. Test API endpoints using tools like Postman or curl.

### Frontend Development

1. Modify components in `src/components/`.
2. Update API calls in `src/api.js` if needed.
3. Use React DevTools for debugging.
4. Ensure CORS is properly configured for API access.

### Version Control

- Commit changes regularly.
- Use feature branches for new developments.
- Test both backend and frontend before merging.

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure `CORS_ALLOW_ALL_ORIGINS = True` in Django settings.
2. **API Connection Issues**: Verify Django server is running on `http://127.0.0.1:8000`.
3. **Image Loading**: Check media file paths and Django static/media configuration.
4. **Database Errors**: Run migrations and ensure database file exists.
5. **React Build Errors**: Clear node_modules and reinstall: `rm -rf node_modules && npm install`.

### Debugging Tips

- Check browser console for frontend errors.
- Use Django's debug mode for backend issues.
- Test API endpoints independently using curl or Postman.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test thoroughly.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
