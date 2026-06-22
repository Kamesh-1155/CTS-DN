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