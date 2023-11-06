import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobType = "I am a Dev";

  getJobType() {
    return this.#jobType;
  }

  static returnArrayOfDevs(...devs) {
    return devs.filter((dev) => dev instanceof Dev);
  }
}
