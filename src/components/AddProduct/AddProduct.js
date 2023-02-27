import React from "react";

const AddProduct = () => {

    const handleAddProduct = (event)=>{
        event.preventDefault();
        const form = event.target;
        const product = form.productName.value;
        const category = form.category.value;
        const image = form.image.value;
        const price = form.price.value;
        const seller = form.sellerName.value;
        const stock = form.stock.value;
        const shipping = form.shipping.value;

        const productDetails = {
            name: product,
            img: image,
            category: category,
            price: price,
            seller: seller,
            stock: stock,
            shipping: shipping
        }
        console.log(productDetails)

    }


  return (
    <section>
      <section className="p-6 bg-white text-gray-50">
        <form
        onSubmit={handleAddProduct}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-xl bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add your product</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Product name
                </label>
                <input 
                required
                  type="text"
                  name="productName"
                  placeholder="Product name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  text-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Category
                </label>
                <input 
                required
                  type="text"
                  name="category"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Image
                </label>
                <input 
                required
                  type="file"
                  name="image"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-white p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Price
                </label>
                <input 
                required
                  type="text"
                  name="price"
                  placeholder="$"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Seller name
                </label>
                <input 
                required
                  type="text"
                  name="sellerName"
                  placeholder="Seller"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Stock
                </label>
                <input 
                required
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Shipping
                </label>
                <input 
                required
                  type="number"
                  name="shipping"
                  placeholder="Shipping"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
              </div>
            </div>
          </fieldset>
            <button className="btn btn-success" type="submit">Success</button>
        </form>
      </section>
    </section>
  );
};

export default AddProduct;
