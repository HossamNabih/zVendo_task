import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private authService: AuthService,
     private route: ActivatedRoute,
     private router: Router) { }
  user:any = {
    fullnameAR: '',
      fullnameEN: '',
      
      email: '',
      mobile: '',
      password: '',
      type : 1,
    
  }


  ngOnInit(): void {
    
  }
  addUser(){
    //we can add more validate here before post and return if errors on data

    console.log(this.user)
    this.authService.sendPostRequest( 'employee'  , this.user).subscribe(res =>{
      console.log(res);

      this.router.navigate(['/users/' ])

   
    })

  }

  navigate(path){
    this.router.navigate(['/'+ path+'/' ])
  }
 

}
