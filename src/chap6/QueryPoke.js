import { useEffect, useState } from 'react';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchPoke = async (id = 1) => {
  await sleep(500);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

const PokeArea = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>{data?.name}</p>
      <div>
        <img
          style={{ width: 250, height: 250 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        <img
          style={{ width: 250, height: 250 }}
          src={data?.sprites?.front_shiny}
          alt="pokeimg"
        />
      </div>
      <div>
        <img
          style={{ width: 250, height: 250 }}
          src={data?.sprites?.back_default}
          alt="pokeimg"
        />
        <img
          style={{ width: 250, height: 250 }}
          src={data?.sprites?.back_shiny}
          alt="pokeimg"
        />
      </div>
    </>
  );
};

export default function QueryPoke() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchPoke = (id = 1) => {
    setLoading(true);
    fetchPoke(id)
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    searchPoke();
  }, []);

  const handleSearch = () => {
    searchPoke(id);
  };
  return (
    <>
      <div>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <button onClick={handleSearch}>検索</button>
      </div>
      <PokeArea data={data} isLoading={isLoading} error={error}></PokeArea>
    </>
  );
}
