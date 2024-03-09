import {useState} from 'react'
export default function Demo() {
    const [set, setMe] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setMe(true); // Update the state to true when the form is submitted
  }
    return (
      <>
      <div className = "first">
        <div className=" lado max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src=" https://i.pinimg.com/originals/f3/66/3a/f3663ae8ac3c19eb56abfa0998f10437.jpg" alt="Sunset in the mountains" />
          <p className="text-gray-700 text-base">
              Based on the Information Provided <b>Alberta Province</b> will be the best option!
           
            </p>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            
            <p className="text-gray-700 text-base">
              The cost of living in Alberta is $2329 per month. 
            </p>
            <p className="text-gray-700 text-base">
              The probability of getting job is 80 percentage.
            </p>
            <p className="text-gray-700 text-base">
              As you are planning to buy the house in future, The average cost of house is $446919.
            </p>
          </div>
          <div className=" text-gray-700 px-6 pt-4 pb-2">
             
             <form onSubmit={handleSubmit}>
             Compare with other Provinces/Big Cities.
             <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  >
  <option value="" disabled hidden>Select your Preference Regarding Buying House</option>
  <option value="Ontario">Ontario</option>
  <option value="">Vancouver</option>

</select>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Compare
      </button> 

</form ><br />
          </div>
          
        </div>
        {set && (
        <div className=" lado max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src=" https://i.pinimg.com/originals/f3/66/3a/f3663ae8ac3c19eb56abfa0998f10437.jpg" alt="Sunset in the mountains" />
        <p className="text-gray-700 text-base">
           Comparing with <b>Ontario Province</b>
         
          </p>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          
          <p className="text-gray-700 text-base">
            The cost of living in Alberta is $2329 per month. 
          </p>
          <p className="text-gray-700 text-base">
            The probability of getting job is 80 percentage.
          </p>
          <p className="text-gray-700 text-base">
            As you are planning to buy the house in future, The average cost of house is $446919.
          </p>
        </div>
        </div>

      )}
      </div>
      </>
    );
  }
  