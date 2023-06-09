import React,{ useState, useEffect } from "react";
import './MenuEmployee.css';
import { searchEmployee,createEmployee } from "./MenuEmployeeService"; 
class MenuEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          showForm: false,
          name: "",
          email: "",
          age: "",
          address: "",
          code:"",
          commune:"",
          district:"",
          province:""
         
          
        };
      };
      handleAddButtonClick = () => {
        this.setState({
          showForm: true,
        });
      };
      
      async componentDidMount() {
        
        const searchObject = {
          name:'',
          id:'',
          email:'',
          age:'',
          code:'',
          phone:''
        }; // assume we have an employee ID
        const employee = await searchEmployee(searchObject);
        this.setState({ employee });
        console.log("khanh");
        searchEmployee({})
          .then(res =>{
            console.log(res.data.data);
            this.setState({
              employees:res.data.data
            });
          })
      } 
      handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
          name: this.state.name,
          email: this.state.email,
          age: this.state.age,
          address: this.state.address,
          code:this.state.code,
          phone:this.state.phone,
          commune:this.state.commune,
          district:this.state.district,
          province:this.state.province

        };
    
        // Gọi hàm xử lý việc post dữ liệu
        createEmployee(employee)
          .then(response => {
            console.log('Dữ liệu đã được post thành công!', response);
          // Thực hiện các hành động khác ở đây nếu cần
          })
          .catch(error => {
          console.error('Đã có lỗi xảy ra khi post dữ liệu:', error);
          // Xử lý lỗi ở đây nếu cần
        });
    
        this.setState({
          showForm: false,
        });
      };
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };
    render(){
        const { employees } = this.state;
        return(
            <div>
                <div className="flex-container">
                <ul>
                    <li><a href="#news">Employee</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                </div>
                <div className="flex-container">
                <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên nhân viên</th>
            <th>Tuổi</th>
            <th>Mail</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.email}</td>
              <td>{employee.code}</td>
              <td> 
              <button className="bt1">
              <img className="iconn" src="data:image/jpeg;base64,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" alt=""></img></button> <button><img className="iconn" src="data:image/png;base64,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" alt=""></img>
              </button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btx" onClick={this.handleAddButtonClick}>Thêm Nhân Viên</button>
            {this.state.showForm && (
              <form onSubmit={this.handleSubmit}>
        
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Code"
            value={this.state.code}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="commune"
            name="commune"
            placeholder="Commune"
            value={this.state.commune}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="province"
            name="province"
            placeholder="Province"
            value={this.state.province}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="district"
            name="district"
            placeholder="District"
            value={this.state.district}
            onChange={this.handleChange}
          />
        </div>
        <button className="btx" type="submit">Lưu thông tin</button>
      </form>
            )}
                </div> 
            </div>
        )
    }
}
export default MenuEmployee;
