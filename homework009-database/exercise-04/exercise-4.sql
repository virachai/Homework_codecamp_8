-- 1.หาจำนวนของกะลาสีเรือทั้งหมด
SELECT COUNT(sid) FROM Sailors;


-- 2.หาผลรวมของอายุกะลาสีเรือที่มี rating เท่ากับ 10
SELECT SUM(S.age) FROM Sailors S WHERE S.rating = 10;


-- 3.หาค่าเฉลี่ยอายุของกะลาสีที่มี rating เท่ากับ 10
SELECT AVG(S.age) FROM Sailors S WHERE s.rating = 10; 

-- 4.หาชื่อของคนที่มีอายุมากที่สุด
SELECT S.sname FROM Sailors S WHERE S.age = (SELECT MAX(MX.age) FROM Sailors MX)


-- 5.หาชื่อของคนที่มีอายุตั้งแต่ 25 ถึง 35
SELECT DISTINCT S.sname FROM Sailors S WHERE S.age BETWEEN 25 AND 35;