import React, { useState } from "react";
import Tombol from "./components/Tombol";
import Hitung from "./components/Hitung";

function App() {
  const [hitung, setHitung] = useState(0);

  function tambahNilai() {
    setHitung(hitung + 10);
  }

  function kurangNilai() {
    setHitung(hitung - 10);
  }

  return (
    <div className="App">
      <h1>Belajar React</h1>
      <Hitung nilaiHitung={hitung} />

      <Tombol hitungAngka={tambahNilai} namaTombol="Tambah" />

      <Tombol hitungAngka={kurangNilai} namaTombol="Kurang" />
    </div>
  );
}

export default App;
