import MainLayout from "../../components/layout/MainLayout";
import "./Home.css";
import restauranfood from "../../assets/restauranfood.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon-dessert.jpg";
import greekSalad from "../../assets/greek-salad.jpg";
import Product from "../../components/Product";
import Container from "../../components/ui/Container";
import marioAndAdrian from "../../assets/mario-and-adrian.jpg";
import marioAndAdrianB from "../../assets/mario-and-adrian-b.jpg";

const PRODUCTS = [
  {
    id: 1,
    img: greekSalad,
    label: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    img: bruchetta,
    label: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
  },
  {
    id: 3,
    img: lemonDessert,
    label: "Lemon Dessert",
    price: 5,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Home = () => {
  return (
    <MainLayout>
      <section className="hero-section">
        <Container>
          <div className="hero">
            <div>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button>Reserve a Table</button>
            </div>
            <div className="banner-img-wrapper">
              <img
                src={restauranfood}
                alt="Restaurant Food"
                className="banner-img"
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div>
            <h1>This weeks specials</h1>
            <button>Online Menu</button>
          </div>
        </Container>
        <Container>
          <div className="product-list">
            {PRODUCTS.map((product) => (
              <Product
                key={product.id}
                img={product.img}
                label={product.label}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="about">
            <div className="content">
              <h3 className="about-title">Little Lemon</h3>
              <h4 className="about-subtitle">New York</h4>

              <p className="about-text">
                Little Lemon is owned by two Italian brothers, Mario and Adrian,
                who moved to the United States to pursue their shared dream of
                owning a restaurant.
              </p>
            </div>
            <div className="image-container">
              <img src={marioAndAdrian} alt="Mario" className="mario" />
              <img src={marioAndAdrianB} alt="Adrian" className="adrian" />
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default Home;
