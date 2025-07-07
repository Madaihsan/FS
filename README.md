# 📄 DigitalSign: Aplikasi Tanda Tangan Digital Publik

**DigitalSign** adalah platform aplikasi web publik yang memungkinkan pengguna mengunggah dokumen (PDF/gambar), menempatkan tanda tangan digital secara langsung, dan mengelola proses kolaborasi tanda tangan dengan pihak lain. Aplikasi ini dirancang untuk memudahkan proses penandatanganan dokumen secara efisien dan aman. 

---

## 🚀 Gambaran Sistem

Aplikasi ini bertujuan untuk menyediakan solusi tanda tangan digital yang mudah diakses oleh semua orang, dengan fitur-fitur inti sebagai berikut:

- **🔐 Autentikasi Pengguna**  
  Login dan registrasi untuk mengelola akses pengguna.

- **📤 Upload Dokumen**  
  Dukungan untuk mengunggah file PDF dan gambar.

- **✍️ Penempatan & Eksekusi Tanda Tangan**  
  Pengguna dapat menggambar, mengunggah, atau mengetik tanda tangan langsung pada dokumen.

- **🤝 Kolaborasi Tanda Tangan**  
  Mendukung proses penandatanganan oleh banyak pihak, secara berurutan atau paralel.

- **🕓 Riwayat & Notifikasi**  
  Aktivitas pengguna dan status dokumen dicatat dan diberi notifikasi real-time.

> ⚠️ *Catatan: Aplikasi ini tidak menyediakan sertifikasi hukum untuk tanda tangan.*

---

### 🧰 Teknologi Utama yang Digunakan

- ⚛️ **React 19** – UI Library modern  
- ⚡ **Vite 7** – Build tool cepat dan ringan  
- 🎨 **Tailwind CSS 3.4** – Styling berbasis utility class  
- 🔀 **React Router v7** – Routing antar halaman  
- ☁️ **Supabase SDK 2.50** – Backend-as-a-Service (Auth, DB, Storage)  
- 🛠️ **ESLint** – Linter untuk menjaga kualitas kode  
- 🖼️ **Lucide React** – Ikon SVG ringan dan elegan


---

## 🔄 Alur Fitur Tanda Tangan

### 🗂️ 1. Upload Dokumen

- Pengguna mengunggah dokumen berupa PDF atau gambar.
- Menentukan siapa saja yang akan menandatangani dokumen.
- Mengatur urutan penandatangan (dapat menggunakan drag-and-drop).
- Menentukan posisi tanda tangan secara visual di halaman dokumen.

### 📩 2. Undangan Tanda Tangan

- Sistem mengirim notifikasi ke pihak penandatangan (melalui email atau notifikasi dalam aplikasi).
- Penandatangan mendapatkan tautan atau akses ke halaman khusus untuk menandatangani.

### ✍️ 3. Proses Tanda Tangan

- Penandatangan melihat isi dokumen dan mengeklik area tanda tangan yang ditentukan.
- Tersedia tiga opsi untuk membuat tanda tangan:
  - Menggambar langsung di kanvas.
  - Mengunggah gambar tanda tangan.
  - Mengetik nama dengan gaya tanda tangan.

### 📥 4. Penyimpanan & Penyelesaian

- Setelah semua pihak selesai menandatangani, dokumen disimpan secara otomatis ke Supabase Storage.
- Status dokumen diperbarui menjadi **"Selesai"**.
- Dokumen akhir dapat diunduh, dibagikan, atau dilihat kembali.

---

## ⚙️ Instalasi Lokal

### 1. Clone Project
```bash```
- git clone https://github.com/FuuNick/manajemen-tanda-tangan-dokumen.git
- cd manajemen-tanda-tangan-dokumen


### 2. Install Dependencies
```bash```
- npm install

### 3. Buat File .env dari Template
```bash```
- cp .env.example .env

Lalu isi .env dengan kredensial dari Supabase:
- VITE_SUPABASE_URL=your-supabase-url
- VITE_SUPABASE_ANON_KEY=your-anon-key
> ⚠️ *Catatan: URL dan Anon Key share via grup.*

### 4. Jalankan Project
```bash```
- npm run dev

---




## 📁 Struktur Folder Frontend

```plaintext
src/
├── assets/                  # Gambar, ikon, dll
├── components/              # Reusable Components
│   ├── PrivateRoute.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
├── layouts/                 # Layout halaman dengan sidebar, dll
│   ├── MainLayout.jsx
├── pages/                   # Semua halaman
│   ├── auth/                # Grup halaman autentikasi
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Guest.jsx
│   ├── feature-menu/        # Grup halaman dashboard dan fitur
│   │   ├── AkunSaya.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Keamanan.jsx
│   │   ├── Organisasi.jsx
│   │   ├── TugasAkhir.jsx
│   │   ├── Terkirim.jsx
│   │   ├── Inbox.jsx
│   │   ├── Tertandatangani.jsx
│   │   ├── Kontak.jsx
│   │   └── Pengaturan.jsx
│   ├── signature/           # Grup halaman tanda tangan
│   │   ├── NewSignature.jsx       # Upload dan setup dokumen baru
│   │   ├── SelectPosition.jsx     # Pilih posisi tanda tangan
│   │   ├── InviteSigner.jsx       # Undang pihak lain
│   │   ├── SignDocument.jsx       # Proses tanda tangan
│   │   └── Completed.jsx          # Dokumen selesai & download
├── services/               # File service supabase, email, dll
│   ├── supabase.js
│   ├── notificationService.js
│   ├── emailService.js (optional)
│   └── pdfService.js
├── store/                  # State management (zustand / redux)
│   ├── authStore.js
│   ├── documentStore.js
│   └── notificationStore.js
├── utils/                  # Helper function
│   ├── validators.js
│   ├── formatters.js
│   └── constants.js
├── App.jsx
├── main.jsx
└── App.css


---


---




