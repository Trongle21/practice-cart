import Products from "./Products";

const ListProduct = () => {
  return (
    <div className="container">
      <ul className="list-product">
        <h2>YOUR BAG</h2>
        {/* {loading ? (
          <div className="container">
            <h1>Hello</h1>
          </div>
        ) : error ? (
          <div>loi</div>
        ) : ( */}
        <Products />
        {/* )} */}
      </ul>
    </div>
  );
};

ListProduct.propTypes = {};

export default ListProduct;
