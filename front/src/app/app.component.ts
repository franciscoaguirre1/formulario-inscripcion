import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    title = 'front';
    formularioEconomiaPopular!: FormGroup
    radioButtonsArray: any[] = []
    inputSectionOneValue!:any
    tieneRegistroSection3: boolean = false
    domicilioPredioProductivoSection5: boolean = false








    constructor(private fb: FormBuilder) {

    }


    cambioInscripcionesLegales() {
      this.tieneRegistroSection3 = !this.tieneRegistroSection3
    }

    cambioDomicilioPredioProductivo() {
      this.domicilioPredioProductivoSection5 = !this.domicilioPredioProductivoSection5
    }


    checkStatus(event:any){

      // Check if radio button is checked
      if(event.target.checked == true){
        
        // Reset the input value when a radio button is checked        
        this.inputSectionOneValue = '';

        // Get checked radio button's value
        let radioValue = event.target.value;

        //push into the radioButtonsArray 
        this.radioButtonsArray.push(radioValue)

        //consologuear
        // console.log("array", this.radioButtonsArray);

        // consologuear
        // console.log("radiovalue", radioValue + ' is Selected');
      }
    }

    

    ngOnInit(): void {

      this.formularioEconomiaPopular = this.fb.group({


        // 1.- CARÁCTER DE LA UNIDAD PRODUCTIVA SOLICITANTE
        caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // 2.- DATOS DE IDENTIFICACIÓN        
      //   //2.1.- Unidad Productiva Unipersonal
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // 3.- INSCRIPCIONES LEGALES
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],


      //   // 4.- OBJETO SOCIAL
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],


      //   // 5.- DOMICILIO PERSONAL O DE LA ASOCIACIÓN FORMAL O INFORMAL
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // 6.- CONDICIÓN FISCAL
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // 7.- REPRESENTANTES DE LA ASOCIACIÓN FORMAL O INFORMAL

      //   // primer persona
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // puede haber más personas



      //   // 8.- INFORMACIÓN COMPLEMENTARIA
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],


      //   // 9.- PERSONAS RESPONSABLES DE LA INSCRIPCIÓN

      //   // primer persona
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // puede haber más personas


      //   // Para las personas físicas
      //   // primer persona
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],

      //   // puede haber más personas



      //   // Situación habitacional
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],
      //   caracterUnidadProductivaSolicitante: ['', Validators.required],


      })
      
    }




    agregarNuevoRepresentante() {
    
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("row");
    
      for (let i = 0; i < 3; i++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-4");
    
        const inputGroup = `
          <div class="mb-3">
            <label for="input-${i}" class="form-label">Campo ${i + 1}</label>
            <div class="input-group">
              <input type="text" class="form-control" id="input-${i}" aria-describedby="basic-addon3 basic-addon4">
            </div>
          </div>
        `;
    
        colDiv.innerHTML = inputGroup;
        newRowDiv.appendChild(colDiv);
      }
    
      const containers = document.getElementsByClassName("container-7");
      if (containers.length > 0) {
        containers[0].appendChild(newRowDiv);
      }
    }


    agregarNuevoResponsable() {

      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("row");
    
      for (let i = 0; i < 2; i++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-6");
    
        const inputGroup = `
          <div class="mb-3">
            <label for="input-${i}" class="form-label">Campo ${i + 1}</label>
            <div class="input-group">
              <input type="text" class="form-control" id="input-${i}" aria-describedby="basic-addon3 basic-addon4">
            </div>
          </div>
        `;
    
        colDiv.innerHTML = inputGroup;
        newRowDiv.appendChild(colDiv);
      }
    
      const containers = document.getElementsByClassName("container-9");
      if (containers.length > 0) {
        containers[0].appendChild(newRowDiv);
      }



    }


    onFormSubmit(): void {
      console.log(this.formularioEconomiaPopular.value);
  } 


  controlarCampo1() {

    const radioButtonsSection1 = document.getElementsByClassName("radio-section-1");
    const textInputSection1 = document.getElementsByClassName("input-text-section-1");

    console.log("radio",radioButtonsSection1);
    console.log("input",textInputSection1);



    } 

}
