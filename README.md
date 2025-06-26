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

## 📁 Struktur Folder Frontend

```plaintext
src/
├── assets/                 # Gambar, ikon, dll
├── components/             # Komponen UI global
│   ├── PrivateRoute.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── layouts/                # Layout halaman utama
│   └── MainLayout.jsx
├── pages/                  # Halaman-halaman aplikasi
│   ├── auth/               # Login, Register, Guest
│   ├── feature-menu/       # Dashboard dan menu pengguna
│   └── signature/          # Alur tanda tangan dokumen
├── services/               # Supabase, notifikasi, PDF service
├── store/                  # Zustand / Redux store
├── utils/                  # Helper functions
├── App.jsx                 # Root component & router
├── main.jsx                # Entry point aplikasi
└── App.css                 # Tailwind setup

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

## 💡 Fitur Tambahan yang Direkomendasikan

| Fitur                           | Tools yang digunakan                                                          |
|--------------------------------|--------------------------------------------------------------------------------|
| Preview PDF                    | [`react-pdf`](https://github.com/wojtekmaj/react-pdf)                          |
| Posisi tanda tangan drag & drop| Koordinat `(x, y)` pada file PDF                                               |
| Input gambar tanda tangan      | [`react-signature-canvas`](https://github.com/agilgur5/react-signature-canvas) |
| Real-time status update        | Supabase Realtime Listener                                                     |
| Notifikasi                     | Supabase + EmailJS / integrasi WhatsApp API                                    |
| Undangan tanda tangan unik     | Generate link khusus untuk tiap penandatangan                                  |


