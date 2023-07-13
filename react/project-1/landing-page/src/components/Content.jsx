const ContentSection = () => {
  return (
    <>
      <main className="content container">
        <div className="content-main">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>

          <div className="content-button">
            <button>Shop Now</button>
            <button className="content-button-secondary">Category</button>
          </div>

          <div className="ecommerce">
            <p>Also available on</p>
            <div className="ecommerce-icon">
              <img src="/image/amazon.png" alt="amazon-icon" />
              <img src="/image/flipkart.png" alt="flipkart-icon" />
            </div>
          </div>
        </div>
        <div className="content-image">
          <img src="/image/product.png" alt="product-image" />
        </div>
      </main>
    </>
  );
};

export default ContentSection;
