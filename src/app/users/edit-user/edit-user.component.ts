import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:string;
  user:any = {
    fullnameAR: '',
      fullnameEN: '',
      
      email: '',
      mobile: '',
      password: '',
      type : 1,
    
  }
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.paramMap.get('id');
     }
 

  ngOnInit(): void {
    this.getUserByID(this.id)
  }
  getUserByID(id){
    this.authService.getRequest('employeeByID' , '?id=' + id).subscribe(res =>{
      console.log(res);
        this.user = res;
   
    })
  }
  editUser(){

    console.log(this.user)
    this.authService.sendPostRequest( 'editUser/' + this.id  , this.user).subscribe(res =>{
      console.log(res);
      alert('Done Successfully');
      this.router.navigate(['/users/' ])

   
    })


  }
  navigate(path){
    this.router.navigate(['/'+ path+'/' ])
  }

}
