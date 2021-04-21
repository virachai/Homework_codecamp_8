-- 1.หาเลขบัญชีที่เปิดในสาขาเมือง Riverside
SELECT A.account_number FROM account A 
LEFT JOIN branch B ON A.branch_name = B.branch_name WHERE branch_city = 'Riverside';

-- 2.หาเลขบัญชีที่เปิดในสาขาชื่อ A หรือ B
SELECT account_number FROM account WHERE branch_name = 'A' OR branch_name = 'B';


-- 3.หาจำนวนของเงินทั้งหมดของแต่ละคนฝาก
SELECT customer_name, SUM(A.balance) FROM depositor D 
LEFT JOIN account A ON D.account_number = A.account_number 
GROUP BY d.customer_name;

-- 4.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี
SELECT customer_name, SUM(A.balance) FROM depositor D 
LEFT JOIN account A ON D.account_number = A.account_number 
GROUP BY d.customer_name
HAVING COUNT(*) > 1;

-- 5.หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี โดยเรียงจากมากไปน้อย
SELECT customer_name, SUM(A.balance) AS sumbal FROM depositor D 
LEFT JOIN account A ON D.account_number = A.account_number 
GROUP BY d.customer_name
HAVING COUNT(*) AS  > 1
ORDER BY sumbal DESC;