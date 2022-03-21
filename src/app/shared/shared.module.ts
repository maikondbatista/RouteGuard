import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { RotaBaseComponent } from './components/rota-base/rota-base.component';
import { AuthGuard } from "./services/auth.guard";

const SERVICES = [AuthGuard, ToastrService];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RotaBaseComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule,
    HttpClientModule,
    RotaBaseComponent
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SERVICES],
    };
  }
}
