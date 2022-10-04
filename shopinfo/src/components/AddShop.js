
import { useState } from "react";
import {  Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import shopService from "../services/shop.service";

const AddShop = () => {
    const[shop_Id, setShop_Id] = useState('');
    const[shop_Category, setShop_Category] = useState('');
    const[shop_EmployeeID, setShop_EmployeeID] = useState('');
    const[shop_Name, setShop_Name] = useState('');
    const[customers, setCustomers] = useState('');
    const[shop_Status,setShop_Status]=useState('');
    const[shop_Owner,setShop_Owner]=useState('');
    const[lease_Status,setLease_Status]=useState('');
    const history = useHistory();
    const {id}=useParams();


    //  save employee data 
    const saveShop = (s) => {
        s.preventDefault();
        window.location.reload();
        
        const shop = {shop_Id ,shop_Category,shop_EmployeeID,shop_Name,customers,shop_Status,shop_Owner,lease_Status};
        if (id) {
            //update 
            shopService.update(shop)
                .then(response => {
                    console.log('Shop data updated successfully', response.data);
                    history.push('/el');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create 
            shopService.create(shop)
            .then(response => {
                console.log("Shop added successfully", response.data);
                history.push('/el');
            })
            .catch(error => {
                console.log('something went wrong', error);
            });
        }
        window.location.reload();
    }
// useEffect hooks is use to navigate get employees service information
    useEffect(() => {
        if (id) {
            shopService.get(shop_Id)
                .then(shop => {
                    setShop_Id(shop.data.shop_Id);
                    setShop_Category(shop.data.shop_Category);
                    setShop_EmployeeID(shop.data.shop_EmployeeID);
                    setShop_Name(shop.data.shop_Name);
                    setCustomers(shop.data.customers);
                    setShop_Status(shop.data.shop_Status);
                    setShop_Owner(shop.data.shop_Owner);
                    setLease_Status(shop.data.lease_Status);

                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    },[] );
    return(
        
        <div className="container">
            
            {/*  to add new employees data here */}
            <h3>Add Shop</h3>
            <hr/>
            <form>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_Id"
                        value={shop_Id}
                        onChange={(s) => setShop_Id(s.target.value)}
                        placeholder="Enter Shop Id"
                    />

                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_Category"
                        value={shop_Category}
                        onChange={(s) => setShop_Category(s.target.value)}
                        placeholder="Enter Shop Category"
                    />

                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_EmployeeID"
                        value={shop_EmployeeID}
                        onChange={(s) => setShop_EmployeeID(s.target.value)}
                        placeholder="Enter Shop Employee Id"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_Name"
                        value={shop_Name}
                        onChange={(s) => setShop_Name(s.target.value)}
                        placeholder="Enter Shop Name"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="customers"
                        value={customers}
                        onChange={(s) => setCustomers(s.target.value)}
                        placeholder="Enter Customer name"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_Status"
                        value={shop_Status}
                        onChange={(s) => setShop_Status(s.target.value)}
                        placeholder="Enter Shop status"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_Owner"
                        value={shop_Owner}
                        onChange={(s) => setShop_Owner(s.target.value)}
                        placeholder="Enter Shop Owner name"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="lease_Status"
                        value={lease_Status}
                        onChange={(s) => setLease_Status(s.target.value)}
                        placeholder="Enter Lease status"
                    />
                </div>
                {/* save employes form data */}
                <div >
                    <button className="btn btn-primary" onClick={(s) => saveShop(s)}>Save shop Information</button>
                </div>
                
            </form>
            <hr/>
          {/* to navigate the back to the employees information list page */}
            <Link className=" btn btn-primary mb-2" to="/el" >Back to List  </Link>
          
        </div>
        
    )
    
}

export default AddShop;