import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function BookCard({ bookData, handleDelete, handleEdit }) {
  return (
    <section>
      <div className="max-w-sm max-h-full border p-4 m-2 rounded-md flex flex-col  items-center">
        <img src={bookData.poster} className="h-60 w-full object-contain" />
        <div className="mt-2">
        <p className="p-1 font-poppins mt-2">Title : {bookData.title}</p>
        <p className="p-1 font-poppins">Author : {bookData.author}</p>
        <p className="p-1 font-poppins">ISBN Number : {bookData.ISBNNumber}</p>
        <p className="p-1 font-poppins">Date : {bookData.date}</p>
        </div>
       <div className="mt-4">
       <button
          className="p-2 font-poppins border text-green-500 mx-2"
          onClick={() => handleEdit(bookData.id)}
        >
          <EditIcon />
          Edit
        </button>
        <button
          className="p-2 font-poppins border text-red-500 mx-2"
          onClick={() => handleDelete(bookData.id)}
        >
          <DeleteIcon />
          Delete
        </button>
       </div>
      </div>
    </section>
  );
}
