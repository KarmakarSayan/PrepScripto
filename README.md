# 🏥 Full Stack Doctor Appointment Booking System (MERN Stack)

## 🚀 Project Overview : PrepScipto
This is a **Full Stack Doctor Appointment Booking System** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It allows patients to book appointments, doctors to manage their schedules, and admins to oversee the platform.  

---

## 🌟 Key Features

### 👤 Multi-level Authentication
- **🧑‍🤝‍🧑 Patient Login**: Register, login, browse doctors, book appointments, and manage bookings.  
- **👨‍⚕️ Doctor Login**: View appointments, track earnings, and update profile.  
- **🛠 Admin Dashboard**: Manage doctors, monitor appointments, and control the system efficiently.  

### 📅 Appointment Management
- Patients can book or cancel appointments.  
- Doctors can view daily, weekly, or monthly appointments.  
- Admin can manage all appointments seamlessly.  

### 💳 Online Payment Integration
- Users can pay the appointment fee online.  
- Payments are linked to appointments for smooth tracking.  

### 📝 Profile Management
- Doctors can update professional info from dashboard.  
- Admin can approve, edit, or remove doctor profiles.  
- Patients can update profiles and view booking history.  

### 📱 Responsive and User-friendly UI
- Built with **React.js** for a smooth and modern user experience.  
- Optimized for both desktop and mobile devices.  

---

## 🛠 Tech Stack
- **Frontend**: React.js, CSS, HTML  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Payment Gateway**: 💳 [Stripe / Razorpay]  

---

## 📂 Project Structure

client/ → React frontend
server/ → Node.js & Express backend
models/ → MongoDB schemas (Users, Doctors, Appointments)
routes/ → API endpoints (auth, appointments, payments)
controllers/ → Business logic
config/ → Database connection & environment variables



🎯 Benefits

Complete MERN stack project for portfolio or resume.
Covers authentication, CRUD operations, payment integration, and role-based dashboards.
Fully customizable for any healthcare or clinic application.


---

🔮 Future Enhancements
✉️ Email notifications for appointments.
⏰ Doctor availability slots for dynamic booking.
📊 Analytics dashboard for admin to monitor bookings and earnings.


---

## ⚡ How to Run Locally
1. **Clone the repository**  
```bash
git clone <repository-url>
Install dependencies

cd client
npm install
cd ../server
npm install


Setup environment variables (.env) for MongoDB, JWT, and payment keys.

Run the application

# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start


Open in browser: http://localhost:3000



