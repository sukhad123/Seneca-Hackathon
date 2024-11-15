import { useState } from 'react'
import { useRouter } from 'next/router';
export default function Demo() {
    const [set, setMe] = useState(false);
    const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
      setMe(true); // Update the state to true when the form is submitted
       
    }
    function handleSubmitt() {
        router.push('/rentalInfo')

    }
    function handleSubmittt() {
        router.push('/torontoInfo')
    }
    return (
      <>
      <div className = "first">
        <div className="lado  max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src=" https://i.pinimg.com/originals/f3/66/3a/f3663ae8ac3c19eb56abfa0998f10437.jpg" alt="Sunset in the mountains" />
          <p className="text-gray-700 text-base">
              Based on the Information Provided <b>Edmonton, Alberta</b> will be the best option!
           
            </p>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            
                        <p className="  text-gray-700 text-base italic">
                            The average cost of living in Edmonton, Alberta is <strong>$2000 </strong>per month. 
                        </p>


                        <p className=" border-solid border-2 border-green-300 text-gray-700 text-base italic">
                            The probability of getting job is <strong>80</strong> percentage.<br/>
                            According to the datasets for the number of jobs available and applicants applying!
            </p>
                        <p className="text-gray-700 text-base italic border-solid border-2 border-green-300">
                            As you are planning to buy the house in future, The average cost of house is 
                            <strong> $446919</strong>.
                         
                        </p>
                        <p className="text-gray-700 text-base italic border-solid border-2 border-green-300">
                            Buying a House in this city is possible according to your details.

                        </p>
                    
                        <button onClick={handleSubmitt} class="  mt-px italic bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            View Rentals Space in this location!
            </button>
          </div>
          <div className=" text-gray-700 px-6 pt-4 pb-2">
             
             <form onSubmit={handleSubmit}>
             Compare with other Provinces/Big Cities.
             <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  >
  <option value="" disabled hidden>Select your Preference Regarding Buying House</option>
  <option value="Ontario">Toronto</option>
  <option value="">Vancouver</option>

</select>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Compare
      </button> 

</form ><br />
          </div>
          
        </div>
        {set && (
        <div className=" lado1  max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src=" https://photographyadventures.ca/wp-content/uploads/2020/08/Trillium-park.8sm.jpg" alt="Sunset in the mountains" />
        <p className="text-gray-700 text-base">
           Comparing with <b>Toronto, Ontario</b>
         
          </p>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          
                            <p className="text-gray-700 italic text-base">
                                The cost of living in Toronto,Ontario is <strong>$2500</strong> per month. 
          </p>
                            <p className=" border-solid border-2 border-red-300 text-gray-700 italic  text-red">
                                The probability of getting job is <strong>50</strong> percentage, as analyzed from the jobs available and applicants.
          </p>
                            <p className="  border-solid border-2 border-red-300 text-gray-700 italic text-base">
                                As you are planning to buy the house in future, The average cost of house is <strong>$800k</strong>.
 
                            </p>
                            <p className="  border-solid border-2 border-red-300 text-gray-700 italic text-base">
                                Buying a house in this city is extremly difficult according to your provided details.
                               
                            </p>
                           
                            <button onClick={handleSubmittt} class="  mt-px italic bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                View Rentals Space in this location!
                            </button>
        </div>
        </div>

      )}
      </div>
      </>
    );
  }
  