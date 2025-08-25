import { Component, inject, signal } from '@angular/core';
import { allSongData } from '../music-list/music-list.component';
import { FormsModule } from '@angular/forms';
import { filterBy, CompositeFilterDescriptor  } from '@progress/kendo-data-query';
import { CommonModule } from '@angular/common';
import { NavSelectedItmeService } from './nav-selectedItme.service';
import { FlattenedTrack } from '../music-list/music-service.service';


@Component({
  selector: 'nav-bar',
  imports: [FormsModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone:true
})
export class NavBarComponent {
  searchTerm =""
  isDropDownMenuOpen = true

  private selectedItemService = inject(NavSelectedItmeService);

  get filteredItems()
  {
    if(!this.searchTerm) return [];
    const filter: CompositeFilterDescriptor = {
      logic: 'or',
      filters: [
        { field: 'title', operator: 'contains', value: this.searchTerm }
      ]
    }
    return filterBy(allSongData,filter)
  }

  selectedItem(item:FlattenedTrack)
  {
    this.searchTerm = item.title;
    this.isDropDownMenuOpen=false;
    this.selectedItemService.setSelectedItem(item);
  }

}
