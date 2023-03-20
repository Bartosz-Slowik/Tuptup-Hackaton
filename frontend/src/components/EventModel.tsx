import { stringify } from "querystring";
import React, { useState } from "react";
import { text } from "stream/consumers";

export default class Event {
  title: string;
  description: string;
  amount: number;
  type: string;
  constructor(
    title: string,
    description: string,
    amount: number,
    type: string
  ) {
    this.title = title;
    this.description = description;
    this.amount = amount;
    this.type = type;
  }

  generateEvent() {}
}
