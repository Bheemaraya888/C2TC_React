import{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import shopService from "../services/shop.service";
import{Link} from "react-router-dom";


const ShopsList =() =>{
  const[shops,setShop]=useState([]);

useEffect(()=>
{
init();
  
},[])

const init=() =>{
  shopService.getAll()
    .then(response =>{
          console.log('Print Data',response.data);
          setShop(response.data);})
    .catch(error =>{
    console.log('something went wrong',error);
});}

const handleDelete=shop_Id=>{
  shopService.remove(shop_Id)
  .then(response =>{
    console.log('Employee delete succefully', response.data);
    init();
  })
  .catch(error =>{
    console.log('something went wrong',error);
  })
}

return(
  <div className="container">
    <h3>Shops Information</h3>
    <div>
      {/* <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link> */}
      <a className=" btn btn-primary mb-2" href="/add">Add Shop  </a>
       <hr/>
      
      <table border="1" cellpadding="10" className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
        <th>Shop Id</th>
        <th>Shop Category</th>
        <th>Shop Employee ID</th>
        <th>Shop Name</th>
        <th>Customers Name</th>
        <th>Shop Status</th>
        <th>Enter Shop Owner name</th>
        <th>Enter lease Status</th>
        <th>Action</th>
        
      </tr>
      </thead>
      <tbody>
      {
        shops.map(shop =>(
          <tr key={shop.id}>
         <td> {shop.shop_Id}</td>
         <td> {shop.shop_Category}</td>
         <td> {shop.shop_EmployeeID}</td>
         <td> {shop.shop_Name}</td>
         <td> {shop.customers}</td>
         <td> {shop.shop_Status}</td>
         <td> {shop.shop_Owner}</td>
         <td> {shop.lease_Status}</td>
         <td>
          <Link className="btn btn-info" to={'/shops/edit/${shop_Id}'}> Update </Link>
          
          
          <button className="btn btn-danger ml-2" onClick={(s)=>{handleDelete(shop.shop_Id)
            }}> Delete </button>
          
         </td>
         </tr>
        )) 
      }
      </tbody>
      </table>
    </div>
  </div>
 

);
}
export default ShopsList;