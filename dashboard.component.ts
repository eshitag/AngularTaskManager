import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation : string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingTasks: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients:string[];
  Projects: string[];
  Years: number[];

  TeamMembersSummary: any[];
  TeamMembers:any[];
  ToDay:Date;

  onProjectChange(){
    console.log("hi")
  }

  constructor( private dashboardService: DashboardService){

    this.Designation = "Data Scientist";
    this.Username= "Eshita Gupta";
    this.NoOfTeamMembers= 68;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks= 15;
    this.UpcomingTasks = 2;
    this.ProjectCost = 2113456;
    this.CurrentExpenditure = 98711;
    this.AvailableFunds = 54371;

    this.ToDay = new Date();

    this.Clients = [
      "Microsoft", "Google", "Tesla", "Netflix"
    ]
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D", "Project E", "Project F"
    ]

    this.Years = [ 2014 , 2015, 2016 , 2017, 2018 , 2019, 2020 , 2021]

    this.TeamMembersSummary = this.dashboardService.getTeamMemberSummary();
    
    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  ngOnInit(): void {  //used to initialise properties
    this.onProjectChange();
  }

}
