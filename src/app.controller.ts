import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): number {
    return this.appService.getHello();
  }
  
  @Get("Students")
  getStudents(): string[] {
    return ["Ronei", "Deivid", "Vinicius"]
  }
  
  @Get("StudentsWithO")
  getStudentsWithO(): string[] {
    return ["Ronei", "Deivid", "Vinicius"].filter(name => name.includes("O"));
  }
}




