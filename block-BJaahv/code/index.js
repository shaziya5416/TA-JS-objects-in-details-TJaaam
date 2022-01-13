/*
Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
*/

//0.test

let project1=createProject("Milap",1,10);
let project2=createProject("Aman",4,20);



//1.factory

function createProject(name,id,noOfProjects){
    let user={};
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;
    user.getProjects=function(){
        return user.noOfProjects;
    }
    user.changeName=function(newName){
        user.name=newName;
        return user.name;
    }
    user.incrementProject=function(){
        this.noOfProjects=noOfProjects+1;
        return this.noOfProjects;
    }
    user.decrementProject=function(){
        noOfProjects=noOfProjects-1;
        return noOfProjects;
    }
    return user;
}

//object.create

let methods={
    getProjects:function(){
        return this.noOfProjects;
    },
    changeName:function(newName){
        this.name=newName;
        return this.name;
    },
    incrementProject:function(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    },
    decrementProject:function(){
        this.noOfProjects=this.noOfProjects-1
        return this.noOfProjects;
    }

}


function createProject(name,id,noOfProjects){
    let user=Object.create(methods);
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;
    return user;
}

//pseudo class
function createProject(name,id,noOfProjects){
    let user=Object.create(methods);
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;
    return user;
}

createProject.prototype={
    getProjects:function(){
        return this.noOfProjects;
    },
    changeName:function(newName){
        this.name=newName;
        return this.name;
    },
    incrementProject:function(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    },
    decrementProject:function(){
        this.noOfProjects=this.noOfProjects-1
        return this.noOfProjects;
    }

}


//class pattern

class Project{
    constructor(name,id,noOfProjects){
    this.name=name;
    this.id=id;
    this.noOfProjects=noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    incrementProject(){
        this.noOfProjects=this.noOfProjects+1;
        return this.noOfProjects;
    }
    decrementProject(){
        this.noOfProjects=this.noOfProjects-1
        return this.noOfProjects;
    }

}
//test
let project1=new Project("Milap",1,10);
let project2=new Project("Aman",4,20);