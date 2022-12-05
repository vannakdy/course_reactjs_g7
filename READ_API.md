homework : teacher
# teacher : 
    + list
        url: localhost:8080/api/teacher
        method : GET,
        body : {}
    + create
        url: localhost:8080/api/teacher
        method : POST,
        body : {
            "firstname" : "Nara",
            "lastname" : "Nara",
            "gender": 1,
            "email": "sok@gmailcom",
            "tel":""
        }
    + getOne
        url: localhost:8080/api/teacher/{paramId}
        method : GET,
        body : {}
    + update
        url: localhost:8080/api/teacher
        method : PUT,
        body : {
            "teacher_id": 106,
            "firstname" : "Nara",
            "lastname" : "New Name",
            "gender": 1,
            "email": "sok@gmailcom"
        }
    + remove
        url: localhost:8080/api/teacher
        method : Delete,
        body : {
            "teacher_id": 106
        }
# student
    + list
        url: https://school-nit-api.cleverapps.io/api/student
        method : GET,
        body : {}
    + create
        url: https://school-nit-api.cleverapps.io/api/student
        method : POST,
        body : {
            "firstname" : "Jon",
            "lastname" : "Jon",
            "gender" : 1,
            "tel" : "0888888",
            "email" : "jon@gmail",
            "description" : ""
        }
    + getOne
        url: localhost:8080/api/student/{paramId}
        method : GET,
        body : {}
    + update
        url: https://school-nit-api.cleverapps.io/api/student
        method : PUT,
        body : {
            "student_id": 5,
            "firstname" : "Sok",
            "lastname" : "Sarom",
            "gender" : 1,
            "tel" : "9999999",
            "email" : "somang@gmail",
            "description" : ""
        }
    + remove
        url: https://school-nit-api.cleverapps.io/api/student
        method : DELETE,
        body : {
            "student_id": 106
        }

