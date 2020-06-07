import { autoinject } from 'aurelia-framework';
import { StadiumService } from '../../services/stadium-service';

@autoinject
export class Upload {
  selectedFiles: string[] = [];

  constructor(private StadiumService: StadiumService) {}

  async activate(params) {
    const poi = await this.StadiumService.getStadiumsbyId(params.id);
    return poi;
  }

  async doUpload() {
    await this.StadiumService.uploadImage(this.selectedFiles[0]);
  }
}
