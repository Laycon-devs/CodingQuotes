import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModalHandler = () => {
    setModalVisible(false);
  }
  const openModalHandler = () => {
    setModalVisible(true);
  }
  return (
    <>
      <MainHeader openModalHandler={openModalHandler} />
      <main>
        <PostsList modalVisible={modalVisible} closeModalHandler={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
