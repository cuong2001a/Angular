import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'vnd' })
export class VndPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '';
    return value.toLocaleString('vi-VN') + ' đ';
  }
}