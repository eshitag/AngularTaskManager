import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummary(): any[]{
    var TeamMemberSummary =[
      {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 19, TemporarilyUnavailableMembers: 6},
      {Region: "North", TeamMembersCount: 7, TemporarilyUnavailableMembers: 1}
    ];
    return TeamMemberSummary;
  }

  getTeamMembers(): any[]{
    var TeamMembers =  [
      {
        Region: "East", Members: [
          {ID: 1, Name: "Anaheez", Status: "Available"},
          {ID: 2, Name: "Ankita", Status: "Available"},
          {ID: 3, Name: "Vishnu", Status: "Busy"},
          {ID: 4, Name: "Komal", Status: "Available"}
        ]
      },
      {
        Region: "West", Members: [
          {ID: 1, Name: "Aryan", Status: "Available"},
          {ID: 2, Name: "Arpan", Status: "Busy"},
          {ID: 3, Name: "Ankita", Status: "Busy"},
          {ID: 4, Name: "Dilip", Status: "Available"}
        ]
      },
      {
        Region: "South", Members: [
          {ID: 1, Name: "Vanisha", Status: "Busy"},
          {ID: 2, Name: "Lovish", Status: "Available"},
          {ID: 3, Name: "Akanksha", Status: "Available"},
          {ID: 4, Name: "Priyal", Status: "Busy"}
        ]
      },
      {
        Region: "North", Members: [
          {ID: 1, Name: "Nitin", Status: "Available"},
          {ID: 2, Name: "Mayur", Status: "Busy"},
          {ID: 3, Name: "Tushar", Status: "Available"},
          {ID: 4, Name: "Kush", Status: "Available"}
        ]
      }
    ];
    return TeamMembers;
  }
}
