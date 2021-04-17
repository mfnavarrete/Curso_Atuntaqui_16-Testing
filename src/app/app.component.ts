import { Component } from '@angular/core';
import * as FishboneChart from 'fishbone-chart'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<FishboneChart data={data} />',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  data = {
    'Bad coffee': {
      'Procedures': ['Too much water', 'Too many grounds', 'Lack of training'],
      'Equipment': ['Dirty cups', 'Coffee not hot enough', 'Dirty basket'],
      'Material': ['Bad sugar', 'Lids do not fit cup', 'Bad cream'],
      'People': ['Wrong fee', 'No training', 'Rude'],
      'Machine': ['Not working', 'Deregulated', 'Dirty']
    },
    'Scrum not working': {
      'Principles': ['Functional software (SW) is not released'],
      'Product Owner (PO)': ['No authority to prioritize', 'Poor interaction with the team'],
      'Sprint': ['SW not released for validation', 'Sprint speed is not measured', 'Team is controlled from outside'],
      'Planning': ['PO does not explain the backlog'],
      'Development Team': ['Members dedicated to specific roles', 'Does not deliver what was promised'],
    },
    'Security Incident': {
      'Technology': ['Weak encryption', 'No technology for remote data destruction'],
      'Process': ['No process for reporting incident'],
      'People': ['Worker lost laptop', 'Distraction was a factor'],
      'Controls': ['Week password policy', 'No audit trail of the laptop information'],
      'Procedure': ['No procedure for securing laptop at public locations'],
      'Environment': ['No place to secure laptop overnight at workplace']
    }
  };

}
