-- 1.ค้นหาชื่อและอายุจาก กะลาสีทุกคน
SELECT DISTINCT sname, age FROM Sailors;

-- 2.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือรหัส 103
SELECT S.sname FROM Sailors S LEFT JOIN Reserves R
ON S.sid = R.sid where R.bid = 103;

-- 3.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง
SELECT R.sid FROM Reserves R LEFT JOIN Boats B
ON R.bid = B.bid where LOWER(B.Color) = 'red';

-- 4.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดง
SELECT S.sname FROM Sailors S
LEFT JOIN Reserves R ON S.sid = R.sid
LEFT JOIN Boats B ON R.bid = B.bid
where LOWER(B.Color) = 'red';

-- 5.หาสีของเรือทั้งหมดที่ถูกจองโดยกะลาสีเรือชื่อ ‘Lubber’
SELECT DISTINCT LOWER(B.Color) FROM Sailors S
LEFT JOIN Reserves R ON S.sid = R.sid
LEFT JOIN Boats B ON R.bid = B.bid
where S.sname = 'Lubber';

-- 6.หาชื่อของกะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ
SELECT DISTINCT S.sname FROM Sailors S
RIGHT JOIN Reserves R ON S.sid = R.sid

-- 7.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือเขียว
SELECT S.sname FROM Sailors S
LEFT JOIN Reserves R ON S.sid = R.sid
LEFT JOIN Boats B ON R.bid = B.bid
WHERE LOWER(B.Color) = 'red' OR LOWER(B.Color) = 'green';

-- 8.หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงและเขียว
SELECT S.sname FROM Sailors S 
WHERE S.sid IN ( SELECT R.sid FROM Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE LOWER(B.Color) = 'red' ) 
AND S.sid IN ( SELECT R.sid FROM Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE LOWER(B.Color) = 'green' ) ;

-- 9.หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดงแต่ไม่จองเรือสีเขียว
SELECT S.sname FROM Sailors S 
WHERE S.sid IN ( SELECT R.sid FROM Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE LOWER(B.Color) = 'red' ) 
AND S.sid NOT IN ( SELECT R.sid FROM Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid
WHERE LOWER(B.Color) = 'green' ) ;