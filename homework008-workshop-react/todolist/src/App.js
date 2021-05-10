import logo from './logo.svg';
import React from 'react';
//import uniqid from 'uniqid';
import 'antd/dist/antd.css';
import './App.css';
//import { useMediaQuery } from 'react-responsive'
import axios from './config/axios.setup';
//import axios from 'axios';
//import { Layout, notification, Input, Row, Col, Button, List, Typography } from 'antd';
import { 
  //Tooltip, 
  Layout, Input, Row, Col, Button, 
  //List, 
  //Typography, 
  Modal, 
  notification, 
  //Checkbox
} from 'antd';
import ListItem, { ObjListTxt } from './controller/TodoItem/TodoItem';
import {
  SyncOutlined,
  UnorderedListOutlined,
  CheckCircleTwoTone,
  //PlusOutlined,
  SettingFilled,
  CheckOutlined,
  SearchOutlined,
  //StepForwardOutlined,
  InfoCircleOutlined,
  //FullscreenOutlined,
  DeleteOutlined,
  UndoOutlined,
  //CloseOutlined,
  SaveFilled
} from '@ant-design/icons';
const { Footer } = Layout;
const { confirm } = Modal;

class ListForm{
  constructor(textCap = 'Caption', iconCap = <InfoCircleOutlined />, color = '#000', next = null, prev = null, isActive = false) {
    this.textCap = textCap;
    this.iconCap = iconCap;
    this.themeColor = color;
    this.nextStatus = next;
    this.prevStatus = prev;
    this.tabIsActive = isActive;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    //this.elmToggle = this.elmToggle.bind(this, id);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.nextTaskStatus = this.nextTaskStatus.bind(this);
    this.setTabActive = this.setTabActive.bind(this);
    this.btMoreToggle = this.btMoreToggle.bind(this);
    this.btMoreHide = this.btMoreHide.bind(this);
    //this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setEditId = this.setEditId.bind(this);
    
    this.state = {
      todoList: [], // COllect Object []
      inputValue: "",
      //runningId: '000',
      //listStatus: ObjListTxt,
      // gutterKey: 1,
      // colCountKey: 2,
      tabIsActive: ObjListTxt.TxtTodo,
      isEditTask: false,
      editId: null,
      showOption: false
      //someInitialValue: this.props.initialValue
    };

    // [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
    // [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
  }

  //axios fn
  fetchTodo = async () => {
    const response = await axios.get("/tasks/");
    console.log('response', response.data);
    this.setState({
      todoList: response.data
    });
  };

  btMoreHide = () => {
    this.setState({
      showOption: false
    });
  }

  btMoreToggle = () => {
    //const showOptionOld = Boolean(this.state.showOption);
    this.setState({
      showOption: !this.state.showOption
    });
    //this.elmToggle('btnOption');
  }
  //const TxtTodo = 'To Do', TxtDoing = 'Doing', TxtDone = 'Done';
  elmToggle = (elmId) => {
    document.getElementById(elmId).classList.toggle("elmHide");
    document.querySelector("#afterHide input").focus();
  }

  setAlertInfo = (msg) => {
    document.querySelector("#div-alert-info #msg-info").textContent = msg.toString();
    //this.elmToggle('div-alert-info');
    document.getElementById('div-alert-info').classList.remove("elmHide");
  }

  setEditId(id) {
    this.setState({
      editId: id
    });
  }

  setTabActive(elm) {
    //console.log(elm);
    //this.setAlertInfo( elm );
    this.setState({
      tabIsActive: elm,
      editId: null
    });
    document.querySelector("#afterHide input").focus();
  }

  handleSubmit(event) {
    const str = this.state.inputValue;
    
    if (str.length === 0) {
      notification.warning({
        message: `Input is empty !`,
        placement: 'bottomRight',        
        duration: 2
      });
      return;
    } 

    if (str.length < 10) {
      notification.warning({
        message: `Input too short !`,
        placement: 'bottomRight',        
        duration: 2
      });
      return;
    } 
    const { inputValue } = this.state;

    axios.post("/tasks", { task: inputValue })
      .then(res => {
        console.log("ok");
        // notification.success({
        //   placement: 'bottomRight',
        //   message: `เพิ่ม ${inputValue} แล้วน๊ะจ๊ะ`,
        //   duration: 1
        // });
        notification.success({
          placement: 'bottomRight',
          message: 'Task created - Title: ' + str,
          //description: 'Title: ' + str,
          duration: 2
        });
        this.fetchTodo();
        this.setState({
          tabIsActive: ObjListTxt.TxtTodo
        });
      })
      .catch(err => {
        console.log("error");
      });

    this.setState({ inputValue: "" });
    event.target.focus();    
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  } 

  deleteTodo = (id) => {

    const deleteTodoItem = (id) => {    
      if (!Boolean(id)) {
        notification.error({
          message: `something went wrong`
        });
        return false;
      }
      axios.delete(`/tasks/${id}`).then((result) => {
        notification.success({
          message: 'Task deleted',
          description: `You have been deleted task ID: ${id}`,
        });       
        this.fetchTodo();    
      });
      //document.querySelector("#afterHide input").focus();
    }

    confirm({
      title: "Do you want to delete this items?",
      // icon: <ExclamationCircleOutlined />,
      content: `Do you want to delete task ID: ${id}`,
      onOk() {
        //alert(id);
        deleteTodoItem(id);             
      },
      onCancel() {
        //Do Nothing
      },
    });
  };

  updateTodo = (id, updatedTodo) => {
    let updateField = { taskName: updatedTodo };
    if (updatedTodo === 'isDoing') {
      updateField = { isDoing: 1,  isDone: 0 };
    }
    if (updatedTodo === 'isDone') {
      updateField = { isDoing: 1,  isDone: 1 };
    }

    axios.put(`/tasks/${id}`, updateField)
      .then(res => {
        notification.success({
          message: `Updated ${id}`,
        });
        if(res) console.log(`Updated ${id}`);
        this.fetchTodo();
      })
      .catch(err => {
        if(err) console.log(`Update ${id} - ${err}`);
        notification.error({
          message: `Update ${id} failed !`,
        });
      });
  };

  componentDidMount() {
    //console.log('componentWillUnmount');
    this.fetchTodo();
  }

  render() {
    const { todoList } = this.state;    
    //if (todoList && todoList) console.log(inputValue);
    /*const ojbTodo = {
      textCap: ObjListTxt.TxtTodo,
      iconCap: <UnorderedListOutlined />,
      themeColor: '#2787f5'
    };*/
    const ojbTodo = new ListForm(ObjListTxt.TxtTodo, <UnorderedListOutlined />, "#2787f5", 'Doing', null);
    const ojbDoing = new ListForm(ObjListTxt.TxtDoing, <SyncOutlined spin />, "#fca120", 'Done', 'Doing');
    const ojbDone = new ListForm(ObjListTxt.TxtDone, <CheckCircleTwoTone twoToneColor="#52c41a" />, "#52c41a", null, 'Doing');

    const data = [...todoList].reverse();//sort((a, b) => b.taskUnique - a.taskUnique);
    const dataTodo = data.filter( itm => !itm.isDoing && !itm.isDone);
    const dataDoing = data.filter( itm => itm.isDoing && !itm.isDone);
    const dataDone = data.filter( itm => itm.isDoing && itm.isDone);

    // eslint-disable-next-line
    const styleTest = { background: '#0092ff', padding: '8px 0' };

    const colTodo = this.state.tabIsActive === ObjListTxt.TxtTodo ? 10:7;
    const colDoing = this.state.tabIsActive === ObjListTxt.TxtDoing ? 10:7;
    const colDone = this.state.tabIsActive === ObjListTxt.TxtDone ? 10:7;

    const colTodoMD = 22;
    let colDoingMD = colTodoMD - ( this.state.tabIsActive === ObjListTxt.TxtDoing ? 9:13 );
    let colDoneMD = colTodoMD - ( this.state.tabIsActive === ObjListTxt.TxtDone ? 9:13 );
    if (this.state.tabIsActive === ObjListTxt.TxtTodo){
      colDoingMD = colDoneMD = 11;
    }

    return (
      <div className="App">
        <Layout>
          <div style={{position: 'fixed', top: 0, maxWidth: 1, maxHeight: 1,}} 
            id="afterHide"><input type="text" style={{maxHeight: 1, maxWidth: 1, opacity: 0}} /></div>
          <div className="alert info centered-horizontally" id="div-alert-info" style={{display: 'none'}}>
            <span className="closebtn" onClick={ (event) => this.elmToggle(event.target.parentElement.id) }>&times;</span>
            <span id='msg-info'>This is an alert box.</span>
          </div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Coding by Virachai
            </p>
            <a
              className="App-link"
              href="#todolist"
            >
              To Do List in CodeCamp #8
            </a>
          </header>          
          <section className="App-section" id="todolist">           
            
            <Row justify="center" style={{ padding: 5 }}>
              <Col span={24}>
                <form>
                <h2 style={{ margin: 5, color: 'white' }}>
                  My To Do List
                </h2>
                <Button type="second" style={{ margin: 0}} onClick={() => this.btMoreToggle()} className='showOption'>
                  <SettingFilled style={{ fontSize: '20px', marginTop: -4, transform: 'translateY(2px)' }} />
                </Button>
                <span className="input-text-area">
                  <Input type="text" id="myInput" placeholder="Title or ID..." style={{ minWidth: 260 }} 
                    value={this.state.inputValue} onChange={this.handleChange}
                  />
                </span>                       
                <span className="input-suffix" style={{ display: 'none' }}>                  
                </span>
                <Button type="second" 
                  className='showOption'
                  onClick={() => this.btMoreToggle()}>
                  <SettingFilled style={{ fontSize: '20px', marginTop: -4, transform: 'translateY(2px)' }} />
                </Button>
                <Button 
                  icon={<SaveFilled style={{ marginRight: -3 }}  />}
                  type="primary" 
                  style={{ margin: 0, minWidth: 80, fontWeight: 600, letterSpacing: 1 }}
                onClick={this.handleSubmit} id="btSubmit">
                  Save
                </Button>  
                </form> 
              </Col>
            </Row>

            <Row justify="center" style={{ paddingTop: 0 }} className="btnOptionDiv" id="btnOption">
              <Col span={24}>
                {this.state.showOption && <ButtonOption btMoreHide={this.btMoreHide} />}         
                {false && (<div id="divBtnOption" style={{ maxWidth: 600}}>                  
                  <Button type="primary" className='elmHide'>
                    Show All
                  </Button>
                  <Button type="primary"
                    icon={<UnorderedListOutlined />}
                  ><span>To Do</span></Button>
                  <Button type="primary"
                    icon={<SyncOutlined />}
                  ><span>Doing</span></Button>
                  <Button type="primary" 
                    icon={<CheckOutlined />}
                  ><span>Done</span></Button>
                  <Button type="primary"
                    icon={<DeleteOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}
                  ><span>Delete</span></Button>
                  <Button type="primary"
                    icon={<UndoOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}
                  ><span>Undo</span></Button>
                  <Button 
                    type="primary"
                    icon={<SearchOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}><span>Find</span>
                  </Button>
                  <br />
                  <Button type="second" style={{ width: '100%', margin: -3, color: 'white', backgroundColor: 'transparent',
                    border: 'none'}} title="Close Option" onClick={() => this.btMoreToggle()}>
                    X
                  </Button>
                </div>)}
              </Col>
            </Row> 
            {/* gutter={{ xs: 8, sm: 16, md: 24 }} minCol: 6*/}
            <Row justify="center" id="showListArea"
              style={{margin: 0, padding: 0}}
            >
              <Col className={"gutter-row"+(colTodo !== 10 && " notactive")} 
                style={{minWidth: 260, padding: 0, margin: 0}}
                ref={el => {
                  // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                  if (!el) return;          
                  //console.log(el.getBoundingClientRect().width);
                  // prints 200px
                }}
                xs={24} sm={21} md={colTodoMD} lg={colTodo}
              >
                <ListItem 
                  divData={ojbTodo} 
                  todoData={dataTodo} 
                  tabIsActive={this.state.tabIsActive} 
                  deleteTodo={this.deleteTodo}
                  updateTodo={this.updateTodo}
                  setTabActive={this.setTabActive}
                  showOption={this.showOption}
                  setEditId={this.setEditId}
                  />                
              </Col>
              <Col className="gutter-row" 
                style={{minWidth: 260, padding: 0, margin: 0}}
                xs={24} sm={21} md={colDoingMD} lg={colDoing}
              >                
                <ListItem 
                  divData={ojbDoing} 
                  todoData={dataDoing} 
                  tabIsActive={this.state.tabIsActive} 
                  deleteTodo={this.deleteTodo}
                  updateTodo={this.updateTodo}
                  setTabActive={this.setTabActive}
                  showOption={this.showOption}
                  setEditId={this.setEditId}
                  />                
              </Col>
              <Col className="gutter-row"
                style={{minWidth: 260, padding: 0, margin: 0}}
                xs={24} sm={21} md={colDoneMD} lg={colDone}
              >
                <ListItem 
                  divData={ojbDone} 
                  todoData={dataDone} 
                  tabIsActive={this.state.tabIsActive} 
                  deleteTodo={this.deleteTodo}
                  updateTodo={this.updateTodo}
                  setTabActive={this.setTabActive}
                  showOption={this.showOption}
                  setEditId={this.setEditId}
                  />             
              </Col>              
            </Row>            
            
          </section>
         
          <Footer 
            className="App-header" 
            style={{ minHeight: 60, textAlign: 'center' }}
            >To Do List ©2021 Created by Ant UED</Footer>
          <footer className="App-header" style={{ minHeight: 60,display: 'none' }}>footer</footer>
        </Layout>
      </div>
    );
  }
}

/*
minWidth < 290px => hide button cmd
*/
class ButtonOption extends React.Component {
  state = {
  };

  // hideButtonOption = () => {
  //   const { btMoreToggle } = this.props;
  // };

  render() {
    const { btMoreHide } = this.props;
    //     const { isEdit } = this.state;

      return (
        <div id="divBtnOption" style={{ maxWidth: 600}}>                  
          <Button type="primary" className='elmHide'>
            Show All
          </Button>
          <Button type="primary"
            icon={<UnorderedListOutlined />}
          ><span>To Do</span></Button>
          <Button type="primary"
            icon={<SyncOutlined />}
          ><span>Doing</span></Button>
          <Button type="primary" 
            icon={<CheckOutlined />}
          ><span>Done</span></Button>
          <Button type="primary"
            icon={<DeleteOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}
          ><span>Delete</span></Button>
          <Button type="primary"
            icon={<UndoOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}
          ><span>Undo</span></Button>
          <Button 
            type="primary"
            icon={<SearchOutlined style={{ fontSize: '18px', marginTop: -2, transform: 'translateY(2px)' }} />}><span>Find</span>
          </Button>
          <br />
          <Button type="second" style={{ width: '100%', margin: -3, color: 'white', backgroundColor: 'transparent',
            border: 'none'}} title="Close Option" onClick={() => btMoreHide()}>
            X
          </Button>
        </div>
      );
  }
}

export default App;
