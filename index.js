import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';



class Table extends React.Component {
   constructor(props) {
      super(props)
      this.renderTableHeader = this.renderTableHeader.bind(this);
	 this.renderTableData = this.renderTableData.bind(this);
	 this.getKeys = this.getKeys.bind(this);
	 
	 }
	 
	 getKeys = function(){
	 	return Object.keys(this.props.data[0]);

	 }
	 
	 renderTableHeader = function(){
	 	var keys = this.getKeys();
		 return keys.map((key, index)=>{
		 return <th key={key}>{key.toUpperCase()}</th>
 		})
	 
	 }
	 const RenderRow = (props) =>{
	 return props.keys.map((key, index)=>{
	 return <td key={props.data[key]}>{props.data[key]}</td>
	 })
	}
	 
	 renderTableData = function(){
	 	var items = this.props.data;
		 var keys = this.getKeys();
		 return items.map((row, index)=>{
		 return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
		 })
	 }


     
   

   
   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='products'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

function tableApp() {
	let state = {
          data:[
                  {order_id:1,product_name:'headphone',product_code:70,product_type:"Electronics",product_status:"dispatched"},
                  {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                  {order_id:1,product_name:'headphone',product_code:70,product_type:"Electronics",product_status:"dispatched"},
                  {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                  {order_id:1,product_name:'headphone',product_code:70,product_type:"Electronics",product_status:"dispatched"},
                  {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                  {order_id:1,product_name:'headphone',product_code:70,product_type:"Electronics",product_status:"dispatched"},
                  {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
                   {order_id:2,product_name:'earphone',product_code:80,product_type:"Electronics",product_status:"processing"},
                  {order_id:3,product_name:'calculator',product_code:65,product_type:"Electronics",product_status:"out for delievery"},
                  {order_id:4,product_name:'bottle',product_code:75,product_type:"accesorie",product_status:"delievered"},
                  {order_id:5,product_name:'laptop',product_code:67,product_type:"Electronics",product_status:"delievered"},
               ],
      }
  return (
    <div>
      <Table data={state.data}  />
    </div>
  );
}



ReactDOM.render(<tableApp />, document.getElementById('root'));
//ReactDOM.render(<Table data={state.data}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


