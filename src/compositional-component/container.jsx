import React, { useState } from "react";
import TodoTitle from "./TodoTitle";
import TodoInput from "./TodoInput";
import TodoListTugas from "./TodoListTugas";
import TodoHideList from "./TodoHideList";

function App() {
    const [daftarTodoList, setDaftarTodoList] = useState([]);
    const [tugasBaru, setTugasBaru] = useState("");
    const [isSembunyikanTugasChecked, setIsSembunyikanTugasChecked] = useState(false);

    return (
        <div className="container">
            <TodoTitle />

            <TodoInput
                daftarTodoList={daftarTodoList}
                setDaftarTodoList={setDaftarTodoList}
                tugasBaru={tugasBaru}
                setTugasBaru={setTugasBaru}
            />

            <TodoListTugas
                daftarTodoList={daftarTodoList}
                isSembunyikanTugasChecked={isSembunyikanTugasChecked}
                setDaftarTodoList={setDaftarTodoList}
            />

            <TodoHideList
                isSembunyikanTugasChecked={isSembunyikanTugasChecked}
                setIsSembunyikanTugasChecked={setIsSembunyikanTugasChecked}
            />
        </div>
    );
}

export default App;
