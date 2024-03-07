import { useForm } from 'react-hook-form';
import { useEffect,useState } from 'react';
export default function Form()
{
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: "",
            education: "",
            industry:"",
            experience: "",
            budget:"",
            goals:"",
          }
    });
    function submitForm(data)
    {
        console.log(data)
        setShowResult(true)
        setData(data)
    }

     //regarding forms
     const[data,setData]= useState("");
     const[showResult, setShowResult] = useState(false)
    return(
        <>
         <h1 className= " text-center p-12  block text-gray-700 text-sm font-bold mb-2 text-2xl" >
       Want To Get The Insights Of Canada?<br/>
       Fill the survey!
      </h1>
        <form className ="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
        
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
      <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter you Name"/>
 
      <label className="block text-gray-700 text-sm font-bold mb-2"  >
        Education
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   {...register("education")}>
      <option value="" disabled hidden>Select Education</option>
        <option value="highSchool">High School</option>
        <option value="Bachelors">Bachelors</option>
        <option value="Masters">Masters</option>
        <option value="Diploma">Diploma</option>
      </select><br />
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Industry
      </label><select  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("industry")}>
  <option value="" disabled hidden>Select your Industry</option>
  <option value="naturalResources">Natural Resources</option>
  <option value="finance">Finance and Banking</option>
  <option value="technology">Technology and Innovation</option>
  <option value="manufacturing">Manufacturing</option>
  <option value="agriculture">Agriculture and Agri-Food</option>
  <option value="healthcare">Healthcare and Pharmaceuticals</option>
  <option value="transportation">Transportation and Logistics</option>
  <option value="retail">Retail and Consumer Goods</option>
  <option value="construction">Construction and Real Estate</option>
  <option value="education">Education and Training</option>
  <option value="hospitality">Hospitality and Tourism</option>
  <option value="media">Media and Entertainment</option>
  <option value="legal">Legal Services</option>
  <option value="government">Government and Public Administration</option>
  <option value="nonprofit">Nonprofit Organizations</option>
</select><br />
<label className="block text-gray-700 text-sm font-bold mb-2" >
        Experience
      </label><select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    {...register("experience")}>
      <option value="" disabled hidden>Select your Experience</option>
        <option value="1">Less than 1 Year</option>
        <option value="3">2-3</option>
        <option value="5">Greater than 5</option>
      </select><br />
      <label className="block text-gray-700 text-sm font-bold mb-2"  >
        Budget
      </label><select  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    {...register("budget")}>
      <option value="" disabled hidden>Select your Budget/Net-Worth</option>
        <option value="100000">Under 100k</option>
        <option value="300000">200k to 300k</option>
        <option value="500000">Greater than 500k</option>
      </select><br />
          
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
  Goals
</label>
<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("goals")} id="Goals">
  <option value="" disabled hidden>Select your Preference Regarding Buying House</option>
  <option value="BuyingHouse">Buying House</option>
  <option value="Rent">Rent</option>
</select><br />
</div>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
       Submit
      </button>
 
        </form>
        {showResult && (
        <>
        ${setData.name}
        </>
      )}
        </>
    )
}