import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Identification } from '../models/identification';
import { Place } from '../models/place';
import { PoliceId } from '../models/policeId';
import { PoliceReport } from '../models/policeReport';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public identification = new BehaviorSubject<Identification>(<Identification>{});
  public place = new BehaviorSubject<Place>(<Place>{});
  public policeId = new BehaviorSubject<PoliceId>(<PoliceId>{});

  

}
