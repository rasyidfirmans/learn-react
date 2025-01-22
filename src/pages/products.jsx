import CardProduct from "../components/fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/src/assets/img/laptop.jpg" />
        <CardProduct.Body title="MSI Stealth 15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laborum sapiente numquam aspernatur reiciendis in distinctio excepturi
          hic porro quas iusto officia eos, nam totam vel quia amet quod
          molestias!
        </CardProduct.Body>
        <CardProduct.Footer price="RP 13.999.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/src/assets/img/laptop.jpg" />
        <CardProduct.Body title="MSI Stealth 15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laborum sapiente numquam aspernatur reiciendis in distinctio excepturi
          hic porro quas iusto officia eos, nam totam vel quia amet quod
          molestias!
        </CardProduct.Body>
        <CardProduct.Footer price="RP 13.999.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
