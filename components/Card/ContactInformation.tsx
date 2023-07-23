import { TContact } from "@/types/Person"

const ContactInformation = (contact: TContact) => {
    
    const {address, postal, city, phone, email} = contact
    return (
        <>
            <ul className="flex flex-col gap-2 my-auto">
                <li className={`flex flex-wrap gap-1`}><span>Adresse: </span><span>{address}</span> <span>{postal}</span> <span>{city}</span></li>
                <li className={`flex flex-wrap gap-1`}><span>Tlf.: </span><span><a href={`tel:${phone}`}>{phone}</a></span></li>
                <li className={`flex flex-wrap gap-1`}><span>Email: </span><span><a href={`mailto:${email}`}>{email}</a></span></li>
            </ul>
        </>
    )
}

export default ContactInformation