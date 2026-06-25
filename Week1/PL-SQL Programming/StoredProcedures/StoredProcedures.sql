CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER
);

INSERT INTO Accounts
VALUES (1,1,'Savings',10000);

INSERT INTO Accounts
VALUES (2,2,'Savings',5000);

COMMIT;

#Monthly Interest
DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

END //

DELIMITER ;
CALL ProcessMonthlyInterest();

SELECT * FROM Accounts;

#Update EmplyeeBonus
DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
    IN p_department VARCHAR(50),
    IN p_bonus DECIMAL(5,2)
)
BEGIN

    UPDATE Employees
    SET Salary =
        Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

END //

DELIMITER ;
CALL UpdateEmployeeBonus('IT',10);

SELECT * FROM Employees;

#TransferFunds
DELIMITER //

CREATE PROCEDURE TransferFunds(
    IN p_from_account INT,
    IN p_to_account INT,
    IN p_amount DECIMAL(10,2)
)
BEGIN

    DECLARE v_balance DECIMAL(10,2);

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

    ELSE

        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient Balance';

    END IF;

END //

DELIMITER ;
CALL TransferFunds(1,2,1000);

SELECT * FROM Accounts;