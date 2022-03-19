import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthGuard } from "./authorization/auth.guard";
import { AuthService } from "./services/auth.service";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

const SERVICES = [AuthGuard, AuthService];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NgbModule,
    RouterModule
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
