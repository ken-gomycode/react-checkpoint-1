import product from '../product';

const Image = () => <img src={product.image} alt={product.name} className="img-fluid rounded" />;

export default Image;
