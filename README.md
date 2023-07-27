# Bank-of-Flatiron

## Introduction

The Bank of Flatiron is a React application that displays a list of your recent bank transactions, among other features. It fetches data from a server and displays it on the browser.

## Installation and Set-up

1. Go to git-hub and click on the repository 'Bank-of-Flatiron' .
2. Copy the SSH code ['git@github.com:1Markish/Bank-of-Flatiron.git'] .
3. Open your terminal and write 'git clone' then paste the SSH code. Click enter.
4. A local copy of the code will be created on your device.
5. Open the folder using Visual Studio Code and open a new terminal.
6. To open the React App on your browser click 'cd flatiron-bank' on your terminal then run 'npm start'
7. On the terminal opened type 'json-server --watch db.json' to make the server live.

## Overview

The folder contains a folder named 'Components' which contains 5 js files. 

The first file is the App.js which calls out all the functions contained in the other files. It is rendered in the HTML file via the index.js .

The second file is the 'Data.js' . This is where data from the Json-server, [http://localhost:3000/transactions] is fetched. When you check the file you will notice that instead of using the regular fetch to source data from the server I have used Axios. They basically perform the same function but Axios is somehow more flexible to use. You can check out more about Axios on the i Resources.

The other file is the Trans.js . It has props which are passed in the parent file Data.js . The file displays the data from the json-server on the React App by being passed down from the parent file 

The last files are the Form.js and Search.js . The Form.js has an onChange event that calls out a function . When data is entered it prints it on the console 



## Credit

Mark Kipchumba (mark.kipchumba@student.moringaschool.com)



### Resources 
[Learn more about Axios](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjAxs68t6-AAxWxVKQEHRRJBjcQFnoECBQQAQ&url=https%3A%2F%2Faxios-http.com%2Fdocs%2Fintro&usg=AOvVaw2PvxnspIDjCBDuIKnZiFWo&opi=89978449)