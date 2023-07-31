import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

    title = 'front';
    formularioEconomiaPopular!: FormGroup
    radioButtonsArray: any[] = []
    inputSectionOneValue:boolean = false
    tieneRegistroSection3: boolean = false
    domicilioPredioProductivoSection5: boolean = true
    esPersonaFisica : boolean = false
    esUnidadAsociativaProductiva: boolean = false
    esActividadAgropecuaria: boolean = false
    tieneCiDi: boolean = false
    tieneObraSocial: boolean = false
    arrayRadioButtonsSection1!: any






    

    constructor(private fb: FormBuilder) {

    }



    ngOnInit(): void {

        this.formularioEconomiaPopular = this.fb.group({
    
    
            // 1.- CARÁCTER DE LA UNIDAD PRODUCTIVA SOLICITANTE
            caracterUnidadProductivaSolicitante: ['', Validators.required],

            


            
    
         // 2.- DATOS DE IDENTIFICACIÓN        
            // 2.1.- Unidad Productiva Unipersonal
            apellidoSeccion21: ['', Validators.required],
            nombreSeccion21: ['', Validators.required],
            tipoDocumentoSeccion21: ['', Validators.required],
            nroDocumentoSeccion21: ['', Validators.required],
            tieneCiDiSeccion21: ['', Validators.required],
            nivelCiDiSeccion21: ['', Validators.required],
            cuilSeccion21: ['', Validators.required],
            emailSeccion21: ['', Validators.required, Validators.email],
            telefonoSeccion21: ['', Validators.required],
            asociacionCooperativaSeccion21: ['', Validators.required],

            //2.2.- Unidades Asociativas Productivas (incluye las familiares)

            nombreInstitucionPersonaSeccion22: ['', Validators.required],
            nombreFantasiaSeccion22: ['', Validators.required],
            asociacionCooperativaSeccion22: ['', Validators.required],


    
          //   3.- INSCRIPCIONES LEGALES
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],
            inscripcionesLegales: ['', Validators.required],
            esactividadAgropecuaria: ['', Validators.required],
            tieneRegistroSeccion3: ['', Validators.required],
            nroInscripcionMatriculaSeccion3: ['', Validators.required],
            reparticionSeccion3: ['', Validators.required],
            esActividadAgropecuariaSeccion3: ['', Validators.required],
            renspaNroSeccion3: ['', Validators.required],
            marcasYSeñalesSeccion3: ['', Validators.required],
            renafSeccion3: ['', Validators.required],
            otroCualSeccion3: ['', Validators.required],


    
          //   4.- OBJETO SOCIAL
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],

            actividadesProductivasSeccion4: ['', Validators.required],

          //   5.- DOMICILIO PERSONAL O DE LA ASOCIACIÓN FORMAL O INFORMAL
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],

          calleSeccion5: ['', Validators.required],
          numeroCalleSeccion5: ['', Validators.required],
          cpSeccion5: ['', Validators.required],
          barrioSeccion5: ['', Validators.required],
          localidadSeccion5: ['', Validators.required],
          departamentoSeccion5: ['', Validators.required],
          emailSeccion5: ['', Validators.required],
          confirmeEmailSeccion5: ['', Validators.required],
          telefonoSeccion5: ['', Validators.required],
          cantidadAsociadosSeccion5: ['', Validators.required],
          domicilioPredioProductivoSeccion5: ['', Validators.required],
          callePredioProductivoSeccion5: ['', Validators.required],
          nroCalleDomicilioSeccion5: ['', Validators.required],
          barrioPredProdSeccion5: ['', Validators.required],
          localidadPredProdSeccion5: ['', Validators.required],
          departamentoPredioProdSeccion5: ['', Validators.required],
          emailPredProdSeccion5: ['', Validators.required],
          telefonoPredProdSeccion5: ['', Validators.required],
            
    
          //   // 6.- CONDICIÓN FISCAL
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],

            
    
          //   // 7.- REPRESENTANTES DE LA ASOCIACIÓN FORMAL O INFORMAL
    
          //   // primer persona
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],
    
          //   // puede haber más personas
    
    
    
          //   // 8.- INFORMACIÓN COMPLEMENTARIA
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],
    
    
          //   // 9.- PERSONAS RESPONSABLES DE LA INSCRIPCIÓN
    
          //   // primer persona
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],
    
          //   // puede haber más personas
    
    
          //   // Para las personas físicas
          //   // primer persona
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],

        
            obraSocial: ['', Validators.required],

    
          //   // puede haber más personas
    
    
    
          //   // Situación habitacional
          //   caracterUnidadProductivaSolicitante: ['', Validators.required],
    
    
        })
    
    
        }



                // Imprimir valores de la seccion 1
            obtenerValorSeccion1() {
                    // const radioContainer = document.getElementsByClassName('.radio-container');
                    const radioContainer = document.querySelector('.radio-container') as HTMLElement;

            
                    // Obtener todos los elementos "input" de tipo "radio" dentro del contenedor
                    const radioButtons = radioContainer.querySelectorAll('input[type="radio"]');
                
                    // Iterar sobre los radio buttons para encontrar el seleccionado
                    let selectedValue;
                    radioButtons.forEach(radioButton => {
                    if (radioButton instanceof HTMLInputElement && radioButton.checked) {
                        selectedValue = radioButton.value;
                        // Opcional: Puedes hacer algo más aquí con el valor seleccionado si lo necesitas.
                    }
                    });

                    
                    // Mostrar el valor seleccionado en la consola
                    console.log('Valor seleccionado:', selectedValue);

                    if(selectedValue == "Otra") {
                        const inputSectionOne = document.getElementById('basic-url') as HTMLInputElement;
                        console.log(inputSectionOne.value);                       
                        
                    }
                }

            

                // imprimirValoresSeccion2.2


                imprimirValoresSeccion22() {
                    // Obtener el FormGroup
                    const formGroup = this.formularioEconomiaPopular;
                  
                    // Verificar si el FormGroup es válido (no es null o undefined)
                    if (formGroup) {
                      // Obtener los valores de los campos individuales del FormGroup
                  
                      const apellidoControl = formGroup.get('apellidoSeccion21');
                      const nombreControl = formGroup.get('nombreSeccion21');
                      const tipoDocumentoControl = formGroup.get('tipoDocumentoSeccion21');
                      const nroDocumentoControl = formGroup.get('nroDocumentoSeccion21');
                      const tieneCiDiControl = formGroup.get('tieneCiDiSeccion21');
                      const nivelCiDiControl = formGroup.get('nivelCiDiSeccion21');
                      const cuilControl = formGroup.get('cuilSeccion21');
                      const emailControl = formGroup.get('emailSeccion21');
                      const telefonoControl = formGroup.get('telefonoSeccion21');
                      const asociacionCooperativaControl = formGroup.get('asociacionCooperativaSeccion21');
                  
                      // Verificar si los controles son válidos (no son null o undefined)
                      if (apellidoControl && nombreControl && tipoDocumentoControl && nroDocumentoControl &&
                          tieneCiDiControl && nivelCiDiControl && cuilControl && emailControl &&
                          telefonoControl && asociacionCooperativaControl) {
                  
                        // Acceder a las propiedades de los controles (value)
                        const apellido = apellidoControl.value;
                        const nombre = nombreControl.value;
                        const tipoDocumento = tipoDocumentoControl.value;
                        const nroDocumento = nroDocumentoControl.value;
                        const tieneCiDi = tieneCiDiControl.value;
                        const nivelCiDi = nivelCiDiControl.value;
                        const cuil = cuilControl.value;
                        const email = emailControl.value;
                        const telefono = telefonoControl.value;
                        const asociacionCooperativa = asociacionCooperativaControl.value;
                  
                        // Imprimir los valores en la consola
                        console.log('Apellido:', apellido);
                        console.log('Nombre:', nombre);
                        console.log('Tipo de Documento:', tipoDocumento);
                        console.log('N° de Documento:', nroDocumento);
                        console.log('¿Tiene CiDi?:', tieneCiDi);
                        console.log('Nivel de CiDi:', nivelCiDi);
                        console.log('CUIL:', cuil);
                        console.log('Dirección de correo electrónico:', email);
                        console.log('Teléfono:', telefono);
                        console.log('Asociación o Cooperativa:', asociacionCooperativa);
                      }
                    }
                }



    // métodos para que aparezcan y desaparezcan los elementos html dependiendo de las selecciones        

    cambioInscripcionesLegalesSi() {
    this.tieneRegistroSection3 = true
    }

    cambioInscripcionesLegalesNo() {
    this.tieneRegistroSection3 = false
    }

    tieneObraSocialSi() {
    this.tieneObraSocial = true
    }

    tieneObraSocialNo() {
    this.tieneObraSocial = false
    }

    cambioDomicilioPredioProductivoNo() {
    this.domicilioPredioProductivoSection5 = false
    }

    cambioDomicilioPredioProductivoSi() {
    this.domicilioPredioProductivoSection5 = true
    }

    cambioActividadAgropecuariaSi() {
        this.esActividadAgropecuaria = true
    }

    cambioActividadAgropecuariaNo() {
        this.esActividadAgropecuaria = false
    }
    setTieneCiDi(value: boolean) {
        this.tieneCiDi = value;
    }

    
    changeInputsectionOne() {
    this.inputSectionOneValue = !this.inputSectionOneValue

    }

    unidadProductivaUnipersonal() {

        this.esPersonaFisica = true
        this.esUnidadAsociativaProductiva = false
    
        }
    
        UnidadesAsociativasProductivas() {
        this.esUnidadAsociativaProductiva = true
        this.esPersonaFisica = false
    
        }


    // métodos para agregar nuevos campos del mismo tipo


    agregarNuevoRepresentanteSection7() {
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("row");
    
      const inputGroup = `
      <hr>
      <div class="col-4">
          <div class="mb-3">
              <label  class="form-label">Apellido</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="mb-3">
              <label  class="form-label">Nombres</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="mb-3">
              <label  class="form-label">Tipo de Documento</label>
              <div class="input-group">                        
                  <select class="form-select" aria-label="Default select example">
                      <option selected>-</option>
                      <option value="AGRUPACION">AGRUPACION</option>
                      <option value="CEDULA DE IDENTIDAD">CEDULA DE IDENTIDAD</option>
                      <option value="CERTIFICADO MIGRATORIO">CERTIFICADO MIGRATORIO</option>
                      <option value="CUIL">CUIL</option>
                      <option value="CUIT">CUIT</option>
                      <option value="DOCUMENTO NACIONAL DE IDENTIDAD">DOCUMENTO NACIONAL DE IDENTIDAD</option>
                      <option value="EXTRANJERO CON CERTIF. DE POLICIA">EXTRANJERO CON CERTIF. DE POLICIA</option>
                      <option value="EXTRANJERO SIN DOCUMENTO">EXTRANJERO SIN DOCUMENTO</option>
                      <option value="IDENTIFICACION EMPRESA M4">IDENTIFICACION EMPRESA M4</option>
                      <option value="INDOCUMENTADO">INDOCUMENTADO</option>
                      <option value="LIBRETA CIVICA">LIBRETA CIVICA</option>
                      <option value="LIBRETA DE ENROLAMIENTO">LIBRETA DE ENROLAMIENTO</option>
                      <option value="NRO. DNRP">NRO. DNRP</option>
                      <option value="NUMEROS ESPECIALES">NUMEROS ESPECIALES</option>
                      <option value="PASAPORTE">PASAPORTE</option>
                      <option value="POLICIA FEDERAL">POLICIA FEDERAL</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="mb-3">
              <label  class="form-label">N° de Documento</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="mb-3">
              <label class="form-label">¿Tiene CiDi?</label>
              <div class="input-group">                        
                  <div class="form-check mx-3">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tieneCiDiSi" value="Si" (click)="setTieneCiDi(true)">
                      <label class="form-check-label" for="inlineRadio1">Si</label>
                  </div>
                  <div class="form-check mx-3">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tieneCiDiNo" value="No" (click)="setTieneCiDi(false)">
                      <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="mb-3">
              <label class="form-label">Nivel de CiDi</label>
              <div class="input-group">                        
                  <select [disabled]="!tieneCiDi" class="form-select" aria-label="Default select example">
                      <option selected>-</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                  </select>
              </div>
          </div>
      </div>
      `;
    
      newRowDiv.innerHTML = inputGroup;
      const container = document.querySelector(".container-7");
       // Check if the container element exists before appending the new row
      if (container) {
        container.appendChild(newRowDiv);
      } else {
        console.error("Container with class 'container-7' not found.");
      }
    }


    
    agregarNuevoResponsableSection9() {
        const newRowDiv = document.createElement("div");
        newRowDiv.classList.add("row");      
        const inputGroup = `
        <hr>
        <div class="col-4">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Nombre del Responsable</label>
                <div class="input-group">                        
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>                        
            </div>
        </div>
        <div class="col-4">
            <div class="mb-3">
                <label for="basic-url" class="form-label">DNI</label>
                <div class="input-group">                        
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>                        
            </div>
        </div>
        <div class="col-4">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Cargo</label>
                <div class="input-group">                        
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>                        
            </div>
        </div>
        <div class="col-4">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Teléfono</label>
                <div class="input-group">                        
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>                        
            </div>
        </div>
        <div class="col-4">
            <div class="mb-3">
                <label for="basic-url" class="form-label">Correo para recibir notificaciones</label>
                <div class="input-group">                        
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                </div>                        
            </div>
        </div>
        `;
      
        newRowDiv.innerHTML = inputGroup;
        const container = document.querySelector(".container-9");
         // Check if the container element exists before appending the new row
        if (container) {
          container.appendChild(newRowDiv);
        } else {
          console.error("Container with class 'container-7' not found.");
        }
    }



    agregarPersonaFisica9b() {
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("row");
    
      const inputGroup = `
      <hr>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Apellido</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>                        
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Nombre</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>                        
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Documento</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>                        
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Fecha de Nacimiento</label>
              <div class="input-group">                        
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
              </div>                        
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Vínculo</label>
              <div class="input-group">                        
                  <select class="form-select" aria-label="Default select example">
                      <option selected>-</option>
                      <option value="ABUELO/A">ABUELO/A</option>
                      <option value="ADHERENTE">ADHERENTE</option>
                      <option value="ADOPCION">ADOPCION</option>
                      <option value="CONVIVIENTE (CONCUBINO)">CONVIVIENTE (CONCUBINO)</option>
                      <option value="CONYUGE">CONYUGE</option>
                      <option value="DESCONOCIDO">DESCONOCIDO</option>
                      <option value="HERMANO/A">HERMANO/A</option>
                      <option value="HIJO DEL CONYUGE SOL.DE 21 A 25 A.EST.">HIJO DEL CONYUGE SOL.DE 21 A 25 A.EST.</option>
                      <option value="HIJO DEL CONYUGE SOLTERO MENOR DE 21 A.">HIJO DEL CONYUGE SOLTERO MENOR DE 21 A.</option>
                      <option value="HIJO/A">HIJO/A</option>
                      <option value="JEFE/A FAMILIA">JEFE/A FAMILIA</option>
                      <option value="MENOR BAJO GUARDA O TUTELA">MENOR BAJO GUARDA O TUTELA</option>
                      <option value="NIETO/A">NIETO/A</option>
                      <option value="OTROS FAMILIARES">OTROS FAMILIARES</option>
                      <option value="OTROS NO FAMILIARES">OTROS NO FAMILIARES</option>
                      <option value="PADRE/MADRE">PADRE/MADRE</option>
                      <option value="PRENATAL">PRENATAL</option>
                      <option value="SOBRINO/A">SOBRINO/A</option>
                      <option value="TIO/A">TIO/A</option>
                      <option value="TITULAR EXCLUSIVAMENTE">TITULAR EXCLUSIVAMENTE</option>
                      <option value="TUTOR/A">TUTOR/A</option>
                  </select>
              </div>
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Escolaridad</label>
              <div class="input-group">                        
                  <select class="form-select" aria-label="Default select example">
                      <option selected>-</option>
                      <option value="Inicial y Preescolar">Inicial y Preescolar</option>
                      <option value="Primaria incompleta">Primaria incompleta</option>
                      <option value="Primaria completa">Primaria completa</option>
                      <option value="Secundaria incompleta">Secundaria incompleta</option>
                      <option value="Secundaria completa">Secundaria completa</option>
                      <option value="Terciaria incompleta">Terciaria incompleta</option>
                      <option value="Terciaria completa">Terciaria completa</option>
                      <option value="Universitaria incompleta">Universitaria incompleta</option>
                      <option value="Universitaria completa">Universitaria completa</option>
                  </select>
              </div>                            
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label class="form-label">Está cursando?</label>
              <div class="input-group">                        
                  <div class="form-check mx-3">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                      <label class="form-check-label" for="inlineRadio1">Si</label>
                  </div>
                  <div class="form-check mx-3">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-2">
          <div class="mb-3">
              <label for="basic-url" class="form-label">Ocupación</label>
              <div class="input-group">                        
                  <select class="form-select" aria-label="Default select example">
                      <option selected>-</option>
                      <option value="Empleado">Empleado</option>
                      <option value="Desocupado">Desocupado</option>
                      <option value="Autoempleo (emprendimiento)">Autoempleo (emprendimiento)</option>
                      <option value="Jubilado - Pensionado">Jubilado - Pensionado</option>
                      <option value="No trabaja">No trabaja</option>
                  </select>
              </div>
          </div>
      </div>
      `;
    
      newRowDiv.innerHTML = inputGroup;
      const container = document.querySelector(".container-9b");
       // Check if the container element exists before appending the new row
      if (container) {
        container.appendChild(newRowDiv);
      } else {
        console.error("Container with class 'container-7' not found.");
      }
    }
    







//   controlarCampo1() {

//     const radioButtonsSection1 = document.getElementsByClassName("radio-section-1");
//     const textInputSection1 = document.getElementsByClassName("input-text-section-1");

//     console.log("radio",radioButtonsSection1);
//     console.log("input",textInputSection1);
//     } 

    // agregarNuevoResponsableSection9b() {

    // }

       // onFormSubmit(): void {
    // console.log(this.formularioEconomiaPopular.value);
    // }

    
    // consologuearPersonaFisicaSeccion1() {
    //     const personaFisica = document.getElementById("inlineRadio7");
    //     console.log(personaFisica);
    // }   


}
