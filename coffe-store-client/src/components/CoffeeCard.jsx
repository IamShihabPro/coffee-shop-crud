import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {name,quantity,supplier,taste,category,details,photo, _id} = coffee

    

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log("md ");
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        
                        setCoffees(remaining)
                    }
                })
            }
          })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie"/></figure>
            <div className="flex w-full justify-between pr-4">
                <div>
                    <h2 className="card-title mt-6">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
               
                <div className="card-actions justify-end mt-3">
                    <div className="btn-group btn-group-vertical space-y-2">
                         <button className="btn bg-blue-600 border-blue-500">View</button>
                        <Link className="btn bg-green-600 border-green-500" to={`/updateCoffee/${_id}`}><button >EDIT</button></Link>
                        <button onClick={()=> handleDelete(_id)} className="btn bg-red-600 border-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;