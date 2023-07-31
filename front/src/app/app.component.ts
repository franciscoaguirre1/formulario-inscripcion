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



    // consologuear valores del formulario

    consologuearFormulario() {

        console.log('Form Value:', this.formularioEconomiaPopular.value)
        
    }


    constructor(private fb: FormBuilder) {

    }


    ngOnInit(): void {

        this.formularioEconomiaPopular = this.fb.group({
    
    
            // 1.- CARÁCTER DE LA UNIDAD PRODUCTIVA SOLICITANTE
            caracterUnidadProductivaSeccion1: ['', Validators.required],
            caracterUnidadProductivaOtraSeccion1: ['', Validators.required],

            


            
    
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
            inscripcionesLegalesSeccion3: ['', Validators.required],
            tieneRegistroSeccion3: ['', Validators.required],
            nroInscripcionMatriculaSeccion3: ['', Validators.required],
            reparticionSeccion3: ['', Validators.required],
            esActividadAgropecuariaSeccion3: ['', Validators.required],
            renspaNroSeccion3: ['', Validators.required],
            marcasYSeñalesSeccion3: ['', Validators.required],
            renafSeccion3: ['', Validators.required],
            otroCualSeccion3: ['', Validators.required],


    
          //   4.- OBJETO SOCIAL

            actividadesProductivasSeccion4: ['', Validators.required],

          //   5.- DOMICILIO PERSONAL O DE LA ASOCIACIÓN FORMAL O INFORMAL

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
            nroCallePredProdSeccion5: ['', Validators.required],
            cpPredProdSeccion5: ['', Validators.required],
            barrioPredProdSeccion5: ['', Validators.required],
            localidadPredProdSeccion5: ['', Validators.required],
            departamentoPredioProdSeccion5: ['', Validators.required],
            emailPredProdSeccion5: ['', Validators.required],
            telefonoPredProdSeccion5: ['', Validators.required],
            
    
          //   // 6.- CONDICIÓN FISCAL

            ivaSeccion6: ['', Validators.required],
            ingresosBrutosSeccion6: ['', Validators.required],
            tasaComercioSeccion6: ['', Validators.required],
            

            
    
          //   // 7.- REPRESENTANTES DE LA ASOCIACIÓN FORMAL O INFORMAL
    

            apellidoSeccion7: ['', Validators.required],
            nombreSeccion7: ['', Validators.required],
            tipoDeDocumentoSeccion7: ['', Validators.required],
            nroDocumentoSeccion7: ['', Validators.required],
            tieneCiDiSeccion7: ['', Validators.required],
            nivelCiDiSeccion7: ['', Validators.required],

    
          //   // puede haber más personas
    
    
    
          //   // 8.- INFORMACIÓN COMPLEMENTARIA

            textInputSeccion8: ['', Validators.required], 

    
    
          //   // 9.- PERSONAS RESPONSABLES DE LA INSCRIPCIÓN

            nombreResponsableSeccion9: ['', Validators.required],
            dniSeccion9: ['', Validators.required],
            cargoSeccion9: ['', Validators.required],
            telefonoSeccion9: ['', Validators.required],
            emailSeccion9: ['', Validators.required],
    
    
          //   // puede haber más personas
    
    
          //   // 9b Para las personas físicas

        
            apellidoSeccion9b: ['', Validators.required],
            nombreSeccion9b: ['', Validators.required],
            documentoSeccion9b: ['', Validators.required],
            fechaNacSeccion9b: ['', Validators.required],
            vinculoSeccion9b: ['', Validators.required],
            escolaridadSeccion9b: ['', Validators.required],
            estaCursandoSeccion9b: ['', Validators.required],
            ocupacionSeccion9b: ['', Validators.required],

    
          //   // puede haber más personas


          //  9c Cursos de Capacitación laboral realizados por el titular

            cursosRealizadosSeccion9c: ['', Validators.required],

            //   9d Obra Social


            poseeObraSocialSeccion9d: ['', Validators.required],
            cubreGrupoSeccion9d: ['', Validators.required],

    
          //   9e Situación habitacional


            posesionViviendaSeccion9e: ['', Validators.required],
            bañoSeccion9e: ['', Validators.required],
            dormitoriosSeccion9e: ['', Validators.required],
            techosSeccion9e: ['', Validators.required],
            murosSeccion9e: ['', Validators.required],
            pisosSeccion9e: ['', Validators.required],


          //   9f Acceso a servicios

            aguaSeccion9f: ['', Validators.required],
            luzSeccion9f: ['', Validators.required],
            gasSeccion9f: ['', Validators.required],



            // 9g Datos referidos al predio y actividad productiva (solo productos agropecuarios)

            totalHectareasSeccion9g: ['', Validators.required],
            hectareasEnSecanoSeccion9g: ['', Validators.required],
            hectareasConRiegoSeccion9g: ['', Validators.required],
            hectareasAgricolaSeccion9g: ['', Validators.required],
            hectareasMonteSeccion9g: ['', Validators.required],
            hectareaschacraEnSecanoSeccion9g: ['', Validators.required],
            hectareasPasturasNaturalesSeccion9g: ['', Validators.required],
            hectareasPasturasImplantadasSeccion9g: ['', Validators.required],
            hectareasGranjaMixtaSeccion9g: ['', Validators.required],
            hectareasHortalizasSeccion9g: ['', Validators.required],
            hectareasGranosSeccion9g: ['', Validators.required],
            otraSeccion9g: ['', Validators.required],
            otraHectareasSeccion9g: ['', Validators.required],




            // 9h Cantidad de Animales


            vacunosSeccion9h: ['', Validators.required],
            caprinosSeccion9h: ['', Validators.required],
            porcinosSeccion9h: ['', Validators.required],
            ovinosSeccion9h: ['', Validators.required],
            pollosParrillerosSeccion9h: ['', Validators.required],
            gallinasPonedorasSeccion9h: ['', Validators.required],
            apiculturaSeccion9h: ['', Validators.required],


    
    
        })
    
    
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
    




}
