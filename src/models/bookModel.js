const mongoose = require("mongoose");

export const Book = mongoose.model("Book", { title: String, author: String });
