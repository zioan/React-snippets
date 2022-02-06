import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("products"),
  details: (id) => requests.get(`products/${id}`),
};

const agent = {
  Catalog,
};

export default agent;



//   

import { useParams } from "react-router";
import agent from "../../app/api/agent";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.details(parseInt(id))
      .then((response) => setProduct(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  if (!product) return <h3>Product not found</h3>;

  //return ( normal code to return )
}

// 

const [products, setProducts] = useState([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);