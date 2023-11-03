import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  nombreUsuario!: string;
  password!: string;
  loginUsuario!: LoginUsuario;
 

  constructor(
    private authService:AuthService,
    private router:Router
  )
  {
    
  }

  onLogin():void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password)
    console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe((resp:any) => {
      console.log(resp)
      localStorage.setItem('jwttoken',resp.jwttoken)
      this.router.navigate(['panel']);
    })
  }

  
}
