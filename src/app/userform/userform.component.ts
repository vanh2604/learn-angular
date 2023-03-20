import { Component, OnInit } from '@angular/core';
interface IFormData {
  email: string,
  name: string,
  address: string
}

interface IUser extends IFormData {
  id: number
}
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  formData : IFormData = {
    email: "",
    name: "",
    address: "",
  }

  listUser : Array<IUser> = []

  addUser() {
    console.log(this.formData)
    const newUser = {...this.formData,id: this.listUser.length + 1}
    this.listUser.push(newUser)
    this.resetForm()
  }

  resetForm() : void {
    this.formData.address = ""
    this.formData.name = ""
    this.formData.email = ""
  }

  deleteUser(index: number) {
    this.listUser.splice(index,1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
