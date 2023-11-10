const buttonSum = document.getElementById("btnSum");
buttonSum.addEventListener("click", () => {
  // Determinan
  const resultDet = document.getElementById("det-result");
  const m11 = Number(document.getElementById("1").value);
  const m12 = Number(document.getElementById("2").value);
  const m13 = Number(document.getElementById("3").value);
  const m21 = Number(document.getElementById("4").value);
  const m22 = Number(document.getElementById("5").value);
  const m23 = Number(document.getElementById("6").value);
  const m31 = Number(document.getElementById("7").value);
  const m32 = Number(document.getElementById("8").value);
  const m33 = Number(document.getElementById("9").value);

  // Validasi
  if (
    typeof m11 === "number" &&
    !isNaN(m11) &&
    typeof m12 === "number" &&
    !isNaN(m12) &&
    typeof m13 === "number" &&
    !isNaN(m13) &&
    typeof m21 === "number" &&
    !isNaN(m21) &&
    typeof m22 === "number" &&
    !isNaN(m22) &&
    typeof m23 === "number" &&
    !isNaN(m23) &&
    typeof m31 === "number" &&
    !isNaN(m31) &&
    typeof m32 === "number" &&
    !isNaN(m32) &&
    typeof m33 === "number" &&
    !isNaN(m33)
  ) {
    const DET =
      m11 * m22 * m33 +
      m12 * m23 * m31 +
      m13 * m21 * m32 -
      m31 * m22 * m13 -
      m32 * m23 * m11 -
      m33 * m21 * m12;

    document.getElementById("d11").value = m11;
    document.getElementById("d12").value = m12;
    document.getElementById("d13").value = m13;
    document.getElementById("d21").value = m21;
    document.getElementById("d22").value = m22;
    document.getElementById("d23").value = m23;
    document.getElementById("d31").value = m31;
    document.getElementById("d32").value = m32;
    document.getElementById("d33").value = m33;

    // Bayangan
    document.getElementById("db11").value = m11;
    document.getElementById("db12").value = m12;
    document.getElementById("db21").value = m21;
    document.getElementById("db22").value = m22;
    document.getElementById("db31").value = m31;
    document.getElementById("db32").value = m32;
    resultDet.innerHTML = `(${m11} x ${m22} x ${m33}) + (${m12} x ${m23} x ${m31}) + (${m13} x ${m21} x ${m32}) - (${m31} x ${m22} x ${m13}) - (${m32} x ${m23} x ${m11}) - (${m33} x ${m21} x ${m12}) = ${DET}`;

    // Minor
    document.getElementById("min-11-1").value = m22;
    document.getElementById("min-11-2").value = m23;
    document.getElementById("min-11-3").value = m32;
    document.getElementById("min-11-4").value = m33;

    document.getElementById("min-12-1").value = m21;
    document.getElementById("min-12-2").value = m23;
    document.getElementById("min-12-3").value = m31;
    document.getElementById("min-12-4").value = m33;

    document.getElementById("min-13-1").value = m21;
    document.getElementById("min-13-2").value = m22;
    document.getElementById("min-13-3").value = m31;
    document.getElementById("min-13-4").value = m32;

    document.getElementById("min-21-1").value = m12;
    document.getElementById("min-21-2").value = m13;
    document.getElementById("min-21-3").value = m32;
    document.getElementById("min-21-4").value = m33;

    document.getElementById("min-22-1").value = m11;
    document.getElementById("min-22-2").value = m13;
    document.getElementById("min-22-3").value = m31;
    document.getElementById("min-22-4").value = m33;

    document.getElementById("min-23-1").value = m11;
    document.getElementById("min-23-2").value = m12;
    document.getElementById("min-23-3").value = m31;
    document.getElementById("min-23-4").value = m32;

    document.getElementById("min-31-1").value = m12;
    document.getElementById("min-31-2").value = m13;
    document.getElementById("min-31-3").value = m22;
    document.getElementById("min-31-4").value = m23;

    document.getElementById("min-32-1").value = m11;
    document.getElementById("min-32-2").value = m13;
    document.getElementById("min-32-3").value = m21;
    document.getElementById("min-32-4").value = m23;

    document.getElementById("min-33-1").value = m11;
    document.getElementById("min-33-2").value = m12;
    document.getElementById("min-33-3").value = m21;
    document.getElementById("min-33-4").value = m22;

    // Sum Minor
    document.getElementById("sumMinor11").innerHTML = `(${m22 * m33}) - (${
      m23 * m32
    }) = ${m22 * m33 - m23 * m32}`;
    document.getElementById("sumMinor12").innerHTML = `(${m21 * m33}) - (${
      m23 * m31
    }) = ${m21 * m33 - m23 * m31}`;
    document.getElementById("sumMinor13").innerHTML = `(${m22 * m33}) - (${
      m23 * m32
    }) = ${m21 * m32 - m22 * m31}`;
    document.getElementById("sumMinor21").innerHTML = `(${m12 * m33}) - (${
      m13 * m32
    }) = ${m12 * m33 - m13 * m32}`;
    document.getElementById("sumMinor22").innerHTML = `(${m11 * m33}) - (${
      m13 * m31
    }) = ${m11 * m33 - m13 * m31}`;
    document.getElementById("sumMinor23").innerHTML = `(${m11 * m32}) - (${
      m12 * m31
    }) = ${m11 * m32 - m12 * m31}`;
    document.getElementById("sumMinor31").innerHTML = `(${m22 * m33}) - (${
      m23 * m32
    }) = ${m12 * m23 - m13 * m22}`;
    document.getElementById("sumMinor32").innerHTML = `(${m11 * m23}) - (${
      m13 * m21
    }) = ${m11 * m23 - m13 * m21}`;
    document.getElementById("sumMinor33").innerHTML = `(${m11 * m22}) - (${
      m12 * m21
    }) = ${m11 * m22 - m12 * m21}`;

    // Kofaktor
    const kof11 = (m22 * m33 - m23 * m32) * 1;
    const kof12 = (m21 * m33 - m23 * m31) * -1;
    const kof13 = (m21 * m32 - m22 * m31) * 1;
    const kof21 = (m12 * m33 - m13 * m32) * -1;
    const kof22 = (m11 * m33 - m13 * m31) * 1;
    const kof23 = (m11 * m32 - m12 * m31) * -1;
    const kof31 = (m12 * m23 - m13 * m22) * 1;
    const kof32 = (m11 * m23 - m13 * m21) * -1;
    const kof33 = (m11 * m22 - m12 * m21) * 1;

    document.getElementById("k11").value = kof11;
    document.getElementById("k12").value = kof12;
    document.getElementById("k13").value = kof13;
    document.getElementById("k21").value = kof21;
    document.getElementById("k22").value = kof22;
    document.getElementById("k23").value = kof23;
    document.getElementById("k31").value = kof31;
    document.getElementById("k32").value = kof32;
    document.getElementById("k33").value = kof33;

    // Adjoin
    document.getElementById("a11").value = kof11;
    document.getElementById("a12").value = kof21;
    document.getElementById("a13").value = kof31;
    document.getElementById("a21").value = kof12;
    document.getElementById("a22").value = kof22;
    document.getElementById("a23").value = kof32;
    document.getElementById("a31").value = kof13;
    document.getElementById("a32").value = kof23;
    document.getElementById("a33").value = kof33;

    // Invers
    document.getElementById("inv-det").innerHTML = `1/${DET}   X`;
    document.getElementById("i11").value = kof11;
    document.getElementById("i12").value = kof21;
    document.getElementById("i13").value = kof31;
    document.getElementById("i21").value = kof12;
    document.getElementById("i22").value = kof22;
    document.getElementById("i23").value = kof32;
    document.getElementById("i31").value = kof13;
    document.getElementById("i32").value = kof23;
    document.getElementById("i33").value = kof33;

    // Result
    const r11 = 1 * kof11;
    const r12 = 1 * kof21;
    const r13 = 1 * kof31;
    const r21 = 1 * kof12;
    const r22 = 1 * kof22;
    const r23 = 1 * kof32;
    const r31 = 1 * kof13;
    const r32 = 1 * kof23;
    const r33 = 1 * kof33;

    document.getElementById("r11").value = `${r11} / \n ${DET}`;
    document.getElementById("r12").value = `${r12} / \n ${DET}`;
    document.getElementById("r13").value = `${r13} / \n ${DET}`;
    document.getElementById("r21").value = `${r21} / \n ${DET}`;
    document.getElementById("r22").value = `${r22} / \n${DET}`;
    document.getElementById("r23").value = `${r23} / \n${DET}`;
    document.getElementById("r31").value = `${r31} /\n ${DET}`;
    document.getElementById("r32").value = `${r32} / \n${DET}`;
    document.getElementById("r33").value = `${r33} /\n ${DET}`;

    document.getElementById("det-sec").classList.remove("hidden");
    document.getElementById("min-sec").classList.remove("hidden");
    document.getElementById("kof-sec").classList.remove("hidden");
    document.getElementById("adj-sec").classList.remove("hidden");
    document.getElementById("inv-sec").classList.remove("hidden");
    document.getElementById("res-sec").classList.remove("hidden");
  } else {
    Swal.fire({
      title: "Error!",
      text: "Hanya Boleh Memasukkan Angka!",
      icon: "error",
      confirmButtonText: "Mengerti",
    });
  }
});
