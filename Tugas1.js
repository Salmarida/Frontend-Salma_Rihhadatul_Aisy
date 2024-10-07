const dataKaryawan = [
    { Nama: "Data 1",
       Gol: "A",
       Status: "NIKAH", 
       GajiPokok: 0,
        Tunjangan: 0, 
        Total: 0 
      },

    { Nama: "Data 2", 
      Gol: "B", 
      Status: "BELUM", 
      GajiPokok: 0, 
      Tunjangan: 0, 
      Total: 0 
    },

    { Nama: "Data 3", 
      Gol: "C", 
      Status: "NIKAH", 
      GajiPokok: 0, 
      Tunjangan: 0, 
      Total: 0 
    },

    { Nama: "Data 4", 
      Gol: "B", 
      Status: "BELUM", 
      GajiPokok: 0, 
      Tunjangan: 0,
       Total: 0 
      },

    { Nama: "Data 5", 
      Gol: "C",
       Status: "NIKAH", 
       GajiPokok: 0, 
       Tunjangan: 0, 
       Total: 0 
      },
    { Nama: "Data 6", 
      Gol: "B", 
      Status: "BELUM", 
      GajiPokok: 0, 
      Tunjangan: 0,
       Total: 0 
      },
    { Nama: "Data 7",
       Gol: "C", 
       Status: "NIKAH", 
       GajiPokok: 0, 
       Tunjangan: 0,
        Total: 0
       },
    { Nama: "Data 8", 
      Gol: "A", 
      Status: "BELUM", 
      GajiPokok: 0, 
      Tunjangan: 0, 
      Total: 0 
    },
    { Nama: "Data 9", 
      Gol: "A", 
      Status: "NIKAH", 
      GajiPokok: 0, 
      Tunjangan: 0, 
      Total: 0 
    },
    { Nama: "Data 10",
       Gol: "A", 
       Status: "BELUM", 
       GajiPokok: 0, 
       Tunjangan: 0, 
       Total: 0 
      },
  ];
  
  const gajiPokok = {
    A: 10000000,
    B: 8000000,
    C: 5000000,
  };
  
  const tunjangan = {
    A: 2000000,
    B: 1500000,
    C: 1000000,
  };
  
  for (let i = 0; i < dataKaryawan.length; i++) {
    const karyawan = dataKaryawan[i];
    karyawan.GajiPokok = gajiPokok[karyawan.Gol];
    if (karyawan.Status === "NIKAH") {
      karyawan.Tunjangan = tunjangan[karyawan.Gol];
    }
    karyawan.Total = karyawan.GajiPokok + karyawan.Tunjangan;
  }
  
  console.log(dataKaryawan);