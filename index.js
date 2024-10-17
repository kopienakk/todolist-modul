// index.js

import { addTask, form } from "./todo.js"; // Mengimpor fungsi dan elemen dari todo.js

// Menambahkan event listener untuk submit form
form.addEventListener("submit", addTask);
