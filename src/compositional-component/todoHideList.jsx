// import React from "react";

// function TodoHideList() {
//     return (
//         <div className='mb-3 ms-5'>
//             <input type="checkbox" className='form-check-input'/>
//             <label className="ms-2">Sembunyikan Tugas Selesai</label>
//         </div>
//     )
// }

// export default TodoHideList
// TodoHideList.js
import React from "react";

function TodoHideList({ isSembunyikanTugasChecked, setIsSembunyikanTugasChecked }) {
    const handleCheckboxChange = () => {
        setIsSembunyikanTugasChecked(!isSembunyikanTugasChecked);
    };

    return (
        <div className="mb-3 ms-5">
            <input
                type="checkbox"
                className="form-check-input"
                checked={isSembunyikanTugasChecked}
                onChange={handleCheckboxChange}
            />
            <label className="ms-2">Sembunyikan Tugas Selesai</label>
        </div>
    );
}

export default TodoHideList;
