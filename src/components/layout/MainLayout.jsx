import Header from "./Header";
import Footer from "./Footer";
import Container from "./../ui/Container";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
