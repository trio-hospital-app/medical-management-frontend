import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

interface Note {
  question: string;
  answer: string;
}

export interface vitals {
  name: string;
  value: string;
}

export interface FormData {
  notes: Note[];
  recommendation: string;
}
class VisitService {
  //consultations
  public async getConsultations() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/consults",
    };
    const response = await request(options);
    return response;
  }
  public async getConsultation(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/consults/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async getConsultationofPatient(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/consults/user/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async writeVisitNotes({ id, data }: { id: string; data: FormData }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/consult/complete/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async editConsultation({
    id,
    data,
  }: {
    id: string;
    data: {
      doctorId: string;
      visit: string;
      patientId: string;
      schemeId: string;
    };
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/consult/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async AddVitals({
    id,
    data,
  }: {
    id: string;
    data: vitals[]
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/consult/vitals/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteConsultation(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/consult/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async newConsultation(body: {
    doctorId: string;
    visit: string;
    patientId: string;
    schemeId: string;
  }) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: `/consult`,
      data: body,
    };
    const response = await request(options);
    return response;
  }

  //departments
  public async getVisitDept() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/visits",
    };
    const response = await request(options);
    return response;
  }

  public async editVisitDept({
    id,
    data,
  }: {
    id: string;
    data: { name: string; cost: number };
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/visit/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteVisitDept(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/visit/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async searchVisit(param: string | number) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/search/consult?search=${param}`,
    };
    const response = await request(options);
    return response;
  }

  public async createVisitDept(body: { name: string; cost: number }) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: `/visit`,
      data: body,
    };
    const response = await request(options);
    return response;
  }
}

export default new VisitService();
