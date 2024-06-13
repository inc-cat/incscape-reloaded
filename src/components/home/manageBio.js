import { useState, useEffect } from 'react';

const ManageBio = function () {
  const [bio, setBio] = useState([]);
  useEffect(() => {
    fetch(`/homepage/bio.txt`)
      .then(async (res) => {
        return (await res.text()).split('\n');
      })
      .then((bio) => {
        setBio(bio);
      });
  }, []);

  return (
    <div>
      {bio.map(function (line) {
        return <p>{line}</p>;
      })}
    </div>
  );
};

export default ManageBio;
