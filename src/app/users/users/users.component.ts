import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';  
import * as $ from 'jquery';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  
})
export class UsersComponent implements OnInit {

  constructor(private authService: AuthService , private router: Router) { 
    
  }
  allUsers:any = [];
  showDeleteConfirm :boolean = false;
  


  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.authService.getRequest('employee' , '').subscribe(res =>{
      console.log(res);
        this.allUsers = res;
   
    })

  }
  confirmDelete(){
    let confirmMsg =  confirm("Press a button!");
    if(confirmMsg == true){
      // it is fake because no api for delete all 
      this.allUsers = []
    }
  }
  deleteUser(id){
    let confirmMsg =  confirm("Are you conirm delete  ?!");
    if(confirmMsg == true){
      let deletedObj = {
        status :3
      }
      this.authService.sendPostRequest( 'editUser/' +  id , deletedObj).subscribe(res =>{
        console.log(res);
  
         this.getUsers();
     
      })
      // it is fake because no api for delete all 
      this.allUsers = []
    }
  }

}
