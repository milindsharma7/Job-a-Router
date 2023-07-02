import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
    // console.log(id);
    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolore officia ullam nulla fuga laudantium, modi assumenda 
                    eveniet aliquid possimus asperiores ducimus libero hic repellendus, 
                     tempora natus porro consectetur culpa inventore.
                </p>
            </div>
        </div> 
    )
}

export const careerDetailsLoader = async ({ params }) => {
    console.log(params);
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id)
    if(!res.ok){
        throw Error('Could not find that career');
    }
    return res.json();
}