import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    const coffee = useLoaderData()
    const {name,quantity,supplier,taste,category,details,photo, _id} = coffee

    const handleUpdateCoffe = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){

                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
    }
    return (
        <div className='bg-[#f4f3f0] p-24'>
            <h2 className='text-3xl font-bold flex justify-center mb-10'>Update Coffe: {name}</h2>
            <form onSubmit={handleUpdateCoffe} >
                {/* name and quantity row */}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='name' defaultValue={name} placeholder="Coffe name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="number" name='quantity' defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* supplier and taste row */}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='taste' defaultValue={taste} placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* category and details row */}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='category' defaultValue={category}  placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* photos url row */}
                <div className='mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className='btn btn-block mt-6' value='update Coffee' />
               

            </form>
        </div>
    );
};

export default UpdateCoffe;