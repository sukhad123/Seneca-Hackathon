import React from 'react'
export default function RentalInfo(props) {
    //accept the products
    const product = props.products;
    return (
        <>
            <div className="grid gap-4 grid-cols-3">
            {product.map((item, index) => (
                <div className="  firstDiv" key={item.id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full img" src={item.img} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                {item.rent}
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>

        </>)

}