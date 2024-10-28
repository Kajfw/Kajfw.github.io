const company = //declares a object
{ 
    "companyName": "Tech Stars", ////////////////// Q2 //////////////////

    "website": "www.techstars.site", ////////////////// Q2 //////////////////
    
    "employees": [ ////////////////// Q1 //////////////////
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        }
]  
}
console.log("Q1");
console.log(company.employees);

console.log("Q2"); ////////////////// Q2 //////////////////
console.log(company);

company.employees.push(
    {

    }
)
company.employees[3].firstName = "Anna";
company.employees[3].department = "Tech";
company.employees[3].designation = "Executive";
company.employees[3].salary = 25600;
company.employees[3].raiseEligible = false;

console.log("Q3"); ////////////////// Q3 //////////////////
console.log(company.employees[3]);

let totalSal = 0;
for (i in company.employees)
{
    totalSal += company.employees[i].salary;
}

console.log("Q4"); ////////////////// Q4 //////////////////
console.log(totalSal);


console.log("Q5");  ////////////////// Q5 //////////////////
for (i in company.employees)
{
    if (company.employees[i].raiseEligible == true)
    {
        console.log("SalBefore for " + i);
        console.log(company.employees[i].salary);

        company.employees[i].salary = (company.employees[i].salary * 1.1);
        company.employees[i].raiseEligible = false;

        console.log("SalAfter for " + i);
        console.log(company.employees[i].salary);

    }
}


console.log(company.employees);

console.log("Q6"); ////////////////// Q6 ///////////////////

const array = ["Anna","Sam"];

for (i in company.employees)
{
    if (company.employees[i].firstName == array[0] || company.employees[i].firstName == array[1])
    {
        company.employees[i].wfh = true;
    }
    else
    {
        company.employees[i].wfh = false;
    }    
    
}

console.log(company.employees);



