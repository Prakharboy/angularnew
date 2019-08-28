import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

public siid;
  departments=[

{ "id":1,"name":"angular"},
{ "id":2,"name":"cassandra"},
{ "id":3,"name":"html"},
{ "id":4,"name":"css"},
{ "id":5,"name":"boot"},
{ "id":6,"name":"spark"}


  ];

  constructor(private router:Router,private ac:ActivatedRoute) { }

  ngOnInit() {

    this.ac.paramMap.subscribe((params:ParamMap)=>
    {
  
      let id =parseInt(params.get('id'));
      this.siid=id;
    });
  }
  onselect(departmentk)
  {

    this.router.navigate(['/departmentss',departmentk.id]);
  }


selectedh(departmentkl)
{
return departmentkl.id===this.siid;
}
}