CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE
);

INSERT INTO Customers
VALUES (1,'John Doe',TO_DATE('1955-05-15','YYYY-MM-DD'),
12000,SYSDATE,NULL);

INSERT INTO Customers
VALUES (2,'Jane Smith',TO_DATE('1990-07-20','YYYY-MM-DD'),
5000,SYSDATE,NULL);

INSERT INTO Loans
VALUES (1,1,5000,5,SYSDATE,SYSDATE+20);

INSERT INTO Loans
VALUES (2,2,8000,6,SYSDATE,SYSDATE+50);
COMMIT;

#Apply Discounts

UPDATE Loans l
JOIN Customers c
ON l.CustomerID = c.CustomerID
SET l.InterestRate = l.InterestRate - 1
WHERE TIMESTAMPDIFF(YEAR, c.DOB, CURDATE()) > 60;

#Mark VIP customers

ALTER TABLE Customers
ADD COLUMN IsVIP BOOLEAN DEFAULT FALSE;
UPDATE Customers
SET IsVIP = TRUE
WHERE Balance > 10000;
SELECT * FROM Customers;

#Loan due reminder

SELECT
    LoanID,
    CustomerID,
    EndDate,
    CONCAT(
        'Reminder: Loan ',
        LoanID,
        ' is due within 30 days.'
    ) AS ReminderMessage
FROM Loans
WHERE EndDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);