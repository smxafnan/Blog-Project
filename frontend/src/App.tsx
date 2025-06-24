import { Route, Routes } from "react-router-dom"
import MyPageLayout from "./pages/Home"
import PostsGridDisplay from './layout/PostGridDisplay';
import PostDetail from './layout/PostDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyPageLayout />}>
          <Route index element={<PostsGridDisplay />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
