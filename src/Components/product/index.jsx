import { useFetch } from "../Hooks/useFetch";

export function Product() {
    const {data, isError, isLoading} = useFetch('https://v2.api.noroff.dev/online-shop');

  if(isLoading) {
    return <div>Loading....</div>
  }

  if(isError) {
    return <div>Error!</div>
  }


  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={data.image.url} alt={data.title} className="w-full"/> 
            <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
            <div></div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>

        
      
       
      ))}
    </div>
  );
}