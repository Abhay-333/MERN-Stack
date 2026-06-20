# LinkTree Frontend - Project Structure

## 📁 Feature-Based Architecture

```
src/
├── features/
│   ├── auth/                    # Authentication feature
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   └── components/
│   │
│   ├── dashboard/               # Dashboard feature
│   │   ├── pages/
│   │   │   └── DashboardPage.jsx
│   │   └── components/
│   │       ├── LinkForm.jsx
│   │       └── LinksList.jsx
│   │
│   ├── profile/                 # Public profile feature
│   │   ├── pages/
│   │   │   └── ProfilePage.jsx
│   │
│   └── landing/                 # Landing page feature
│       └── pages/
│           └── LandingPage.jsx
│
├── context/
│   └── AuthContext.jsx          # Auth state management
│
├── services/
│   └── api.js                   # API calls & axios config
│
├── components/
│   └── ProtectedRoute.jsx       # Route protection wrapper
│
├── utils/
│   └── constants.js             # Constants & configurations
│
├── App.jsx                      # Main app with routing
├── main.jsx                     # Entry point
└── index.css                    # Tailwind CSS
```

## 🎯 Features Implemented

### 1. **Landing Page** (`/`)
- Beautiful hero section with CTA buttons
- Feature highlights
- Links to Register & Login

### 2. **Authentication** (`/register`, `/login`)
- User registration with validation
- Login functionality
- Context-based state management
- Persistent authentication via localStorage

### 3. **Dashboard** (`/dashboard`) - Protected
- Add new links (title + URL)
- View all your links
- Delete links
- See live preview of your profile
- View/Share profile button
- Logout functionality

### 4. **Public Profile** (`/profile/:username`)
- View any user's links
- Click tracking
- Beautiful card layout
- No authentication required

## 🔑 Key Features

- **Auth Context**: Centralized authentication state with useAuth hook
- **Protected Routes**: ProtectedRoute component prevents unauthorized access
- **API Interceptors**: Automatic token injection in request headers
- **Responsive Design**: Tailwind CSS for all devices
- **Error Handling**: User-friendly error messages
- **Loading States**: Proper loading indicators

## 📡 API Integration

**Base URL**: `http://localhost:3000/api`

### Endpoints Used:
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /link` - Create new link
- `GET /link/user/:username` - Get user's links

## ⚙️ Environment Setup

1. Backend running on port 3000
2. Frontend dev server (Vite)
3. Install dependencies: `npm install`
4. Start dev: `npm run dev`

## 🚀 Next Steps (Features to Add)

- [ ] Edit/Update links
- [ ] Link categories/groups
- [ ] Analytics dashboard (click tracking)
- [ ] Profile customization (themes, bio)
- [ ] Social sharing buttons
- [ ] Import links from other services
- [ ] Dark mode support
- [ ] User profile picture
- [ ] Link preview before sharing
