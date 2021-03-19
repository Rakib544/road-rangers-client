import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fakeData } from '../../FakeData/data';

const Destination = () => {
    const {serviceType} = useParams()
    const [selectedService, setSelectedService] = useState({})

    useEffect(() => {
        const selectedServiceData = fakeData.find(service => service.serviceType === serviceType);
        setSelectedService(selectedServiceData)
    }, [serviceType])
    console.log(selectedService)
    return (
        <div style={{paddingTop: '50px'}}>
            <h2>This is Destination page</h2>
        </div>
    );
};

export default Destination;