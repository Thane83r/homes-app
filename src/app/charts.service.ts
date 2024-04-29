import { Injectable } from '@angular/core';
import {EChartsOption} from "echarts";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }
  public generateBarChart(labels: string[], data: number[]): EChartsOption {
    return {
      renderer: "svg",
      xAxis: {
        type: "category",
        data: labels
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        position: "left",
        alwaysShowContent: true,
        enterable: true,
        axisPointer: {}
      },
      series: [
        {
          data: data,
          type: "bar",
          itemStyle: {
            color: "#FFA500"
          },
          emphasis: {
            itemStyle: {
              color: "#00008B"
            }
          }

        }
      ]
    }
  }
}
