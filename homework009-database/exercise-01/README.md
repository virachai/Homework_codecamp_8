### CodeCamp #8
__Virachai Wongsena__

#### Homework009-Database - 01. แบบฝึกหัด ER Diagram (Entity-Relationship Diagrams)

##### 01. Database ของมหาวิทยาลัย CodeCampXX ที่ประกอบไปด้วยข้อมูลของอาจารย์(มี id เป็น unique attribute) และรายวิชา(มี cid เป็น unique attribute) เก็บข้อมูลอาจารย์สอนรายวิชาต่าง ๆ จงวาด ER Diagram ทั้ง 4 เงื่อนไขต่อไปนี้ (4 ER Diagrams)
	1. อาจารย์สามารถสอนคอร์สเดียวกันในหลาย ๆ เทอมได้ และสามารถเก็บได้ว่าสอนคอร์สนั้นล่าสุดเมื่อใด
	2. อาจารย์สามารถสอนคอร์สเดียวกันในหลาย ๆ เทอมได้ แต่ให้เก็บรายละเอียดทุก ๆ เทอมที่อาจารย์สอนด้วย
	3. อาจารย์ทุกคนต้องสอนอย่างน้อย 1 วิชา
	4. อาจารย์ทุกคนต้องสอนแค่ 1 วิชาเท่านั้น

<br/>

##### 02. จงวาด ER Diagram ของ Database ของค่ายเพลง CodeMusic ที่เก็บข้อมูล ศิลปิน ที่ร้องเพลงในแต่ละอัลบั้ม
	1. ศิลปินแต่ละคนมี id, ชื่อ, ที่อยู่ และเบอร์โทรศัพท์ บางทีศิลปินก็จะมีที่อยู่เหมือนกัน
	2. แต่ละเครื่องดนตรีมีชื่อ(เช่น กีต้าร์, คีย์บอร์ด)
	3. แต่ละอัลบั้ม มีชื่ออัลบั้ม วันที่ออก และ id ของ อัลบั้ม
	4. แต่ละเพลงจะมี ชื่อเพลง และ ชื่อศิลปิน
	5. ศิลปินแต่ละคนสามารถเล่นได้หลายเครื่องดนตรี เครื่องดนตรีชิ้นนั้นก็อาจจะถูกเล่นโดยศิลปินได้หลายคน
	6. แต่ละอัลบั้มมีจำนวนเพลงบอก แต่ไม่มีเพลงไหนที่ปรากฏออกมามากกว่า 1 อัลบั้ม
	7. แต่ละเพลงสามารถถูกเล่นโดยเครื่องดนตรีตั้งแต่ 1 ชิ้นเป็นต้นไป ศิลปินก็สามารถเล่นได้หลายเพลง
	8. แต่ละอั้ลบั้มมีศิลปินได้แค่ 1 คน และศิลปินก็สามารถออกได้หลายอัลบั้ม