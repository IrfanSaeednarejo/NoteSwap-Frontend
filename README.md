NoteSwap

NoteSwap is a community-powered platform built for students of Sukkur IBA University to share, discover, and download academic resources. Students can upload notes and documents, earn credits, climb the leaderboard, and win monthly rewards — all while building a stronger academic community.

🔗 GitHub Repository

Access the frontend project here: NoteSwap Frontend on GitHub

🧠 What It Does

📤 Upload Notes: Share your study materials and help your peers.

📥 Download Freely: Use earned credits to download others’ notes.

🎖 Leaderboard: Top contributors earn badges and monthly rewards.

💳 Credit System: Earn credits on every upload, and spend them on downloads.

👤 User Profiles: Manage your uploads, downloads, and rank.

🔐 Authentication: Secure login and signup functionality.

🌱 Why We Built It

We’re a team of students from Sukkur IBA who’ve experienced the stress of last-minute exam prep, missing notes, and the challenge of scattered resources. NoteSwap is our solution to make academic support accessible, streamlined, and rewarding.

We didn’t reinvent the wheel — we just made it roll smoother.

Fast, clean, and fair: upload notes, earn credits, and compete for monthly rewards.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

State Management: React Context API

Routing: React Router

Backend: (Connected separately, not included in this repo)

📦 Project Structure

NoteSwap-Frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Routes like Home, Profile, Upload, etc.
│   ├── services/        # API functions and utility modules
│   ├── context/         # User and auth context
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── .env                 # API endpoints, keys, etc.
├── package.json         # Project scripts and dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation

🧪 Installation & Setup

Prerequisites

Node.js (v14+)

npm or yarn

Getting Started

git clone https://github.com/IrfanSaeednarejo/NoteSwap-Frontend.git
cd NoteSwap-Frontend
npm install
# or
yarn install

Environment Variables

Create a .env file:

VITE_API_URL=https://your-backend-url.com

Start the Development Server

npm run dev
# or
yarn dev

Then visit http://localhost:5173 in your browser.

📖 Usage

Sign up / Log in to your student account.

Upload a note/document and earn credits.

Download notes using earned credits.

Track your progress on the leaderboard.

Win rewards based on your contribution ranking.

✨ Future Plans

Admin dashboard for managing content

Social sharing & bookmarking features

Mobile responsive improvements

More gamification (badges, achievements)

🤝 Contributing

We welcome all contributors to help expand NoteSwap:

Fork the repository

Make your changes

Open a pull request

📄 License

This project is licensed under the MIT License.

👥 Team

Created by students of Sukkur IBA UniversityMaintained by: @IrfanSaeednarejo

Empowering students to learn together. Share more, stress less — with NoteSwap.

