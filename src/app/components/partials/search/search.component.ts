import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = ''

  //activated para escutar as mudanças de params
  constructor(activatedRoute: ActivatedRoute, private router: Router) {

    //quando mudar o valor do indice param vai executar o corpo da função
    activatedRoute.params.subscribe((params)=>{

      if(params['searchterm']) this.searchTerm = params['searchTerm']
    })
  }

  ngOnInit(): void {
  }

  search(term:string):void{

    if(term){
      //se existir o termo vou para o seguinte endereço
      this.router.navigateByUrl('/search/'+term)
    }

  }

}
