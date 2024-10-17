const data = require('./data');


function lihatData() {
    console.log("Daftar Data:");
    data.map((item, index) => {
        console.log(`${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`);
    });
}


function tambahData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    console.log(`Data baru telah ditambahkan: Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`);
}

function hapusData(index) {
    if (index < 0 || index >= data.length) {
        console.log("Indeks tidak valid. Tidak ada data yang dihapus.");
        return;
    }
    const deleted = data.splice(index, 1);
    console.log(`Data yang dihapus: Nama: ${deleted[0].nama}, Umur: ${deleted[0].umur}, Alamat: ${deleted[0].alamat}, Email: ${deleted[0].email}`);
}

// Menambahkan data baru
tambahData("Fadly", 32, "Bali", "fadly@example.com");
tambahData("Onal", 23, "Lampung", "onal@example.com");
tambahData("Putri", 23, "Medan", "putri@example.com");

// Menampilkan semua data
lihatData();

// Hapus data 
hapusData(5);

// Menampilkan semua data setelah hapus data
lihatData();
