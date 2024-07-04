import { MatSnackBar } from '@angular/material/snack-bar';
import { AgentService } from './../../services/agent.service';
import { Agent } from './../../models/agent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.scss']
})
export class RightmenuComponent implements OnInit {

  agents: Agent[] = [];
  constructor(private agentService: AgentService, private matSnackBar: MatSnackBar) { 
    agentService.getAgents().subscribe(resp => {this.agents = resp},error=>{ console.error("Agent api not found")} );

  }

  deleteAgent(agent: Agent)
  {
      this.agentService.deleteAgent(agent).subscribe(resp => {
        this.matSnackBar.open('Agent Deleted:', 'OK', {
          verticalPosition: 'top',
          duration        : 2000 });
      });

      this.agentService.getAgents().subscribe(resp => this.agents = resp );
  }

  ngOnInit() {
  }

}
