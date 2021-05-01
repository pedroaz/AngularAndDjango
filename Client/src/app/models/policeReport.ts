import { Identification } from "./identification";
import { Place } from "./place";
import { PoliceId } from "./policeId";

export interface PoliceReport{
    identification: Identification;
    place: Place;
    policeId: PoliceId;
}