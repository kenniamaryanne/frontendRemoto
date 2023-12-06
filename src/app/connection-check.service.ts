import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionCheckService {

  constructor(private connectionCheck: ConnectionService) { 
    this.connectionCheck.monitor().subscribe(

    


    )




  }
}
