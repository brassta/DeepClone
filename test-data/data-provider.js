/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 25-Jan-21
 * Time: 13:28
 */
"use strict";
import fs from 'fs';

export function dataProvider() {
  let rawdata = fs.readFileSync(process.cwd() + '\\test-data\\data.json');
  let data = JSON.parse(rawdata);
  return data;
}

dataProvider();