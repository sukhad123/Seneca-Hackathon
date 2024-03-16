//getting the datas from edmintonrentals
import edmintonrentals from '@/datas/edmintonrentals'
//exporting the RentalInfo from the component
import RentalInfo from '@/components/rentalsInfo'

export default function Rental() {
    return (
        <>
            <RentalInfo products={ edmintonrentals} />
        </>)

}