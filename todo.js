// todo.js

// Mengambil elemen DOM
export const form = document.getElementById("todo-form");
const taskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");

// Fungsi untuk menambah tugas
export function addTask(event) {
  event.preventDefault(); // Mencegah reload halaman

  const taskText = taskInput.value.trim(); // Mengambil nilai input dan menghilangkan spasi berlebih

  if (taskText === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Tugas tidak boleh kosong!",
      scrollbarPadding: false,
    });
    return;
  }

  // Membuat elemen <li> baru
  const li = document.createElement("li");

  // Membuat elemen div untuk teks tugas
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-text");
  taskDiv.textContent = taskText;

  // Membuat tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");

  // Aksi untuk menghapus tugas
  deleteBtn.addEventListener("click", function () {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Tugas ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      scrollbarPadding: false,
    }).then((result) => {
      if (result.isConfirmed) {
        todoList.removeChild(li); // Hapus tugas
        Swal.fire("Dihapus!", "Tugas telah dihapus.", "success", {
          scrollbarPadding: false,
        });
      }
    });
  });

  // Aksi untuk menandai tugas selesai
  taskDiv.addEventListener("click", function () {
    taskDiv.classList.toggle("completed"); // Toggle kelas "completed"
    
    // Menampilkan notifikasi ketika tugas ditandai selesai
    if (taskDiv.classList.contains("completed")) {
        Swal.fire({
            icon: "info",
            title: "Tugas Selesai!",
            text: "Tugas telah ditandai sebagai selesai.",
            scrollbarPadding: false,
        });
    } else {
        Swal.fire({
            icon: "info",
            title: "Tugas Belum Selesai!",
            text: "Tugas telah ditandai sebagai belum selesai.",
            scrollbarPadding: false,
        });
    }
});

  // Menambahkan taskDiv dan deleteBtn ke dalam <li>
  li.appendChild(taskDiv);
  li.appendChild(deleteBtn);

  // Menambahkan <li> ke dalam daftar <ul>
  todoList.appendChild(li);

  // Kosongkan input setelah tugas ditambahkan
  taskInput.value = "";

  // Menampilkan notifikasi sukses
  Swal.fire({
    icon: "success",
    title: "Berhasil!",
    text: "Tugas berhasil ditambahkan!",
    showConfirmButton: false,
    timer: 1500,
    scrollbarPadding: false,
  });
}
