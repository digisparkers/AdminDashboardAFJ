import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import {PostService} from "../services/post.service"
import {SucesslogginggService} from "../services/sucessloggingg.service"

@Component({
  selector: 'app-uploadbanner',
  templateUrl: './uploadbanner.component.html',
  styleUrls: ['./uploadbanner.component.css']
})
export class UploadbannerComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService,private route:Router,private postMethod:PostService,private successmsg:SucesslogginggService) { }

  name: string;
  loaderbool:boolean=false;

  cover: File;
  imgName:string='Upload Image'
  description:any={};
  price:string;
 Discount:string;
 selectCat:string;
 buttonboool:boolean=true;

  ngOnInit(): void {
  }
 


  onNameChanged(event:any){

this.name= event.target.value;
console.log(this.name)

  }

  onImageChanged(event){

    this.cover = event.target.files[0];
    console.log(this.cover);
    this.imgName=this.cover.name
  }



//   onfeatureChanged(event){

// console.log(event.target.value);

// this.description.features=event.target.value
//   }


//   onDesChanged(event){

//     this.description.des=event.target.value;

// console.log(this.description)

//   }


//   onPriceChanged(event){

// this.price=event.target.value;

//   }
//   onDiscountChanged(event){
// this.Discount=event.target.value;

//   }


  onSelectChange(event){

this.selectCat=event.target.value;

this.buttonboool=true
// this.switchcase(this.selectCat)


  }
  url:string='http://127.0.0.1:8000/'
  uploadBanner(){
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    
    
    uploadData.append('category',this.selectCat);
uploadData.append('image',this.cover);
 
this.loaderbool=true;
this.postMethod.postData(`http://ec2-13-232-92-217.ap-south-1.compute.amazonaws.com/product/banner/create/`,uploadData).subscribe(ele =>{ 
  this.successmsg.SuccessLog(ele,'Cosmetictabel')

})


    // for (const entry of uploadData.entries())
    // {
    //     console.log(entry)
    // }
//      this.http.post(`http://127.0.0.1:8000/${this.selectCat}/banner/create/`,uploadData).subscribe(ele => {

//  console.log(ele);
//  if(ele){

//   this.toastr.success('Your data has been recorded sucessfully', 'Sucess', {
//     timeOut: 3000,
//   });

// this.route.navigate(['/Cosmetictabel'])

//  }

//      })
// this.http.post(`http://ec2-15-206-189-63.ap-south-1.compute.amazonaws.com/${this.selectCat}/banner/create/`,uploadData).subscribe(ele => {

//    console.log(ele)
  
//       })

  }

private switchcase(getInput){

switch (getInput){

  case "Please Select the option":

  this.buttonboool=true
  break

  case "cosmetics":
  this.buttonboool=false


  case "fashion":
    this.buttonboool=false
}

}




}
