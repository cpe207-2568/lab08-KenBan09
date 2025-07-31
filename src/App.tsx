import { Header } from './Components/Header';
import { SideBar } from './Components/Sidebar';
import { TaskInput } from './Components/TaskInput';
import { Task } from './Components/Task';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header/>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <SideBar userName='Bannasorn' type='student'></SideBar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <h1>Bannasorn Dabkhiao</h1>
            <TaskInput/>
            {/* Card รายการ */}
            <Task id={1} title="Read a book"description="Vite + React + Bootstrap + TS"isDone={true}></Task>
            <Task id={2} title="Write code"description="Finish project for class"isDone={true}></Task>
            <Task id={3} title="Deploy app"description="Push project to GitHub Pages"isDone={true}></Task>

          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Bannasorn Dabkhiao" studentId="670610712"></Footer>
    </div>
  );

}

export default App;