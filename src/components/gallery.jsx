import { useEffect, useState } from 'react';
import { Image } from "./image";

export const getDataFromAirtable = async () => {
  const response = await fetch('https://api.airtable.com/v0/appi3C5Rp4J0bzJRt/Table%201?api_key=keyFC7jLiV3xKlFet');
  const data = await response.json();
  return data.records;
}

export const Card = (props) => {
  const { record } = props;
  const { fields, createdTime } = record;
  const { intro, status, object, attachments } = fields;



  return (
    <div className="card">
      <div className="card-image">

      </div>
      <div className="card-content">
        <p className="card-content-title">{intro}</p>
        <p className="card-content-status">{status}</p>
        <p className="card-content-object">{object}</p>
      </div>
      <div className="card-content-footer">
        <span className="card-content-footer-date">{createdTime}</span>
        <span className="card-content-footer-link">

        </span>
      </div>
    </div>
  );
};


export const Gallery = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromAirtable().then(data => {
      console.log(data);
      setData(data)
    });
  }, []);

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Showroom
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {data && data.map((d, i) => (
            <Card record={d} key={`${i}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
