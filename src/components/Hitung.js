import React from "react";

function Hitung(props) {
  const nilaiAngka = props.nilaiHitung;

  return (
    <div>
      <h3>{nilaiAngka}</h3>
    </div>
  );
}

export default Hitung;
