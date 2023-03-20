import {
    Grid,
    DialogActions,
    MuiThemeProvider,
    TextField,
    Button, IconButton,
    Icon,
    TableHead,
    TableCell,
    TableRow,
    Checkbox, InputAdornment,
    TablePagination,
    Radio,
    Dialog
  } from "@material-ui/core";
  import { createEmployee, searchProvince, searchDistrict, searchCommune } from "./EmployeeService";
  import "./EmployeeDialog.css"
  import { createMuiTheme } from "@material-ui/core/styles";
  import React, { Component } from "react";
  import ReactDOM from "react-dom";
  import MaterialTable, {
    MTableToolbar,
    Chip,
    MTableBody,
    MTableHeader
  } from "material-table";
  import { useTranslation, withTranslation, Trans } from "react-i18next";
  import { getAllByRoot, saveItem, getAllRoles, getItemById } from "./EmployeeService";
  import { Link } from "react-router-dom";
  import DateFnsUtils from "@date-io/date-fns";
  import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
  import DialogContent from "@material-ui/core/DialogContent";
  import DialogTitle from "@material-ui/core/DialogTitle";
  import Input from "@material-ui/core/Input";
  import InputLabel from "@material-ui/core/InputLabel";
  import MenuItem from "@material-ui/core/MenuItem";
  import FormControl from "@material-ui/core/FormControl";
  import Select from "@material-ui/core/Select";
  import AsynchronousAutocomplete from "../utilities/AsynchronousAutocomplete";
  import Draggable from "react-draggable";
  import Paper from "@material-ui/core/Paper";
  import NotificationPopup from "../Component/NotificationPopup/NotificationPopup";
  import Autocomplete from "@material-ui/lab/Autocomplete";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import '../../../styles/views/_style.scss';
import { loadProgressBar } from "axios-progress-bar";
  toast.configure({
    autoClose: 1000,
    draggable: false,
    limit: 3
  });
  class EmployeeDialog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        code:'',
        age:'',
        commune:'',
        district:'',
        province:'',
        listProvinces: [],
        listDistricts: [],
        listCommunes: [],
        isEditMode: !!props.Data


      };
    }
    
    componentDidMount() {
      searchProvince({})
        .then(res => this.setState({
          listProvinces:res.data.data
        }))
        .then(res => console.log("dm may " , this.state.listProvinces))
      searchDistrict({})
      .then(res => this.setState({
        listDistricts:res.data.data
      }))
      .then(res => console.log("asdasd" , this.state.listDistricts))
      searchCommune({})
      .then(res => this.setState({
        listCommunes:res.data.data
      }))
      console.log("nhanvien", this.state.employeeHoten);
      

    }
    thongBao(){
      this.setState({
        employeeHoten:"khanh"
      })
      console.log("nv",this.state.employeeHoten);
    };

    
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = async (event) => {
        console.log("asdgashdgasdm hai" , this.state);
      event.preventDefault();
      const employee = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        commune: this.state.commune,
        code: this.state.code,
        age:this.state.age,
        district:this.state.district,
        province:this.state.province,
        

      };
      // this.props.onSave(employee);
      await createEmployee(employee)
      console.log("sada" , employee);
      this.props.onClose();
      this.setState({ name: '', email: '', phone: '',code:'',commune:'',age:'',district:'',province:'' });
     
      // .then((response) => {
      
      //   this.props.onSave(employee);
      //   console.log("aaa ahdasd" , employee);
      //   this.props.onClose();
      //   this.setState({ name: '', email: '', phone: '',code:'',commune:'',age:'',district:'',province:'' });
      // })
      // .catch((error) => {
      //   console.log("sasa" , this.state)
      //   console.error('Error creating employee:', error);
      //   toast.success('Employee created successfully!');
     
      // });
    };
  
    render() {
      const { open, onClose, onSelect, Data } = this.props;
      const { listCommunes,listDistricts,listProvinces,isEditMode } = this.state;
      return (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>{isEditMode ? 'Sửa nhân viên' : 'Thêm nhân viên'}</DialogTitle>
          <form>
          <DialogContent>
           
              <TextField  label="Name" name="name" value={this.state.name} onChange={this.handleChange} fullWidth margin="normal" required />
              <TextField  label="Email" name="email" value={this.state.email} onChange={this.handleChange} fullWidth margin="normal" required />
              <TextField  label="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} fullWidth margin="normal" required />
              <TextField  label="Code" name="code" value={this.state.code} onChange={this.handleChange} fullWidth margin="normal" required />
              <TextField  label="Age" name="age" value={this.state.age} onChange={this.handleChange} fullWidth margin="normal" required />
              <TextField className="tf" label="District " type="text" select fullWidth name="district" onChange={this.handleChange} variant="outlined" size="small" value={this.state.district.name}>
                {listDistricts.map((item) =>(
                  <MenuItem value ={item}> {item?.name}</MenuItem>
                ))}
              </TextField> 
              <TextField className="tf" label="Commune " type="text" select fullWidth name="commune" onChange={this.handleChange} variant="outlined" size="small" value={this.state.commune.name}>
                {listCommunes.map((item) =>(
                  <MenuItem value ={item}> {item?.name}</MenuItem>
                ))}
              </TextField>               
              <TextField className="tf" label="Province " type="text" select fullWidth name="province" onChange={this.handleChange} variant="outlined" size="small" value={this.state.province.name}>
                {listProvinces.map((item) =>(
                  <MenuItem value ={item}> {item?.name}</MenuItem>
                ))}
              </TextField>
              <Button onClick={this.thongBao}>nv</Button>
            


          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick = {this.handleSubmit}  color="primary" form="employee-form">Save</Button>
          </DialogActions>
          </form>
        </Dialog>
      );
    }
  }
  
  export default EmployeeDialog;