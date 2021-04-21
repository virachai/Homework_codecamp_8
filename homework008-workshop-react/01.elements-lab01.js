/*
อิลิเมนต์ (Elements)
lab 1
สร้าง element โดยใช้ React.createElement()
สร้าง element โดยการเขียน แบบ HTML ปกติ
ชื่อ element ให้ตั้งชื่อว่า Hello
กำหนด properties (props )ใน element ว่า firstName และ มีค่าเป็น ชื่อของแต่ละคน
และกำหนดค่า Chidren เป็น คำว่า Hello World
*/
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.firstName}</h1>;
  }
}