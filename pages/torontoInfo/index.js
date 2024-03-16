//getting the datas from edmintonrentals
import torontoRentals from '@/datas/torontorentals'
//exporting the RentalInfo from the component
import RentalInfo from '@/components/rentalsInfo'

export default function Rental() {
    return (
        <>
            <RentalInfo products={torontoRentals} />
        </>)

}