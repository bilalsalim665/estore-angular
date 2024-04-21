import { Injectable } from '@angular/core';
import { Category } from '../../types/category.type';
import { categories } from '../../sampleData/categories.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentType, Environments } from '../../../shared/environments';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]>{
    
    return this.httpClient.get<Category[]>(
      Environments[EnvironmentType]+'productCategories'
    );
  }
}
