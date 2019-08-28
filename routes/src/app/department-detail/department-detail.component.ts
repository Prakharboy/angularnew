import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `<h3>you selected department with id =</h3> {{departmentidl}}
  
  <a (click)="goprevious()">previous</a>
  <a (click)="gonext()">next</a>
  <br>
  <button (click)="mainpage()">BACK</button>

  <button (click)="goverview()">  overview </button>
  <button (click)="gcontact()">  contact </button>

  <router-outlet></router-outlet>
  
  
  
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentidl;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

   // let id=parseInt(this.route.snapshot.paramMap.get('id'));
  //this.departmentidl=id;


  this.route.paramMap.subscribe((params:ParamMap)=>
  {

    let id =parseInt(params.get('id'));
    this.departmentidl=id;
  }
  
  
  
  );
  }

goprevious()
{
  let previd=this.departmentidl-1;
  this.router.navigate(['/departmentss',previd]);
}
gonext()
{
  let nextid=this.departmentidl+1;
  this.router.navigate(['/departmentss',nextid]);
}
mainpage()
{

  let sid=this.departmentidl?this.departmentidl:null;
  this.router.navigate(['/department',{id:sid}]);
}
goverview()
{
  this.router.navigate(['overview'],{relativeTo:this.route});
}
gcontact()
{
  this.router.navigate(['contact'],{relativeTo:this.route});
}

}
