import { Injectable,signal } from '@angular/core';
import { FlattenedTrack } from '../music-list/music-service.service';
@Injectable({
  providedIn: 'root'
})
export class NavSelectedItmeService {
  selectedItem = signal<FlattenedTrack|undefined>(undefined);

  dropDownClick = signal(false)


  setSelectedItem(item: FlattenedTrack) {
    this.selectedItem.set(item);
    this.dropDownClick.set(true)
  }

  getSelectedItem() {
    console.log("hello form Search")
    return this.selectedItem;
  }


  getDropDownClick()
  {
    return this.dropDownClick
  }



}
