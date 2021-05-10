import React, { Component } from 'react';
//import uniqid from 'uniqid';
//import { Button, Row, Col, List, Input } from 'antd';
import { Tooltip, Button, List, Typography, Checkbox, Input, notification} from 'antd';
import {
    //SyncOutlined,
    //UnorderedListOutlined,
    //CheckCircleTwoTone,
    //PlusOutlined,
    //SettingFilled,
    //CheckOutlined,
    //SearchOutlined,
    StepForwardOutlined,
    //InfoCircleOutlined,
    FullscreenOutlined,
    //DeleteOutlined,
    UndoOutlined,
    CloseOutlined,
    SaveFilled,
    EditFilled,
  } from '@ant-design/icons';
//import { useMediaQuery } from 'react-responsive'

export const txt2key = (str) => str.replace(" ", "");

export const ObjListTxt = {
  TxtTodo: 'To Do' , TxtDoing: 'Doing', TxtDone: 'Done', TxtOnHold: 'On Hold', TxtDelete: 'Delete'
}

export const ObjListStatus = {
  Todo: txt2key(ObjListTxt.TxtTodo), Doing: ObjListTxt.TxtDoing, Done: ObjListTxt.TxtDone
}

export class TodoItem extends Component {
    // state = {
    //     inputValue: "",
    //     isEdit: false,
    // };

    // doneFn = () => {
    //     const { todo, editTodo } = this.props;
    //     const { isEdit, inputValue } = this.state;

    //     editTodo(todo.id, inputValue);
    //     this.setState({ isEdit: !isEdit });
    // };

    // render() {
    //     const { todo, editTodo, deleteTodo } = this.props;
    //     const { isEdit } = this.state;

    //     return (
    //         <List.Item>
    //             <div style={{ width: '100%' }}>
    //                 {!isEdit ?
    //                     (
    //                         <Row style={{ width: '100%' }}>
    //                             <Col span={16}>
    //                                 <Row justify="start">
    //                                     {todo.task}
    //                                 </Row>
    //                             </Col>
    //                             <Col span={4}>
    //                                 <Button
    //                                     type="primary"
    //                                     onClick={() => this.setState({ isEdit: !isEdit, inputValue: todo.task })}
    //                                 >
    //                                     Edit
    //                                 </Button>
    //                             </Col>
    //                             <Col span={4}>
    //                                 <Button
    //                                     type="danger"
    //                                     onClick={() => deleteTodo(todo.id)}
    //                                 >Delete</Button>
    //                             </Col>
    //                         </Row>
    //                     )
    //                     :
    //                     (
    //                         <Row>
    //                             <Col span={20}>
    //                                 <Input
    //                                     value={this.state.inputValue}
    //                                     onChange={(e) => this.setState({ inputValue: e.target.value })}
    //                                 />
    //                             </Col>
    //                             <Col span={4}>
    //                                 <Button
    //                                     style={{ backgroundColor: "orange" }}
    //                                     onClick={this.doneFn}>Done</Button>
    //                             </Col>
    //                         </Row>
    //                     )}
    //             </div>
    //         </List.Item>
    //     );
    // }
}

export class ListItem extends Component {
    state = {
        inputValue: "",
        isEdit: null,
    };

    setActive = () => {      
      const { setTabActive, divData } = this.props;
      const textCap = divData.textCap.toString();
      this.undoFn();
      setTabActive(textCap);
    };

    undoFn = () => {      
      this.setState({ isEdit: null });
    };

    statusFn = (id) => {    
      //const { isEdit } = e.target.id;
      if(!id) return; 
      
      const { updateTodo , divData} = this.props;
      const textCap = divData.textCap.toString();

      const nextStatus = textCap === 'Doing' ? 'isDone' :  'isDoing'; 
      // notification.warning({
      //   message: `test ! ${nextStatus}`,
      //   placement: 'bottomRight',        
      //   duration: 2
      // });
      updateTodo(id, nextStatus);
      //this.setState({ isEdit: null });
    };

    doneFn = () => {
        const { todoData, updateTodo } = this.props;
        if(!todoData && !updateTodo) return;

        const { isEdit, inputValue } = this.state;
        if(!isEdit && !inputValue) return;

        if (inputValue.length === 0) {
          notification.warning({
            message: `Input is empty !`,
            placement: 'bottomRight',        
            duration: 2
          });
          return;
        } 
    
        if (inputValue.length < 10) {
          notification.warning({
            message: `Input too short !`,
            placement: 'bottomRight',        
            duration: 2
          });
          return;
        } 
        //alert(isEdit);
        updateTodo(isEdit, inputValue);
        this.setState({ isEdit: null });
    };

    componentDidMount() {
    }
  
    render() {
        const { deleteTodo, divData, todoData, tabIsActive, showOption} = this.props;
        let { isEdit } = this.state;
        
        //const notActive = !( passFn.state.tabIsActive === divData.textCap);
        const notActive = !( tabIsActive === divData.textCap);
        const opMore = showOption;
        //const isSizeLG = useMediaQuery({ query: '(min-width: 992px)' }) && notActive;
        // console.log(isSizeLG);
        const textCap = divData.textCap.toString();
        const nextStatus = textCap === 'Doing' ? 'isDone' :  'isDoing'; 

        // if (notActive) {
        //   this.setState({ isEdit: null });
        // }

        return (
            <div className="list-area" 
                style={{position: 'relative'}}                
                ref={el => {
                  // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                  if (!el) return; 
                  const elmWidth = el.getBoundingClientRect().width;
                  const list = el.querySelectorAll(".list-items span.itemTitle");
                  const bt = el.querySelectorAll(".list-items .ant-typography button");
                  const btMore = el.querySelectorAll(".list-items .spanBtMore");
                  const chkBox = el.querySelectorAll(".list-items .ant-checkbox");
                  const itemId = el.querySelectorAll(".list-items span.itemId");
                  const sizeItem2xx = 290;
                  const sizeItem3xx = 330;
                  if (list){
                    list.forEach((item, index) => {
                      //item.style.display = elmWidth < sizeItem2xx ? 'none':'block';
                      if (item){
                        if (bt[index]) bt[index].style.display = elmWidth < sizeItem2xx ? 'none':'block';
                        //itemId[index].style.display = elmWidth < sizeItem290 ? 'none':'inline';
                        if (itemId[index]) itemId[index].style.display = elmWidth < sizeItem3xx ? 'none':'inline'; 
                        if (btMore[index]) btMore[index].style.display = elmWidth < sizeItem3xx ? 'none':'inline'; 
                        if (chkBox[index]) chkBox[index].style.display = opMore && !notActive ? 'inline':'none'; 
                      }
                      
                    });
                    //bt.style.display = 'none'; 
                  }      
                }}
                >
                  <h3 style={{ margin: 0, color: divData.themeColor, fontSize: 28, minHeight: 47 }}>
                    {divData.iconCap} {textCap}
                    {notActive && (<div style={{position: 'absolute', top: -4, right: 12}} className='activeTabList'                   
                    >                
                      <Tooltip title="active tab">
                        <Button 
                          onClick={this.setActive}
                          type="dashed" shape="circle" icon={<FullscreenOutlined style={{color: '#000', fontSize: '16px'}}/>} />
                      </Tooltip>                  
                    </div>)} 
                  </h3>
                                  
                  <hr style={{ margin: 0, backgroundColor: divData.themeColor, height: 5, border: 0 }}/>
                  <div className="list-items">
                    <List
                      size="small"
                      itemLayout="horizontal"
                      dataSource={todoData}
                      renderItem={item => (
                        <List.Item>                          
                          <List.Item.Meta          
                            title={<a href={'#' + item.id}>
                                    <span className='itemId'><Checkbox>{item.id}.</Checkbox></span>
                                    <span className='itemTitle'>
                                      { isEdit === item.id && !notActive ?
                                        (<Input
                                          style={{display: 'inline', maxWidth: '80%', margin: -2}}
                                          value={this.state.inputValue}
                                          onChange={(e) => this.setState({ inputValue: e.target.value })}
                                        ></Input>) : (item.taskName)}
                                    </span>
                                  </a>}       
                          />
                          {isEdit !== item.id && !notActive && <span className='spanBtMore' style={{ minHeight: 32 }}>
                            <Button
                              onClick={() => this.setState({ isEdit: item.id, inputValue: item.taskName })}
                              title={'Edit ID: ' + item.id}
                              icon={<EditFilled style={{ fontSize: '16px', transform: 'translateY(-2px)', color: '#004BFF' }} />}
                              style={{backgroundColor: 'transparent', border: 'none', marginRight: -5}}                             
                            ></Button>
                            <Button
                              onClick={() => deleteTodo(item.id)}
                              title={'Delete ID: ' + item.id}
                              icon={<CloseOutlined style={{ fontSize: '16px', color: 'Red', transform: 'translateY(-2px)'}} />}
                              style={{backgroundColor: 'transparent', border: 'none', marginRight: -5}}                             
                            ></Button>
                          </span>}

                          {isEdit === item.id && !notActive && <span className='spanBtDone' style={{ minHeight: 32 }}>
                            <Button
                              onClick={this.doneFn}                    
                              title={'Update ID: ' + item.id}
                              icon={<SaveFilled style={{ fontSize: '16px', transform: 'translateY(-2px)', color: '#004BFF' }} />}
                              style={{backgroundColor: 'transparent', border: 'none', marginRight: 5}}
                            ></Button>
                            <Button
                              onClick={this.undoFn}                    
                              title={'Cancel Edit ID: ' + item.id}
                              icon={<UndoOutlined style={{ fontSize: '16px', transform: 'translateY(-2px)'}} />}
                              style={{backgroundColor: 'transparent', border: 'none', marginRight: -8}}
                            ></Button>                           
                          </span>}
                          
                          
                          { (isEdit !== item.id || notActive) && divData.nextStatus != null && (<Typography.Text style={{ padding: 0, margin: 0, width: 22, height: 22 }}>
                            <Button 
                              icon={<StepForwardOutlined style={{ fontSize: '20px', transform: 'translateY(-5px)'}} />}
                              name={nextStatus}
                              style={{backgroundColor: 'transparent', border: 'none' }} 
                              title={item.id + ' - Next Step'}
                              id={item.id}
                              onClick={() => this.statusFn(item.id)}                                                
                            ></Button>                            
                          </Typography.Text>) }
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
        );
    }
}

export default ListItem;
