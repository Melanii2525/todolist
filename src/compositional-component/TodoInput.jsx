// // import React from "react";

// // function TodoInput({daftarTodoList, setDaftarTodoList, tugasBaru, setTugasBaru}) {

// //     const handleTambahTugas = (e)=>{
// //         e.preventDefault();

// //         setDaftarTodoList([
// //             ...daftarTodoList,
// //             {id: Date.now(), namaTugas: tugasBaru, checked:false}
// //         ]);
// //     }

// //     const handleChange = (e)=>{
// //         setTugasBaru(e.target.value);
// //     }
// //     return (
// //         <section id="input">
// //           <div className="row justify-content-center align-item-center mb-3">
// //             <div className="col-8">
// //               <input
// //               type="text"
// //               className="fore-control"
// //               placeholder='Masukkan Tugas Baru'
// //               onChange={handleChange}
// //               />
// //             </div>
// //             <div className="col-auto">
// //               <button
// //               className="btn btn-primary"
// //               onClick={handleTambahTugas}
// //               >
// //                 Tambah
// //               </button>
// //             </div>
// //           </div>
// //         </section>
// //     )
// // }

// // export default TodoInput
// // TodoInput.js

// import React from "react";

// function TodoInput({ daftarTodoList, setDaftarTodoList, tugasBaru, setTugasBaru }) {
//     const handleTambahTugas = (e) => {
//         e.preventDefault();
//         if (tugasBaru.trim() === "") return; 

//         setDaftarTodoList([
//             ...daftarTodoList,
//             { id: Date.now(), namaTugas: tugasBaru, checked: false },
//         ]);
//         setTugasBaru(""); 
//     };

//     const handleChange = (e) => {
//         setTugasBaru(e.target.value);
//     };

//     return (
//         <section id="input">
//             <div className="row justify-content-center align-items-center mb-3">
//                 <div className="col-8">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Masukkan Tugas Baru"
//                         value={tugasBaru}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="col-auto">
//                     <button className="btn btn-primary" onClick={handleTambahTugas}>
//                         Tambah
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default TodoInput;

import React from "react";

function TodoInput({ daftarTodoList, setDaftarTodoList, tugasBaru, setTugasBaru }) {
    const handleTambahTugas = (e) => {
        e.preventDefault();
        if (tugasBaru.trim() === "") {
            // Menampilkan notifikasi jika tugasBaru kosong
            alert("Tugas harus diisi!");
            return; // Menghentikan eksekusi jika input kosong
        }

        setDaftarTodoList([
            ...daftarTodoList,
            { id: Date.now(), namaTugas: tugasBaru, checked: false },
        ]);
        setTugasBaru(""); 
    };

    const handleChange = (e) => {
        setTugasBaru(e.target.value);
    };

    return (
        <section id="input">
            <div className="row justify-content-center align-items-center mb-3">
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Tugas Baru"
                        value={tugasBaru}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={handleTambahTugas}>
                        Tambah
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TodoInput;