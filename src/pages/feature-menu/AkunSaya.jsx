export default function AkunSaya() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Akun Saya</h1>
      <p>Ini adalah halaman Akun Saya.</p>
    </div>
  )
import { useState } from "react";

function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}

export default function AkunSaya() {
  const [form, setForm] = useState({
    name: "Lorem Ipsum",
    email: "admin@web.app",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi singkat (opsional)
    if (form.newPassword !== form.confirmPassword) {
      alert("Konfirmasi password tidak cocok.");
      return;
    }

    // Simulasi update profil
    alert("Profile updated!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-2xl font-semibold border-b pb-3 mb-6 text-gray-800">
        Akun Saya
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Foto Profil */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={
              form.photo
                ? URL.createObjectURL(form.photo)
                : "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border shadow"
          />
          <div className="w-full">
            <label className="block text-sm font-medium">Ubah Foto Profil</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Form Input */}
        <div className="space-y-4">
          <Input
            label="Nama"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Password Lama"
            name="oldPassword"
            type="password"
            value={form.oldPassword}
            onChange={handleChange}
          />
          <Input
            label="Password Baru"
            name="newPassword"
            type="password"
            value={form.newPassword}
            onChange={handleChange}
          />
          <Input
            label="Konfirmasi Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}
