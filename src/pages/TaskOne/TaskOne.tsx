import { useEffect, useState } from "react";

interface phone {
  id: number;
  name: string;
}

type fakePhoneData = phone[];


const TaskOne = () => {
  // hit the below api and display the data with half of the list in two columns
  //'https://api.restful-api.dev/objects'
  const [phoneData, setPhoneData] = useState<fakePhoneData>([]);
  const [isLoading, setIsLoading] = useState(false);

  function fakeFetch() {
    return new Promise<fakePhoneData>((resolve) => {
      setTimeout(() => {
        resolve(
          [
            { id: 1, name: "Apple" },
            { id: 2, name: "Samsung" },
            { id: 3, name: "Google" },
            { id: 4, name: "OnePlus" },
            { id: 5, name: "Xiaomi" },
            { id: 6, name: "Sony" },
            { id: 7, name: "Motorola" },
            { id: 8, name: "Nokia" },
            { id: 9, name: "Huawei" },
            { id: 10, name: "Oppo" },
            { id: 11, name: "Vivo" },
            { id: 12, name: "Realme" },
            { id: 13, name: "Asus" }
          ]
        );
      }, 2000); 
    });
  }

    // This throws a 405
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("https://api.restful-api.dev/objects");
    //       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    //       const data = await response.json();
    //       console.log(data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
    
    //   fetchData();
    // }, []);

  useEffect(() => {
    async function getPhones(){
      setIsLoading(true);
      try {
        // const response = await fetch('https://api.restful-api.dev/objects');
        const response = await fakeFetch()
        // const data = await response.json();
        setPhoneData(response)
      } catch(error) {
        console.log(error)
        setPhoneData([])
      } finally {
        setIsLoading(false);
      }
    }
    getPhones()
  }, [])

  const evenPhones = phoneData.filter((phone, index) => index % 2 === 0)
  const oddPhones = phoneData.filter((phone, index) => index % 2 !== 0)

  return (
  <div className='flex'>
    {isLoading ? 
      <div>Loading....</div>
    :
      <div className="flex gap-16">
        <div className="flex flex-col">
          { evenPhones.map((phone) => {
            return <div className="flex flex-col bg-slate-600 text-white p-2" key={phone.id}>{phone.name}</div>
          })}
        </div>
        <div className="flex flex-col">
        {oddPhones.map((phone) => {
          return <div className="flex flex-col bg-slate-600 text-white p-2" key={phone.id}>{phone.name}</div>
        })}
        </div>
      </div>
    }
  </div>
  )
}

export default TaskOne
