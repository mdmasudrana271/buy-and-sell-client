import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const { register,  formState: { errors },  handleSubmit,  } = useForm();

  const {user} = useContext(AuthContext)

  const imageHostKey = process.env.REACT_APP_IMGBB_API_KEY;

  
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      if(imgData.success){
        const product = {
          name: data.product,
          img: imgData.data.url,
          price:data.price,
          stock: data.stock,
          seller: data.sellerName,
          category:data.category,
          shipping: data.shipping,
          email: user?.email,
          sellerName: user?.displayName
        }

        console.log(product)

        fetch('https://buy-sell-server-roan.vercel.app/add-product',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(product)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.acknowledged){
            toast.success('Add Product Successfully')
          }
        })

      }

    })

  };

  return (
    <section>
      <section className="p-6 bg-white text-gray-50">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
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
                {...register("product", { required: "Product name is required" })}
                  type="text"
                  placeholder="Product name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  text-black p-2"
                />
                {errors.product && (
            <p role="alert" className="text-error">
              {errors.product?.message}
            </p>
          )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Category
                </label>
                <input
                 {...register("category", { required: "category name is required" })}
                  type="text"
                  placeholder="category name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
                {errors.category && (
            <p role="alert" className="text-error">
              {errors.category?.message}
            </p>
          )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Image
                </label>
                <input
                {...register("image", { required: "image is required" })}
                  type="file"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-white p-2"
                />
                {errors.image && (
            <p role="alert" className="text-error">
              {errors.image?.message}
            </p>
          )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Price
                </label>
                <input
                {...register("price", { required: "Price is required" })}
                  type="text"
                  placeholder="$"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
                {errors.price && (
            <p role="alert" className="text-error">
              {errors.price?.message}
            </p>
          )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Seller name
                </label>
                <input
                {...register("sellerName", { required: "Seller name is required" })}
                  type="text"
                  placeholder="Seller"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
                {errors.sellerName && (
            <p role="alert" className="text-error">
              {errors.sellerName?.message}
            </p>
          )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Stock
                </label>
                <input
                {...register("stock", { required: "Stock is required" })}
                  type="number"
                  placeholder="Stock"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
                {errors.stock && (
            <p role="alert" className="text-error">
              {errors.stock?.message}
            </p>
          )}
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Shipping
                </label>
                <input
                {...register("shipping", { required: "Shipping is required" })}
                  type="number"
                  placeholder="Shipping"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-700 text-black p-2"
                />
                {errors.shipping && (
            <p role="alert" className="text-error">
              {errors.shipping?.message}
            </p>
          )}
              </div>
            </div>
          </fieldset>
          <button className="btn btn-success" type="submit">
            Add Product
          </button>
        </form>
      </section>
    </section>
  );
};

export default AddProduct;
